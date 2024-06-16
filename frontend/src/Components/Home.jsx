import ClubLogo from '../assets/OCCLogoDark.png';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="flex items-center max-w-4xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl transition-colors duration-300">
        <div className="w-1/2 mr-6">
          <img src={ClubLogo} alt="Club Logo" className="w-full h-auto" />
        </div>
        <div className="w-1/2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mb-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;