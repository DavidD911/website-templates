import { useTemplate } from "./TemplateContext";
import HorizonHome from "./horizon/Home";
import PulseHome from "./pulse/Home";
import AtelierHome from "./atelier/Home";
import MeadowHome from "./meadow/Home";
import ForemanHome from "./foreman/Home";
import HavenHome from "./haven/Home";
import KeystoneHome from "./keystone/Home";

export default function TemplateHome() {
  const { template } = useTemplate();
  if (template === "pulse") return <PulseHome />;
  if (template === "atelier") return <AtelierHome />;
  if (template === "meadow") return <MeadowHome />;
  if (template === "foreman") return <ForemanHome />;
  if (template === "haven") return <HavenHome />;
  if (template === "keystone") return <KeystoneHome />;
  return <HorizonHome />;
}
