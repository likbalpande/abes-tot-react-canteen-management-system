import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handleSendOtp = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (!isOtpSent) {
            console.log("🟡 : email:", email);
            const resp = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/v1/otps", {
                method: "POST",
                body: JSON.stringify({ email: email }),
                headers: {
                    "content-type": "application/json",
                },
            });
            const respObj = await resp.json();
            if (respObj.status === "success") {
                setIsOtpSent(true);
            } else {
                alert(respObj.message);
            }
        } else {
            // user creation
            const otp = e.target.otp.value;
            const password = e.target.password.value;
            const confirmPassword = e.target.confirmPassword.value;
            if (confirmPassword !== password) {
                alert("Password does not match!");
                return;
            }
            const resp = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/v1/users", {
                method: "POST",
                body: JSON.stringify({ email, otp, password }),
                headers: {
                    "content-type": "application/json",
                },
            });
            const respObj = await resp.json();
            if (respObj === "success") {
                alert(respObj.message);
            } else {
                alert(respObj.message);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSendOtp}>
                <div>
                    <label>Email</label>
                    <input name="email" type="text" />
                </div>
                {!isOtpSent ? (
                    <button>Send OTP</button>
                ) : (
                    <div>
                        <div>
                            <label>OTP</label>
                            <input name="otp" type="text"></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input name="password" type="password" />
                        </div>
                        <div>
                            <label>Confirm Password</label>
                            <input name="confirmPassword" type="password"></input>
                        </div>
                        <button>Register</button>
                    </div>
                )}
            </form>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default SignUpPage;
