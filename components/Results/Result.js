import Thumbnail from "../Thumnails/Thumbnail";
import FlipMovie from "react-flip-move";
function Result({ results }) {
  // console.log(results, "Hello");
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <div>
          <Thumbnail key={result.id} result={result} />
          {/* <h1>{result.overview}</h1> */}
        </div>
      ))}
    </div>
  );
}

export default Result;
