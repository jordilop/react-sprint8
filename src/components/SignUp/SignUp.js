import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("Users")) || []);

    const searchUser = username => user?.findIndex(users => users.user === username);

    const signupUser = e => {
        e.preventDefault();
        if (searchUser(username) === -1) {
            setUser(prev => [
                ...prev,
                {
                    user: username,
                    pass: password
                }
            ]);
            console.log(`Username: ${username} --> signup OK!`);
        } else {
            alert(`Error! User ${username} exists!`);
        }
    }

    useEffect(() => {
        localStorage.setItem("Users", JSON.stringify(user));
    }, [user]);

    return (
        <div className="signup">
            <h2>Register</h2>
            <form>
                <p>
                    <label htmlFor="username">
                        Username:
                    </label>
                </p>
                <p>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="password">
                        Password:
                    </label>
                </p>
                <p>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </p>
                <button onClick={signupUser}>Sign Up</button>
            </form>
            <p>
                Already registered?
                <Link to="/login">Login</Link>
            </p>
        </div>
    );
}

export default SignUp;