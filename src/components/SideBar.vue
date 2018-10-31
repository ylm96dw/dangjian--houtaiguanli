<template>
  <div class="side-bar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"

      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/home">
        <router-link to="/layout/home">
          首页
        </router-link>
      </el-menu-item>
      <el-submenu index="/admin">
        <div slot="title">
          管理员管理
        </div>
        <el-menu-item index="/layout/admin">
          <router-link to="/layout/admin">
            管理员列表
          </router-link>
        </el-menu-item>
        <el-menu-item index="/layout/addAdmin">
          <router-link to="/layout/addAdmin">
            添加管理员
          </router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/news">
        <div slot="title">
          新闻管理
        </div>
        <el-menu-item index="/layout/news">
          <router-link to="/layout/news">
            新闻列表
          </router-link>
        </el-menu-item>
        <el-menu-item index="/layout/addNews">
          <router-link to="/layout/addNews">
            添加新闻
          </router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/swiper">
        <div slot="title">
          轮播图管理
        </div>
        <el-menu-item index="/layout/swiper">
          <router-link to="/layout/swiper">
            轮播图列表
          </router-link>
        </el-menu-item>
        <el-menu-item index="/layout/addSwiper">
          <router-link to="/layout/addSwiper">
            添加轮播图
          </router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>

  </div>
</template>

<script>
export default {
  //  methods: {
  //     handleOpen(key, keyPath) {
  //       console.log(key, keyPath);
  //     },
  //     handleClose(key, keyPath) {
  //       console.log(key, keyPath);
  //     }
  //   }
}
</script>

<style scoped lang="scss">
.side-bar{
  // float: left;
  // width: 200px;
  min-height: 100vh;
  border-right:1px solid #f1f1f1;
  background: #304125;
}

</style>
