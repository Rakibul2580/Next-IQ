const Banner = () => {
  return (
    <div>
      <div className="saturate-200 bg-center bg-no-repeat bg-cover bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20201023/pngtree-technological-background-vector-illustration-matrix-binary-computer-code-image_432632.jpg')]">
        <div className="container flex flex-col items-center px-4 pt-40 pb-28 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white">
            Welcome check your coding ability
          </h1>
          <p className="mt-6 mb-8 text-xl sm:mb-12 xl:max-w-3xl dark:text-white">
            Hard work is the key to success. Work hard today rest tomorrow.
            Remember that time waits for no one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
