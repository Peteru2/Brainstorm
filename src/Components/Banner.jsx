const Banner = () => {
    return ( 
        <>
        <nav className="w-full bg-black-800 flex items-center p-4 ">
        <h2 className="nav-text">SpaceSync</h2>
        <div className="ml-auto flex items-center">
                <h2 className="text-white mx-6">D-GRID</h2>
                <div className="border-2 rounded-md ">
                    <input type="text" className=" py-1 px-2 outline-none" placeholder="Search Data..."/>
                </div>
        </div>
        </nav>
        </>
     );
}
 
export default Banner;