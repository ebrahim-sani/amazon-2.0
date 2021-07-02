import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* TOp nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right Top nav */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="cursor-pointer link">
            <p>Hello Guest</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="cursor-pointer link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative flex items-center link">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Buttom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6  bg-amazon_blue-light text-white">
        <p className="flex items-center link">
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className="link">Prime Vide</p>
        <p className="link">Today's Deals</p>
        <p className="link">Amazon Business</p>
        <p className="hidden md:inline-flex link">Baby & Toys</p>
      </div>
    </header>
  );
}

export default Header;