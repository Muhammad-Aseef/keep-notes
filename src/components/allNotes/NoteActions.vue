<template>
  <div class="cardActions">
    <ul class="actionButtons">
      <li class="actionItem" @click="openPalette()">
        <font-awesome-icon icon="fa-solid fa-palette" size="lg" />
        <p>Change color</p>
        <div
          class="colorPalette"
          v-if="paletteOpen"
          @click="paletteClick($event)"
        >
          <!-- :style="'background-color:' + color" -->
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
            <!-- :style="
              'background-color:' +
              color +
              ';' +
              [note.color === color ? 'border: 1px solid black' : 'none']
            " -->
            <font-awesome-icon
              icon="fa-solid fa-check"
              style="float: right"
              v-if="note.color === color"
            />
          </div>
        </div>
      </li>
      <li class="actionItem">
        <font-awesome-icon icon="fa-solid fa-trash-can" size="lg" />
        <p>Delete</p>
      </li>
      <li class="actionItem">
        <font-awesome-icon icon="fa-solid fa-folder-minus" size="lg" />
        <p>Archive</p>
      </li>
      <li class="actionItem">
        <font-awesome-icon icon="fa-solid fa-circle-plus" size="lg" />
        <p>Add Label</p>
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
    openPalette() {
      //   console.log(this.note);
      this.paletteOpen = !this.paletteOpen;
    },
    paletteClick(e) {
      e.stopPropagation();
    },
    changeColor(c) {
      this.note.color = c;
      console.log(this.note);
      this.paletteOpen = false;
    },
  },
};
</script>

<style>
.cardActions {
  padding: 10px 15px;
}
.actionButtons {
  padding: 0px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.actionItem {
  cursor: pointer;
  position: relative;
}
.actionItem > p {
  display: none;
  width: max-content;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px 3px;
  background-color: #444;
  color: white;
  position: absolute;
  top: -5px;
  right: 18px;
  margin-top: 5px;
}
.actionItem:hover p {
  display: flex;
}
.colorPalette {
  background-color: white;
  /* width: 300px; */
  padding: 10px;
  display: flex;
  /* flex-wrap: wrap; */
  border-radius: 10px;
  box-shadow: 1px 2px 9px 0px lightgray;
  position: absolute;
  top: 100%;
  left: -50%;
  z-index: 3;
}
.colorOption {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0px 7px;
}
.colorOption:hover {
  border: 1px solid gray;
}
</style>
