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
            from: "December 25, 2022",
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
        <div className="py-16 mb-8 md:px-12">
            <h2 className="mb-12 text-3xl font-semibold text-center">
                Important Dates
            </h2>
            <div className="max-w-[90vw] outline outline-2 outline-blue-200 overflow-hidden mx-auto shadow-md rounded-lg">
                <table className="w-full text-left text-gray-800">
                    <thead className="text-lg text-gray-700 uppercase bg-blue-200">
                        <tr>
                            <th
                                scope="col"
                                className="w-1/2 px-2 py-5 text-center"
                            >
                                Event
                            </th>
                            <th
                                scope="col"
                                className="w-1/2 px-4 py-5 text-center"
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
                                <td className="w-1/2 px-2 text-center border-r-2">
                                    {row.content}
                                </td>
                                <td className="w-1/2 px-4 py-4 text-center">
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
