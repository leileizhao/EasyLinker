<template>
  <div id="home">
    <div class="move">
      <el-carousel :interval="3000" arrow="never" :height="moveHeight">
        <el-carousel-item v-for="item in moverImg" :key="item.key">
          <img class="banner" :src="item.src">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 动态 -->
    <div class="service">
      <h1><span>CloudEasyLinker</span>&nbsp;<h2 style="display: inline-block;">最新动态</h2></h1>
    </div>
<!-- 动态下栏目 -->

    <div class="service_block ">
      <div class="wrapper">
        <el-row :gutter="40">
          <el-col :span="6">
            <div class="block news">
              <img src="static/img/logo.png" alt="">
            </div>
          </el-col>
          <el-col :span="18">
            <div class="block news">
              <li>CloudEasyLinker·云易联，让物联更简单</li>
              <li class="dotted">MQTT协议轻量级物联网云平台</li>
              <li>接入简单，支持多语言SDK</li>
          </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="service">
      <h1><span>CloudEasyLinker</span>&nbsp;<h2 style="display: inline-block;">支持平台</h2></h1>
    </div>
    <!-- 支持平台 -->
    <div class="service_block">
      <el-row :gutter="20">
        <div class="service_wrapper" v-for="item in serviceData">
          <el-col :span="8">
            <div class="block standard1">
              <ul>
                <li><img class="pro_img" :src="item.src" alt=""></li>
                <li class="heng">-</li>
                <li class="name">{{item.name}}</li>
                <li class="content">{{item.content}}</li>
              </ul>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
    <div class="service">
      <h1><span>CloudEasyLinker</span>&nbsp;<h2 style="display: inline-block;">专家服务</h2></h1>
    </div>
    <!-- 服务-个人、企业、vip -->
    <div class="service_block">
      <el-row :gutter="20">
        <div class="service_wrapper" v-for="item in serviceDataList">
          <el-col :span="8">
            <div class="block standard">
              <ul>
                <li class="name var">{{item.name}}</li>
                <li class="money"><span class="ml">￥</span><i class="money_number">{{item.money}}</i><span class="ml">/月</span></li>
                <li class="content">{{item.content}}</li>
              </ul>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>

    

    <!-- 联系我们 -->
    
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 轮播图
      moverImg:[{
          src:'static/img/banner1.jpg',
          key:1
      },{
        src:'static/img/banner2.jpg',
        key:2
      },{
        src:'static/img/banner3.jpg',
        key:3
      }],
      // 服务数据
      serviceData:[{
        src:'static/img/shumeipai.png',
        name:'树莓派',
        content:'针对树莓派设计了简单易用的SDK、'
      },{
        src:'static/img/Arduino.png',
        name:'Arduino',
        content:'完美支持Arduino'
      },{
        src:'static/img/danpianji.png',
        name:'51单片机',
        content:'同时支持低级单片机'
      }],
      serviceDataList:[{
        src:'static/img/shumeipai.png',
        name:'个人版',
        money:'99',
        content:'introduce',
      },{
        src:'static/img/Arduino.png',
        name:'企业版',
        money:'1299',
        content:'introduce',

      },{
        src:'static/img/danpianji.png',
        name:'VIP',
        money:'3999',
        content:'introduce',
      }],
      code:'display:none',
      moveHeight:'500px'
    }
  },
  methods:{
    
    // 展示二维码
    showCode(){
      this.code = 'display:block;'
    },
    // 隐藏二维码
    hiddenCode(){
      this.code = 'display:none;'
    },
    getWindowWidth(){
      let window_width = document.documentElement.clientWidth;
      if (window_width<=1092) {
        this.moveHeight = '200px'
        this.code = 'display:block;'
      } 
    }
  },
  created(){
    this.getWindowWidth()
  },
  
}
</script>

