<template>
  <div class="app-main-layout">
    <div class="header">
      <img class="header-logo" src="../assets/logo.jpg" alt="">
      <h1 class="header-h1">Star Logistics</h1>
    </div>

        <router-view />


  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  components: {
    Navbar, Sidebar
  }
}
</script>
