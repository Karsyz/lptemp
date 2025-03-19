function Hero({
  imgHref,
  imgAlt,
  title,
  tagline,
  ctaBtnTxt,
  ctaBtnAction,
}) {
  return (
    <section className="bg-indigo-900 text-white py-20 px-6">
      <div className="flex flex-row justify-center w-full ">

        <div className="flex flex-col-reverse md:flex-row md:items-center justify-center gap-10 w-full max-w-[1000px]">
          {/* Text Section */}
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-4 whitespace-nowrap">
              {title}
            </h1>
            <p className="text-lg md:text-xl mb-8">
              {tagline}
            </p>
            <button
              onClick={ctaBtnAction}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
            {ctaBtnTxt}
            </button>
          </div>
          {/* Image Section */}
          <div className="flex">
            <img
              src={imgHref}
              alt={imgAlt}
              className="max-w-full h-auto max-h-[500px] rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
