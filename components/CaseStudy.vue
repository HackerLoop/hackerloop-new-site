<template>
  <div
    :class="{'slice': true, black: isBlack}"
  >
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
          :style="{'background-image': `url(case_study/${slug}/background.jpg)`}"
        ></figure>
      </div>
      <div class='helper'></div>
      <div class='stripe'>
        <figure :style='{background: color}'></figure>
      </div>
    </div>
    <container>
      <div>
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

  export default {
    components: { Container },
    props: ['title', 'slug', 'tagline', 'clients', 'color', 'i'],
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
      }
    },
    mounted() {
      VanillaTilt.init(this.$refs.thumbnail, {
          max: 25,
          speed: 1000,
          scale: 1.1,
          reverse: false
      });
    }
  }
</script>

<style lang='scss' scoped>
  .thumbnail-container {
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    z-index: 999;
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

    &:hover {
      .stripe figure {
        transform: translateX(-30px);
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
      transform: scale(0.95) translateY(5px) translateZ(-30px);
      filter: blur(10px);
      opacity: 1;
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


</style>
