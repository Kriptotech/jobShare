import { MapPin, MessengerLogo, Phone } from "phosphor-react";
import style from "./style.module.css";

export default function About() {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.row}>
                    <MapPin color="#104072" weight="fill" size={40} />
                    <div>
                        <span>Endereço:</span>
                        <span>
                            MAPUTO - CHAMANCULO A, RUA MARCELINO DOS SANTOS,
                            Q23, CASA Nº 515
                        </span>
                    </div>
                </div>
                <div className={style.row}>
                    <MessengerLogo color="#104072" weight="fill" size={40} />
                    <div>
                        <span>Nosso Email Geral:</span>
                        <span>info@gmail.com </span>
                    </div>
                </div>
                <div className={style.row}>
                    <Phone color="#104072" weight="fill" size={40} />
                    <div>
                        <span>Fale connosco:</span>
                        <span>+258 84 2033333</span>
                    </div>
                </div>
            </div>

            <div className={style.right}>
                <h1>Estamos Sempre disponíveis para ajudar</h1>

                <p className={style.bold}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus vel deleniti laboriosam alias consectetur labore
                    tempora omnis magnam consequuntur officiis. Obcaecati quam,
                    reiciendis aperiam doloremque natus perferendis, sit earum
                    expedita deserunt veritatis quo necessitatibus, soluta fuga!
                    Cumque, eius delectus! Illum?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates suscipit facilis sapiente eligendi? Adipisci
                    omnis consequatur et. Id, libero blanditiis? Velit obcaecati
                    ratione delectus consequuntur accusantium facilis provident
                    tempore ducimus.
                </p>
            </div>
        </div>
    );
}
