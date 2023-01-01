<template>
  <ul class="sidebarAllItems">
    <router-link to="home">
      <li class="sidebarItem">
        <vue-feather type="clipboard" class="sidebarItemIcon"></vue-feather>
        <p>Notes</p>
      </li>
    </router-link>
    <router-link to="archive">
      <li class="sidebarItem">
        <vue-feather type="folder-minus" class="sidebarItemIcon"></vue-feather>
        <p>Archive</p>
      </li>
    </router-link>
    <router-link to="trash">
      <li class="sidebarItem">
        <vue-feather type="trash-2" class="sidebarItemIcon"></vue-feather>
        <p>Trash</p>
      </li>
    </router-link>
    <router-link to="labels">
      <li class="sidebarItem">
        <vue-feather type="tag" class="sidebarItemIcon"></vue-feather>
        <p>Label</p>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  methods: {},
};
</script>

<style>
.sidebar {
  position: absolute;
  left: 0px;
  flex: 1;
  height: fit-content;
  padding: 10px 0px;
  z-index: 999;
}
.sidebarAllItems {
  list-style: none;
  padding: 0px;
  font-size: 16px;
  color: #333;
  font-weight: 500;
  letter-spacing: 1px;
}
.sidebarItem {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 3px 0px;
  border-radius: 0px 15px 15px 0px;
}
.sidebarItem > p {
  position: absolute;
  left: -40px;
  padding: 10px;
  transition: 0.5s ease-out;
}
.sidebarItem:hover {
  background-color: whitesmoke;
}
.sidebarItem:hover > p {
  position: relative;
  left: 0px;
}

.sidebarItemIcon {
  padding: 10px 5px;
  border-radius: 0px 50% 50% 0px;
  background-color: #e8eef2;
  z-index: 999;
}
.sidebarItemIcon:hover {
  background-color: white;
}
</style>
