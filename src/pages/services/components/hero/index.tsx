import Header from "../../../../components/header";
import style from "./style.module.css";

export default function Hero() {
    return (
        <div className={style.container}>
            <Header />

            <div className={style.box}>
                <h1>Nossos Serviços</h1>
            </div>
        </div>
    );
}
