import { Movie } from './Movie';

export function MovieList({ movieList }) {
    // console.log(movieList);
    return (
        <div className="movie-list">
            {movieList.map((movieObj, index) => (<Movie index={index} movie={movieObj} />))}
        </div>
    );

}
