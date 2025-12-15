import fetchUrl from "../utils/fetch";

export const getMovie = async (url) => {
  try {
    const moviesData = await fetchUrl(url);
    console.log(moviesData);
    const result = moviesData.results.map((idx) => {
      return {
        id: idx.id,
        title: idx.title,
        image: idx.poster_path,
        overview: idx.overView,
        homePege: idx.homePege,
        release: idx.release_date,
        genreId: idx.genre_ids,
        duration: idx.runtime,
      };
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieGenre = async (url) => {
  try {
    const moviesGenre = await fetchUrl(url);
    const result = moviesGenre.genres.map((idx) => {
      return {
        id: idx.id,
        name: idx.name,
      };
    });
    // console.log(result)
    return result;
  } catch (err) {
    console.log(err);
  }
};
