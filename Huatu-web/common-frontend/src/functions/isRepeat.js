/**
 * @file isRepeat
 */

export default function (arr) {
    let hash = {}

    for (let i in arr) {

        if (hash[arr[i]]) {
            return true
        }

        hash[arr[i]] = true

    }

    return false
}

