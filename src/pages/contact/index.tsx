import Footer from "../../components/footer";
import { WhatsAppLogo } from "../../components/whatsapp_logo";
import About from "./components/about";
import Hero from "./components/hero";

export default function ContactPage() {
    return (
        <div>
            <Hero />
            <About />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
