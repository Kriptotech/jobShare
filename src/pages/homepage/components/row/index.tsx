import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function Row() {
    return (
        <div className={style.container}>
            <strong>Millions of jobs near you</strong>
            <h1>JobLeaders find 7× more jobs</h1>
            <p>
                Identify all relevant jobs, not just the ones posted on job
                boards.
            </p>

            <Link to="/about">Saiba mais</Link>
        </div>
    );
}
