<template>
  <div id="home">
    <div class="move">
      <el-carousel :interval="3000" arrow="never" :height="moveHeight">
        <el-carousel-item v-for="item in moverImg" :key="item.key">
          <img class="banner" :src="item.src">
          <h3 class="banner_title" :center=true>{{ item.title }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 功能介绍 -->
    <div class="service">
      <h1>
        <span>CloudEasyLinker</span>&nbsp;
        <h2 style="display: inline-block;">产品特性</h2>
      </h1>
    </div>
    <div class="service_block">
      <div class="wrapper">
        <el-row type="flex" justify="center">
          <el-col :span="14" class="introduce">
              <div class="content_info">
                <h3>{{ introduce.title }}</h3>
                <p>{{ introduce.content }}</p>
              </div>
          </el-col>
          <el-col :span="10" class="introduce">
            <img :src="introduce.src">
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col :span="12" class="introduce">
            <img :src="introduce2.src">
          </el-col>
          <el-col :span="12" class="introduce">
              <div class="content_info">
                <h3>{{ introduce2.title }}</h3>
                <p>{{ introduce2.content }}</p>
              </div>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col :span="12" class="introduce">
              <div class="content_info">
                <h3>{{ introduce3.title }}</h3>
                <p>{{ introduce3.content }}</p>
              </div>
          </el-col>
          <el-col :span="12" class="introduce">
            <img :src="introduce3.src">
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 动态 -->
    <div class="service">
      <h1>
        <span>CloudEasyLinker</span>&nbsp;
        <h2 style="display: inline-block;">最新动态</h2>
      </h1>
    </div>
    <div class="service_block ">
      <div class="wrapper">
        <el-row>
          <el-col :span="8" v-for="(o, index) in 3" :key="o">
            <el-card shadow="always" :body-style="{ padding: '10px' }">
              <img src="https://upfiles.heclouds.com/123/case/2016/05/18/5ae3a5e1912d9e643b0eecbc5e0a31e8.jpg" class="image">
              <div style="padding: 10px;text-align:left;">
                <span>1、针对接入OneNET平台的NB智能井盖传感器，进行社会渠道合作伙伴引入合作。 2、针对接入OneNET平台的NB定位器，进行社会渠道合作伙伴引入合作。 3、针对接入OneNET平台的NB温湿度传感器，进行社会渠道合作伙伴引入合作。 4、针对接入OneNET平台的NB奶牛发情监测传感器，进行社会渠道合作伙伴引入合作。 5、针对接入OneNET平台的NB照明控制器，进行社会渠道合作伙伴引入合作。 6、针对接入OneNET平台的光伏数据采集器，进行社会渠道合作伙伴引入合作。 7、针对接入OneNET平台的智能车位地锁，进行社会渠道合作伙伴引入合作。
                </span>
                <div class="bottom clearfix">
                  <time class="time">2018.5.5</time>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 支持平台 -->
    <div class="service">
      <h1>
        <span>CloudEasyLinker</span>&nbsp;
        <h2 style="display: inline-block;">支持平台</h2>
      </h1>
    </div>
    <div class="service_block">
      <el-row :gutter="20">
        <div class="service_wrapper" v-for="item in serviceData" :key="item.name">
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
      <h1>
        <span>CloudEasyLinker</span>&nbsp;
        <h2 style="display: inline-block;">专家服务</h2>
      </h1>
    </div>
    <!-- 服务-个人、企业、vip -->
    <div class="service_block">
      <el-row :gutter="20">
        <div class="service_wrapper" v-for="item in serviceDataList" :key="item.name">
          <el-col :span="8">
            <div class="block standard">
              <ul>
                <li class="name var">{{item.name}}</li>
                <li class="money">
                  <span class="ml">￥</span>
                  <i class="money_number">{{item.money}}</i>
                  <span class="ml">/月</span>
                </li>
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
      moverImg: [{
        src: 'static/img/banner1.jpg',
        title: 'CloudEasyLinker 让物联更简单',
        key: 1
      }, {
        src: 'static/img/banner2.jpg',
        title: 'CloudEasyLinker 让物联更简单',
        key: 2
      }, {
        src: 'static/img/banner3.jpg',
        title: 'CloudEasyLinker 让物联更简单',
        key: 3
      }],
      introduce: {
        title: '简单易用',
        content: 'CloudEasyLinker基于目前最流行的MQTT物联网协议，采用低入侵式形式，在不改变设备原来结构的情况下，用户可以快速将物联设备接入到网络中，实现“开箱即用”的效果。',
        src: 'static/img/1.png'
      },
      introduce2:
        {
          title: '轻量级协议',
          content: 'CloudEasyLinker由传感器网络，终端控制中心，远程服务器，手机终端组成。采取了更加现代化的灵活方案，更加适合快速构建物联网网络，用户只需要简单设置和操作，就可以搭建出一个物联网网络。',
          src: 'static/img/2.png'
        },
      introduce3:
        {
          title: '丰富的SDK支持',
          content: '我们专门为CloudEasyLinker定制了各种主流编程语言的客户端SDK。支持各种流行编程语言（C、C++、Java、Python、Ruby 等等）且易于使用的客户端。',
          src: 'static/img/3.png'
        },
      // 服务数据
      serviceData: [{
        src: 'static/img/shumeipai.png',
        name: '树莓派',
        content: '针对树莓派设计了简单易用的SDK、'
      }, {
        src: 'static/img/Arduino.png',
        name: 'Arduino',
        content: '完美支持Arduino'
      }, {
        src: 'static/img/danpianji.png',
        name: '51单片机',
        content: '同时支持低级单片机'
      }],
      serviceDataList: [{
        src: 'static/img/shumeipai.png',
        name: '个人版',
        money: '99',
        content: 'introduce',
      }, {
        src: 'static/img/Arduino.png',
        name: '企业版',
        money: '1299',
        content: 'introduce',

      }, {
        src: 'static/img/danpianji.png',
        name: 'VIP',
        money: '3999',
        content: 'introduce',
      }],
      code: 'display:none',
      moveHeight: '500px'
    }
  },
  methods: {

    // 展示二维码
    showCode () {
      this.code = 'display:block;'
    },
    // 隐藏二维码
    hiddenCode () {
      this.code = 'display:none;'
    },
    getWindowWidth () {
      let window_width = document.documentElement.clientWidth;
      if (window_width <= 1092) {
        this.moveHeight = '200px'
        this.code = 'display:block;'
      }
    }
  },
  created () {
    this.getWindowWidth()
  },

}
</script>


