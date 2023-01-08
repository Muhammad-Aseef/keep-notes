<template>
  <div class="labelButtonsWrapper">
    <div v-for="lab in labelObj" :key="lab.id" class="labelButton" :id="lab.id">
      {{ lab.name }}
      <vue-feather
        type="chevron-down"
        size="18"
        class="labelDropdownIcon"
        @click="openAction(lab.id)"
      ></vue-feather>
      <div class="labelDropdownItems hideAction" :id="'action' + lab.id">
        <p>Edit</p>
        <p>Delete</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["labelObj"],
  data() {
    return {
      showDropdown: false,
      previousCard: null,
    };
  },
  methods: {
    openAction(id) {
      let card = document.getElementById("action" + id);
      if (card === this.previousCard) {
        card.style.display = "none";
        this.previousCard = null;
        this.showDropdown = false;
      } else {
        card.style.display = "block";
        if (this.showDropdown) {
          this.previousCard.style.display = "none";
          this.previousCard = card;
        } else {
          this.previousCard = card;
          this.showDropdown = true;
        }
      }
    },
  },
};
</script>

<style>
.labelButtonsWrapper {
  padding: 10px;
  display: flex;
}
.labelButton {
  padding: 10px 22px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: white;
  color: #666;
  border: 2px solid;
  position: relative;
}
/* .labelButton:hover {
  background-color: #666;
  color: white;
} */
.labelDropdownIcon {
  position: absolute;
  right: 0px;
}
.labelDropdownItems {
  width: -webkit-fill-available;
  position: absolute;
  right: 0px;
  top: 100%;
  padding: 5px 10px;
  font-size: 13px;
  box-shadow: 0px 2px 7px 0px lightgray;
  border-radius: 5px;
  animation: 300ms linear 0s 1 slideInActions;
}

.labelDropdownItems > p {
  height: 18px;
  margin: 5px 0px;
}

@keyframes slideInActions {
  from {
    transform: translateY(-20%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
