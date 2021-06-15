import axios from "axios";

export const getMovies = async () => {
    const movies = []
    const { data } = await axios.get("https://aflem-6e85d-default-rtdb.firebaseio.com/posts.json");
    for(let id in data)
        movies.push({
            ...data[id],
            id
        });

    return movies;
}

export const createMovie  = async body => await axios.post("https://aflem-6e85d-default-rtdb.firebaseio.com/posts.json", body);
export const deleteMovies = async id => await axios.delete(`https://aflem-6e85d-default-rtdb.firebaseio.com/posts/${id}.json`);
export const updateMovies = async (id, body) => await axios.put(`https://aflem-6e85d-default-rtdb.firebaseio.com/posts/${id}.json`, body);
