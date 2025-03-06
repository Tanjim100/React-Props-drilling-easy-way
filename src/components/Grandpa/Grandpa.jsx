import { createContext, useState } from "react";
import Aunti from "../Aunti/Aunti";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold');
export const Money = createContext(1000);



const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'diamond';
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <Money.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Father asset={asset}></Father>
                        <Uncle asset={asset}></Uncle>
                        <Aunti></Aunti>
                    </section>
                </AssetContext.Provider>
            </Money.Provider>

        </div>
    );
};

export default Grandpa;


/**
 * 1. create a context and export it
 * 2. add a provider for the context with a value. Value could be anything
 * 3. useContext to access the value in the context API
 */