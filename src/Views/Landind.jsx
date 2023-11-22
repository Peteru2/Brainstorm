import Banner from "../Components/Banner";
import Section from "../Components/MainSection";
import "../Components/style.css"

const Landing = () => {
    return ( 
        <>
            <section>
                <Banner />
                <div className="px-20">
                <Section />
                </div>
            </section>
        </>
     );
}
 
export default Landing;