<template>
  <a
    class='input'
    :href='email ? false : href' :is='email ? "div" : "a"'
    :class='{big: big, email: email}'
    target='_blank'>
    <div :is='icon'></div>
    <input v-if='email' :value='value' readonly @click='$event.target.select()' @focus="$event.target.select()" />
    <label v-else>
      <slot></slot>
    </label>
  </a>
</template>

<script>
  import MailIcon from './svg/Mail'
  import MessengerIcon from './svg/Messenger'

  export default {
    props: ['href', 'icon', 'big', 'email', 'value'],
    components: { MailIcon, MessengerIcon }
  }
</script>

<style scoped lang='scss'>
  .input {
    font-size: 14px;
    text-decoration: none;
    color: rgba($black, .8);
    line-height: 32px;
    padding: 0 12px;
    border: 1px solid $border-color;
    box-shadow: $box-shadow-1;
    display: inline-flex;
    align-items: center;
    border-radius: 20em;
    margin-right: $spacing;
    flex: 1;
    cursor: pointer;
    background: white;

    &.email {
      background: rgba($black, .08);
      border: none;
      box-shadow: none;
      cursor: text;
      width: 100%;
      height: 32px;

      &.big {
        height: 40px;
      }

      label {
        cursor: text;
      }

      &:hover {
        border: none;
      }
    }

    &.big {
      line-height: 40px;
      font-size: 16px;

      input {
        font-size: 16px;
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    &:hover {
      border: 1px solid darken($border-color, 10%);
    }

    label {
      text-align: right;
      margin-left: auto;
      cursor: pointer;
    }

    input {
      background: none;
      border: none;
      height: 100%;
      width: 100%;
      text-align: right;
      outline: none;
      font-size: 14px;
      font-family: "Metropolis";
      color: $black;
      color: rgba($black, .8);

    }

    &:last-child {
      margin-right: 0;
    }
  }
</style>
