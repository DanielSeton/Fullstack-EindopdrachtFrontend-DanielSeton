
function Login() {

    return (
        <main>
            <div className="page-wrapper">
                <div className="input-container">
                    <div className="form-container">
                        <h1>Dit is de login sectie</h1>
                        <form>
                            <input type="text" placeholder="email" className="email" required={true}/>
                            <input type="password" placeholder="password" className="Password" required={true}/>
                            <button type="login" className="login-button" onClick={()=> console.log("Login clicked")}>LOGIN</button>
                            <hr></hr>
                            <button type="signup" className="signup-button" onClick={() => console.log("Sign-up clicked")}>SIGN-UP</button>
                        </form>
                    </div>
                </div>
                <div className="image-container">
                    <h1 className="quote-text">Inspiring quote</h1>
                </div>
            </div>
        </main>
    )
}

export default Login