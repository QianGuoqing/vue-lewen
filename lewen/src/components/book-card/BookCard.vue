<template>
  <div class="book-card">
    <img v-lazy="image" alt="">
    <div class="title">{{ title }}</div>
    <div class="author">{{ author }}</div>
    <div class="likes">
      <span class="nums">{{ favNums }}</span> 喜欢
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BookCard',
    props: {
      image: {
        type: String,
        default: ''
      },
      author: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      favNums: {
        type: Number,
        default: 0
      }
    },
  }
</script>

<style lang="stylus" scoped>
</style>