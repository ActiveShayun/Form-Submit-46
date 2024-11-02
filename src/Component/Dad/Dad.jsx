import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import './Dad.css'

const Dad = ({assets}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself assets={assets}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;