import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function Desktop() {
    return (
        <header className={style.container}>
            <nav>
                <span>jobShare</span>

                <div>
                    <Link to="/">Início</Link>
                    <Link to="/about">Sobre Nós</Link>
                    <Link to="/services">Serviços</Link>
                    <Link to="/contact">Contactos</Link>
                    <Link
                        target="_blank"
                        to="https://api.whatsapp.com/send?phone=258864660991&text=Ola, voces podem me judar?"
                    >
                        NOS CONTACTE
                    </Link>
                </div>
            </nav>
        </header>
    );
}
