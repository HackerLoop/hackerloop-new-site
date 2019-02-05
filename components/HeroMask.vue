<template>
  <div>
    <div :class='{mask: true, black: black}'>
      <hero-mask-svg ></hero-mask-svg>
      <div class='background-cropper'>
        <img src='/mask_matter/1.gif' >
      </div>
    </div>
  </div>
</template>

<script>
  import HeroMaskSvg from './svg/hero_mask'
  export default {
    props: ['black'],
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
  left: 0;
  right: 2px;
  bottom: 1px;
  top: 0;
  overflow: hidden;
  background: $black;

  img {
    width: 100%;
    height: 100%;
  }

}
</style>
