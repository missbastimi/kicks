import sprite from "../../assets/sprite.svg";
import { useState } from "react";
import react from "react";
import { Link } from "react-router-dom";
// import ItemCard from "./itemCard";

const Header = () => {
  // useState for SearchBar Visibility
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  // function to toggle search bar visibility
  function searchBar(searchBarVisible) {
    setSearchBarVisible(!searchBarVisible);
  }

  // useState for Authentication Visibility
  const [authVisible, setAuthVisible] = useState(false);

  // function to toggle search bar visibility
  function auth(authVisible) {
    setAuthVisible(!authVisible);
  }

  const items = [{ text: "Item 1" }, { text: "Item 2" }, { text: "Item 3" }];

  return (
    <header className="w-[1320px] h-[96px] fixed z-20 flex justify-center  py-4">
      <div
        className="w-[80%]  
        bg-white border border-gray-200 rounded-2xl shadow-sm 
        px-6 py-8 p-8 m-4 flex  justify-between"
      >
        {/* LEFT MENU */}
        <nav>
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
            <li className="flex items-center gap-1 cursor-pointer">
              New Drops
              <span className="text-orange-500 text-lg">🔥</span>
            </li>

            <li className="flex items-center gap-1 cursor-pointer">
              Men
              <svg width="14" height="14">
                <use href={`${sprite}#chevron-down`} />
              </svg>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              Women
              <svg width="14" height="14">
                <use href={`${sprite}#chevron-down`} />
              </svg>
            </li>
          </ul>
        </nav>
        {/* using components and mapping them out */}
        {/* <div className="flex gap-2">
          {
            items.map((item) => (
              <div key={item.text}>
                <ItemCard text={item.text} />
              </div>
            ))
          }
        </div> */}

        {/* LOGO */}
        <img  src="/Logo.png" className="text-xl font-black tracking-wide"/>

        {/* RIGHT ICONS */}
        <div>
          <ul className="flex items-center gap-6">
            {/* SearchBar */}
           
            {/* using ternary operator to conditionally render the bar(only use when you dont need to persist the state of the hook) */}
            {/* {
              searchBarVisible ? ( <div className={`h-10 w-50 p-2 rounded-xl bg-white border  border-black`} >
                <input className="w-full h-full placeholder:text-gray-300" name="search" placeholder="search" id=""></input>
                </div>
                ) : null
            } */}
            
            {/* using css styling to conditionally render  the bar(not efficient even though it persists state) */}
            <div className={`  h-10 w-50 p-2 rounded-xl bg-white border  border-black  ${searchBarVisible ? `flex`: `hidden`}`} >
                <input className="w-full h-full placeholder:text-gray-300" name="search" placeholder="search" id=""></input>
                </div>
            
            {/* using Activity tag to conditionally render bar (very efficient and clean)(the mode property takes the useState variable while using ternary operator and visible an hidden) */}
            {/* <Activity mode={searchBarVisible ? "visible" : "hidden"}>
                <div className={`h-10 w-50 p-2 rounded-xl bg-white border  border-black`} >
                <input className="w-full h-full placeholder:text-gray-300" name="search" placeholder="search" id=""></input>
                </div>
                </Activity> */}

            {/* Search */}
            <li
              className="cursor-pointer"
              onClick={() => searchBar(searchBarVisible)}
            >
              <svg width="22" height="22" className="text-gray-700">
                <use href={`${sprite}#search`} />
              </svg>
            </li>

            {/* User */}
             <div className={`absolute -bottom-35  w-56 rounded-xl border border-gray-200 bg-white shadow-md  ${authVisible ? `block `: `hidden`}`} >
              <div className="flex flex-col gap-2 p-4">
    
   <Link to="/login">
      <p className="w-full rounded-lg px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition"> Login</p> </ Link>
    
     
    

    <Link to="/register">

    
      <p className="w-full rounded-lg bg-black px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-900 transition">Register</p>
    
      
    </Link>

  </div>
                </div>

            <li className="cursor-pointer"  onClick={() => auth(authVisible)}>
              <svg width="22" height="22" className="text-gray-700">
                <use href={`${sprite}#user`} />
              </svg>
            </li>

            {/* Cart */}

            <li className="relative cursor-pointer">
              <svg width="22" height="22" className="text-gray-700">
                <use href={`${sprite}#cart`} />
              </svg>

              <span
                className="absolute -top-2 -right-2 bg-yellow-400 text-black 
                text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
              >
                0
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
