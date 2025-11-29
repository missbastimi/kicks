import sprite from "../assets/sprite.svg";

const Header = () => {
  return (
    <header className="w-full flex justify-center bg-[#FAFAFA] py-4">
      <div className="w-[80%] w-[1320px] 
        bg-white border border-gray-200 rounded-2xl shadow-sm 
        px-6 py-8 p-8 m-4 flex  justify-between">

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

        {/* LOGO */}
        <div className="text-xl font-black tracking-wide">KICKS</div>

        {/* RIGHT ICONS */}
        <div>
          <ul className="flex items-center gap-6">

            {/* Search */}
            <li className="cursor-pointer">
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

              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black 
                text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
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