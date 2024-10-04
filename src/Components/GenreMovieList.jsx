import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList';

function GenreMovieList() {
     return (
          <div>
               {GenresList.genere.map((item, index) => {
                    if (index <= 10) {
                         return (
                              <div className='p-8 px-8 md:px-16'>
                                   <h2 className='text-[20px] font-bold'>{item.name}</h2>
                                   <MovieList genereId={item.id} index_={index} />
                              </div>
                         );
                    }
               })}
          </div>
     );
}

export default GenreMovieList