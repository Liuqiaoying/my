<template>
    <div id="container" class="container-title">
        <div class="text">
            {{title}}
        </div>
        <div style="flex: 1; display: flex;justify-content: space-between">
          <div class="left">
            <slot name="left"></slot>
          </div>
          <div class="right">
              <slot name="right"></slot>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>


// <style lang="scss" scoped>
// @import "../scss/variables";
// .container-title {
//   height: 52px;
//   display: flex;
//   align-items: center;
//   border-bottom: 1px solid #eef0f5;
//   padding-left: 16px;
//   justify-content: space-between;
//   .text {
//     font-size: 16px;
//     color: #262626;
//     font-weight: 600;
//     vertical-align: middle;
//     height: 16px;
//     line-height: 16px;
//     position: relative;
//     padding-left: 10px;
//     &::before {
//       content: "";
//       left: 0;
//       top: 0;
//       position: absolute;
//       border-right: 3px solid $brand;
//       display: inline-block;
//       height: 16px;
//       vertical-align: middle;
//     }
//   }
//   .left {
//     padding-left: 24px;
//   }
//   .right {
//     padding-right: 24px;
//     .el-button {
//         font-size: 13px;
//         & + .el-button {
//             margin-left: 10px;
//         }
//     }
//   }
// }
// </style>
