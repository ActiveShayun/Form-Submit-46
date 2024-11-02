
import Cousin from '../Cousin/Cousin';
import './Auncle.css'

const Auncle = () => {
    return (
        <div>
            <h2>Auncle</h2>
            <section className='flex'>
                <Cousin name={'Anik'}></Cousin>
                <Cousin name={'suborna'}></Cousin>
            </section>
        </div>
    );
};

export default Auncle;