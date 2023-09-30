import { Link } from "react-router-dom";
import Header from "../../../../components/header";
import style from "./style.module.css";
import stars from "./assets/stars.svg";

export default function Hero() {
    return (
        <div className={style.container}>
            <Header />

            <div className={style.box}>
                <h1>Land a better job faster!</h1>

                <p>More opportunities | more interviews | more offers</p>

                <div>
                    <Link to="/about">Sobre nós</Link>
                    <Link to="/contact">Contacte-nos</Link>
                </div>

                <span>
                    <img src={stars} alt="" />
                    Rated “Excellent” based on 3,622 reviews
                </span>
            </div>
        </div>
    );
}
