import { useContext } from "react";
import { AssetsContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const gift = useContext(AssetsContext)
    return (
        <div>
           <p>also has friend {gift}</p> 
        </div>
    );
};

export default Friend;