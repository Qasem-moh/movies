

function NavBar() {

    return (
        <div className="flex justify-around items-center border-b-2 border-b-blue w-full mb-10 mt-8 ml-12  shadow-2xl shadow-pink ">
            <div className="p-2.5">Movies Store</div>
  
            <div className="p-2.5">
                <input type="search" id="default-search"
                       className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search Movies" required/>
                
            </div>
        </div>
    );
}

export default NavBar;