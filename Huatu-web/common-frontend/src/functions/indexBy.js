/**
 * @file array 按照指字段变成map
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */



export default function indexBy (array, key) {
    let map = {}
    array.forEach(function (item, index) {
        map[item[key]] = item
    })
    return map
}
