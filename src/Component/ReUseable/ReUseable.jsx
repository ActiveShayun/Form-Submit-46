
const ReUseable = ({formTitle, children, handleSubmitData, submitBtnText='Submit'}) => {
    const handleSubmit = e =>{
        e.preventDefault()
        const data = {
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
        handleSubmitData(data)
    }

    return (
        <div>
            <h2>{children}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/><br />
                <input type="email" name="email" id="" /> <br />
                <input type="password" name="password" id="" /> <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReUseable;