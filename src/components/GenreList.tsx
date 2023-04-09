import useGenres from "../hooks/useGenres";


export default function GenreList() {
    const {data, error, loading} = useGenres();
  return (
    <ul>
        {
            data.map(d => <li key={d.id}>{d.name}</li>)
        }
    </ul>
  )
}