<style scoped>
#home{
  height: 100%;
  /* background: #cae8f8; */
}
  .banner{
    width: 100%;
    height: 100%;
  }
  .service h1{
    font-size: 38px;
    font-weight: bolder;
    margin-top: 40px;
    letter-spacing: 10px;
    color: #4e4849;
    padding-bottom: 10px;
    /* border-bottom: 1px solid #f5f5f5; */
  }
  .service h2{
    font-size: 30px;
    font-weight: bolder;
    letter-spacing: 10px;
    color: #918c16;
    padding-bottom: 10px;
  }
  .service h1 span{
    font-size: 36px;
    letter-spacing: 4px;
  }
  .service_block{
    margin-top: 40px;
    padding: 10px 20px;
    border-bottom: 4px solid #f8dbdb;
  }
  .block{
    /* height: 200px; */
    /* background: #cae8f8; */
    /* line-height: 200px; */
    box-shadow: #666 0px 0px 4px;
  }
  .standard:hover{
    cursor: pointer;
    box-shadow: #666 10px 0px 40px;
    transition:.6s;
  }
  .standard1:hover{
    cursor: pointer;
    transition:2s;
    transform: rotateY(-360deg);
  }
  .contact_us{
    margin-top: 40px;
    padding: 0 20px;
    border: 1px solid #e3d6d6;
    box-shadow: #666 0px 0px 20px;

  }
  
  
  .pro_img{
    display: block;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
  }
  /* .pro_img:hover{
    transition: 4s;
    transform:rotate(360deg);
  } */
  .heng{
    color: #000;
    font-size: 30px;
  }
  .name{
    height: 28px;
    line-height: 28px;
    font-size: 20px;
    color: #0a0734;
    font-weight: bolder;
    margin-top:10px;
  }
  .content{
    color: #807e88;
    font-weight: bolder;
    font-size: 16px;
    margin-top: 20px;
    padding-bottom: 20px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .news{
    height: 300px;
  }
  .news img{
    width: 100%;
    height: 100%;
    background: rgba(42, 48, 74, 1);
  }
  .news li{
    list-style: none;
    text-align: left;
    text-indent: 40%;
    line-height: 100px;
    font-size: 20px;
    color: #61616a;
    background: #fff;
    color: #7c7b7b;
  }
  .news li:hover{
    background: #bce4f9;
    transition: 1.2s;
    color: #040303;
  }
  .dotted{
    border-top: 1px dotted #e7d8d8;
    border-bottom: 1px dotted #e7d8d8;
  }
  .we_address{
    text-align:left;
    text-indent:30%;
    font-size: 16px;
    color: #8f8987;
      padding-bottom: 10px;
      background: #f3f3f3;
  }
  .money{
    line-height: 150px;
  }
  .money_number{
    font-size: 28px;
    color: #2193f1;
    font-weight: bolder;
  }
  .ml{
    font-size: 10px;
    color:#000;
    margin-left: 4px;
    margin-right: 2px;
  }
  .var{
    padding:10px 0;
    background: #45995d;
    color: #fff;
    font-weight: bolder;
  }
  @media(max-width: 1092px) {
    .news{
      height: 100px;
    }
    .news img{
      width: 100%;
      height: 100%;
      background: rgba(42, 48, 74, 1);
    }
    .news li{
      list-style: none;
      text-align: left;
      text-indent: 20%;
      line-height: 33px;
      font-size: 13px;
      color: #61616a;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .map{
      height: 200px;
      line-height: 200px;
    }
    .map1{
      width: 100%;
      height: 200px;
      line-height: normal;
      border: 1px solid #e3d6d6;
      box-shadow: #666 0px 0px 40px;
    }
    .contact_ul li{
      border-bottom: 1px dotted #e7d8d8;

    }
    .contact_ul li i{
      font-size: 14px;
      color: #000;
    }
    .contact_ul li span{
      color: #000;
      font-size: 16px;
    }
    .contact_us{
      /* margin-top: 40px; */
      /* padding: 0 20px; */
      border: 1px solid #e3d6d6;
      box-shadow: #666 0px 0px 20px;
    }
    .word{
      line-height: normal;
      font-size: 10px;
      color: #7f5d3a;
      display: inline-block;
      padding-bottom:6px;
      border-bottom: 1px solid #b2b2b2;
    }
    .qrcode{
      transition: 1s;
      display: none;
      width: 100px;
      height: 100px;
      vertical-align: middle;
      background: #000;
      position: absolute;
      bottom: 0;
      top: 0;
      right:18%;
    }
    #weixin{
      background: #ef7171;
      cursor: pointer;
    }
    .we_address{
      text-align: center;
      text-indent:0px;
      margin-bottom: 8px;
    }
  }
</style>








