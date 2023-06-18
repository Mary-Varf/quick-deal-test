<template>
  <button class='btn'
          :disabled="disabled"
          @click="onSave">
    <SaveIcon />
  </button>
</template>

<script>
import SaveIcon from "./icons/Save.vue";
export default {
  name: 'ToDoSaveBtn',
  components: { SaveIcon },
  props: {
    disabled: {
      type: Boolean,
    }
  },
  methods: {
    onSave() {
      this.$emit('save');
    },
  }
}
</script>
