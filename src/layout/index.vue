<style>
@import "../assets/css/index.css";
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']" @on-select="click">
                        <Submenu v-if="operator.role=='ADMINISTRATOR'" name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                系统管理
                            </template>
                            <MenuItem name="1-1">操作员管理</MenuItem>
                            <MenuItem name="1-2">商品管理</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                采购管理
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                               库存管理
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                         <Submenu name="4">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                报表统计
                            </template>
                            <MenuItem name="4-1">Option 1</MenuItem>
                            <MenuItem name="4-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>{{name}}</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <div>
                             <Table border ref="selection" :columns="columns4" :data="data1"></Table>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

    export default {
        data() {
            return {
                iddddd:'',
                name: "首页",
                operator: this.$route.query.operator,
                operatorList:[],
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '员工编号',
                        key: 'operatorNo'
                    },
                    {
                        title: '姓名',
                        key: 'realName'
                    },
                    {
                        title: '联系电话',
                        key: 'tel'
                    },
                    {
                        title: '邮箱',
                        key: 'email'
                    },
                    {
                        title: '联系地址',
                        key: 'address'
                    },
                    {
                        title:'角色',
                        key:'role'
                    }
                ],
                data1: [],
            }
        },
            created:function(){
                   axios.get('http://127.0.0.1:8080/invoice/operator/getAllOperator',{
                          }).then((res)=>{
                              var self =this
                              if(res.data.result==true){
                                 self.operatorList= res.data.operatorList;
                             for(var i=0;i<self.operatorList.length;i++){
                                var a = {};
                                a.operatorNo = self.operatorList[i].operatorNo
                                a.realName=self.operatorList[i].realName
                                a.tel=self.operatorList[i].tel
                                a.email=self.operatorList[i].email
                                a.address=self.operatorList[i].address
                                if(self.operatorList[i].role === 'ADMINISTRATOR'){
                                    a.role='管理员';
                                }else{
                                    a.role='操作员';
                                }
                                this.data1.push(a);
                            }
                              }else{
                                this.$Message.error(res.data.errMsg)
                              }
                          })
            },
        methods:{
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
        }
    }
</script>
