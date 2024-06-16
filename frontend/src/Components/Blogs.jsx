const Blogs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-screen-xl w-full p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300">Our Blogs</h1>
          <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">Stay updated with our latest news and articles</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
            <img className="w-full h-48 object-cover" src="https://via.placeholder.com/600x400" alt="Blog Post 1" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300">Blog Post Title 1</h2>
              <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          {/* Blog Post 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
            <img className="w-full h-48 object-cover" src="https://via.placeholder.com/600x400" alt="Blog Post 2" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300">Blog Post Title 2</h2>
              <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          {/* Blog Post 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
            <img className="w-full h-48 object-cover" src="https://via.placeholder.com/600x400" alt="Blog Post 3" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300">Blog Post Title 3</h2>
              <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          {/* Add more blog posts as needed */}
        </div>
      </div>
    </div>
  )
}

export default Blogs