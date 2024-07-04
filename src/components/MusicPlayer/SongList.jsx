import useFetch from "../../hooks/useFetch";
import SongCard from "./SongCard";

function SongList() {
    const [songs, isError, isLoading] = useFetch(
        "https://sandbox.academiadevelopers.com/harmonyhub/songs/"
    );

    if (isLoading) return <p>Cargando...</p>;
    if (isError) return <p>Error al cargar las canciones.</p>;
    if (!songs) return <p>No hay canciones disponibles</p>;

    return (
        <div>
            <div>
                <h2>Lista de Canciones</h2>
                <ul>
                    {songs.map((song) => (
                        <div key={song.id} className="column is-two-third">
                            <SongCard song={song} />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SongList;
