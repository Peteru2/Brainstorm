import SpaceX from "../assets/images/spaceX.jpg"

const Section = () => {
    return ( 
        <>
            <section className="mt-16 " >
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
                    <div className="md:order-first order-last">
                        <h2 className="text-4xl font-bold my-4 text_color "> Discover the Universe: <br />
                        Powered by SpaceX Data</h2>
                        <h5 className="text-gray-400 text-sm text-justify">Embark on an awe-inspiring celestial journey where every meticulously  collected data point serves as a cosmic brushstroke, expertly painting a narrative that unveils the extraordinary wonders of our universe. Through the visionary lens of SpaceX's groundbreaking missions, traverse the cosmic tapestry, discovering the intricacies of distant galaxies, the dance of celestial bodies, and the breathtaking beauty of nebulae. Each data revelation becomes a portal to the unknown, inviting  you to witness the grandeur of space exploration, where innovation and  discovery propel us beyond the limits of our imagination. Join us as we  navigate the cosmos, fueled by the data-driven insights of SpaceX, on a  journey that transcends boundaries and propels humanity into the vast  reaches of the cosmic frontier.</h5>
                    </div>
                    <div className="w-full rounded flex justify-center">
                        <img src={SpaceX} alt="sectionImg" className="rounded-md flex justify-center"/>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Section;