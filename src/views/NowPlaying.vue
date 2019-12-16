<template>
  <div>
    <div v-for="item of movies" :key="item.id">
      <Item :data="item" @Toggle="handleToggle"></Item>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: []
    };
  },
  mounted() {
    var url = "https://douban-api.uieee.com/v2/movie/in_theaters";
    this.axios.get(url).then(res => {
      this.movies = res.data.subjects;
    });
  },
  methods: {
    handleToggle(id){
        this.$router.push(`/detail?id=${id}`)
    }
  },
};
</script>

<style scoped>
</style>