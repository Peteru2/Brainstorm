import Banner from "../Components/Banner";
import DataGrid from "../Components/DataGrid";
import Section from "../Components/MainSection";
import "../Components/style.css"

const Landing = () => {
    return ( 
        <>
            <section>
                <Banner />
                <div className="md:px-44 px-10">
                <Section />
              <div id="data-table">
                   <DataGrid />
                </div>
                </div>
            </section>
        </>
     );
}
 
export default Landing;