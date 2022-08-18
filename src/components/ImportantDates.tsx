import React from "react";

export type row = {
    from: string;
    to: string;
    content: string;
};

export default function ImportantDates({ dates = [] }: { dates: row[] }) {
    if (!dates) dates = [];
    return (
        <div className="py-16 md:px-12 mb-8">
            <h2 className="text-center text-3xl mb-12 font-semibold">
                Important Dates
            </h2>
            <div className="max-w-[90vw] outline outline-2 outline-blue-200 overflow-hidden mx-auto shadow-md rounded-lg">
                <table className="w-full text-left text-gray-800">
                    <thead className="text-gray-700 uppercase text-lg bg-blue-200">
                        <tr>
                            <th
                                scope="col"
                                className="py-5 px-4 w-1/3 text-center"
                            >
                                Date
                            </th>
                            <th
                                scope="col"
                                className="py-5 px-2 w-2/3 text-center"
                            >
                                Event
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dates.map((row: row, index) => (
                            <tr
                                className="bg-white border-b hover:bg-gray-100"
                                key={index}
                            >
                                <td className="py-4 px-4 w-1/3 text-center border-r">
                                    {row.from}
                                    {" - "}
                                    {row.to}
                                </td>
                                <td className="px-2 w-2/3 text-center">
                                    {row.content}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
