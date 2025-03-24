import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const WelcomeScreen = () => {
    const navigate = useNavigate(); // ✅ Initialize navigate function

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-80 h-2/3 bg-white rounded-lg shadow-lg flex flex-col p-6">
                {/* Spacer to push content down */}
                <div className="flex-grow"></div>

                <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
                <p className="text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                {/* Button container */}
                <div className="mt-6">
                    {/* ✅ Corrected onClick handlers */}
                    <button
                        className="w-full py-3 bg-purple-700 text-white font-semibold rounded-lg"
                        onClick={() => navigate("/create-account")} // ✅ Fix navigation
                    >
                        Create Account
                    </button>
                    <button
                        className="w-full py-3 mt-3 bg-purple-300 text-purple-900 font-semibold rounded-lg"
                        onClick={() => navigate("/login")} // ✅ Fix navigation
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;

