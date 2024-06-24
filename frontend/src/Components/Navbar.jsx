import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ pageIndex, setPageIndex, toggleDarkMode, isDarkMode }) => {
    const navigate = useNavigate();
    return (
        <div className="pt-4 pl-4 dark:bg-gray-800 bg-gray-200 dark:text-white relative">
            <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>
                <select
                    id="Tab"
                    className="w-full rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                >
                    <option>Home</option>
                    <option>About us</option>
                    <option>Compiler</option>
                    <option>Blogs</option>
                </select>
            </div>

            <div className="hidden sm:block">
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <nav className="flex justify-between items-center gap-6 px-4 py-3" aria-label="Tabs">
                        <div className="flex-grow flex justify-center items-center gap-4">
                            <div className="flex px-4 py-3 justify-center items-center rounded-md border-2 border-blue-500 font-[sans-serif] max-w-md w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                                    className="fill-gray-600 mr-3 rotate-90">
                                    <path
                                        d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                    </path>
                                </svg>
                                <input type="email" placeholder="Search Something..." className="w-full outline-none bg-transparent text-gray-600 text-sm" />
                            </div>
                            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-4">Student Login</button>
                            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">College Login</button>
                        </div>
                        <div className="absolute top-8 right-5">
                            <button onClick={toggleDarkMode}>
                                {isDarkMode ? (
                                    <>
                                        <MoonIcon className="inline-block w-4 h-4 mr-1" /> Dark
                                    </>
                                ) : (
                                    <>
                                        <SunIcon className="inline-block w-4 h-4 mr-1" /> Light
                                    </>
                                )}
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
