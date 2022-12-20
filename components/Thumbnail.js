import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";


const Thumbnail = ({ result }) => {
  
  const BASE_URL = "https://image.tmdb.org/t/p/original";
    
  return (
      <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
          <Image src={ `${BASE_URL}${result.backdrop_path || result.poster_path}` ||`${BASE_URL}${result.poster_path}`} alt={result.title} priority width={1920} height={1080} />
          <div className="p-2">
              <p className="truncate max-w-md mx-auto">{result.overview}</p>
              <h1 className="font-bold text-center mt-1 text-2xl text-white transition-all duration-100 ease-in-out">{result.title || result.original_name}</h1>
              <p className="flex justify-center items-center opacity-0 group-hover:opacity-100 ">
                {result.media_type && `${result.media_type} •`}{" "}
                {result.release_date || result.first_air_date} •{" "}
                <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
              </p>
          </div>
      </div>
  )
}

export default Thumbnail;