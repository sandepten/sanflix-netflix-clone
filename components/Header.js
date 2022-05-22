import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const {logout} = useAuth()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    //? Here the return statement is ran first as a clean up for the useeffect function, in this case it removes the event listner so that it doesn't slow down our page, when we don't need that eventlistner
  }, []); //These square brackets make it so that this useEffect doesn't run constantly and runs only once when the page loads, and if anything is added to this array, whenever it will change, it will run the useeffect function

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          //   here the object-contain class, maintains the aspect ratio of the image
          className="cursor-pointer object-contain"
          alt="Logo of netflix"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="navlink">Home</li>
          <li className="navlink">TV Shows</li>
          <li className="navlink">Movies</li>
          <li className="navlink">New & Popular</li>
          <li className="navlink">My list</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
