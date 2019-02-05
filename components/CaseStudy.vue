<template>
  <div
    :class="{'slice': true, black: isBlack, '-video-active': videoActive, [slug]: true}"
    @click='videoActive = true'
  >
    <div :class='{"video-container": true}' @click='dismiss' v-if='videoActive'>
      <div class='video' :style='{height: height}'>
        <no-ssr>
          <youtube @ready='playerReady' :video-id="youtube_id" ref="youtube" ></youtube>
        </no-ssr>
      </div>

      <a @click='dismiss' class='cross'>
        <CrossIcon></CrossIcon>
      </a>
    </div>
    <div class='thumbnail-container' ref='thumbnail'>
      <div class='container'>
        <div class='thumbnail' :style='{backgroundImage: `url(case_study/${slug}/thumbnail.jpg)`}'>
        </div>
      </div>
    </div>
    <div class='background-container'>
      <div
        class='background'
      >
        <figure
          v-if='isBlack'
          :style="{'background-image': `url(case_study/${slug}/background.jpg)`}"
        ></figure>
      </div>
      <div class='helper'></div>
      <div class='stripe'>
        <figure :style='{backgroundColor: color, backgroundImage: `url(case_study/${slug}/pattern.jpg)`}'></figure>
      </div>
    </div>
    <container>
      <div class='content'>
        <h2 :style='{color: color}'>{{title}}</h2>
        <div class='tagline'>{{tagline}}</div>
        <div class='clients'>
          <img
            v-for='(folder,i) in clients'
            :src='`clients/${folder}/${logoFileName}`'
            :key='i'
          />
        </div>
      </div>
    </container>
  </div>
</template>

<script>
  import Container from './Container'
  import CrossIcon from './svg/Cross'

  export default {
    components: { Container, CrossIcon },
    props: ['title', 'slug', 'tagline', 'clients', 'color', 'i', 'youtube_id', 'height'],
    methods: {
      dismiss(e) {
        this.videoActive = false
        e.stopPropagation()
      },
      playerReady(e) {
        this.player.playVideo()
      }
    },
    computed: {
      isBlack: function() {
         return this.i % 2 == 0;
      },
      logoFileName: function() {
        if(!this.isBlack) {
          return 'black.png'
        } else {
          return 'white.png'
        }
      },
      player() {
        return this.$refs.youtube.player
      }
    },
    data() {
      return {
        videoActive: false
      }
    },
    mounted() {
      var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
         var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
         if (isSafari && iOS) {
         } else if(isSafari) {
         } else {
          VanillaTilt.init(this.$refs.thumbnail, {
              max: 25,
              speed: 1000,
              scale: 1.1,
              reverse: false
          });
         }

    }
  }
</script>

<style lang='scss' scoped>

  .content {
    padding-right: $spacing * 5;
  }
  .cross {
    position: absolute;
    right: 0;
    top: 0;
    margin: $spacing * 4;
    opacity: .8;


    &:hover {
      opacity: 1;
    }

    svg {
      width: 40px;
      height: 40px;
      stroke: white;
      stroke-width: 1.5;
    }

  }

  @keyframes bounceIn {
    to {
      transform: scale(1) translateX(0);
    }
  }

  .video-container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 999;
    display: flex;
    align-items: center;

    .video {
      max-width: 700px;
      position: relative;
      margin: auto;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
      background: black;

      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      animation: bounceIn .5s ease-in-out forwards;
      transform: scale(.5) translateX(25%);
      transform-origin: right;

      & /deep/ iframe {
        width: 100%;
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        border: none;
        bottom: 0;
      }
    }
  }

  .thumbnail-container {
    position:absolute;
    top: 0;
    left: 0;
    opacity: 1;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    z-index: 9;
    transform: translate3d(0,0,0);
  }
  h2 {
    font-weight: 400;
    font-size: 32px;
    margin: 0;
  }
  .slice {
    height: 500px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &.twitchcon17 {
      .stripe figure {
        background-size: 600px !important;
      }
    }

    &.watch_dogs_2 {
      .background figure {
        background-position: left center !important;
      }

      .stripe figure {
        background-size: cover !important;
      }
    }

    &.-video-active {

      .thumbnail-container {
        opacity: 0;
      }

      .thumbnail {
        transform: scale(1.7) translateX(-20%);
      }

    }

    &:not(.-video-active):hover {
      .stripe figure {
        transform: translateX(-30px);
      }

      .thumbnail {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      }

      @media screen and (-webkit-min-device-pixel-ratio:0) {
        .thumbnail-container {
          transform: scale(1.1);
        }
      }
    }

    .container {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      z-index: 1;
    }

    .tagline {
      font-size: 18px;
      margin-top: $spacing;
    }

    &.black {
      color: white;
      background-color: $black;
    }

    .clients {
      margin-top: $spacing * 4;
      user-select: none;
      img {
        height: 40px;
        margin-right: $spacing * 2;
      }
    }
  }

  .background-container {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .stripe {
      flex: 1;
      position: relative;

      figure {
        transition: .1s ease-in-out;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: -30px;
        background-size: 220px !important;
      }
    }

    .helper {
      flex: 0 0 450px;
    }

    .background {
      flex: 1;
      position: relative;

      figure {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-position: center right;
        background-size: cover !important;
        margin-right: -450px;
      }
    }

  }

  .thumbnail {
    width: 300px;
    height: 168px;
    border-radius: $video-radius;
    background-size: cover !important;
    margin-left: auto;
    position: relative;
    cursor: pointer;
    transition: .5s ease-in-out;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
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

    &:after {
      // transform: scale(0.95) translateY(5px) translateZ(-30px);
      // filter: blur(10px);
      // opacity: 1;
      // content: '';
      // position: absolute;
      // width: 100%;
      // height: 100%;
      // background-image: inherit; // Neat huh! :)
      // background-size: cover;
      // z-index: -1;
      // transition: filter .3s ease;

    }
  }


</style>
