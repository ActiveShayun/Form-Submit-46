import { useState } from "react";

const StateFulForm = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [name, setName] = useState(null)
  const [error, setError] = useState(null)
    const handleSubmit = e =>{
        e.preventDefault()
        if(password.length < 6){
            setError('password must be 6 character')
         }
         else{
             setError('')
             console.log(email,password,name);
         }
       
    }

    const handleEmail = e =>{
        e.preventDefault()
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handlePassword = e =>{
        e.preventDefault()
        // console.log(e.target.value);
        
        setPassword(e.target.value)
    }

    const handleName = e =>{
        e.preventDefault()
        console.log(e.target.value);
        setName(e.target.value)
    }
    return (
        <div>
                  <h1>Form submit</h1>

<form onSubmit={handleSubmit}>
<input onChange={handleName}
type="text" name="name" />
<br />
<input onChange={handleEmail}
type="email" name="email" />
<br />
<input  onChange={handlePassword}
type="password" name="password" required />
<br />
<input type="submit" value="submit" />
</form>
{
    error && <p>{error}</p>
}
        </div>
    );
};

export default StateFulForm;