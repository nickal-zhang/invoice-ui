<style>
@import "../assets/css/login.css";
</style>
<template>
      <div class="con">
<div class="kong-d"></div>
    <div class="log-d">
      <h3 class="login">进销存后台管理系统</h3>
      <div class="form">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem class="submit">
            <Button  class="button" @click="handleSubmit(formInline)">登录</Button>
        </FormItem>
    </Form>
    </div>
    </div>
    </div>
</template>
<script>
  import $ from 'jquery'
  import axios from 'axios'
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码.', trigger: 'blur' }
                    ]
                }
            }
        },
         methods:{
            handleSubmit:function (formInline) {
                 axios.post('http://127.0.0.1:8080/invoice/login',{
                "loginName":formInline.user,
                "password":formInline.password
                          }).then((res)=>{
                              if(res.data.result==true){
                                  this.$router.push({ path:'/index' ,query:{operator:res.data.operator} })
                              }else{
                                this.$Message.error(res.data.errMsg)
                              }
                          })
      }
    }
  }
</script>