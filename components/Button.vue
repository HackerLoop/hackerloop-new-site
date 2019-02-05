<template>
  <a :href='href' target='_blank'>
    <div :is='icon'></div>
    <label>
      <slot></slot>
    </label>
  </a>
</template>

<script>
  import MailIcon from './svg/Mail'
  import MessengerIcon from './svg/Messenger'

  export default {
    props: ['href', 'icon'],
    components: { MailIcon, MessengerIcon }
  }
</script>

<style scoped lang='scss'>
  a {
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

    &:hover {
      border: 1px solid darken($border-color, 10%);
    }

    label {
      text-align: right;
      margin-left: auto;
      cursor: pointer;
    }

    &:last-child {
      margin-right: 0;
    }
  }
</style>
