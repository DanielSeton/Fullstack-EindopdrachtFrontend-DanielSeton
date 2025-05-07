
function Signup() {

    return (
        <main>
            <div className="page-wrapper">
                <div className="input-container">
                    <div className="form-container">
                        <h1>Dit is de sign-up sectie</h1>
                        <form>
                            <input type="name" placeholder="name*" className="name" required={true}/>
                            <br/>
                            <input type="text" placeholder="email*" className="email" required={true}/>
                            <input type="password" placeholder="password*" className="Password" required={true}/>
                            <hr className="hr-line"></hr>
                            <button type="register" className="register-button" onClick={() => console.log("Register button clicked")}>REGISTER</button>
                        </form>
                        <a href="" className="existing-account-link">Already have an account?</a>
                    </div>
                </div>
                <div className="image-container">
                    <h1 className="quote-text">Inspiring quote</h1>
                </div>
            </div>
        </main>
    )
}

export default Signup