<template>
  <div>
      <el-card>
        <el-table :data="tableData">
          <el-table-column label="新闻标题" prop="title"></el-table-column>
          <el-table-column label="作者" prop="author.nickname"/>
          <el-table-column label="新闻头图" >
            <template slot-scope="scope">
              <img :src="scope.row.img" >
            </template>
          </el-table-column>
           <el-table-column label="分类" prop="type.title" />
        </el-table>
      </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableData:[]
    }
  },
  methods: {
    getData(){
      this.$axios.get('/admin/news').then(res=>{
        console.log(res)
        this.tableData = res.data
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
