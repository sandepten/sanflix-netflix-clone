import Image from "next/image";
import { useState, useEffect } from "react";
import { baseUrl } from "../constants/movie";

const Banner = ({netflixOriginals}) => {
    const [movie, setMovie] = useState(null)
    useEffect(() => {
      setMovie(netflixOriginals[Math.floor(Math.random()*netflixOriginals.length)])
    }, [netflixOriginals])
  return (
    <div>
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt="Picture of the movie" layout="fill" objectFit="cover"/>
      </div>
      <h1 className="text-2xl lg:text-7xl md:text-4xl font-bold">{movie?.title || movie?.name || movie?.original_name}</h1>
      <p className="max-w-xs text-">{movie?.overview}</p>
    </div>
  );
};

export default Banner;


