import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function Benefits() {
    return (
        <div className={style.container}>
            <strong>Millions of jobs near you</strong>
            <h1>Start your success story today</h1>
            <p>
                Benefit from digital tools and expert support during every step
                of your job search
            </p>

            <Link to="/about">Saiba mais</Link>
        </div>
    );
}
