import { useContext } from "react";
import { AssetsContext } from "../Grandpa/Grandpa";

;
const Special = ({assets}) => {
    const gift = useContext(AssetsContext)
    return (
        <div>
            <h2>Special</h2>
            <h4>has : {assets}</h4>
            <h4>has : {gift}</h4>
        </div>
    );
};

export default Special;