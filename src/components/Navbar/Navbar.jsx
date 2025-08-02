import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
// import RowXLogo from "../../assets/RowXlogo.png"; // Adjust the path based on your folder structure

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const [isActive, setIsActive]=useState(0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);



   let location = useLocation()
   
   const pathname= location.pathname
  
useEffect(()=>{

   if (pathname == "/"){
    setIsActive(0)
   
   }
  else if(pathname== "/about"){
    setIsActive(1)
  }
  else if(pathname== "/service"){
    setIsActive(2)
  }
  else if(pathname=="/contactus"){
  setIsActive(null)
  }
   else{
    
    setIsActive(3)
  }
  
 window.scrollTo({ top: 0, behavior: "smooth" });


},[pathname])




  return (
    <header className="  fixed  z-40 w-full ">
      <div className="mx-auto bg-white   md:max-w-[99%] lg:max-w-[120em]   px-4 sm:px-6 lg:px-8 backdrop-blur-xl ">
        <div className="flex h-16 rounded-3xl items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Logo */}
            {/* <a href="#">
              <img
                src={RowXLogo} // Use the imported logo
                alt="RowX Logo"
                className="h-20" // Adjust height as needed
              />
            </a> */}
              <Link
            to="/"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 700,
              
              
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              userSelect: "none",
            }}
            className="text-blue-500 large"
          >
            {/* FixPC */}
          <img
  // src="compressed_images/preeticomputerlogo.webp"
  src="logo.png"
  alt="Preeti Computer Logo"
  width="63"
  height="63"
  style={{ borderRadius: "50%", objectFit: "cover" }}
/>

          </Link>
          </div>

          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex" aria-label="Global">
            <ul className="flex small items-center gap-6 text-sm font-semibold">
              <li><NavLink to="/" onClick={()=>{handleClick ;setIsActive(0)}} className={`${isActive===0?"text-blue-500":"text-black border-white"} border-b-3 pb-1 hover:text-blue-500 `} >Home</NavLink></li>
              <li><NavLink to="/about" onClick={()=>setIsActive(1)} className={`${isActive===1?"text-blue-500":" text-black border-white"} border-b-3 pb-1  text-black hover:text-blue-500 `} >About</NavLink></li>
              <li><NavLink to="/service" onClick={()=>setIsActive(2)} className={`${isActive===2?"text-blue-500":"text-black border-white"} border-b-3 pb-1 text-black hover:text-blue-500 `} >Service</NavLink></li>
              <li><NavLink to="/products" onClick={()=>setIsActive(3)} className={`${isActive===3?"text-blue-500":"text-black border-white"} border-b-3 pb-1 text-black hover:text-blue-500 `} >Products</NavLink></li>            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
          <Link to="/contactus" className="bg-blue-500 text-white px-6 py-2 rounded-md small font-bold hover:bg-blue-400 cursor-pointer">
            Contact Us
          </Link>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 cursor-pointer bg-gray-100 rounded-md"
              onClick={() => {setIsMenuOpen(!isMenuOpen);  } }
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav ref={menuRef} className="md:hidden bg-white/90  text-black shadow-md p-2">
          <ul className="p-2 space-y-2 text-lg">
                      <li><NavLink to="/" onClick={()=>setIsActive(0)} className={`${isActive===0?"text-blue-500":"text-black border-white"} border-b-3 pb-1 hover:text-blue-500 `} >Home</NavLink></li>
              <li><NavLink to="/about" onClick={()=>setIsActive(1)} className={`${isActive===1?"text-blue-500":" text-black border-white"} border-b-3 pb-1  text-black hover:text-blue-500 `} >About</NavLink></li>
              <li><NavLink to="/service" onClick={()=>setIsActive(2)} className={`${isActive===2?"text-blue-500":"text-black border-white"} border-b-3 pb-1 text-black hover:text-blue-500 `} >Service</NavLink></li>
              <li><NavLink to="/products" onClick={()=>setIsActive(3)} className={`${isActive===3?"text-blue-500":"text-black border-white"} border-b-3 pb-1 text-black hover:text-blue-500 `} >Products</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;