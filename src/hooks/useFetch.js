// import { useEffect, useState } from "react";

// const TTL = 1000 * 60 * 15
// export function useMovies(url) {
//   const storageKey = `movies-cache-${url}`;
//   const apiKey = import.meta.env.VITE_API_KEY
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     if (!url) return;
//     const cached = localStorage.getItem(storageKey);
//     if (cached) {
//       const { data, timestamp } = JSON.parse(cached);
//       if (Date.now() - timestamp < TTL) {
//         setMovies(data);
//         setLoading(false);
//         return;
//       }
//     }
//     async function fetchMovies() {
//       try {
//         setLoading(true);
//         setError(null);
//         const res = await fetch(url + apiKey);
//         if (!res.ok) throw new Error(res.status, res.statusText);
//         const data = await res.json();
//         const result = data.results
//         setMovies(result);
//         localStorage.setItem(
//           storageKey,
//           JSON.stringify({ data : result, timestamp: Date.now() })
//         );
//       } catch (err) {
//           setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchMovies();
//   }, [url]);

//   return { movies, loading, error };
// }
// export function useMoviesId(url) {
//   const storageKey = `movies-id-cache-${url}`;
//   const apiKey = import.meta.env.VITE_API_KEY
//   const [genres, setGenres] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     if (!url) return;
//     const cached = localStorage.getItem(storageKey);
//     if (cached) {
//       const { data, timestamp } = JSON.parse(cached);
//       if (Date.now() - timestamp < TTL) {
//         setGenres(data);
//         setLoading(false);
//         return;
//       }
//     }
//     async function fetchMovies() {
//       try {
//         setLoading(true);
//         setError(null);

//         const res = await fetch(url + apiKey);

//         if (!res.ok) throw new Error(res.status, res.statusText);
//         const data = await res.json();
//         const result = data.genres
//         setGenres(result);
//         localStorage.setItem(
//           storageKey,
//           JSON.stringify({ data : result, timestamp: Date.now() })
//         );
//       } catch (err) {
//           setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchMovies();

//   }, [url]);
//   return { genres, loading, error };
// }
