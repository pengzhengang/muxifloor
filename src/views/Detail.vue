<template>
  <div>
    <template v-if="movies">
      <div class="container">
        <img class="return" src="../assets/images/fanhui.png" alt @click="toggle" />
        <div class="nav-title" :style="{opacity:opacity}">{{movies.title}}</div>
        <div class="top">
          <div class="bg">
            <img :src="movies.images.large" alt />
          </div>

          <div class="top-title">
            <span>{{movies.title}}</span>
            <p>{{movies.genres[0]}}|{{movies.genres[1]}}</p>
            <p>{{movies.pubdate}}上映</p>
            <p>{{movies.countries[0]}}|{{movies.durations[0]}}</p>
            <p @click="handleClick" :class="{ expansion : active }">{{movies.summary}}</p>
          </div>
        </div>
        <div class="box">
          <h1>演职人员</h1>
          <div class="foot">
            <div class="actor">
              <div class="actor-item" v-for="actor of movies.casts" :key="actor.id">
                <img :src="actor.avatars.large" alt />
                <p>{{actor.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      movies: "",
      opacity: 0,
      active:true
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handle);
    var url = `https://douban-api.uieee.com/v2/movie/subject/${this.id}`;
    this.axios.get(url).then(res => {
      this.movies = res.data;
    });
  },
  methods: {
    toggle() {
      this.$router.back();
    },
    handle() {
      var height = document.documentElement.scrollTop;
      var opacity = height / 30;
      if (opacity > 1) {
        opacity = 1;
      }
      this.opacity = opacity;
    },
    destroyed() {
      window.removeEventListener("scroll", this.handle);
    },
    handleClick(){
      this.active = !this.active
    }
  }
};
</script>

<style scoped>
.expansion {
  white-space: pre-line;
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.container {
  background: #ebebeb;
  position: relative;
  height: 800px;
}
.return {
  widows: 25px;
  height: 25px;
  padding: 5px;
  border-radius: 50%;
  background: #fff;
  position: fixed;
  top: 8px;
  left: 10px;
  opacity: 0.5;
  z-index: 30;
}
.nav-title {
  font-size: 17px;
  text-align: center;
  width: 10rem;
  line-height: 44px;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 10;
}
.top {
  background: #fff;
  margin-bottom: 20px;
}
.bg {
  width: 10rem;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.bg img {
  width: 100%;
}
.top-title {
  padding: 15px;
}
.top-title span {
  padding-top: 9px;
  color: #191a1b;
  font-size: 17px;
}
.top-title p {
  font-size: 13px;
  margin-top: 10px;
  color: #797d82;
}
.box {
  background: #fff;
  padding: 15px;
}
.box h1 {
  font-size: 15px;
  margin-bottom: 10px;
}

.foot {
  overflow-x: auto;
  /* overflow-y: hidden; */
}
.foot::-webkit-scrollbar {
  display: none;
}
.actor {
  display: flex;
  /* -webkit-box-pack: start; */
  /* justify-content: flex-start; */
  /* -webkit-box-align: center; */
  /* align-items: center; */
  /* position: relative; */
  /* width: 100%; */
  /* list-style: none; */
}
.actor-item {
  margin-left: 5px;
  text-align: center;
  font-size: 15px;
}
.actor-item img {
  width: 100px;
  margin-bottom: 5px;
}
</style>