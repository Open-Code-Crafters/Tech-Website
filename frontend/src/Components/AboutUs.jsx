const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="sm:flex items-center max-w-screen-xl w-full">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" className="w-full h-auto" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          <div className="text">
            <span className="text-gray-500 dark:text-gray-400 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
              doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
              voluptatum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
