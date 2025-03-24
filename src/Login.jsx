import React from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-80 h-[500px] bg-white rounded-lg shadow-lg flex flex-col p-6 justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Create your PopX account</h1>
                    <p className="text-gray-500 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    {/* Email Input */}
                    <label className="text-sm font-semibold text-purple-600 mt-4 block">Email Address</label>
                    <input type="email" placeholder="Enter email address"
                        className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    {/* Password Input */}
                    <label className="text-sm font-semibold text-purple-600 mt-3 block">Password</label>
                    <input type="password" placeholder="Enter password"
                        className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Login Button */}
                <button
                    className="w-full py-3 mt-5 bg-purple-300 text-purple-900 font-semibold rounded-lg"
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default CreateAccount;
