import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import React from "react";
import "../styles/globals.css";
import Footer from "../components/Layout/Footer";
import NavBar from "../components/Layout/Navbar";

Router.events.on("routeChangeStart", () => {
    NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>
                    RAIT (Recent Advancements in Information Technology) 2023
                </title>
                <link rel="icon" href="/favicon.png" type="image/x-icon" />
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
                />
                <link rel="apple-touch-icon" href="/img/doge.png"></link>
                <link rel="apple-touch-startup-image" href="img/doge512.png" />
            </Head>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default App;
