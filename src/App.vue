<template>
  <Header />
  <div class="content">
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Sidebar from '@/components/sidebar/Sidebar.vue'

export default {
  components: {
    Header,
    Sidebar,
  }
}
</script>
<style>

</style>
