// pages/_app.js
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider, useDispatch } from "react-redux";
import { wrapper } from "../../store/store";
import { addRoute } from "../../store/pageSlice";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import HeaderLayout from "@/component/header";
import Footer from "@/component/footer";
// import "../styles/global.css";
import "../styles/mediaQuery.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleRouteChange = (url) => {
      dispatch(addRoute(url));
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, dispatch]);

  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default wrapper.withRedux(MyApp);
