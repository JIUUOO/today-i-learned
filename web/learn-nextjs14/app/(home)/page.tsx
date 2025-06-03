import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

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
    <div>
      {movies.map((movie: any) => (
        <Link href={`/movies/${movie.id}`} key={movie.id}>
          <li key={movie.id}>{movie.title}</li>
        </Link>
      ))}
    </div>
  );
}
