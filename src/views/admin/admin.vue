<template>
  <div>
    <el-card>
      <div slot="header">
        管理员列表
      </div>
      <el-table :data="tableData">
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="手机号" prop="phone"></el-table-column>
        <el-table-column label="头像" prop="avatar">
          <template slot-scope="scope">
            <img :src="scope.row.avatar">
          </template>
        </el-table-column>
        <el-table-column label="性别" prop="sex"></el-table-column>
        <el-table-column label="个性签名" prop="desc"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">查看详情</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData:[]
    }
  },
  methods: {
    getData(){
      this.$axios.get('/admin/adminUser').then(res=>{
        console.log(res)
        if(res.code == 200){
          this.tableData = res.data
        }
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style>
img{
  width: 80px;
  height: 80px;
}
</style>
