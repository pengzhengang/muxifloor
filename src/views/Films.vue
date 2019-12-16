<template>
  <div class="home">
    <router-link to="/position" tag="div" class="position">
      {{this.$store.state.city}}﹀
    </router-link>
    <van-swipe class="swiper" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/images/044c29d00a2fad92adc62bcf24e44837.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/13777d69b0b94fc99e78b1a467913296.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="nav" :style="{opacity:opacity,'z-index':index}">
      <span @click="handleToggle">{{this.$store.state.city}}﹀</span>
      <p>电影</p>
      <span> </span>
    </div>
    <div class="switch" :class="{active:isActive}">
      <router-link to="/films/nowPlaying">正在热映</router-link>
      <router-link to="/films/comingSoon">即将上映</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "films",
  data(){
    return{
      isActive:false,
      opacity:0,
      index:-1
    }
  },
  mounted(){
    window.addEventListener("scroll",this.handle)
  },
  methods:{
    handle(){
      var height = document.documentElement.scrollTop;
      if(height>210){
        this.isActive = true;
        this.opacity = 1;
        this.index = 10;
      }else{
        this.isActive = false
        this.opacity = 0;
        this.index = -1;
      }

    },
    handleToggle(){
      this.$router.push('/position')
    }
  },
  destroyed(){
    window.removeEventListener("scroll",this.handle)
  }
};
</script>
<style scoped>
.home{
  position: relative;
}
.van-swipe__track img {
  height: 210px;
}
.position{
  display: inline-block;
  position: absolute;
  top: 15px;
  left: 10px;
  z-index: 100;
  background: rgba(51, 51, 51, 0.432);
  color: #fff;
  font-size: 15px;
  padding: 10px 5px;
  border-radius: 20px;
}
.nav{
  height: 44px;
  font-size: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(235, 234, 234);
  width: 10rem;
  background: #fff;
  z-index: 1;
  position: fixed;
  top: 0;
}
.nav span{
  width: 30%;
  font-size: 13px;
  margin: 0 20px;
}
.switch {
  display: flex;
  justify-content: space-around;
  height: 50px;
  align-items: center;
  font-size: 15px;
  border-bottom: 1px solid rgb(235, 234, 234);
}
.active{
    display: flex;
  justify-content: space-around;
  height: 50px;
  align-items: center;
  font-size: 15px;
  position: fixed;
  width: 10rem;
  background: #fff;
  top: 44px;
}
.switch a {
  padding: 16px 0;
  border-bottom: transparent 2px solid;
  color: #333;
}
.switch .router-link-exact-active {
  color: #ff834b;
  border-bottom: #ff834b 2px solid;
}
</style>