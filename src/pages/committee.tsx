import React from "react";
import HeroBackground from "components/HeroBackground";

export default function Contact() {
    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <span className="text-4xl lg:text-6xl font-semibold text-dark">
                            Committee
                        </span>
                        <h2 className="mt-5 text-xl font-semibold">
                            Let's talk about <br />
                            Love to hear from you!
                        </h2>
                    </div>
                </div>
            </HeroBackground>
            <div className="mb-12 p-16 flex w-full gap-16 flex-col flex-wrap md:flex-row">
                <div className="mb-4 mx-auto border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-wrap gap-4 -mb-px text-lg font-medium text-center">
                        <li className="mr-2" role="presentation">
                            <button
                                className="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="true"
                            >
                                Profile
                            </button>
                        </li>
                        <li className="mr-2" role="presentation">
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
                        </li>
                        <li className="mr-2" role="presentation">
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
                        </li>
                        <li role="presentation">
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
                        </li>
                    </ul>
                </div>
                <div className="outline">
                    <div
                        className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                        aria-labelledby="profile-tab"
                    >
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong className="font-medium text-gray-800 dark:text-white">
                                Profile tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling.
                        </p>
                    </div>
                    <div
                        className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                        id="dashboard"
                        role="tabpanel"
                        aria-labelledby="dashboard-tab"
                    >
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong className="font-medium text-gray-800 dark:text-white">
                                Dashboard tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling.
                        </p>
                    </div>
                    <div
                        className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                        id="settings"
                        role="tabpanel"
                        aria-labelledby="settings-tab"
                    >
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong className="font-medium text-gray-800 dark:text-white">
                                Settings tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling.
                        </p>
                    </div>
                    <div
                        className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                        id="contacts"
                        role="tabpanel"
                        aria-labelledby="contacts-tab"
                    >
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            This is some placeholder content the{" "}
                            <strong className="font-medium text-gray-800 dark:text-white">
                                Contacts tab's associated content
                            </strong>
                            . Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
