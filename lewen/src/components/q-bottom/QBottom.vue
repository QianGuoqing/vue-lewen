<template>
  <div class="q-bottom"> 
    <div @click="toPopular" class="bottom-item">
      <div class="item" v-if="selectedTabIndex !== popularTabIndex">
        <img src="./classic.png" class="icon" alt="">
        <div class="tip">流行</div>
      </div>
      <div class="active-item" v-else>
        <img src="./classic@highlight.png" class="icon" alt="">
        <div class="tip-active">流行</div>
      </div>
    </div>
    <div @click="toBook" class="bottom-item">
      <div class="item" v-if="selectedTabIndex !== bookTabIndex">
        <img src="./book.png" class="icon" alt="">
        <div class="tip">乐文</div>
      </div>
      <div class="active-item" v-else>
        <img src="./book@highlight.png" class="icon" alt="">
        <div class="tip-active">乐文</div>
      </div>
    </div>
    <div @click="toFavorite" class="bottom-item">
      <div class="item" v-if="selectedTabIndex !== favoriteTabIndex">
        <img src="./my.png" class="icon" alt="">
        <div class="tip">欢喜</div>
      </div>
      <div class="active-item" v-else>
        <img src="./my@highlight.png" class="icon" alt="">
        <div class="tip-active">欢喜</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QBottom',
    mounted() {
      switch (this.$router.history.current.path) {
        case '/':
          this.selectedTabIndex = 1
          break
        case '/book':
          this.selectedTabIndex = 2
          break
        case '/favorite':
          this.selectedTabIndex = 3
          break
        default:
          this.selectedTabIndex = -1
      }
    },
    data() {
      return {
        selectedTabIndex: -1,
        popularTabIndex: 1,
        bookTabIndex: 2,
        favoriteTabIndex: 3
      }
    },
    methods: {
      toPopular() {
        this.$router.push({
          path: '/',
        })
        this.selectedTabIndex = 1
      },
      toBook() {
        this.$router.push({
          path: '/book'
        })
        this.selectedTabIndex = 2
      },
      toFavorite() {
        this.$router.push({
          path: '/favorite'
        })
        this.selectedTabIndex = 3
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/colors.styl';
  .q-bottom
    width 100%
    position fixed
    bottom 0
    display flex
    justify-content space-between
    align-items center
    border-top 1px solid #888
    height 45px
    .bottom-item
      text-align center
      flex 1
      .item
        .icon
          width 25px
          height 25px
        .tip
          font-size 12px
          color $inactive-color
      .active-item
        .icon
          width 25px
          height 25px
        .tip-active
          font-size 12px
          color #000
</style>