import { createContext, useState } from "react";
import Auncle from "../Aucle/Auncle";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import './Grandpa.css'
import { useSearchParams } from "react-router-dom";

export const MoneyContext = createContext(1000)
export const AssetsContext = createContext('gold')

const Grandpa = () => {
    const assets = 'Diamond';

    const [money, setMoney] = useState(1000)
    return (
        <div className="">
            <h1>Grandpa</h1>
            <p>{money} tk</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetsContext.Provider value="gold">
                    <section className="cart">
                        <Dad assets={assets}></Dad>
                        <Auncle></Auncle>
                        <Aunty assets={assets}></Aunty>
                    </section>
                </AssetsContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;