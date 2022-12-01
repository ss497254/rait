import React from "react";

export type row = {
    from?: string;
    strikethrough?: string[];
    content: string;
};

export default function ImportantDates() {
    const dates: row[] = [
        {
            // from: "November 15, 2022",
            strikethrough: ["October 31, 2022", "November 15, 2022"],
            content: "Full Paper Submission",
        },
        {
            from: "December 7, 2022",
            strikethrough: ["December 1, 2022"],
            content: "Acceptance",
        },
        {
            from: "December 15, 2022",
            strikethrough: [""],
            content: "Camera Ready",
        },
        {
            from: "February 28, 2023",
            strikethrough: [""],
            content: "Last Date of Registration",
        },
        {
            from: "March 3-5, 2023",
            strikethrough: [""],
            content: "Conference Date",
        },
    ];

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
                                className="py-5 px-2 w-1/2 text-center"
                            >
                                Event
                            </th>
                            <th
                                scope="col"
                                className="py-5 px-4 w-1/2 text-center"
                            >
                                Deadline
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dates.map((row: row, index) => (
                            <tr
                                className="bg-white border-b hover:bg-gray-100"
                                key={index}
                            >
                                <td className="px-2 w-1/2 text-center border-r-2">
                                    {row.content}
                                </td>
                                <td className="py-4 px-4 w-1/2 text-center">
                                    {row.strikethrough &&
                                        row.strikethrough.map((x) => (
                                            <span className="pr-4 line-through">
                                                {x}
                                            </span>
                                        ))}

                                    {row.from}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
