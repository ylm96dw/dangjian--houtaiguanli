<template>
  <div>
    <el-card>
      <div slot="header">
        添加新闻
      </div>
      <el-form :v-model="formData" label-width="80px" label-position="left">
        <el-form-item label="新闻头图" required>
          <uploadImg v-model="formData.img">
          </uploadImg>
        </el-form-item>
        <el-form-item label="新闻标题" >
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="作者" >
          <el-select v-model="formData.author">
            <el-option v-for="(item,index) in user" :key="index" :label="item.username" :value="item._id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新闻内容" >
          <quill-editor v-model="formData.content"
                ref="myQuillEditor"
                :options="editorOption"
                @change="onEditorChange($event)">
          </quill-editor>
        </el-form-item>

        <!-- <el-form-item label="新闻分类" >
          <el-select v-model="formData.type">
            <el-option v-for="(item,index) in categories" :key="index" :label="item.title"
            :value="item._id"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary"
          @click="handleSubmit">
            提交
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import uploadImg from '@/components/upload-avatar'
import axios from 'axios'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

  Quill.register('modules/ImageExtend', ImageExtend)
export default {
  components: {
    quillEditor,
    uploadImg
  },
data(){
  return{
    formData:{
      title:'',
      content:'',
      contentText:'',
      img:'',
      author:'',
      type:'',

    },
    user:'',
    categories:[],
    token:'',
    editorOption: {
          modules: {
            ImageExtend: {
              loading: true,
              name: 'file',
              action: 'https://upload-z1.qiniup.com',
              response: (res) => {
                return res.url
              },
              change: (xhr, formData) => {
                  // xhr.setRequestHeader('myHeader','myValue')
                  formData.append('token', this.token)
                             }
            },
            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
    }
  }
},
methods: {
  getData(){
    this.$axios.get('/admin/adminUser').then(res=>{
      if(res.code == 200){
        this.user = res.data
      }
    })
  },
  getToken(){
      axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
        if(res.data.code ==200){
          this.token = res.data.data
        }

      })
    },
    onEditorChange({ quill, html, text }) {
        this.formData.contentText = text
      },
    getCategories(){
      this.$axios.get('/admin/category').then(res=>{
        this.categories = res.data
      })
    },
    handleSubmit(){
      this.$axios.post('/admin/news',this.formData).then(res=>{
        if(res.code == 200){
          this.$message.success(res.msg)
          this.$router.push({name:'news'})
        }
      })
    }
},
created () {
  this.getToken()
  this.getData()
  this.getCategories()
}
}
</script>

<style>

</style>

