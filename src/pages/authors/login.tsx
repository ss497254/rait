import Link from "next/link";
import React, { useState } from "react";
import Input from "../../components/Input";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-indigo-300 dark:bg-indigo-500">
            <div className="p-6 shadow-md lg:p-8 lg:w-[480px] w-[400px] bg-white dark:bg-slate-800 rounded-lg mx-4">
                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                    Login to your account
                </h3>
                <Input
                    label="Your User Id"
                    placeholder="User Id"
                    type="userid"
                    className="my-4"
                />
                <div className="relative mb-4">
                    <label
                        htmlFor="password"
                        className="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"
                    >
                        Your password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        autoComplete="off"
                        className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5 focus:outline-2 focus:outline-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:outline"
                        placeholder="Password"
                        required
                    />
                    <div
                        className="absolute text-black bg-gray-300 rounded w-7 h-7 right-2 bottom-2 dark:text-white"
                        onClick={() => setShowPassword(!showPassword)}
                    />
                </div>
                <button
                    className="w-full py-2 my-4 text-lg text-white bg-blue-600 rounded-md focus:ring-[3px] focus:ring-indigo-200"
                    type="submit"
                    onClick={() => {
                        console.log("submitted");
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

Login.hidden = true;

export default Login;
