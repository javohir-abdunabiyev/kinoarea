import { imgstarturl } from "./imgload"
const body: HTMLElement = document.body

const video = document.querySelector("iframe")

export function videosLoad(item: any) {
    const traielrs_block: HTMLElement = document.createElement("div")
    const play_button = `<svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.8296 12.0167C27.5411 13.5474 27.5411 17.4526 24.8296 18.9833L5.96637 29.6319C3.29989 31.1372 3.72183e-07 29.2106 3.35669e-07 26.1486L8.17023e-08 4.85141C4.51881e-08 1.78939 3.2999 -0.137154 5.96638 1.36812L24.8296 12.0167Z" fill="white"/>
    </svg>
    `

    body.style.backgroundImage = `url(${imgstarturl + item.backdrop_path})`;

    traielrs_block.onclick = () => {
        
    }

}