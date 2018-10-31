<template>
  <div class="header clearfix">

    <el-breadcrumb separator="/" class="fll">
      <el-breadcrumb-item :to="{path:'/'}">
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">活动管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item >
        活动列表
      </el-breadcrumb-item>
      <el-breadcrumb-item >
        活动详情
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown class="flr">
      <span class="el-dropdown-link">下拉菜单
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>1</el-dropdown-item>
        <el-dropdown-item>23</el-dropdown-item>
        <el-dropdown-item>3</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .header{
    // float: left;
    padding:0 20px;
    height: 50px;
    // display: flex;
    line-height: 50px;
    border-bottom: 1px solid #f1f1f1
  }

  .header{
    /deep/ .el-breadcrumb{
      line-height: 50px;
    }
  }
</style>
