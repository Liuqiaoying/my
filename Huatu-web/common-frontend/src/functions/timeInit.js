/**
 * @file params = int(1212121212121)
 * @return  "2017-12"
 *
 **/


export default function timeInit(time) {
    if (!time) {
        return
    }
    let timer = new Date(time)
    let year = timer.getFullYear()
    let month = timer.getMonth()
    let day = timer.getDate()
    return String(year) + '/' + month + '/' + day
}
