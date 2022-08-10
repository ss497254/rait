import React from "react";

export default function ImportantDates() {
    return (
        <div className="py-16 md:px-12 mb-8">
            <h2 className="text-center text-3xl mb-12 font-semibold">
                Important Dates
            </h2>
            <div className="max-w-[90vw] outline outline-2 outline-blue-200 overflow-hidden mx-auto shadow-md rounded-lg">
                <table className="w-full text-left text-gray-800">
                    <thead className="text-gray-700 uppercase text-lg bg-blue-200">
                        <tr>
                            <th scope="col" className="py-5 px-4">
                                Date
                            </th>
                            <th scope="col" className="py-5 px-2 w-full">
                                Event
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-gray-100">
                            <td className="py-4 px-4 min-w-[18vw]">
                                October 15, 2022
                            </td>
                            <td className="py-4 px-2 w-full">
                                Full Paper submission
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-100">
                            <td className="py-4 px-4 min-w-[18vw]">
                                September 15, 2022
                            </td>
                            <td className="py-4 px-2 w-full">
                                Paper submission deadline in Demo and Young
                                Researchers' Symposium tracks Tutorial proposal
                                deadline
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-100">
                            <td className="py-4 px-4 min-w-[18vw]">
                                September 15, 2022
                            </td>
                            <td className="py-4 px-2 w-full">
                                Paper submission deadline in Demo and Young
                                Researchers' Symposium tracks Tutorial proposal
                                deadline
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-100">
                            <td className="py-4 px-4 min-w-[18vw]">
                                September 15, 2022
                            </td>
                            <td className="py-4 px-2 w-full">
                                Paper submission deadline in Demo and Young
                                Researchers' Symposium tracks Tutorial proposal
                                deadline
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-100">
                            <td className="py-4 px-4 min-w-[18vw]">
                                September 15, 2022
                            </td>
                            <td className="py-4 px-2 w-full">
                                Paper submission deadline in Demo and Young
                                Researchers' Symposium tracks Tutorial proposal
                                deadline
                            </td>
                        </tr>
                    </tbody>
                    <tfoot className="text-gray-700 bg-blue-200">
                        <td className="py-3 px-4 min-w-[18vw]"></td>
                        <td className="py-3 px-6 md:px-8 font-bold text-blue-600 hover:underline w-full text-right">
                            See more
                        </td>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
