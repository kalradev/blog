// import App from "next/app";
import type { AppProps } from 'next/app'
import Theme from '../theme'
import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

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
            hr {
                height: 3px;
                background-color: black;
            }            
            @media (max-width: ${Theme.size.phone}) {
                html {
                    margin: 4%;
                }
            }

            .title {
                font-family: ${Theme.fontFamily.head};
                margin: 0 0 10px 0;
                font-weight: 600;
            }
            .content {
                font-family: ${Theme.fontFamily.content};
                font-size: 100%;
            }
        `}</style>
    </div>
}

export default MyApp
