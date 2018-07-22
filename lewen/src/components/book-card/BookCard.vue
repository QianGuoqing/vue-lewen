<template>
  <div class="book-card">
    <img class="image" v-lazy="image" alt="">
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
  .book-card
    background-color #fff
    width 75%
    margin 0 auto
    box-shadow 0 2px 2px #ccc
    text-align center
    .image
      width 100%
    .title
      font-size 14px
      padding 5px 0
    .author
      font-size 12px
      padding 2px 0
    .likes
      font-size 12px
      padding 5px 10px
      text-align right 
</style>