<template>
  <div>
    <el-card>
      <div slot="header">
        添加轮播图
      </div>
      <el-form :model="formData" label-width="100px" label-position="left" >
        <el-form-item required label="轮播图" prop="img">
          <uploadImg v-model="formData.img"></uploadImg>
        </el-form-item>
        <el-form-item required   label="标题"  prop="title">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="新闻" required prop="newsId">
          <el-select v-model="formData.newsId">
            <el-option
              v-for="item in news"
              :value="item._id"
              :key="item._id"
              :label="item.title"
            >

            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
           <el-input-number v-model="formData.sort"  :min="1" :step="1"></el-input-number>

        </el-form-item>

        <el-form-item label="显示与否">
          <el-switch
            v-model="formData.status"
            :active-value="1"
            :inactive-value="0"
            active-text="显示"
            inactive-text="不显示">
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-if="!isEdit" @click="handleSubmit">
            提交
          </el-button>
          <el-button type="primary" v-else @click="handleSave">
            保存修改
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
        img:'',
        title:'',
        newsId:'',
        sort:'',//控制排序
        status:1//控制显示
      },
      news:'',
      isEdit:false
    }
  },
  methods: {
    getnews(){
      this.$axios.get('/admin/news').then(res=>{
        this.news = res.data
      })
    },
    // getEditData(){
    //   const id = this.$route.query.id
    //   this.$axios.get(`/admin/swiper/${id}`).then(res=>{
    //     this.formData = res.data
    //   })
    // },
    getEditData(){
      const id = this.$route.query.id
      this.$axios.get(`/admin/swiper/${id}`).then(res=>{
        this.formData = res.data
      })
    },
    handleSubmit(){
      this.$axios.post('/admin/swiper',this.formData).then(res=>{
        if(res.code == 200){
          this.$message.success(res.msg)
          this.$router.push({name:'swiper'})
        }

      })
    },
    handleSave(){
      const id = this.$route.query.id
      this.$axios.patch(`/admin/swiper/${id}`,this.formData).then(res=>{
        if(res.code == 200){
          this.$message.success(res.msg)
          this.$router.push({name:'swiper'})
        }
      })
    }
  },
  created () {
    if(this.$route.name == 'editSwiper'){
        this.isEdit = true
      }else{
        this.isEdit = false
      }
    this.getnews()
    if(this.isEdit){
      this.getEditData()
    }
  },
  watch: {
    $route(to,from){
      if(to.name == 'editSwiper'){
        this.isEdit = true
      }else{
        this.isEdit = false
        this.formData={
          img:'',
        title:'',
        newsId:'',
        sort:'',//控制排序
        status:1//控制显示
        }
      }
    }
  }
}
</script>

<style>

</style>
