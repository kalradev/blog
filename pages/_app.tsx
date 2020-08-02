// import App from "next/app";
import type { AppProps } from 'next/app'
import Theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
    return <div>
        <Component {...pageProps} />
        <style jsx global>{`
            html {
                margin: 3% 10% 0 10%;
            }
            a {
                color: black;
                text-decoration: none;
            }
            a:hover {
                color: ${Theme.colors.accent};
            }
            hr {
                height: 3px;
                background-color: black;
            }            
            @media (max-width: ${Theme.size.phone}) {
                html {
                    margin: 1%;
                }
            }

            .title {
                font-family: ${Theme.fontFamily.head};
                margin: 0 0 10px 0;
            }
            .subtitle {
                font-family: ${Theme.fontFamily.content};
                font-size: 100%;
            }
        `}</style>
    </div>
}

export default MyApp
