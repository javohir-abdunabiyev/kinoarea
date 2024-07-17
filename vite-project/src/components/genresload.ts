export function genresLoad(item: any) {
    const genres_a = document.createElement("a")
    genres_a.href = "#"
    genres_a.innerHTML = item.name
    
    return genres_a

}