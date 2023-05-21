import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../app/globals.css'
import Footer from "@/components/footer";
import Header from "@/components/header";
import RightAside from "@/components/rightaside";
import LeftAside from "@/components/leftaside";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header/>
            <main>
                <div className="row m-2 mt-3">
                    <LeftAside/>
                    <div className="col-6 v_tbdr" >
                    <Component {...pageProps} />
                    </div>
                    <RightAside/>
                </div>
            </main>
            <Footer/> 
        </>
    );
  }