export default function Updates() {
    return (
        <div className="py-12 md:py-4 bg-blue-50">
            <h1 className="w-full my-16 text-4xl font-bold text-center">
                Updates
            </h1>
            <div className="px-8 mb-8 text-xl text-justify md:px-12 lg:px-24 text-md md:text-lg">
                <div className="text-base md:text-lg flex flex-col justify-center min-h-[80px] lg:px-12 items-center w-full border border-gray-300 rounded border-l-4 border-l-blue-500 bg-white px-5 py-6 my-4">
                    In case of travel restrictions due to Covid-19 that prohibit
                    physical appearance, RAIT will allow authors of accepted
                    papers to present and participate remotely if they wish to
                    do so.
                </div>
                <div className="flex justify-center">
                    <button className="px-4 py-3 mt-6 text-base text-white bg-blue-500 rounded md:text-lg hover:bg-blue-600">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}
