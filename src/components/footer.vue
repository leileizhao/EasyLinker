<template>
  <div id="footer">
    <div style="">
      <el-row :gutter="0">
        <div class="service_wrapper" >
          <el-col :span="6">
            <div :style="showblock" class="block standard">
              <ul>
                <li :style="showname" class="name var">关于</li>
                <li class="content fi">公司简介</li>
                <li class="content">加入我们</li>
                <li class="content">服务条款</li>
                <li class="content">隐私政策</li>
                <li class="content">合作伙伴</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="6">
            <div :style="showblock" class="block standard">
              <ul>
                <li :style="showname" class="name var">产品</li>
                <li class="content fi">产品介绍</li>
                <li class="content">核心产品</li>
              </ul>
            </div>
          </el-col><el-col :span="6">
            <div :style="showblock" class="block standard">
              <ul>
                <li :style="showname" class="name var">联系</li>
                <li class="content fi">问题咨询：<span class="email">留言</span></li>
                <li class="content">技术支持：<span class="email">1072090332@qq.com</span></li>
                <li class="content">市场合作：<span class="email">1072090332@qq.com</span></li>
              </ul>
            </div>
          </el-col><el-col :span="6">
            <div :style="showblock" class="block standard">
              <ul>
                <li :style="showname" class="name ">扫描二维码</li>
                <li class="var fi"><img :style="showqr" class="qr" src="static/img/weixin.jpeg" alt=""></li>
              </ul>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
    <div class="container">
        <ul>
          <li><img class="logo" src="static/img/logo.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;版权所有&nbsp;&copy;&nbsp;云易联&nbsp;<i>CloudEasyLinker</i></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	showqr:'',
      showname:'',
      showblock:''
    }
  },
  methods: {
    getWindowWidth(){
      let window_width = document.documentElement.clientWidth;
      if (window_width<=1092) {
        this.showqr = 'display:none'
        this.showname="font-size:10px;"
        this.showblock ="text-indent:0px;"
      } 
    }
  },
  created(){
    this.getWindowWidth()
  },
  mounted(){
  }
}
</script>

<style scoped>
	#footer{
		height:200px;
    background: #282b34;
    color: #767676;
    margin-top: 60px;
	}
  .container{
    height: 60px;
    line-height: 60px;
    font-weight: bolder;
    background: #28282b;
  }
  .container ul li i:hover{
    transition: .5s;
    color: red;
  }
  .logo{
    display: inline-block;
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
  .name{
    font-size: 20px;
    font-weight: 400;
    color: #eee;
    padding-top: 20px;
  }
  .fi{
    padding-top: 10px;
  }
  .block{
    text-align: left;
    text-indent: 100px;
  }
  .block ul{
    padding-bottom: 20px;
  }
  .block ul li:nth-child(n+2){
    cursor: pointer;
    line-height: 24px;
  }
  .block ul li:nth-child(n+2):hover{
    color:red;
    transition: .3s;
  }
  .qr{
    width: 100px;
    height: 100px;
    vertical-align: middle;
  }
  .email{
    color: #fff;
    font-weight: 400;
  }
  .service_wrapper{
  }
  @media(max-width: 1092px) {}
</style>
