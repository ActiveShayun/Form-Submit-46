import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = ({assets}) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Sibu'} assets={assets}></Cousin>
                <Cousin name={'surzo'}></Cousin>
            </section>
            <section>
              <p>money = {money}</p>
              <button onClick={()=> setMoney(money + 1000)}>sent money</button>
            </section>
        </div>
    );
};

export default Aunty;