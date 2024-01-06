import { AppProps } from "next/app";
import '../styles/globals.css';

export default function App({Component, pageProps}:AppProps){
    return (
        <>
        <main>
            <Component {...pageProps}/>
        </main>
        </>
    )
}