<style scoped>
.time {
  color: #999;
  font-size: 13px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  float: right;
  padding: 0;
}

.image {
  display: block;
  width: 100%;
}

.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}

.clearfix:after {
  clear: both;
}

#home {
  height: 100%;
  /* background: #cae8f8; */
}

.banner {
  width: 100%;
  height: 100%;
}

.banner_title {
  color: #eeeeee;
  font-size: 30px;
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  margin-left: -230px;
}
.introduce {
  margin-top: 30px;
}
.content_info {
  text-align: left;
}
.content_info h3 {
  font-size: 24px;
  margin-top: 50px;
}
.content_info p {
  font-size: 16px;
  margin-top: 20px;
  letter-spacing: 2px;
  line-height: 25px;
}

.service h1 {
  padding-bottom: 10px;
  margin-top: 40px;
  color: #4e4849;
  font-size: 38px;
  font-weight: bolder;
  letter-spacing: 10px;
  /* border-bottom: 1px solid #f5f5f5; */
}

.service h2 {
  padding-bottom: 10px;
  color: #918c16;
  font-size: 30px;
  font-weight: bolder;
  letter-spacing: 10px;
}

.service h1 span {
  font-size: 36px;
  letter-spacing: 4px;
}

.service_block {
  padding: 10px 20px;
  margin-top: 40px;
  border-bottom: 4px solid #f8dbdb;
}

