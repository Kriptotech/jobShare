import { Rocket } from "phosphor-react";
import img from "./assets/image1-1.avif";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className={style.container}>
            <h1>
                <Rocket size={40} weight="fill" color="rgb(144,207,252)" />{" "}
                Discover more opportunities <span>than anywhere else</span>
            </h1>

            <div className={style.row}>
                <div className={style.left}>
                    <strong>
                        Every job worldwide <span>in one place</span>
                    </strong>

                    <p>
                        We are different! We are not a job board helping
                        companies. We are a technology company providing job
                        seekers access to every job published on the internet
                        worldwide.
                    </p>

                    <p>
                        We cover 504,825 companies, job boards, and headhunters
                        to ensure you find significantly more opportunities than
                        anywhere else.
                    </p>

                    <Link to="/about">Sobre nós</Link>
                </div>

                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
}
