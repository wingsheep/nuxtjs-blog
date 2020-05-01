<template>
  <el-card class="user-info" :body-style="{padding: 0}">
    <div class="photo-background" />
    <div class="photo-wrapper clearfix">
      <div class="photo-wrapper-tip text-center">
        <a>
          <img class="about-photo" src="https://cdn.jsdelivr.net/gh/Thawsoar/FigureBed@master/img/avatar.jpg" alt="">
        </a>
      </div>
    </div>
    <div class="tips">
      <p><span> 你好，我叫罗小黑，很高兴在此与你相遇！</span>
      </p>
    </div>
  </el-card>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.user-info {
  .photo-background {
    height: 120px;
    background: url('https://cdn.jsdelivr.net/gh/xb2016/kratos-pjax@0.4.0/static/images/about.jpg') no-repeat center center;
    background-size:cover
  }
  .photo-wrapper {
    width: 100%;
    .photo-wrapper-tip {
      text-align: center;
      a {
        color: #4c4c4c;
        text-decoration: none;
        transition: color .3s;
        img {
          margin: -50px 0 0;
          width: 90px;
          height: 90px;
          border: white 2px dashed;
          border-top-color: white;
          border-left-color: white;
          border-radius: 50%;
          // transform: rotate(45deg);
          &:hover {
             border: rgba(255,255,255,.8) 2px solid;
             transform: scale(1.1);
             box-shadow:  0 0 10px #51aded;
             transition: all .2s
          }
        }
      }
    }
  }
  .tips p {
    text-align: center;
    margin-top: 15px;
    span {
      color: #51aded;
      text-shadow: 0 0 3px #fff;
    }
    &:hover {
      transform: scale(1.1);
      // font-size: 16px;
      transition: all .3s
    }
  }
}
</style>