.block {
  /* height: 200px; */
  /* background: #cae8f8; */
  /* line-height: 200px; */
  box-shadow: #666 0 0 4px;
}

.standard:hover {
  box-shadow: #666 10px 0 40px;
  transition: 0.6s;
  cursor: pointer;
}

.standard1:hover {
  transform: rotateY(-360deg);
  transition: 2s;
  cursor: pointer;
}

.contact_us {
  padding: 0 20px;
  margin-top: 40px;
  box-shadow: #666 0 0 20px;
  border: 1px solid #e3d6d6;
}

.pro_img {
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

.heng {
  color: #000;
  font-size: 30px;
}

.name {
  height: 28px;
  margin-top: 10px;
  color: #0a0734;
  font-size: 20px;
  font-weight: bolder;
  line-height: 28px;
}

.content {
  overflow: hidden;
  padding-bottom: 20px;
  margin-top: 20px;
  color: #807e88;
  font-size: 16px;
  font-weight: bolder;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.news {
  height: 300px;
}

.news img {
  width: 100%;
  height: 100%;
  background: rgba(42, 48, 74, 1);
}

.news li {
  color: #61616a;
  color: #7c7b7b;
  font-size: 20px;
  line-height: 100px;
  text-align: left;
  text-indent: 40%;
  list-style: none;
  background: #fff;
}

.news li:hover {
  color: #040303;
  background: #bce4f9;
  transition: 1.2s;
}

.dotted {
  border-top: 1px dotted #e7d8d8;
  border-bottom: 1px dotted #e7d8d8;
}

.we_address {
  padding-bottom: 10px;
  color: #8f8987;
  font-size: 16px;
  text-align: left;
  text-indent: 30%;
  background: #f3f3f3;
}

.money {
  line-height: 150px;
}

.money_number {
  color: #2193f1;
  font-size: 28px;
  font-weight: bolder;
}

.ml {
  margin-right: 2px;
  margin-left: 4px;
  color: #000;
  font-size: 10px;
}

.var {
  padding: 10px 0;
  color: #fff;
  font-weight: bolder;
  background: #45995d;
}

@media (max-width: 1092px) {
  .news {
    height: 100px;
  }
  .news img {
    width: 100%;
    height: 100%;
    background: rgba(42, 48, 74, 1);
  }
  .news li {
    overflow: hidden;
    color: #61616a;
    font-size: 13px;
    line-height: 33px;
    text-align: left;
    text-indent: 20%;
    text-overflow: ellipsis;
    white-space: nowrap;
    list-style: none;
  }
  .map {
    height: 200px;
    line-height: 200px;
  }
  .map1 {
    width: 100%;
    height: 200px;
    line-height: normal;
    box-shadow: #666 0 0 40px;
    border: 1px solid #e3d6d6;
  }
  .contact_ul li {
    border-bottom: 1px dotted #e7d8d8;
  }
  .contact_ul li i {
    color: #000;
    font-size: 14px;
  }
  .contact_ul li span {
    color: #000;
    font-size: 16px;
  }
  .contact_us {
    box-shadow: #666 0 0 20px;
    /* margin-top: 40px; */
    /* padding: 0 20px; */
    border: 1px solid #e3d6d6;
  }
  .word {
    display: inline-block;
    padding-bottom: 6px;
    color: #7f5d3a;
    font-size: 10px;
    line-height: normal;
    border-bottom: 1px solid #b2b2b2;
  }
  .qrcode {
    position: absolute;
    top: 0;
    right: 18%;
    bottom: 0;
    display: none;
    width: 100px;
    height: 100px;
    vertical-align: middle;
    background: #000;
    transition: 1s;
  }
  #weixin {
    background: #ef7171;
    cursor: pointer;
  }
  .we_address {
    margin-bottom: 8px;
    text-align: center;
    text-indent: 0;
  }
}
</style>









