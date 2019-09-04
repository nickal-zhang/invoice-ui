<template>
  <div class="con">
    <div class="kong-d"></div>
    <div class="log-d">
      <h3 class="login">进销存后台管理系统</h3>
      <div class="user clear" style="margin-bottom:50px">
        <span class="span-user"></span>
        <div class="user-name" >用户名</div>
        <input  type="text" placeholder="请输入您的用户名" id="user">
      </div>
      <div class="pass clear">
        <span class="span-pass" style="margin-top:20px"></span>
        <div class="pass-name">密码</div>
        <input type="text" style="margin-top:20px" placeholder="请输入您的密码" id="pass">
      </div>
      <div class="submit">
        <button type="button" class="btn" @click="hrefSystem">登录</button>
      </div>
    </div>
  </div>
</template>
 
<script>
  import $ from 'jquery'
  export default {
    name: "LoginContent",
    data(){
      return {
        user :"",
        pass :""
      }
    },
    mounted(){
      console.log(this.user)
      $("#user").focus(function () {
        $(this).css({borderColor:"dodgerblue"});
        $(".user-name").css({display:"block"}).animate({bottom:"28px"},400);
      });
      $("#user").blur(function () {
        $(this).css({borderColor:"white",borderBottomColor:"#ccc"});
        $(".user-name").css({display:"none"}).animate({bottom:"9px"},400);
 
      });
      $("#pass").focus(function () {
        $(this).css({borderColor:"dodgerblue"});
        $(".pass-name").css({display:"block"}).animate({bottom:"28px"},400);
      });
      $("#pass").blur(function () {
        $(this).css({borderColor:"white",borderBottomColor:"#ccc"});
        $(".pass-name").css({display:"none"}).animate({bottom:"9px"},400);
 
      })
    },
    methods:{
      hrefSystem:function () {
        console.log(this);
        console.log($("#user").val(),$("#pass").val());
        this.$router.push({
          path:"/index",
          query:{
 
          }
        })
      }
    }
  }
</script>
 
<style scoped>

  .clear{
    zoom : 1;
  }
.clear::after{
    content : "";
    display : "block";
    height : 0;
    clear : "both";
    visibility : "hidden";
    }
  .con{
    width: 100%;
    height: 100%;
    background: url("../assets/backgroud.png") 0 0 no-repeat;
    background-size: cover;
  }
  .kong-d{
    width: 100%;
    height: 200px;
    background: transparent;
    background: url("../assets/backgroud.png") 0 0 no-repeat;
  }
  .log-d{
    width: 350px;
    height: 400px;
    padding: 100px 40px;
    margin: 0 auto;
    background:rgb(155, 196, 196);
    border-radius: 10px;
    filter:alpha(Opacity=60);-moz-opacity:0.6;opacity: 0.7; 
  }
  h3{
    color: #000;
    font-size:24px ;
    line-height: 24px;
    margin-bottom: 50px;
  }
  .user,.pass{
    position: relative;
    margin-bottom: 30px;
  }
  .span-user,.span-pass{
    display: block;
    width: 20px;
    height: 20px;
    float: left;
    margin-top: 6px;
  }
  .span-user{
    background: url("../assets/login.png") 0 0 no-repeat;
    background-size: 20px 20px;
  }
  .span-pass{
    background: url("../assets/password.png") 0 0 no-repeat;
    background-size: 20px 20px;
  }
  .user-name,.pass-name{
    display: none;
    font-size: 14px;
    width: 50px;
    text-align: center;
    line-height: 14px;
    color: rgb(255, 139, 30);
    position: absolute;
    background: #fff;
    left: 50px;
    bottom: 9px;
    z-index: 30;
  }
  input{
    display: block;
    width: 230px;
    height: 30px;
    border: 1px solid #fff;
    border-bottom-color:#ccc;
    float: left;
    margin-left: 18px;
    outline: none;
    text-indent: 12px;
  }
  .login{
    text-align: center
  }
  .submit{
    width: 60%;
    height: 70px;
    margin-top: 60%;
    display:block;
    margin-right: auto;
    margin-left: auto;
  }
  .btn{
    display: block;
    width: 95%;
    font-size: 14px;
    text-align: center;
    line-height: 44px;
    background: dodgerblue;
    border-radius: 5px;
    color: #fff;
    border: none;
    margin: 40px auto 0;
    outline: none;
    cursor: pointer;
  }
</style>