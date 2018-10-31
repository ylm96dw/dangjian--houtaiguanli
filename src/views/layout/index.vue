<template>
  <div>
    <el-row>
      <el-col :span="4" style="height:100vh">
        <SideBar></SideBar>
      </el-col>
      <el-col :span="20" style="height:100vh; overflow-y:scroll">
        <Header></Header>
        <Appmian></Appmian>
      </el-col>
    </el-row>


  </div>
</template>

<script>
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import Appmian from './Appmian'
export default {
  components: {
    Header,
    SideBar,
    Appmian
  }
}
</script>

<style>

</style>
