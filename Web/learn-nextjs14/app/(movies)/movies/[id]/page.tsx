export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log(id);
  return <h1>Movie {id}</h1>;
}
