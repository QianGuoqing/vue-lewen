<template>
  <div class="book-page">
    <h3 class="banner-title">精选</h3>
    <ul class="book-list">
      <li class="book-item" v-for="book in hotBookList" :key="book.id">
        <book-card
          :image="book.image"
          :title="book.title"
          :author="book.author"
          :fav-nums="book.fav_nums"></book-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import BookCard from '../../components/book-card/BookCard.vue'
  import { getHotBookList } from '../../common/js/request.js'
  export default {
    name: 'BookPage',
    components: {
      BookCard
    },
    created() {
      this._getHotBookList()
    },
    data() {
      return {
        hotBookList: []
      }
    },
    methods: {
      _getHotBookList() {
        getHotBookList().then(res => {
          res = res.data
          this.hotBookList = res
          console.log('hot book list', this.hotBookList)
        }).catch(err => {
          console.log('hot book list', err)
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .book-page
    margin 45px 0
    .banner-title
      font-weight 700
      text-align center
      padding 15px 0
    .book-list
      display flex
      flex-flow wrap
</style>