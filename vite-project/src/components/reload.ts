export function reload(arr:Array<any>, component: Function, place: HTMLElement) {

    for(let item of arr) {
        const elem = component(item)

        place.append(elem)
    }
}