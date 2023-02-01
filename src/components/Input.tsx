import React from "react";

export default function Input({
    label,
    type,
    ref = null,
    placeholder,
    required = true,
    className = "",
    inputClassName = "",
    message,
    name,
}: any) {
    return (
        <div className={className}>
            <label
                htmlFor={"input" + name}
                className="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"
            >
                {label}
            </label>
            <input
                type={type}
                ref={ref}
                name={name}
                id={"input" + name}
                className={
                    "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg hover:outline-[3px] focus:outline-blue-600 focus:invalid:outline-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:outline " +
                    inputClassName
                }
                placeholder={placeholder}
                required={required}
            />
            {message && (
                <p className="p-1 text-sm text-gray-500 dark:text-gray-300">
                    {message}
                </p>
            )}
        </div>
    );
}
