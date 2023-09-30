import Footer from "../../components/footer";
import { WhatsAppLogo } from "../../components/whatsapp_logo";
import About from "./components/about";
import Benefits from "./components/benefits";
import ConectWithHeadhunters from "./components/conect_with_headhunters";
import Faq from "./components/faq";
import Hero from "./components/hero";
import LocateUs from "./components/locate_us";
import Row from "./components/row";
import WhyChooseUs from "./components/why_choose_us";

export default function Homepage() {
    return (
        <div>
            <Hero />
            <About />
            <Row />
            <ConectWithHeadhunters />
            <WhyChooseUs />
            <Benefits />
            <LocateUs />
            <Faq />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
