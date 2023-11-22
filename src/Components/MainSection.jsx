import SpaceX from "../assets/images/spaceX.jpg"

const Section = () => {
    return ( 
        <>
            <section className="mt-6 " >
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <h2 className="text-4xl font-bold my-4 text_color"> Discover the Universe: <br />
                        Powered by SpaceX Data</h2>
                        <h5 className="text-gray-300 text-sm">Embark on an awe-inspiring celestial journey where every meticulously <br /> collected data point serves as a cosmic brushstroke, expertly painting <br /> a narrative that unveils the extraordinary wonders of our universe. <br /> Through the visionary lens of SpaceX's groundbreaking missions, <br /> traverse the cosmic tapestry, discovering the intricacies of distant <br /> galaxies, the dance of celestial bodies, and the breathtaking beauty of < br />nebulae. Each data revelation becomes a portal to the unknown, inviting <br />  you to witness the grandeur of space exploration, where innovation and <br /> discovery propel us beyond the limits of our imagination. Join us as we <br /> navigate the cosmos, fueled by the data-driven insights of SpaceX, on a <br /> journey that transcends boundaries and propels humanity into the vast <br /> reaches of the cosmic frontier.</h5>
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