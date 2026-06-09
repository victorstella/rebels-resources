export function Home() {
  return (
    <div className="w-[95%] md:w-[80%] lg:w-[60%] mx-auto mb-5 mt-10 px-8 pt-6 pb-8 flex flex-col border-[3px] border-sky-400 hover:border-yellow-300 bg-black/75 text-gray-300 transition-colors duration-200 cursor-default">
      <h1 className="text-4xl font-medium text-sky-400 mb-3">
        Meme Generator & Character Search
      </h1>
      <p className="text-lg">
        {`This is a simple meme generator, fully made with ReactJS and TypeScript, it uses the `}
        <strong>
          <a
            rel="noopener"
            href="https://memegen.link/"
            target="_blank"
            className="text-teal-500"
          >
            memegen.link
          </a>
        </strong>
        {` public API to create memes based on 2 input fields, one for the top text of the image and one for the
          bottom. Both are used to build a URI, along with a random image reference of the available API templates.`}
      </p>
      <p className="text-lg mt-6">
        {`Also, the "Star Wars Character" component loads some information about a random character present
          at any of the movies, but you can also search for specific characters. This data is provided by the `}
        <strong>
          <a
            rel="noopener"
            href="https://swapi.info/"
            target="_blank"
            className="text-teal-500"
          >
            swapi
          </a>
        </strong>
        {` public API.`}
      </p>
      <p className="text-lg mt-6">
        {`For more, visit the repository of `}
        <strong>
          <a
            rel="noopener noreferrer"
            href="https://github.com/victorstella/meme-generator"
            target="_blank"
            className="text-teal-500"
          >
            Rebel Alliance's Resources
          </a>
        </strong>
        {` on GitHub.`}
      </p>
    </div>
  );
}
