const Banner = () => {
    const scrollToDataTable = () => {
        const dataTableSection = document.getElementById('data-table');
        if (dataTableSection) {
          dataTableSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return ( 
        <>
        <nav className="w-full bg-black-800 flex items-center p-4 ">
        <h2 className="nav-text">SpaceSync</h2>
        <div className="ml-auto flex items-center cursor-pointer" onClick={() => scrollToDataTable()}>
                <h2 className="text-white ">D-GRID</h2>
               
        </div>
        </nav>
        </>
     );
}
 
export default Banner;