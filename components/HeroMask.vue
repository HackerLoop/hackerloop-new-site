<template>
  <div>
    <div :class='{mask: true, black: black}'>
      <hero-mask-svg ></hero-mask-svg>
      <div class='background-cropper'>
        <img :src='`mask_matter/${gif || "1.gif"}`' >
      </div>
    </div>
  </div>
</template>

<script>
  import HeroMaskSvg from './svg/hero_mask'
  export default {
    props: ['black', 'gif'],
    components: { HeroMaskSvg }
  }
</script>

<style scoped lang='scss'>
.mask {
  display: inline-block;
  position: relative;

  &.black {
    & /deep/ svg path {
      fill: black;
    }
  }
}

svg {
  position: relative;
  z-index: 9;
  display: block;
  width: 220px;
  height: auto;
  @media(max-width: 650px) {
    width: 150px;
  }
}

.background-cropper {
  position: absolute;
  overflow: hidden;
  background: $black;
  left: 2px;
  right: 2px;
  bottom: 2px;
  top: 2px;

  img {
    width: 100%;
    height: 100%;
  }

}
</style>
