<template>
<div class='footer'>
  <container>
    <div>
      <hero-mask :black='true'></hero-mask>
      <div class='content'>
        <description></description>
      </div>
    </div>
    <div class='actions'>
      <btn :icon='"MailIcon"' :email='true' value='hi@hackerloop.com' >hi@hackerloop.com</btn>
      <a class='place input'>
        <place-icon></place-icon>
        <label>
          Paris, Berlin & Tallin
        </label>
      </a>
      <btn :icon='"MessengerIcon"' :href='"https://m.me/hackerloop"'>Messenger</btn>
    </div>
  </container>
</div>
</template>

<script>
  import Description from './Description'
  import Btn from './Button'
  import HeroMask from './HeroMask'
  import Container from '~/components/Container'
  import PlaceIcon from './svg/Place'

  export default {
    components: { Btn, Description, HeroMask, Container, PlaceIcon }
  }

</script>

<style scoped lang='scss'>
.container {
  display: flex;
  align-items: center;
  @media(max-width: 650px) {
    display: block;
    text-align: center;
  }
}

.footer {
  padding: ($spacing * 8) 0;
  background: black;
  color: white;
  font-size: 16px;

  & /deep/ .mask svg {
    width: 80px;
    margin-left: -4px;

    @media(max-width: 650px) {
      margin-left: 0;
    }
  }
}

.content {
  margin-top: $spacing * 3;
  max-width: 400px;
  line-height: 1.2;

  @media(max-width: 650px) {
    display: block;
    text-align: center;
    margin: $spacing * 4 auto;
    padding: 0 20px;
  }
}

.actions {
  text-align: right;
  margin-left: auto;
  flex: 1;
  max-width: 200px;
  @media(max-width: 650px) {
    margin: auto;
  }

  .input.email {
    background: transparent;
    box-shadow: none;


    ::selection {
      background: white;
      color: white;
    }

    & /deep/ svg {
      flex: 0 0 14px;
      height: 16px;
    }
    & /deep/ svg g {
      stroke: white;
      opacity: .9;
    }

    & /deep/ input { color: white !important; }
  }

  .input {
    display: flex;
    margin-bottom: $spacing;
    border :none;
    box-shadow: 0px -1.5px inset rgba($black, .4);
    background: white;

    &.place {
      line-height: 32px;
      display: flex;
      align-items: center;
      text-align:right;
      box-shadow: none;
      font-size: 14px;
      padding: 0 $spacing * 1.5;
      line-height: 32px;
      border-radius: 20em;
      background: transparent;
      box-shadow: none;
      svg {
        width: 16px;
        height: 16px;
        opacity: .6;
      }
      label {
        flex: 1 ;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
