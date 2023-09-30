import style from "./styles.module.css";
import { WhatsappLogo } from "phosphor-react";

export function WhatsAppLogo() {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=258864660991&text=Ola, voces podem me judar?"
            className={style.container}
        >
            <WhatsappLogo size={40} weight="fill" color="white" />
        </a>
    );
}
