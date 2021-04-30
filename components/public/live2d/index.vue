<!--
 * @Author: taoxiang
 * @Date: 2021-04-30 17:31:31
 * @LastEditTime: 2021-04-30 17:39:09
 * @LastEditors: taoxiang
 * @Description: live2d
 * @FilePath: /nuxt-blog/components/public/live2d/index.vue
 * 打工人,打工魂,打工都是人上人
-->
<template>
  <div />
</template>

<script>
export default {
  created() {
    if (process.browser) {
      setTimeout(() => {
        window.L2Dwidget.init({
          // pluginRootPath: '/live2dw/',
          pluginJsPath: 'lib/',
          // pluginModelPath: `live2d-widget-model-shizuku/assets/`,
          tagMode: false,
          debug: false,
          model: {
            jsonPath: `https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json`
          },
          display: {
            position: 'right',
            // width: 220,
            // height: 400,
            // hOffset: 30,
            vOffset: -45
          },
          react: { opacity: 0.7 },
          mobile: { show: true },
          log: false
        })
      }, 400)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
