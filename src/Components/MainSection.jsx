import SpaceX from "../assets/images/spaceX.jpg"

const Section = () => {
    return ( 
        <>
            <section className="mt-6 " >
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <h2 className="text-4xl font-bold my-4 text_color"> Discover the Universe: <br />
                        Powered by SpaceX Data</h2>
                        <h5 className="text-gray-300 text-sm">we are here to serve you the goodness of the space, live through the <br /> experiences</h5>
                    </div>
                    <div className="w-[500px] rounded flex justify-center">
                        <img src={SpaceX} alt="sectionImg" className="rounded-md flex justify-center"/>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Section;