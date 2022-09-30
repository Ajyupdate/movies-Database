import './styles/global.css'
import Head from 'next/head'

export default function App({ Component, pageProps}){
    
    return (
        <>
        {/* <Head>
            <title>Movie Database</title>
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
            <script src="https://unpkg.com/aos@next/dist/aos.js"></script> 
      <script> */}
        {/* {AOS.init(
            {
                offset:10,
                duration:3000,
                once: true
            }
        )} */}
      {/* </script>

        </Head> */}
        <Component {...pageProps}/>
        </>
    )
    
}