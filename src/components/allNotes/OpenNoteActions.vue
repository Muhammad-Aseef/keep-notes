<template>
  <div class="openActions">
    <ul class="actionButtons openButtons">
      <li class="actionItem OpenhoverItem" @click="openPalette($event)">
        <font-awesome-icon icon="fa-solid fa-palette" size="lg" />
        <span>Change Color</span>
        <div
          class="colorPalette"
          v-if="paletteOpen"
          @click="paletteClick($event)"
        >
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
            <font-awesome-icon
              icon="fa-solid fa-check"
              style="float: right"
              v-if="note.color === color"
            />
          </div>
        </div>
      </li>
      <li class="actionItem OpenhoverItem">
        <font-awesome-icon icon="fa-solid fa-trash-can" size="lg" />
        <span>Delete</span>
      </li>
      <li class="actionItem OpenhoverItem">
        <font-awesome-icon icon="fa-solid fa-folder-minus" size="lg" />
        <span>Archive</span>
      </li>
      <li class="actionItem OpenhoverItem">
        <font-awesome-icon icon="fa-solid fa-circle-plus" size="lg" />
        <span>Add Label</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
    openPalette(e) {
      //   console.log(this.note);
      this.paletteOpen = !this.paletteOpen;
      e.stopPropagation();
    },
    paletteClick(e) {
      e.stopPropagation();
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
</style>
