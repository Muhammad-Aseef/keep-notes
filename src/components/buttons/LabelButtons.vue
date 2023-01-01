<template>
  <div class="">
    <button v-for="lab in labels" :key="lab.id" class="labelButton">
      {{ lab.name }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labels: [
        {
          id: 1,
          name: "test",
        },
        {
          id: 2,
          name: "work",
        },
        {
          id: 3,
          name: "groceries",
        },
      ],
    };
  },
};
</script>

<style>
.labelButton {
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: white;
  color: #666;
  border: 2px solid gray;
}
</style>
