import Footer from "../../components/footer";
import { WhatsAppLogo } from "../../components/whatsapp_logo";
import Hero from "./components/hero";
import Services from "./components/services";

export default function SercicesPage() {
    return (
        <div style={{ width: "100%" }}>
            <Hero />
            <Services />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
