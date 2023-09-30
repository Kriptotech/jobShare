import img from "./assets/image2.avif";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function ConectWithHeadhunters() {
    return (
        <div className={style.container}>
            <div className={style.row}>
                <img src={img} alt="" />

                <div className={style.right}>
                    <strong>Access unpublished job opportunities</strong>

                    <p>
                        Did you know that a significant number of jobs are
                        filled by headhunters and never published?
                    </p>

                    <p>
                        Over the past 15 years, we’ve built a network of
                        headhunters across all industries and fields. This
                        exclusive resource offers JobLeaders unparalleled access
                        to the most relevant headhunters in their field.
                    </p>

                    <Link to="/about">Saiba mais</Link>
                </div>
            </div>
        </div>
    );
}
