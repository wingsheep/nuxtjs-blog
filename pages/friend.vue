<template>
  <el-card class="page-friend">
    <div slot="header">
      <h1>友人帐</h1>
      <p>
        <span>我想要变强, 因为我遇到了许多的邂逅、有了想要守护的事物。 - 夏目友人帐</span>
      </p>
    </div>
    <div v-if="friendlinkList && friendlinkList.length" class="friend">
      <ul>
        <li
          v-for="(item, index) in friendlinkList"
          :key="index"
          :style="{ background: randomRgbColor() }"
        >
          <a :href="item.url" target="_blank">
            <img :src="item.img_url" @error="item.img_url = ''">
            <span v-show="!item.img_url">{{ item.name.slice(0, 1) }}</span>
            <h4>{{ item.name }}</h4>
            <p>{{ item.desc }}</p>
          </a>
        </li>
      </ul>
    </div>
    <el-divider> Tips </el-divider>
    <div class="apply-info">
      <p style="margin-bottom: 10px">走过路过不要错过，互加友链，交个朋友！</p>
      <p>链接名称：罗小黑</p>
      <p>链接地址：https://www.happyfly.top/</p>
      <p>
        链接图片：https://cdn.jsdelivr.net/gh/Thawsoar/FigureBed@master/img/avatar.jpg
      </p>
      <p>链接描述：记录生活~</p>
      <p style="text-align: center; margin-top: 10px">
        <el-button type="primary" size="medium" @click="addFriendlink">点我加友链！</el-button>
      </p>
    </div>
  </el-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  scrollToTop: true,
  async fetch({ store, params }) {
    // console.log(this.friendlinkList)
    return await store.dispatch('friend/getFriendLinks')
  },
  data() {
    return {
      // friendlinkList: []
    }
  },
  computed: {
    ...mapState({
      friendlinkList: state => state.friend.friendList.slice()
    })
    // friendlinkList() {
    //   return this.$store.state.friend.friendList
    // }
  },
  methods: {
    // 随机生成RGB颜色
    randomRgbColor() {
      const r = Math.floor(Math.random() * 256) // 随机生成256以内r值
      const g = Math.floor(Math.random() * 256) // 随机生成256以内g值
      const b = Math.floor(Math.random() * 256) // 随机生成256以内b值
      return `rgb(${r},${g},${b})` // 返回rgb(r,g,b)格式颜色
    },
    addFriendlink() {
      this.$message.warning('友链功能暂未开放')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-friend {
  backdrop-filter: blur(50px);
  background-color: #ffffff90;
  /deep/ .el-card__header {
    padding: 0;
    background: url("https://cdn.jsdelivr.net/gh/Thawsoar/FigureBed@master/img/friend.jpeg");
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
      border-left: 5px solid #1bc3fb;
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
  .friend {
    padding: 20px;
    ul {
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: calc(100% / 3 - 30px);
        list-style: none;
        padding: 15px 10px;
        margin: 5px;
        border-radius: 10px;
        &:hover {
          background: transparent !important;
          transition: all 0.3s;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1),
            0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 8px 16px 0 rgba(0, 0, 0, 0.1),
            0 32px 64px 0 rgba(0, 0, 0, 0.1);
          transform: scale(1.05);
          h4,
          p {
            color: #000;
          }
        }
        img,
        span {
          display: block;
          width: 60px;
          height: 60px;
          line-height: 60px;
          border-radius: 50%;
          background: #97dffd;
          float: left;
          text-align: center;
          color: #fff;
          font-size: 18px;
          margin-right: 10px;
        }
        h4,
        p {
          float: left;
          width: calc(100% - 100px);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #fff;
          font-size: 18px;
          margin-top: 10px;
        }
        p {
          color: #fff;
          font-size: 12px;
          margin-top: 4px;
        }
      }
    }
  }
  .el-divider {
    .el-divider__text {
      background: #1bc3fb;
      color: #fff;
      font-size: 12px;
      line-height: 16px;
      border-radius: 2px;
    }
  }
  .apply-info {
    padding: 10px;
    background: rgba(27, 195, 251, 0.1);
    border-left: 4px solid #1bc3fb;
    border-radius: 4px;
  }
}
</style>
