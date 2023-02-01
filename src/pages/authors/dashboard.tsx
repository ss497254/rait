import { isServer } from "lib/isServer";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [data, setData] = useState<any>({});
    useEffect(() => {
        if (isServer) return;
        try {
            let data = JSON.parse(sessionStorage.getItem("author") || "{}");
            console.log(data);

            setData(data);
        } catch {}
    }, []);

    return (
        <div className="flex flex-col items-center h-screen p-6 bg-blue-200">
            <h2 className="my-4 text-2xl">{data["Name of the Author"]}</h2>
            {/* <form
                className="p-12 bg-white rounded-md shadow-xl md:min-w-[600px]"
                action="https://ecopyright.ieee.org/ECTT/IntroPage.jsp"
                method="post"
            >
                <h2 className="mb-3 text-2xl font-semibold text-center">
                    Paper 1
                </h2>
                <input
                    type="hidden"
                    name="PubTitle"
                    defaultValue="2023 5th International Conference on Recent Advances in Information Technology (RAIT)"
                />
                <input
                    type="hidden"
                    disabled
                    name="ArtSource"
                    defaultValue="57693"
                />
                <div>Author's Name</div>
                <input
                    type="text"
                    disabled
                    className="w-full p-1 mt-2 mb-4 border-2"
                    name="AuthName"
                    defaultValue="Manohar"
                />
                <div>Author's Email</div>
                <input
                    name="AuthEmail"
                    disabled
                    className="w-full p-1 mt-2 mb-4 border-2"
                    defaultValue="falcon497254@gmail.com"
                />
                <div>Article Title</div>
                <input
                    type="text"
                    disabled
                    name="ArtTitle"
                    className="w-full p-1 mt-2 mb-4 border-2"
                    defaultValue="asdf"
                />
                <div>Article Id</div>
                <input
                    type="text"
                    disabled
                    name="ArtId"
                    className="w-full p-1 mt-2 mb-4 border-2"
                    defaultValue="54321"
                />
                <input
                    type="hidden"
                    name="rtrnurl"
                    defaultValue="https://easychair.org/conferences/?conf=rait2023"
                />
                <input
                    className="block w-full px-5 py-2 mx-auto mt-5 text-white bg-blue-500 rounded cursor-pointer"
                    name="Submit"
                    type="submit"
                    defaultValue="Copyright Submission"
                />
            </form> */}
            <form
                className="p-12 bg-white my-6 rounded-md shadow-xl md:min-w-[600px]"
                action="https://ecopyright.ieee.org/ECTT/IntroPage.jsp"
                method="post"
            >
                <input
                    type="hidden"
                    name="PubTitle"
                    value="2023 5th International Conference on Recent Advances in Information Technology (RAIT)"
                />
                <input
                    type="hidden"
                    name="ArtTitle"
                    value={data["Title of the Paper 1"]}
                />
                <input
                    type="hidden"
                    name="AuthName"
                    value={data["Name of the Author"]}
                />

                <input
                    type="hidden"
                    name="ArtId"
                    value={data["Submission Number of Paper 1"]}
                />
                <input type="hidden" name="ArtSource" value="57693" />
                <input
                    type="hidden"
                    name="AuthEmail"
                    value={data["Email Address"]}
                />
                <input
                    type="hidden"
                    name="rtrnurl"
                    value="https://people.iitism.ac.in/~rait"
                />
                <input
                    name="Submit"
                    type="submit"
                    value="Copyright Submission"
                />
            </form>
        </div>
    );
};

