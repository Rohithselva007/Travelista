import ContactHero from "../components/ContactHero/ContactHero";
import ContactSection from "../components/ContactSection/ContactSection";
import MapInt from "../components/MapInt/MapInt"
import "leaflet/dist/leaflet.css";
const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <MapInt/>
    </>
  );
};

export default Contact;
