import { useTemplate } from "./TemplateContext";
import HorizonHeader from "./horizon/Header";
import PulseHeader from "./pulse/Header";
import AtelierHeader from "./atelier/Header";
import MeadowHeader from "./meadow/Header";
import ForemanHeader from "./foreman/Header";
import HavenHeader from "./haven/Header";
import KeystoneHeader from "./keystone/Header";

export default function TemplateHeader() {
  const { template } = useTemplate();
  if (template === "pulse") return <PulseHeader />;
  if (template === "atelier") return <AtelierHeader />;
  if (template === "meadow") return <MeadowHeader />;
  if (template === "foreman") return <ForemanHeader />;
  if (template === "haven") return <HavenHeader />;
  if (template === "keystone") return <KeystoneHeader />;
  return <HorizonHeader />;
}
