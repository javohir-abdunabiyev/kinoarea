import { headerReaload } from "./components/header"
import { reload } from "./components/reload"
import { imagesLoad } from "./components/imgload"
import { getBase } from "./lib"
import { getGenres } from "./lib"
import { genresLoad } from "./components/genresload"

export const nowplayingMovies: any = "/now_playing"


const header = document.querySelector(".header") as HTMLElement
headerReaload(header)



export const cont = document.querySelector(".movies_block") as HTMLElement
export const show_all_images = document.querySelector(".show_all_images") as HTMLButtonElement


const genresPlace = document.querySelector(".genres_nav") as HTMLElement


let showAllMovies: Boolean = false

getBase(nowplayingMovies)
    .then(res => {
        reload(res.results.splice(0, 8), imagesLoad, cont)
        show_all_images.onclick = () => {
            if(!showAllMovies) {
                reload(res.results, imagesLoad, cont)
                showAllMovies = true
            }
        }
    })


getGenres()
    .then(res => {
        reload(res.genres, genresLoad, genresPlace)
    })
