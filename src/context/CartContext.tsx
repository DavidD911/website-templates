import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import type { ReactNode } from "react";
import { products } from "../data/products";
import type { CartLine } from "../types";

interface CartState {
  lines: CartLine[];
}

type CartAction =
  | { type: "ADD"; productId: string; color: string; quantity: number }
  | { type: "REMOVE"; productId: string; color: string }
  | { type: "SET_QTY"; productId: string; color: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; lines: CartLine[] };

const STORAGE_KEY = "aurora-cart-v1";

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { lines: action.lines };
    case "ADD": {
      const existing = state.lines.find(
        (l) => l.productId === action.productId && l.color === action.color
      );
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            l === existing ? { ...l, quantity: l.quantity + action.quantity } : l
          ),
        };
      }
      return {
        lines: [
          ...state.lines,
          { productId: action.productId, color: action.color, quantity: action.quantity },
        ],
      };
    }
    case "REMOVE":
      return {
        lines: state.lines.filter(
          (l) => !(l.productId === action.productId && l.color === action.color)
        ),
      };
    case "SET_QTY":
      return {
        lines: state.lines
          .map((l) =>
            l.productId === action.productId && l.color === action.color
              ? { ...l, quantity: action.quantity }
              : l
          )
          .filter((l) => l.quantity > 0),
      };
    case "CLEAR":
      return { lines: [] };
    default:
      return state;
  }
}

interface CartContextValue {
  lines: CartLine[];
  addItem: (productId: string, color: string, quantity?: number, openCart?: boolean) => void;
  removeItem: (productId: string, color: string) => void;
  setQuantity: (productId: string, color: string, quantity: number) => void;
  clear: () => void;
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [] });
  const [isOpen, setIsOpen] = useReducer((_: boolean, next: boolean) => next, false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const lines = JSON.parse(raw) as CartLine[];
        dispatch({ type: "HYDRATE", lines });
      }
    } catch {
      // ignore corrupt local storage
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
    } catch {
      // storage unavailable — cart just won't persist
    }
  }, [state.lines]);

  const addItem = useCallback(
    (productId: string, color: string, quantity = 1, openCart = true) => {
      dispatch({ type: "ADD", productId, color, quantity });
      if (openCart) setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback((productId: string, color: string) => {
    dispatch({ type: "REMOVE", productId, color });
  }, []);

  const setQuantity = useCallback((productId: string, color: string, quantity: number) => {
    dispatch({ type: "SET_QTY", productId, color, quantity });
  }, []);

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const itemCount = useMemo(
    () => state.lines.reduce((sum, l) => sum + l.quantity, 0),
    [state.lines]
  );

  const subtotal = useMemo(
    () =>
      state.lines.reduce((sum, l) => {
        const product = products.find((p) => p.id === l.productId);
        return sum + (product?.price ?? 0) * l.quantity;
      }, 0),
    [state.lines]
  );

  const value: CartContextValue = {
    lines: state.lines,
    addItem,
    removeItem,
    setQuantity,
    clear,
    itemCount,
    subtotal,
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
