import { memo, useEffect, useState } from "react";

import { api } from "../services/api";

import { MovieCard } from "./MovieCard";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreProps;
}

function ContentComponent({ movies, selectedGenre }: ContentProps) {
  return (
    <main>
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  );
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps);
});