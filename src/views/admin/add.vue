<template>
  <div>
    <el-card>
      <div slot="header">
        添加管理员
      </div>
      <el-form :v-model="formData">
        <el-form-item label="用户头像">
          <uploadImg v-model="formData.avatar"></uploadImg>
        </el-form-item>
        <el-form-item label="用户名" required>
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" required >
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formData.sex">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>

        </el-form-item>
        <el-form-item label="个性签名">
          <el-input v-model="formData.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handlClick">
            提交
          </el-button>

        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import uploadImg from '@/components/upload-avatar'
export default {
  components: {
    uploadImg
  },
  data(){
    return{
      formData:{
        username:"",
            nickname:"",
            avatar:"",
            password:"",
            desc:"",
            job:"",
            phone:"",
            sex:""
      }
    }
  },
  methods: {
    handlClick(){
      this.$axios.post('/admin/adminUser',this.formData).then(res=>{
        if(res.code == 200){
          this.$message.success(res.msg)
          this.$router.push({name:'admin'})
        }
      })
    }
  }

}
</script>

<style>

</style>
