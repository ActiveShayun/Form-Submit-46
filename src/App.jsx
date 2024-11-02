import './App.css'
;
import Grandpa from './Component/Grandpa/Grandpa';
import RefForm from './Component/RefForm/RefForm';
import ReUseable from './Component/ReUseable/ReUseable';
// import SimpleForm from './Component/SimpleForm/SimpleForm';
// import StateFulForm from './Component/StateFulForm/StateFulForm';

function App() {
  //  const handleSingUpData = data =>{
  //      console.log('singUP',data);
  //  }
  //  const handleProfileUpdateData = data =>{
  //             console.log('profile update',data);
  //  }
 
  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
     {/* <RefForm></RefForm> */}
      {/* <ReUseable 
      handleSubmitData={handleSingUpData}
      formTitle={'sing up'}>
        <div>
          <h2>Sing up</h2>
          <p>please singUP right now</p>
        </div>
      </ReUseable>
      <ReUseable 
      handleSubmitData={handleProfileUpdateData}
      formTitle={'profile update'} submitBtnText={'Update'}>
        <h2>profile update</h2>
        <p>we always update your profile</p>
      </ReUseable> */}
      <Grandpa></Grandpa>
    </>
  )
}

export default App
