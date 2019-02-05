<template>
<div class='footer'>
  <section class='container'>
    <description></description>
  </section>
</div>
</template>

<script>
  import Description from './Description'
  import Btn from './Button'

  export default {
    components: { Btn, Description }
  }

</script>

<style>
.footer {
  background: black;
}
</style>
