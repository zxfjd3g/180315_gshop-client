<template>
  <div>
      b1111.vue
  </div>
</template>

<script>
  export default {
    /*mounted() {
      this.intervalId = setInterval(() => {
        console.log('b1 每隔3s干点事...')
      }, 3000)
    },

    beforeDestroy() {
      console.log('b1 beforeDestroy()... ')
      clearInterval(this.intervalId)
    },*/

    beforeRouteEnter (to, from, next) {
      console.log('b1 beforeRouteEnter()')
      // next() // 只有执行next()才能真正进入当前组件
      next(component => {
        component.intervalId = setInterval(() => {
          console.log('b1 每隔3s干点事...')
        }, 2000)
      })
    },

    // 路由组件离开, 组件对象不一定死亡
    beforeRouteLeave (to, from, next) {
      console.log(' b1 beforeRouteLeave()')
      clearInterval(this.intervalId)
      next()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>