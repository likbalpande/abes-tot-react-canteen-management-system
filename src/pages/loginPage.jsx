import { Link } from "react-router-dom";

const LoginPage = () => {
    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            const resp = await fetch("http://localhost:1401/api/v1/login", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    "content-type": "application/json",
                },
            });
            const respObj = await resp.json();
            console.log(respObj);
        } catch (err) {
            alert(err.name);
        }
    };
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input name="email" type="email" placeholder="email" />
                <input name="password" type="password" placeholder="password" />
                <button>Login</button>
            </form>
            <Link to="/sign-up">Sign Up</Link>
        </div>
    );
};

export default LoginPage;
