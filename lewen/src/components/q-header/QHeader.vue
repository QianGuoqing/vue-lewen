<template>
  <header>
    远方看海
  </header>
</template>

<script>
  export default {
    name: 'QHeader'
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/colors.styl';
  header
    text-align center
    border-bottom 1px solid $line-color
    position fixed
    top 0
    width 100%
    height 45px
    line-height 45px
    background-color #fff
</style>