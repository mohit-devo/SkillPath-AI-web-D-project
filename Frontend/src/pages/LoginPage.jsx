import { useState } from "react";

function LoginPage() {
    const [ email,setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ showPassword, setShowPassword ] = useState(false)
    const [ error, setError ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefalut();
        if(!email || !password) {
            setError('Please fill in all fields.')
            return;
        }
        setError('');
        console.log('Logging in with: ', {email, password});
    }
    return(
        <div className="auth-container">
            <div className="auth-card">
                <h2>Sign In to <span className="gradient-text">SkillPath AI</span></h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="you@example.com" value=
                        {email} on onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                     <div className="form-group">
                        <label>Password</label>
                        <div className="password-input-wrapper">
                            <input type="password" placeholder="*********" value=
                            {password} on onChange={(e) => setPassword(e.target.value)}/>
                            <button type="button" className="show-hide-btn" onClick={() => setShowPassword(!showPassword)}></button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}