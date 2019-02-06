<template>
  <div class='about'>
    <div
      class='video'
      :style="{background: 'url(misc/about.jpg)'}"
    >
    <img src='misc/about.jpg' />
    </div>
    <div class='about-content'>
      <description></description>
      <div class='actions'>
        <btn value='hi@hackerloop.com' :big='true' :email='true' :icon='"MailIcon"' :href='"mailto:hihackerloop.com"'>hi@hackerloop.com</btn>
        <btn :big='true' :icon='"MessengerIcon"' :href='"https://m.me/hackerloop"'>Contact us on messenger</btn>
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
    position: relative;
    z-index: 1;
    padding: ($spacing * 5) 0;
    padding-top: 0;
    @media(max-width: 650px) {
      display: block;
    }
  }

  .video {
    max-width: 100%;
    background-size: cover !important;
    background-position: center center !important;
    border-radius: $video-radius;
    position: relative;
    display: block;
    cursor: pointer;
    background-color: #E7E3E0;

    &:hover {
      &:before {
        opacity: 1;
      }
    }
    &:before {
      content: '';
      width: 40px;
      height: 40px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
      transform: rotate(90deg);
      opacity: .8;
      transition: .15s ease-in-out;

      /* The points are: centered top, left bottom, right bottom */
      clip-path: polygon(50% 20%, 0 100%, 100% 100%);
    }

    img {
      width: 100%;
      border-radius: $video-radius;
      display: block;
    }

    @media(max-width: 650px) {
      margin: auto !important;
      margin-bottom: $spacing * 2 !important;
    }

    &:after {
      transform: scale(1) translateY(0) translateZ(0);
      filter: blur(10px);
      opacity: 0.9;
      content: '';
      position: absolute;
      top: 0;
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
    margin-top: $spacing * 3;
    text-align: center;

    @media(max-width: 710px) {
      font-size: 16px;
      max-width: 400px;
      margin: auto;
      padding: 0;
      margin-top: $spacing * 5;
    }

    .actions {
      margin-top: auto;
      display: flex;
      padding-top: $spacing * 1.5;

      max-width: 600px;
      margin: auto;
      width: 100%;

      @media(max-width: 650px) {
        padding-top: $spacing * 2;
      }

      @media(max-width: 710px) {
        display: block;

        & /deep/ .input {
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
