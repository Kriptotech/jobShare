import style from "./style.module.css";

export default function LocateUs() {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <h1>Localize-nos</h1>
                <p>
                    Estamos estrategicamente situados em um local de fácil
                    acesso e conveniência para atendê-los da melhor forma
                    possível
                </p>
            </div>

            <div className={style.right}>
                <h2>Endereço</h2>
                <p>
                    MAPUTO - CHAMANCULO A, RUA MARCELINO DOS SANTOS, Q23, CASA
                    Nº 515
                </p>

                <br />
                <br />
                <br />

                <h2>Horário de Serviço</h2>
                <p>Segunda - Sexta - 06:00 - 18:00</p>
                <p>Sabados - 06:00 - 18:00</p>
                <p>Domingos - 06:00 - 18:00</p>
            </div>
        </div>
    );
}
