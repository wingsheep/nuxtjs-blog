<template>
  <el-card ref="followPage" class="follow-page">
     <div slot="header">
      <h1>我的番剧</h1>
      <p>
        <span>哔哩哔哩 (゜-゜)つロ 干杯~-bilibili</span>
      </p>
    </div>
    <dl class="tabs" :style="{top: `${scrollTop}px`}">
      <dd
        :class="{active: item.active}"
        v-for="item in tabsList"
        :key="item.CODE">
        <nuxt-link  :to="`/follow/${item.CODE}`">{{ item.NAME }}</nuxt-link>
      </dd>
    </dl>
    <el-row :gutter="10">
      <el-col :span="8" v-for="item in followList" :key="item.media_id">
        <a :href="item.url" target="_blank">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img :src="item.cover" class="image">
            <div style="padding: 14px;">
              <h2>{{item.title}}</h2>
              <p>{{item.evaluate}}</p>
              <div class="bottom clearfix">
                <span>{{ item.season_type_name }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>{{ item.areas[0].name }}</span>
              </div>
              <div class="bottom clearfix">
                <span>{{ item.progress }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>{{ item.new_ep.index_show }}</span>
              </div>
            </div>
          </el-card>
        </a>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        scrollTop: 150,
        followList: [],
        timer: null
      }
    },
    methods: {
      handleScroll () {
        const dom =  document.querySelector('.layout-default')
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          const scrollTop2 = dom.scrollTop || document.body.scrollTop
          if(scrollTop2 == scrollTop1){
            this.scrollTop = scrollTop2 <= 300 ? 150 : scrollTop2 - 150
          }
        }, 300);
        const scrollTop1 = dom.scrollTop || document.body.scrollTop
      }
    },
    destroyed () {
      document.querySelector('.layout-default').removeEventListener('scroll', this.handleScroll);
      this.timer = null
    },
    mounted () {
      this.$nextTick(() => {
        document.querySelector('.layout-default').addEventListener('scroll', this.handleScroll);
      })
    },
    computed: {
      // followList1 () {
      //   return this.$store.state.follow.followList
      // }
    },
    async fetch({ store, params }) {
      await store.dispatch('follow/getFollowList', params.id)
    },
    async asyncData({app, params}) {
      
      const result = await app.$axios.get('/blog/getFollowList', {
        params: {
          vmid: 126384053,
          type: params.id
        }
      })
      const tabsList = [
        {
          CODE: '1',
          NAME: '追番',
          active: true
        },
        {
          CODE: '2',
          NAME: '追剧',
          active: false
        }
      ]
      tabsList.forEach(item => {
        item.active = false
        if (item.CODE == params.id) {
          item.active = true
        }
      })
      return {
        followList: result.data.data.list,
        tabsList
      }
    }
  }
</script>

<style lang="scss" scoped>
.follow-page {
  background: #ffffff40;
  position: relative;
  overflow: inherit;
  /deep/ .el-card__header {
    padding: 0;
    & > div {
      padding: 30px 0;
      height: 100%;
      background: #00000030;
    }
    h1 {
      background: #f3f3f3b3;
      line-height: 40px;
      text-align: center;
      color: #333333;
      border-left: 5px solid #1BC3FB;
      font-size: 18px;
    }
    p {
      text-align: center;
      margin-top: 10px;
      span {
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .tabs {
    position: absolute;
    top: 30px;
    left: -42px;
    transition: top .4s ease-in;
    dd {
      color: #222;
      background: #ffffff80;
      border: 1px solid #fff;
      border-right: none;
      border-radius: 4px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-bottom: 10px;
      letter-spacing: 3px;
      display: block;
      writing-mode: vertical-lr;
      backdrop-filter: blur(10px);
      a {
        color: #222;
        padding: 20px 10px;
        display: block;
      }
      &.active {
        background: #1BC3FB60;
        border: 1px solid #1BC3FB;
        border-left: 2px solid #1BC3FB;
        box-shadow: 0 0 10px #fff;
        a {
          color: #fff;
        }
      }
    }
  }
  .el-card {
    margin-bottom: 15px;
    background: #ffffff90;
    &:hover {
      background: #ffffff;
      img  {
        opacity: 1;
      }
      span {
        color: #999
      }
    }
  }
  img {
    width: 100%;
    height: 300px;
    opacity: .8;
  }
  h2 {
    font-weight: 600;
    color: #222;
    line-height: 24px;
    font-size: 16px;
    padding: 0 10px 0 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 0 8px 0;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin: 0 0 8px;
    white-space: normal;
    overflow: hidden;
    line-height: 20px;
    max-height: 40px;
    font-size: 12px;
    font-weight: 400;
    color: #222;
  }
  .bottom {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    span {
      font-size: 12px;
      color: #222;
    }
    .el-divider--vertical {
      margin: 0 2px;
    }
  }
}
</style>