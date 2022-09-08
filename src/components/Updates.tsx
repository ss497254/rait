export default function Updates() {
    return (
        <div className="md:py-4 bg-blue-100 py-12">
            <h1 className="w-full text-center my-16 text-4xl font-bold">
                Updates
            </h1>
            <div className="px-8 md:px-12 lg:px-24 text-xl text-md md:text-lg text-justify mb-8">
                <div className="text-base md:text-lg flex flex-col justify-center min-h-[80px] lg:px-12 items-center w-full border border-gray-300 rounded border-l-4 border-l-blue-500 bg-white px-5 py-6 my-4">
                    In case of travel restrictions due to Covid-19 that prohibit
                    physical appearance, RAIT will allow authors of accepted
                    papers to present and participate remotely if they wish to
                    do so.
                </div>
                <div className="flex justify-center">
                    <button className="text-base md:text-lg bg-blue-500 hover:bg-blue-600 px-4 py-3 text-white rounded mt-6">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}
