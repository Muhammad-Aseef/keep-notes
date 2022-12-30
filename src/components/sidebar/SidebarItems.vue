<template>
  <ul class="sidebarAllItems">
    <li class="sidebarItem" @click="openHome">
      <font-awesome-icon
        icon="fa-regular fa-clipboard"
        size="lg"
        class="sidebarItemIcon"
      />
      <span>Notes</span>
    </li>
    <li class="sidebarItem">
      <font-awesome-icon
        icon="fa-solid fa-tag"
        size="lg"
        class="sidebarItemIcon"
      />
      <span>Labels</span>
    </li>
    <router-link to="/trash">
      <li class="sidebarItem">
        <font-awesome-icon
          icon="fa-regular fa-trash-can"
          size="lg"
          class="sidebarItemIcon"
        />
        <span>Trash</span>
      </li>
    </router-link>

    <li class="sidebarItem" @click="openArchive">
      <font-awesome-icon
        icon="fa-solid fa-folder-minus"
        size="lg"
        class="sidebarItemIcon"
      />
      <span>Archive</span>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    openArchive() {
      this.$router.push("archive");
    },
    openHome() {
      this.$router.push("home");
    },
  },
};
</script>

<style></style>
