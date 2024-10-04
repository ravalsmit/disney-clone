import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../services/GlobalAPI';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';

function MovieList({ genereId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  });

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genereId).then(resp => {
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += 500
  }

  const sliderLeft = (element) => {
    element.scrollLeft -= 500
  }

  return (
    <div className='relative'>
      <IoChevronBackOutline onClick={() => sliderLeft(elementRef.current)}
        className={`text-[50px] hidden md:block p-2 cursor-pointer z-10 top-0
          absolute ${index_ % 3 == 0 ? 'mt-[65px]' : 'mt-[150px]'}`} />
      <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide 
      scroll-smooth pt-5 px-3 pb-5'>
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 && index_ > 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
          </>
        ))}
      </div>
      <IoChevronForwardOutline onClick={() => sliderRight(elementRef.current)}
        className={`text-[50px] hidden md:block p-2 cursor-pointer z-10 top-0
        absolute right-0 ${index_ % 3 == 0 ? 'mt-[65px]' : 'mt-[150px]'}`} />
    </div>
  );
};

export default MovieList;