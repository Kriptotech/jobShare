import { Star } from "phosphor-react";
import Header from "./header";
import style from "./style.module.css";

export default function WhyChooseUs() {
    return (
        <div className={style.container}>
            <Header />

            <div className={style.box}>
                {[1, 2, 3, 4, 5, 6].map((v, i) => {
                    return (
                        <div className={style.item} key={i + v}>
                            <Star size={50} weight="fill" />
                            <strong>Lorem ipsum dolor sit.</strong>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Et, temporibus dolore. Labore
                                commodi quasi voluptas.
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
