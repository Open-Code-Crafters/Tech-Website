import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';


const Navbar = ({ pageIndex, setPageIndex, toggleDarkMode, isDarkMode }) => {
   const navigate=useNavigate();
   return (
      <div className="pt-4 pl-4 dark:bg-gray-800 dark:text-white">
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
               <nav className="-mb-px flex gap-6 justify-center" aria-label="Tabs">

                  <a
                     onClick={(e) => {
                        e.preventDefault();
                        setPageIndex("home")
                        navigate('/')
                     }}
                     className={pageIndex == "home" ? "border-b-2" : "" + "inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200"}
                  >
                     <div className="flex gap-1">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="h-5 w-5"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                           />
                        </svg>
                        <p>Home</p>
                     </div>
                  </a>

                  <a
                     onClick={(e) => {
                        e.preventDefault();
                        setPageIndex("aboutus")
                        navigate('/aboutus')
                     }}
                     className={pageIndex == "aboutus" ? "border-b-2" : "" + "inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200"}
                  >
                     <div className="flex gap-1">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="h-5 w-5"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                           />
                        </svg>
                        <p>About us</p>
                     </div>
                  </a>

                  <a
                     onClick={(e) => {
                        e.preventDefault();
                        setPageIndex("compiler")
                        navigate('/compiler')
                     }}
                     className={pageIndex == "compiler" ? "border-b-2" : "" + "inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200"}
                  >
                     <div className="flex gap-1">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="h-5 w-5"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                           />
                        </svg>
                        <p>Compiler</p>
                     </div>
                  </a>

                  <a
                     onClick={(e) => {
                        e.preventDefault();
                        setPageIndex("blogs")
                        navigate('/blogs')
                     }}
                     className={pageIndex == "blogs" ? "border-b-2" : "" + "inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium dark:text-grey-400 hover:border-gray-300 hover:text-gray-700 dark:hover:border-gray-600 dark:hover:text-gray-200"}
                     aria-current="page"
                  >
                     <div className="flex gap-1">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth="1.5"
                           stroke="currentColor"
                           className="h-6 w-6 text-gray-600"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                           />
                        </svg>
                        <p>Blogs</p>
                     </div>
                  </a>
                  <div className="absolute top-3 right-5">
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
