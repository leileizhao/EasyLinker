<template>
  <div id="header">
    <div class="container">
    	<!-- logo -->
    	<div class="logo">
    		<img src="static/img/logo.png" alt="云易联" title="云易联">
    		<span>云易联CloudEasyLinker</span>
    	</div>

			<!-- 导航 -->
    	<div class="tab" :style="showTab">
	        <router-link :to="item.path" v-for="item in tabs" :key="item.key" @click.native="handlClick(item.key)" :class="item.key == tab ? 'active' : ''" >
	            {{ item.name }}
	        </router-link>
	        <button class="register">立即注册</button>
    	</div>
			<div :style="showMenu" class="menu">
				<el-select @change="goRouter" v-model="menu_name" size="mini">
			    <el-option
			      v-for="item in menu"
			      :key="item.value"
			      :label="item.name"
			      :value="item.name"
			      >
			    </el-option>
			  </el-select>
			</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	tabs: [{
        name: '产品服务',
        path: 'home',
        key: 1,
      },{
        name: '开发平台',
        path: 'development_platform',
        key: 2,
      },{
        name: '客户案例',
        path: 'customer_case',
        key: 3,
      },{
        name: '开发者社区',
        path: 'developer_community',
        key: 4,
      },{
        name: '文档',
        path: 'file',
        key: 5,
      },{
        name: '关于我们',
        path: 'about_us',
        key: 6,
      },{
        name: '登录',
        path: 'login',
        key: 7,
      }],
      // 移动端
      menu: [{
        name: '产品服务',
        path: 'home',
        key: 1,
      },{
        name: '开发平台',
        path: 'development_platform',
        key: 2,
      },{
        name: '客户案例',
        path: 'customer_case',
        key: 3,
      },{
        name: '开发者社区',
        path: 'developer_community',
        key: 4,
      },{
        name: '文档',
        path: 'file',
        key: 5,
      },{
        name: '关于我们',
        path: 'about_us',
        key: 6,
      },{
        name: '登录',
        path: 'login',
        key: 7,
      },{
        name: '注册',
        path: 'login',
        key: 8,
      }],
      tab: '1',
      showMenu:'display:none',
      showTab:'display:inline-block',
      menu_name:'产品服务'
    }
  },
  methods: {
    handlClick (e) {
      this.tab = e
      // console.log(this.tab)
    },
    // 获取浏览器宽度
    getWindowWidth(){
      let window_width = document.documentElement.clientWidth;
      if (window_width<=1092) {
        this.showMenu = 'display:inline-block'
        this.showTab = 'display:none'
      } 
    },
    // 点击菜单
    goRouter(name){
    	if (name=='产品服务') {
    		this.$router.push({
    			path:'home'
    		})
    	}
    	else if (name=='开发平台') {
    		this.$router.push({
    			path:'development_platform'
    		})
    	}
    	else if (name=='客户案例') {
    		this.$router.push({
    			path:'customer_case'
    		})
    	}
    	else if (name=='开发者社区') {
    		this.$router.push({
    			path:'developer_community'
    		})
    	}
    	else if (name=='文档') {
    		this.$router.push({
    			path:'file'
    		})
    	}
    	else if (name=='关于我们') {
    		this.$router.push({
    			path:'about_us'
    		})
    	}
    	else if (name=='登录') {
    		this.$router.push({
    			path:'login'
    		})
    	}
    	else if (name=='注册') {
    		this.$router.push({
    			path:'register'
    		})
    	}
    }
  },
  created(){
  	this.getWindowWidth()
  }
}
</script>

<style scoped>
	#header{
		height: 60px;
	}
	.container{
		width: 100%;
		height: 60px;
		background: #061024;
		text-align: right; 
	}
	.logo{
		display: inline-block;
		margin-top: 10px;
		position: absolute;
		left: 8%;
	}
	.logo img{
		width: 40px;
		height: 40px;
		vertical-align: middle;
	}
	.logo span{
		margin-left: 40px;
		color: #fff;
		font-weight: bolder;
		letter-spacing: 1px;
	}
	.tab{
		height: 60px;
		line-height: 60px;
		vertical-align: middle;
		display: inline-block;
		margin-right: 14%;
	}
  .tab  a{
    font-size: 14px;
    font-weight: bolder;
    /* color: #fff; */
    cursor: pointer;
    margin-left: 15px;
  }
  .tab a:hover{
  	transition: .4s;
		color: #ded60f;
		padding-bottom: 4px;
		border-bottom: 2px solid #ded60f;
  }
  .tab .active{
  	transition: .8s;
  	color: #ded60f;
  }
	.register{
		box-shadow: none;
		border: 1px solid #fff;
    border-radius: 4px;
    width: 80px;
    /* height: 30px; */
    line-height: 28px;
    font-size: 15px;
    background: none;
    color: #fff;
    margin-left: 15px;
	}
	.register:hover{
		color: #1386de;
		border: 1px solid #1386de;
		transition: .6s;
	}
	.menu{
		display:block;
		width: 30px;
		height: 30px;
		margin-top: 15px;
		position: absolute;
		right: 10px;
	}

</style>
