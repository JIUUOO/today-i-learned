import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import Link from "next/link";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 100));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

// await를 사용하기 위해 async 처리
export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie: any) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
