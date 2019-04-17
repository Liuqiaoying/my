module.exports = {
  extends: [
      'eslint-config-alloy/vue',
  ],
  globals: {
      // 这里填入你的项目需要的全局变量
      // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
      //
      // jQuery: false,
      // $: false
      toast: false
  },
  rules: {
      "vue/order-in-components": "off",
      // 关闭分号检测
      "semi": ["error", "never"],
      // 关闭强制使用"==="
      "eqeqeq": ["off"],
      // 关闭函数名前空格检测
      "space-before-function-paren": ['off'], 
      // 设置未定义的变量的等级为警告
      "no-undef": "warn",
      // 设置未使用的变量的等级为警告
      "no-unused-vars": "warn",
      // 设置空函数的等级为警告
      "no-empty-function": "warn",
      "guard-for-in": ['off'],
      // 设置是否允许有debugger
      "no-debugger": ['off']
  }
};