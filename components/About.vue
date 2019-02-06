<template>
  <div class='about'>
    <div
      class='video'
      :style="{'background-image': `url(misc/about.jpg)`}"
    >
    </div>
    <div class='about-content'>
      <description></description>
      <div class='actions'>
        <btn :icon='"MailIcon"' :href='"mailto:hihackerloop.com"'>hi@hackerloop.com</btn>
        <btn :icon='"MessengerIcon"' :href='"https://m.me/hackerloop"'>m.me/hackerloop</btn>
      </div>
    </div>
  </div>
</template>

<script>
  import Btn from './Button'
  import Description from './Description'

  export default {
    components: { Btn, Description }
  }
</script>

<style lang='scss' scoped>
  .about {
    padding: ($spacing * 5) 0;
    display: flex;
    @media(max-width: 650px) {
      display: block;
    }
  }

  .video {
    height: 176px;
    flex: 0 0 312px;
    max-width: 312px;
    background-size: cover !important;
    background-position: center center !important;
    margin-right: $spacing * 3;
    border-radius: $video-radius;
    position: relative;
    display: block;

    @media(max-width: 650px) {
      margin: auto !important;
      margin-bottom: $spacing * 2 !important;
    }

    &:after {
      transform: scale(0.95) translateY(5px) translateZ(-30px);
      filter: blur(10px);
      opacity: 0.9;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: inherit; // Neat huh! :)
      background-size: cover;
      z-index: -1;
      transition: filter .3s ease;
    }
  }

  .about-content{
    font-size: 18px;
    padding: ($spacing * 2) 0;
    display: flex;
    flex-flow: column;
    line-height: 1.2;

    @media(max-width: 710px) {
      font-size: 16px;
      max-width: 312px;
      margin: auto;
      padding: 0;
    }

    .actions {
      margin-top: auto;
      display: flex;
      padding-top: $spacing * 1.5;

      @media(max-width: 650px) {
        padding-top: $spacing * 2;
      }

      @media(max-width: 710px) {
        display: block;

        & /deep/ a {
          margin: 0;
          display: flex;
          margin-bottom: $spacing;



          &:last-child {
            margin-bottom: none;
          }
        }
      }
    }
  }
</style>
