import Banner from "../Components/Banner";
import DataGrid from "../Components/DataGrid";
import Section from "../Components/MainSection";
import "../Components/style.css"

const Landing = () => {
    return ( 
        <>
            <section>
                <Banner />
                <div className="px-20">
                <Section />
                <DataGrid />
                </div>
            </section>
        </>
     );
}
 
export default Landing;