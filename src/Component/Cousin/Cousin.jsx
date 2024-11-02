
import { useContext } from 'react';
import Special from '../Special/Special';
import { AssetsContext } from '../Grandpa/Grandpa';
import Friend from '../Friends/Friend';

const Cousin = ({name,assets}) => {
    const gift = useContext(AssetsContext)
    return (
        <div>
            <h2>{name}</h2>
            <section>
        { assets && <Special assets={assets}></Special>}
        {name === 'Anik' && <p>{gift}</p>}
        {name === 'suborna' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;