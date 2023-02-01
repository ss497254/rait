import Router from "next/router";
import React, { useState } from "react";
import Input from "../../components/Input";

const serverUrl = "http://localhost:3000/~rait/api/login";

const submitForm = async (data: Record<string, string>) => {
    data;

    try {
        const res = await (
            await fetch(serverUrl, {
                method: "POST",
                body: JSON.stringify(data),
            })
        ).json();

        if (res.result) {
            sessionStorage.setItem("author", JSON.stringify(res.result));
            Router.push("/authors/dashboard");
        }
    } catch (e) {
        console.log(e);
    }
};

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-indigo-200">
            <form
                className="p-6 shadow-md lg:p-8 lg:w-[480px] w-[400px] bg-white dark:bg-slate-800 rounded-lg mx-4"
                onSubmit={(e: any) => {
                    e.preventDefault();
                    const form = new FormData(e.target) as any;
                    submitForm({
                        email: form.get("email"),
                        password: form.get("password"),
                    });
                }}
            >
                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                    Login to your account
                </h3>
                <Input
                    label="Your email"
                    placeholder="email"
                    type="email"
                    className="my-4"
                    name="email"
                    required
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
                        name="password"
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
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

Login.hidden = true;

export default Login;
