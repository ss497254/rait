import React from "react";

export default function sponsorship() {
    return (
        <section className="min-h-screen">
            <div className="w-full p-16 bg-blue-600 pt-32 text-white">
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <span className="text-6xl font-semibold text-dark">
                            Sponsorship
                        </span>
                        <h2 className="mt-5 text-xl font-semibold">
                            Why should you like sponsor? <br />
                            Love to hear from you!
                        </h2>
                    </div>
                </div>
            </div>
            <div className="p-8 md:p-16 w-full">
                <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                    <div
                        className="flex text-sm font-medium text-center w-full overflow-x-scroll"
                        id="myTab"
                        data-tabs-toggle="#myTabContent"
                        role="tablist"
                    >
                        <div className="">
                            <button
                                className="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                                id="profile-tab"
                                data-tabs-target="#profile"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="true"
                            >
                                Profile
                            </button>
                        </div>
                        <div className="">
                            <button
                                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                                id="dashboard-tab"
                                data-tabs-target="#dashboard"
                                type="button"
                                role="tab"
                                aria-controls="dashboard"
                                aria-selected="false"
                            >
                                Dashboard
                            </button>
                        </div>
                        <div className="">
                            <button
                                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                                id="settings-tab"
                                data-tabs-target="#settings"
                                type="button"
                                role="tab"
                                aria-controls="settings"
                                aria-selected="false"
                            >
                                Settings
                            </button>
                        </div>
                        <div>
                            <button
                                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                                id="contacts-tab"
                                data-tabs-target="#contacts"
                                type="button"
                                role="tab"
                                aria-controls="contacts"
                                aria-selected="false"
                            >
                                Contacts
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
