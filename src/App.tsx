import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { TemplateProvider, useTemplate } from "./templates/TemplateContext";
import TemplateSwitcher from "./templates/TemplateSwitcher";
import TemplateHeader from "./templates/TemplateHeader";
import TemplateFooter from "./templates/TemplateFooter";
import TemplateHome from "./templates/TemplateHome";
import CartDrawer from "./components/CartDrawer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import StorefrontAbout from "./pages/About";
import StorefrontContact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import ServicesAbout from "./pages/services/About";
import ServicesContact from "./pages/services/Contact";
import Services from "./pages/services/Services";
import Gallery from "./pages/services/Gallery";
import Portfolio from "./pages/realestate/Portfolio";
import Listings from "./pages/realestate/Listings";
import ListingDetail from "./pages/realestate/ListingDetail";
import HavenAbout from "./pages/realestate/HavenAbout";
import HavenContact from "./pages/realestate/HavenContact";
import KeystoneAbout from "./pages/realestate/KeystoneAbout";
import KeystoneContact from "./pages/realestate/KeystoneContact";
import NotFound from "./pages/NotFound";

function StorefrontRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TemplateHome />} />
      <Route path="/about" element={<StorefrontAbout />} />
      <Route path="/contact" element={<StorefrontContact />} />
      <Route path="/product/:slug" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function ServicesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TemplateHome />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<ServicesAbout />} />
      <Route path="/contact" element={<ServicesContact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function RealEstateRoutes() {
  const { template } = useTemplate();
  const isHaven = template === "haven";

  return (
    <Routes>
      <Route path="/" element={<TemplateHome />} />
      <Route path="/listings" element={isHaven ? <Portfolio /> : <Listings />} />
      <Route path="/listings/:slug" element={<ListingDetail />} />
      <Route path="/about" element={isHaven ? <HavenAbout /> : <KeystoneAbout />} />
      <Route path="/contact" element={isHaven ? <HavenContact /> : <KeystoneContact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function Shell() {
  const { vertical, template, palette } = useTemplate();
  const isStorefront = vertical === "storefront";

  return (
    <div className="flex min-h-screen flex-col" data-template={template} data-palette={palette}>
      <TemplateSwitcher />
      <TemplateHeader />
      <main className="flex-1">
        {vertical === "storefront" && <StorefrontRoutes />}
        {vertical === "services" && <ServicesRoutes />}
        {vertical === "realestate" && <RealEstateRoutes />}
      </main>
      <TemplateFooter />
      {isStorefront && <CartDrawer />}
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <TemplateProvider>
      <CartProvider>
        <ScrollToTop />
        <Shell />
      </CartProvider>
    </TemplateProvider>
  );
}
