export default {

    userRole: {
        userIds: [
            {
                required: true,
                validator: (rule, value, callback) => {
                    if (value) {
                        callback()
                    } else {
                        callback(new Error('请选择用户'))
                    }
                },
                trigger: 'change'
            }
        ],
        roleIds: [
            {
                required: true,
                validator: (rule, value, callback) => {
                    if (value.length) {
                        callback()
                    } else {
                        callback(new Error('请选择用户角色'))
                    }
                },
                trigger: 'change'
            }
        ]
    },
    rules: {
        userId: [
            {
                required: true,
                message: '请选择用户'
            }
        ]
    }
}
