<template>
    <HeaderLayout />
    <slot/>
    <FooterLayout />
</template>

<script>
import HeaderLayout from './header/HeaderLayout.vue'
import FooterLayout from './footer/FooterLayout.vue'

export default {
  name: 'DefaultLayout',
  components: {
    HeaderLayout,
    FooterLayout
  }
}
</script>