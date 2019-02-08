<template>
  <div
    :class="{'slice': true, black: isBlack, '-video-active': videoActive, [slug]: true}"
  >
    <div :class='{"video-container": true}' @click='dismiss' v-if='videoActive'>
      <div class='video' >
          <no-ssr>
            <youtube @ready='playerReady' :video-id="youtube_id" ref="youtube" ></youtube>
          </no-ssr>
      </div>

      <a @click='dismiss' class='cross'>
        <CrossIcon :color='color'></CrossIcon>
      </a>
    </div>
    <div class='thumbnail-container' ref='thumbnail'>
      <div class='container'>
        <div
          @mouseenter='thumbnailHovered = true'
          @mouseleave='thumbnailHovered = false'

          class='thumbnail'
          :style='{backgroundImage: `url(case_study/${slug}/thumbnail.jpg)`}'
          @click='() => this.setActiveCase(this.slug)'
        >
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
      <div :class='{stripe: true, active: this.thumbnailHovered}'>
        <figure :style='{backgroundColor: color, backgroundImage: nopattern ? false : `url(case_study/${slug}/pattern.jpg)`}'></figure>
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
    props: ['title', 'slug', 'tagline', 'clients', 'color', 'i', 'youtube_id', 'activeCase', 'setActiveCase', 'nopattern'],
    methods: {
      dismiss(e) {
        this.setActiveCase(null)
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
        videoActive: false,
        thumbnailHovered: false
      }
    },

    watch: {
      activeCase: function(newVal, oldVal) {
        if(newVal == this.slug) {
          this.videoActive = true
        } else {
          this.videoActive = false
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
@keyframes bounceIn {
  to {
    transform: scale(1) translateX(0);
  }
}
  .content {
    padding-right: $spacing * 10;
    max-width: 400px;
    @media(max-width: 700px) {
      padding-right: 0;
      padding-top: $spacing * 4;
      text-align: center;
      margin: auto;

      h2 {
        font-size: 20px;
      }

      .tagline {
        line-height: 1.2;
        font-size: 14px;
        font-weight: 400;
      }
    }
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

  .video-container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    @media(max-width: 700px) {
      display: block;
      padding-top: 160px;
    }

    .video {
      position: relative;
      margin: auto;
      height: 90%;
      max-width: 700px;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
      background: black;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      animation: bounceIn .5s ease-in-out forwards;
      transform: scale(.5) translateX(20%);
      transform-origin: right;

      @media(max-width: 700px) {
        height: 184px;
        width: 330px;
        transform-origin: center;
        transform: scale(1) translateX(0);
      }

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
    @media(max-width: 700px) {
      display: block;
      position: relative;

      .thumbnail {
        margin: auto;
      }
    }
  }

  h2 {
    font-weight: 400;
    font-size: 32px;
    margin: 0;
  }

  .slice {
    height: 400px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    &.-video-active {
      .thumbnail {
        transform: scale(1);
      }
    }

    @media (max-width: 700px) {
      display: block;
      padding-top: $spacing * 20;
      height: auto;
      padding-bottom: $spacing * 10;
    }

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
        @media(max-width: 700px) {
          transform: scale(1) translateX(0);
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
      line-height: 1.4;
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

      &.active {
        @media(min-width: 700px) {
          figure {
            transform: translateX(50px) rotate(2deg);
          }
        }
      }

      @media (max-width: 700px) {
        position: absolute;
        left: -100px;
        right: 0;
        top: -140px;
        height: 150px;
        transform: rotate(-5deg) !important;
      }

      figure {
        transition: .15s ease-in-out;
        position: absolute;
        top: -80px;
        left: 0;
        bottom: -80px;
        right: -80px;
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
        margin-right: -520px;
      }
    }

  }

  .thumbnail {
    width: 330px;
    height: 184px;
    border-radius: $video-radius;
    background-size: cover !important;
    margin-left: auto;
    position: relative;
    cursor: pointer;
    transition: .15s transform ease-in-out;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transform: scale(.9);
    transform-origin: right;

    @media(max-width: 700px) {
      transform-origin: center;
    }

    &:hover {
      transform: scale(1);
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
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
  }


</style>
