<template>
  <div class="header">
    <div class="headerWrapper">
        <div @click="showSidebar = !showSidebar" class="sidebarIcon">
            <font-awesome-icon icon="fa-solid fa-bars" size="2x"/>
        </div>
        <!-- <Sidebar v-if="showSidebar"/> -->
        <h2 class="headerTitle">Keep Notes</h2>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar/Sidebar.vue'

export default {
    components: {
        Sidebar,
    },
    data(){
        return{
            showSidebar: true,
        }
    }
}
</script>

<style>

</style>