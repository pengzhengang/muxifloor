<template>
  <div class="about">
    <div class="nav">
      <span @click="handleBack">
        <img src="../assets/images/错 - 副本.png" alt />
      </span>
      <p>当前城市-</p>
      <span></span>
    </div>
    <div class="top-search">
      <div class="search">
        <i class="iconfont icon-fangdajing"></i>
        <input @click="handleFocus" type="text" placeholder="输入城市名或拼音"/>
      </div>
      <div class="cel" @click="handleShow" v-show="isShow">
        <span >取消</span>
      </div>
    </div>
    <div class="top">
      <div class="posi-city">
        <p>GPS定位你所在的城市</p>
        <div class="span" @click="handleClick($store.state.city)">
          <span>{{this.$store.state.city}}</span>
        </div>
      </div>
      <div class="hot-city">
        <p>热门城市</p>
        <div class="hot-wrap">
          <div v-for="hot of city.hotCities" :key="hot.id" @click="handleClick(hot.name)">
            <span>{{hot.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <van-index-bar :index-list="indexList">
        <div v-for="(letter,index) of city.cities" :key="letter.id">
          <van-index-anchor :index="index" />
          <van-cell
            v-for="list of city.cities[index]"
            :key="list.id"
            :title="list.name"
            @click="handleClick(list.name)"
          />
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: [],
      indexList: [],
      isShow:false
    };
  },
  mounted() {
    this.axios.get("/city").then(res => {
      this.city = res.data.data;
      for (let i in res.data.data.cities) {
        this.indexList.push(i);
      }
    });
  },
  methods: {
    handleClick(city) {
      this.$store.dispatch("changeCity", city);
      this.$router.push("/");
    },
    handleBack() {
      this.$router.back();
    },
    handleFocus(){
      this.isShow = true
    },
    handleShow(){
      this.isShow = false
    }
  }
};
</script>

<style scoped>
.nav img {
  width: 19px;
}
.cel{
  position: absolute;
  font-size: 13px;
  top: 10px;
  right: 50px;
  background: #f4f4f4;
  height: 34px;
  line-height: 34px;
  width: 50px;
  text-align: center;
}
.search{
  position: relative;
  width: 90%;
  background: #fff;
}
.search i{
  position: absolute;
  top: 10px;
  left: 6px;
}
.search input{
  width: 80%;
  border: 0;
  font-size: 12px;
  padding: 10px 0 10px 40px ;
}
.top-search {
  position: fixed;
  z-index: 10;
  height: 34px;
  top: 44px;
  width: 10rem;
  padding: 10px 15px;
  background-color: #f4f4f4;
}
.nav {
  height: 44px;
  background: #fff;
  display: flex;
  font-size: 18px;
  align-items: center;
  position: fixed;
  top: 0;
  width: 10rem;
  z-index: 10;
  justify-content: space-between;
}
.nav span {
  width: 15%;
  margin: 0 10px;
}
.about {
  background: rgb(228, 227, 227);
}
.top {
  background: #fff;
  padding-left: 15px;
  padding-top: 15px;
  margin-top: 94px;
}
.top span {
  background: rgb(228, 227, 227);
  padding: 5px 25px;
  margin: 0 20px;
  font-size: 13px;
}
.span {
  margin-bottom: 15px;
}
.van-index-bar__sidebar .van-index-bar__index {
  line-height: 15px;
}
.top p {
  margin-bottom: 15px;
  font-size: 13px;
  color: #666;
}
.hot-wrap {
  display: flex;
  flex-wrap: wrap;
}
.hot-wrap > div {
  margin-bottom: 25px;
}
</style>