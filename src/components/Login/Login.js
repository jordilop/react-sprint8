import { useState } from "react";
import "./styles.css";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user] = useState(() => JSON.parse(localStorage.getItem("Users")) || []);

    const searchUser = (username, password) => user?.findIndex(users => users.user === username && users.pass === password);


    const loginUser = e => {
        e.preventDefault();
        searchUser(username, password) !== -1 ? console.log(`Username: ${username} --> login OK!`) : alert(`Error! Incorrect username or password!`);
    };

    return (
        <div className="login">
            <h2>Login</h2>
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
                <button onClick={loginUser}>Login</button>
            </form>
        </div>
    );
}

export default Login;