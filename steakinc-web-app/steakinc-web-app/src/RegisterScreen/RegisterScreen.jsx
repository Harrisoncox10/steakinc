import React, { useState } from 'react';
import axios from 'axios';
import './RegisterScreen.css';

function registerScreen() {
    const [registerData, setregisterData] = useState({
        username: '',
        password: '',
        email: '',
        security_1: '',
        security_2: '',
        security_3: ''
    });

    const [message, setMessage] = useState(null);

    const handleChange = (event) => {
        setregisterData({ ...registerData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', registerData);
            setMessage(response.data.message);
            // Handle success, e.g., save user ID, redirect, etc.
            console.log('User ID:', response.data.user_id);
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.error);
            } else {
                setMessage('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="container">
            <div className="register-container">
                <div className="register-title-wrapper">
                    <img src="/src/assets/highsteaks.png" alt="High Steaks Logo" className="logo" />
                    <h1 className="register-title-text">Steak</h1>
                </div>
                {/* Template Message for register */}
                {message && <p>{message}</p>}
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="register-details-wrapper">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="input-field"
                            value={registerData.username}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input-field"
                            value={registerData.password}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input-field"
                            value={registerData.password}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Confirm Password"
                            className="input-field"
                            value={registerData.Password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="register-button-wrapper">
                        <button type="submit" className="register-submit-button">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default registerScreen;
