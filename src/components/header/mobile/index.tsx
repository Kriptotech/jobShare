import { List, X } from "phosphor-react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Mobile() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className={style.container}>
            <nav>
                <span>jobShare</span>

                {isOpen ? (
                    <X
                        size={30}
                        weight="bold"
                        color="#fff"
                        onClick={() => setIsOpen(false)}
                        className={style.fixed_btn}
                    />
                ) : (
                    <List
                        size={30}
                        weight="bold"
                        color="#fff"
                        onClick={() => setIsOpen(true)}
                    />
                )}
            </nav>

            {isOpen && (
                <div className={style.bg}>
                    <div>
                        <Link to="/">Início</Link>
                        <Link to="/about">Sobre Nós</Link>
                        <Link to="/services">Serviços</Link>
                        <Link to="/contact">Contactos</Link>
                        <Link
                            to="https://api.whatsapp.com/send?phone=258864660991&text=Ola, voces podem me judar?"
                            target="_blank"
                        >
                            NOS CONTACTE
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
