/**
 * @module 处理阶段和科目，用于合并单元格
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/functions/adaptStageSubject.js
 */

/**
 * 处理阶段和科目，用于合并单元格
 *
 * @param {Array<Object>} data
 * @param {Array<number>} 需要合并的单元格
 *
 * @returns {Array<Object>}
 */
export default function (data, columnIndexs = [0]) {
    let counter = {}
    let allSubjects = []
    // 将科目打平
    data.forEach((item) => {
        item.subjects.forEach((subject) => {
            allSubjects.push(Object.assign(subject, {
                stageName: item.stageName,
                stagePrice: item.stagePrice,
                stageId: item.stageId,
                columnIndexs: columnIndexs
            }))
        })
    })
    allSubjects.forEach((item) => {
        if (counter[item.stageId]) {
            counter[item.stageId]++
        } else {
            counter[item.stageId] = 1
        }
    })
    let counterKeys = Object.keys(counter)
    counterKeys.forEach((id) => {
        for (let i = 0, l = allSubjects.length; i < l; i++) {
            if (Number(id) === allSubjects[i].stageId) {
                allSubjects[i].rowspan = Number(counter[id])
                allSubjects[i].rowspanstart = true
                break
            }
        }
    })
    return allSubjects
}