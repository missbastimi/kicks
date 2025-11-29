import sprite from "../assets/sprite.svg";
import { useState, Activity } from "react";
import react from "react";
import ItemCard from "./itemCard";

const Header = () => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  function searchBar(searchBarVisible) {
    setSearchBarVisible(!searchBarVisible);
  }

  const items = [{ text: "Item 1" }, { text: "Item 2" }, { text: "Item 3" }];

  return (
    <header className="w-full fixed flex justify-center bg-[#FAFAFA] py-4">
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
        <div className="text-xl font-black tracking-wide">KICKS</div>

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
            {/* <div className={`  h-10 w-50 p-2 rounded-xl bg-white border  border-black  ${searchBarVisible ? `flex`: `hidden`}`} >
                <input className="w-full h-full placeholder:text-gray-300" name="search" placeholder="search" id=""></input>
                </div> */}
            
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
            <li className="cursor-pointer">
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
