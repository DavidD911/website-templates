import { useTemplate } from "./TemplateContext";
import HorizonFooter from "./horizon/Footer";
import PulseFooter from "./pulse/Footer";
import AtelierFooter from "./atelier/Footer";
import MeadowFooter from "./meadow/Footer";
import ForemanFooter from "./foreman/Footer";
import HavenFooter from "./haven/Footer";
import KeystoneFooter from "./keystone/Footer";

export default function TemplateFooter() {
  const { template } = useTemplate();
  if (template === "pulse") return <PulseFooter />;
  if (template === "atelier") return <AtelierFooter />;
  if (template === "meadow") return <MeadowFooter />;
  if (template === "foreman") return <ForemanFooter />;
  if (template === "haven") return <HavenFooter />;
  if (template === "keystone") return <KeystoneFooter />;
  return <HorizonFooter />;
}
