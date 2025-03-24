import React from "react";

const AccountSettings = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-96 h-[600px] bg-white rounded-lg shadow-lg flex flex-col p-6">
                <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>

                {/* Profile Section */}
                <div className="flex items-center mt-4">
                    <img src="https://via.placeholder.com/50" alt="Profile" className="w-12 h-12 rounded-full" />
                    <div className="ml-4">
                        <p className="text-lg font-semibold text-gray-800">Marry Doe</p>
                        <p className="text-sm text-gray-500">Marry@Gmail.com</p>
                    </div>
                </div>

                {/* Bio or Description */}
                <p className="text-gray-600 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy eirmod tempor invidunt ut labore.
                </p>

                {/* Extra Space or Additional Content */}
                <div className="mt-6 flex-1">

                </div>
            </div>
        </div>
    );
};

export default AccountSettings;

