const userInfo = require('./data/user')
const enumList = require('./data/enumList')
const demo = require('./data/demo')
const menu1 = require('./data/menu1')
const menu3 = require('./data/menu3')
let data = {}

module.exports = Object.assign(
    data,
    demo,
    userInfo,
    enumList,
    menu1,
    menu3
)
