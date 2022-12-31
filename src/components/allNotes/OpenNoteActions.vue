<template>
  <div class="openActions" @click="note.trash && showMessage()">
    <ul :class="['actionButtons', 'openButtons', note.trash && 'disableClass']">
      <li
        class="actionItem OpenhoverItem"
        @click="!note.trash && openPalette($event)"
      >
        <vue-feather type="codesandbox"></vue-feather>
        <span>Change Color</span>
        <div class="colorPalette" v-if="paletteOpen" @click="stop($event)">
          <div
            class="colorOption"
            v-for="color in colorOptions"
            :key="color"
            @click="changeColor(color)"
            :style="{
              backgroundColor: color,
              border: note.color === color && '1px solid black',
            }"
          >
            <vue-feather
              type="check"
              size="20"
              style="float: right"
              v-if="note.color === color"
            ></vue-feather>
          </div>
        </div>
      </li>
      <li class="actionItem OpenhoverItem">
        <vue-feather type="trash-2"></vue-feather>
        <span>Delete</span>
      </li>
      <li class="actionItem OpenhoverItem">
        <vue-feather type="archive"></vue-feather>
        <span>Archive</span>
      </li>
      <li class="actionItem OpenhoverItem">
        <vue-feather type="plus-circle"></vue-feather>
        <span>Add Label</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  props: ["note"],
  data() {
    return {
      paletteOpen: false,
      colorOptions: [
        "#BFD0E0",
        "#BCECE0",
        "#B4F8C8",
        "#FFF5B2",
        "#EFE7BC",
        "#FBE7C6",
        "#FADCD9",
        "#DBCBD8",
      ],
    };
  },
  methods: {
    stop(e) {
      e.stopPropagation();
    },
    openPalette(e) {
      //   console.log(this.note);
      this.paletteOpen = !this.paletteOpen;
    },
    changeColor(c) {
      if (this.note.color === c) {
        return;
      } else {
        this.note.color = c;
        console.log(this.note);
        this.paletteOpen = false;
        this.$emit("colorUpdated");
      }
    },
    showMessage() {
      this.toast.error("You cannot edit trashed note!");
    },
  },
};
</script>

<style>
.openActions {
  width: 100%;
  padding: 0px 10px;
}
.openButtons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.actionItem {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
}
.OpenhoverItem:hover > span {
  display: block;
}
.actionItem > span {
  display: none;
  width: max-content;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px 10px;
  background-color: #444;
  color: rgba(255, 255, 255, 0.89);
  position: absolute;
  top: 68%;
  left: 52%;
}
.disableClass {
  opacity: 0.7;
}
</style>
