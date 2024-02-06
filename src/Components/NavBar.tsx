import React from "react";

function NavBar() {

    return (
        <div className="flex justify-around items-center border-b-2 border-b-blue w-full mb-10 mt-8 ml-12  shadow-2xl shadow-pink ">
            <div className="p-2.5">Home</div>
            <div className="p-2.5">Content</div>
            <div className="p-2.5">About</div>
            <div className="p-2.5">
                <input type="search" id="default-search"
                       className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search Mockups, Logos..." required/>
                <button type="submit"
                        className="text-white absolute end-0 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                </button>
            </div>
        </div>
    );
}

export default NavBar;