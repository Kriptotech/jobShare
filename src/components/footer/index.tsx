import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.row}>
                <div>
                    <p>
                        jobShare - a solução perfeita para atender às suas
                        expectativas de emprego, nosso foco é tornar essa parte
                        da sua vida mais simples.
                    </p>
                </div>

                <div>
                    <h3>Informações de Contacto</h3>
                    <Link to="#">
                        CHAMANCULO A, RUA MARCELINO DOS SANTOS, Q23, CASA Nº 515
                    </Link>
                    <Link to="#">Ligações: +258 84 2033333 </Link>
                    <Link to="#">WhatsApp: 258 84 2033333 </Link>
                    <Link to="#">info@gmail.com </Link>
                </div>

                <div>
                    <h3>Acesso Rápido</h3>
                    <a href="/">Início</a>
                    <a href="/about">Sobre Nós </a>
                    <a href="/services">Serviços</a>
                    <a href="/contact">Contactos </a>
                </div>
            </div>

            <div className={style.reference}>Copyright © 2023 jobShare</div>
        </footer>
    );
}
