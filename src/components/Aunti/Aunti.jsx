import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { Money } from "../Grandpa/Grandpa";

const Aunti = () => {
    const [money, setMoney] = useContext(Money);
    return (
        <div>
            <h2>Aunti</h2>
            <section className="flex">
                <Cousin name={'Sakina'}></Cousin>
                <Cousin name={'Jorina'}></Cousin>
            </section>
            <p>has: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunti;