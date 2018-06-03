<template>
  <div id="app" :style="minHeight+'px'">
    <Header></Header>
    <transition name="slide-fade">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
export default {
  name: 'App',
  components:{
    Header,Footer
  },
  data(){
    return{
      minHeight:0
    }
  },
  mounted(){
    this.minHeight = document.documentElement.clientHeight - 120
    let that  = this
    window.onresize = function(){
      that.minHeight = document.documentElement.clientHeight -120
    }
  }
}
// fade-enter：进入过渡的开始状态，元素被插入时生效，只应用一帧后立即删除；

// fade-enter-active：进入过渡的结束状态，元素被插入时就生效，在过渡过程完成之后移除；

// fade-leave：离开过渡的开始状态，元素被删除时触发，只应用一帧后立即删除；

// fade-leave-active：离开过渡的结束状态，元素被删除时生效，离开过渡完成之后被删除；
</script>

<style>
@import './css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* height: 100%; */
}

.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 1.8s ease;
}
.slide-fade-leave-active {

  transition: all .3s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateY(100px);
  opacity: .2;
}
.el-input__inner{
  padding: 0;
  border: none;
  border-radius: 0px;
  background: #393a3e;
}
.el-icon-arrow-up:before{
}
.el-input__icon{
  /* width: 30px; */
}
.el-select .el-select--mini{
  margin-right: 10px;
}
</style>
