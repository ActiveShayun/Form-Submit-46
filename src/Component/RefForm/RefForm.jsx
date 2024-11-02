import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null)
    const passWordRef = useRef(null)
    // second way
    // const emailState = useI

    useEffect(() => {
        nameRef.current.focus()
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        //  console.log(emailState.value);
        console.log(emailRef.current.value);
        console.log(passWordRef.current.value);
    }
    return (
        <div>
          <h1>Form submit</h1>
                <form  onSubmit={handleSubmit}>
               <input ref={nameRef} type="text" name="name" />
               <br />
               <inpu type="text" name="name" />
              <br />
                 <input ref={emailRef} defaultValue={'100@gmail.com'} type="email" name="email" />
         
                <br />
              <input ref={passWordRef} type="password" name="password" />
                
               <br />
             <input type="submit" value="submit" />
              </form>
        </div>
    );
};

export default RefForm;