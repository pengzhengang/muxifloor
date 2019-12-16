<template>
    <div class="item" @click="handleToggle(data.id)">
      <img class="item-img" :src="data.images.large" alt />
      <div class="item-text">
        <div><p class="title">{{data.title}}</p></div>
        <div class="actor">主演：<span v-for="item of data.casts" :key="item.id">{{item.name}} </span></div>
        <div><span>{{data.year}}年 | {{data.durations[0]}}</span></div>
      </div>
      <button class="item-btn">购票</button>
    </div>
</template>

<script>
export default {
  name:"Item",
  props: {
    data: {
      type: Object
    }
  },
  methods:{
    handleToggle(id){
      this.$emit("Toggle",id)
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgb(235, 234, 234);
}
.item-img {
  width: 75px;
}
.item-text {
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: left;
  width: 200px;
  font-size: 14px;
  color: #666;
  
  white-space: nowrap;
  
}
.item-text>div{
    margin: 4px;
}
.actor{
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item-btn {
  border: 1px solid #ff834b;
  background: #fff;
  outline: none;
  padding: 5px 10px;
  color: #ff834b;
  font-size: 14px;
}
.title{
    font-size: 17px;
    color: #333;
}
.score{
    color: #ff834b;
}
</style>