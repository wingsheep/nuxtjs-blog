<template>
  <el-card class="archive">
    <template slot="header">
      <div class="post-badge">
        <span>最新评论</span>
      </div>
    </template>
    <ul>
      <li v-for="(item, index) in commentList" :key="index">
        <div class="img">
          <img v-if="item.avator" :onerror="item.avator === ''" :src="item.avator" alt="">
          <span v-else>{{ item.name.slice(0, 1) }}</span>
        </div>
        <div class="content">
          <p>
            <span>{{ item.name }}</span>
            <span>({{ item.date }})</span>
          </p>
          <span>{{ item.content }}</span>
        </div>
      </li>
    </ul>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      commentList: [
        {
          date: '2019年1月',
          content: '666666666666666666666666666666',
          avator: 'https://avatars3.githubusercontent.com/u/499550?s=400&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4',
          name: '尤小右',
          count: 15
        },
        {
          date: '2019年1月',
          content: '哈哈哈哈哈哈哈哈',
          avator: '',
          name: '罗小黑',
          count: 15
        },
        {
          date: '2019年1月',
          content: '666666666666666666666666666666',
          avator: 'https://avatars3.githubusercontent.com/u/499550?s=400&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4',
          name: '尤小右',
          count: 15
        },
        {
          date: '2019年1月',
          content: '哈哈哈哈哈哈哈哈',
          avator: '',
          name: '罗小黑',
          count: 15
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.archive {
  ul {
    li {
      list-style: none;
      padding: 4px 0;
      margin-bottom: 10px;
      overflow: hidden;
      .img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        span {
          line-height: 40px;
          color: #fff;
        }
        background: #97dffd;
        float: left;
      }
      .content {
        float: right;
        width: calc(100% - 60px);
        overflow: hidden;
        p span {
          font-size: 12px;
          color:#4c4c4c;
        }
        & > span {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          display: block;
          color: #4c4c4c
        }
      }
    }
  }
}
</style>
