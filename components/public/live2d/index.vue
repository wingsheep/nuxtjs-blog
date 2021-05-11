<!--
 * @Author: taoxiang
 * @Date: 2021-04-30 17:31:31
 * @LastEditTime: 2021-05-11 17:41:23
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
          pluginJsPath: 'lib/',
          tagMode: false,
          debug: false,
          model: {
            jsonPath: `https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json`
          },
          display: {
            position: 'right',
            width: 100,
            height: 200,
            hOffset: 30,
            vOffset: -45
          },
          // react: { opacity: 1 },
          mobile: { show: false },
          log: false
        })
      }, 400)
    }
  }
}
</script>

<style lang=scss>
@media(max-width: 1400px) {
  #live2d-widget {
    display: none;
  }
}
</style>
