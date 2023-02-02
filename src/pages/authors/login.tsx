import Router from "next/router";
import React, { useState } from "react";
import Input from "../../components/Input";

const serverUrl = "https://rait.vercel.app/api/login";

const submitForm = async (data: Record<string, string>) => {
    data;

    try {
        const res = await (
            await fetch(serverUrl, {
                method: "POST",
                body: JSON.stringify(data),
            })
        ).json();

        if (res.paperId) {
            sessionStorage.setItem("author", JSON.stringify(res));
            Router.push("/authors/dashboard");
        }
    } catch (e) {
        console.log(e);
    }
};

function Login() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-indigo-200">
            <form
                className="p-6 shadow-md lg:p-8 lg:w-[480px] w-[400px] bg-white dark:bg-slate-800 rounded-lg mx-4"
                onSubmit={(e: any) => {
                    e.preventDefault();
                    const form = new FormData(e.target) as any;
                    submitForm({
                        paperId: form.get("paperId"),
                        password: form.get("password"),
                    });
                }}
            >
                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                    Login to your account
                </h3>
                <Input
                    label="Enter Paper Id"
                    placeholder="Paper Id"
                    type="text"
                    className="my-4"
                    name="paperId"
                    required
                />
                <Input
                    label="Enter Password"
                    placeholder="Password"
                    type="password"
                    className="my-4"
                    name="password"
                    required
                />
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
