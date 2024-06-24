const Home = () => {
  return (
    <>
      <div className="relative bg-gray-400 min-h-screen flex items-center">
        <div className="container m-auto px-6 py-16 md:px-12 lg:px-7">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32 text-center lg:text-left">
              <h1 className="font-bold text-4xl text-gray-900 md:text-5xl lg:w-10/12">
                CSE NOTES Library
              </h1>
              <p className="mt-8 text-gray-700 lg:w-10/12">
                Made by Engineers for Engineers
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-6/12 flex justify-center lg:justify-start">
              <div>
                <label htmlFor="course" className="block text-gray-800 mb-2">Select your Course?</label>
                <select id="course" className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg">
                  <option value="data-science">Data Science</option>
                  <option value="web-development">Web Development</option>
                  <option value="machine-learning">Machine Learning</option>
                  <option value="cybersecurity">Cybersecurity</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