//     return (
//         <div className="flex flex-col items-center min-h-screen p-6 bg-blue-200">
//             <h2 className="my-4 text-2xl">{data["Name of the Author"]}</h2>
//             <form
//                 className="p-12 bg-white my-6 rounded-md shadow-xl md:min-w-[600px]"
//                 action="https://ecopyright.ieee.org/ECTT/IntroPage.jsp"
//                 method="post"
//             >
//                 <h2 className="mb-3 text-2xl font-semibold text-center">
//                     Paper 1
//                 </h2>
//                 <input
//                     type="hidden"
//                     name="PubTitle"
//                     defaultValue="2023 5th International Conference on Recent Advances in Information Technology (RAIT)"
//                 />
//                 <input
//                     type="hidden"
//                     disabled
//                     name="ArtSource"
//                     defaultValue="57693"
//                 />
//                 <div>Author's Name</div>
//                 <input
//                     type="text"
//                     disabled
//                     className="w-full p-1 mt-2 mb-4 border-2"
//                     name="AuthName"
//                     defaultValue={data["Name of the Author"]}
//                 />
//                 <div>Author's Email</div>
//                 <input
//                     name="AuthEmail"
//                     disabled
//                     className="w-full p-1 mt-2 mb-4 border-2"
//                     defaultValue={data["Email Address"]}
//                 />
//                 <div>Article Title</div>
//                 <input
//                     type="text"
//                     disabled
//                     name="ArtId"
//                     className="w-full p-1 mt-2 mb-4 border-2"
//                     defaultValue={data["Submission Number of Paper 1"]}
//                 />
//                 <input
//                     type="text"
//                     disabled
//                     name="ArtTitle"
//                     className="w-full p-1 mt-2 mb-4 border-2"
//                     defaultValue={data["Title of the Paper 1"]}
//                 />
//                 <div>Article Id</div>
//                 <input
//                     type="hidden"
//                     name="rtrnurl"
//                     defaultValue="http://localhost:3000/"
//                 />
//                 <input
//                     className="block w-full px-5 py-2 mx-auto mt-5 text-white bg-blue-500 rounded cursor-pointer"
//                     name="Submit"
//                     type="submit"
//                     defaultValue="Copyright Submission"
//                 />
//             </form>
//             {data["Title of the Paper 2"] ? (
//                 <form
//                     className="p-12 my-6 bg-white rounded-md shadow-xl md:min-w-[600px]"
//                     action="https://ecopyright.ieee.org/ECTT/IntroPage.jsp"
//                     method="post"
//                 >
//                     <h2 className="mb-3 text-2xl font-semibold text-center">
//                         Paper 2
//                     </h2>
//                     <input
//                         type="hidden"
//                         name="PubTitle"
//                         defaultValue="2023 5th International Conference on Recent Advances in Information Technology (RAIT)"
//                     />
//                     <input
//                         type="hidden"
//                         disabled
//                         name="ArtSource"
//                         defaultValue="57693"
//                     />
//                     <div>Author's Name</div>
//                     <input
//                         type="text"
//                         disabled
//                         className="w-full p-1 mt-2 mb-4 border-2"
//                         name="AuthName"
//                         defaultValue={data["Name of the Author"]}
//                     />
//                     <div>Author's Email</div>
//                     <input
//                         name="AuthEmail"
//                         disabled
//                         className="w-full p-1 mt-2 mb-4 border-2"
//                         defaultValue={data["Email Address"]}
//                     />
//                     <div>Article Title</div>
//                     <textarea
//                         disabled
//                         name="ArtTitle"
//                         className="w-full p-1 mt-2 mb-4 border-2"
//                         defaultValue={data["Title of the Paper 2"]}
//                     />
//                     <div>Article Id</div>
//                     <input
//                         type="text"
//                         disabled
//                         name="ArtId"
//                         className="w-full p-1 mt-2 mb-4 border-2"
//                         defaultValue={data["Submission Number of Paper 2"]}
//                     />
//                     <input
//                         type="hidden"
//                         name="rtrnurl"
//                         defaultValue="http://localhost:3000/"
//                     />
//                     <input
//                         className="block w-full px-5 py-2 mx-auto mt-5 text-white bg-blue-500 rounded cursor-pointer"
//                         name="Submit"
//                         type="submit"
//                         defaultValue="Copyright Submission"
//                     />
//                 </form>
//             ) : null}
//         </div>
//     );
// };

Dashboard.hidden = true;

export default Dashboard;
