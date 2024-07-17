import axios from 'axios';

const base: string = "https://api.themoviedb.org/3/movie/now_playing";
const genresBase: string = "https://api.themoviedb.org/3/genre/movie/list"


export async function getBase(): Promise<any> {
    try {
        const res = await axios.get(base, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmZlYzRlZjNjNWNlMDZlNzlmNDIyMmNlOWU3M2NhNyIsIm5iZiI6MTcyMTEyNzU4NS4yMTc3MTQsInN1YiI6IjY2OTY0ZWI1Y2UwNzYyNjg3YTgwNzlmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cWFgh_pXS2HtH8o-elspBnOICNb80dKkj20ikxk_iSM`
            }
        });
        return res.data
    } catch (error) {
        return { status: 500, error: error};
    }
}


export async function getGenres(): Promise<any> {
    try {
        const res = await axios.get(genresBase, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmZlYzRlZjNjNWNlMDZlNzlmNDIyMmNlOWU3M2NhNyIsIm5iZiI6MTcyMTEyNzU4NS4yMTc3MTQsInN1YiI6IjY2OTY0ZWI1Y2UwNzYyNjg3YTgwNzlmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cWFgh_pXS2HtH8o-elspBnOICNb80dKkj20ikxk_iSM`
            }
        });
        return res.data
    } catch (error) {
        return { status: 500, error: error};
    }
}
