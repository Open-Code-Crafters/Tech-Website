const Compiler = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-screen-xl w-full p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300">Online Compiler</h1>
          <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">Write, compile and run your code online</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Code Editor */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300 p-6">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300 mb-4">Code Editor</h2>
            <textarea
              className="w-full h-64 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-700 focus:outline-none transition-colors duration-300"
              placeholder="Write your code here..."
            ></textarea>
          </div>
          {/* Output Console */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300 p-6">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300 mb-4">Output Console</h2>
            <div className="w-full h-64 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-700 overflow-y-auto transition-colors duration-300">
              <pre>
                <code>
                  Output will be displayed here...
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <button onClick={(e)=>{
            e.preventDefault();
            alert("compiler feature coming soon....")
          }} className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-500 transition-colors duration-300">
            Run Code
          </button>
        </div>
      </div>
    </div>
  )
}

export default Compiler