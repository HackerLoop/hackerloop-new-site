<template>
  <div class='about'>
    <container>
      <div
        class='video'
        :style="{backgroundImage: 'url(misc/about.jpg)'}"
      >
      <img src='misc/about.jpg' />
      </div>
      <div class='about-content'>
        <description></description>
        <div class='actions'>
          <btn :big='true' :icon='"MessengerIcon"' :href='"https://m.me/hackerloop"'>Contact us on messenger</btn>
          <btn value='hi@hackerloop.com' :big='true' :email='true' :icon='"MailIcon"' :href='"mailto:hihackerloop.com"'>hi@hackerloop.com</btn>
          <a class='place input'>
            <place-icon></place-icon>
            <label>
              Paris, Berlin & Tallin
            </label>
          </a>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
  import Btn from './Button'
  import Description from './Description'
  import PlaceIcon from './svg/Place'
  import Container from './container'

  export default {
    components: { Btn, Description, PlaceIcon, Container }
  }
</script>

<style lang='scss' scoped>
.container {
  position: relative;
  z-index: 1;
}
  .about {
    z-index: 1;
    position: relative;

    &:before {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 250px;
      background: #FAFAFA;
      content: '';
      z-index: 0;
    }

    @media(max-width: 650px) {
      display: block;
      margin-top: 30px;
      &:before {
        top: -30px;
      }
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
    box-shadow: 0px 0px 0px 1px rgba($black, .1);

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
      z-index: 99;
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
      opacity: .9;
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
    display: flex;
    flex-flow: column;
    line-height: 1.2;
    text-align: center;
    padding: 100px 0;
    line-height: 1.5;

    @media(max-width: 710px) {
      font-size: 18px;
      max-width: 400px;
      text-align: center;
      margin: auto;
      padding-top: 20px;
      text-align: left;
    }

    .place {
      display: inline-flex;
      align-items: center;
      margin-right: $spacing;
      padding: 0 12px;
      font-size: 16px;
      background: none;
      flex: 1;
      margin: 0;
      color: rgba($black, .8);

      label {
        margin-left: auto;
      }

      svg {
        width: 18px;
        height: 18px;
        fill: white;
        stroke: black;
        stroke-width: 1.6;
        stroke: rgba(#212A2F, .5);
        margin-right: 8px;
      }
    }

    .actions {
      margin-top: auto;
      display: flex;
      margin: auto;
      width: 100%;
      margin-top: $spacing * 3;

      & /deep/ .input, & .input {
        &:first-child {
          flex: 1.3;
          margin-right: 12px;
        }
      }

      @media(max-width: 710px) {
        display: block;
        line-height: 40px;

        & /deep/ .input, & .input {
          margin: 0;
          display: flex;
          margin:0 !important;
          margin-bottom: $spacing * 1.5 !important;
          padding-right: 12px;

          &:last-child {
            margin-bottom: 0 !important;
          }

        }
      }
    }
  }
</style>
