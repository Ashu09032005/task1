import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
    const navigate = useNavigate();
    const [agency, setAgency] = useState("");

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-96 bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold text-gray-900">Create your PopX account</h1>

                {/* Full Name */}
                <label className="text-sm font-semibold text-purple-600 mt-4 block">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="Enter full name"
                    className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {/* Phone Number */}
                <label className="text-sm font-semibold text-purple-600 mt-4 block">
                    Phone number <span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="Enter phone number"
                    className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {/* Email Address */}
                <label className="text-sm font-semibold text-purple-600 mt-4 block">
                    Email address <span className="text-red-500">*</span>
                </label>
                <input type="email" placeholder="Enter email address"
                    className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {/* Password */}
                <label className="text-sm font-semibold text-purple-600 mt-4 block">
                    Password <span className="text-red-500">*</span>
                </label>
                <input type="password" placeholder="Enter password"
                    className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {/* Company Name */}
                <label className="text-sm font-semibold text-purple-600 mt-4 block">
                    Company name
                </label>
                <input type="text" placeholder="Enter company name"
                    className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {/* Are you an Agency? */}
                <label className="text-sm font-semibold text-purple-600 mt-4 block">
                    Are you an Agency? <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center mt-2">
                    <label className="flex items-center mr-4">
                        <input type="radio" name="agency" value="yes"
                            className="form-radio text-purple-500 focus:ring-purple-500"
                            onChange={() => setAgency("yes")}
                        />
                        <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="agency" value="no"
                            className="form-radio text-purple-500 focus:ring-purple-500"
                            onChange={() => setAgency("no")}
                        />
                        <span className="ml-2 text-gray-700">No</span>
                    </label>
                </div>

                {/* Create Account Button */}
                <button className="w-full py-3 mt-6 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
                    onClick={() => navigate("/account-settings")} >
                    Create Account
                </button>
            </div>
        </div>
    );
};

export default CreateAccount;


