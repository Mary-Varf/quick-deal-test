<template>

  <transition name="fade">
  <li class="item">
    <input type="checkbox"
           class="checkbox"
           :id="task.id"
           :checked="task.done"
           @click="toggleDone"
    />
    <transition name="bounce">
    <ToDoInput v-if="hasEditMode"
               :id="task.id"
               :text="task.text"
               @change-text="changeText"
    />

    <label class="label"
           v-else
           :for="task.id"
           :class="{'done': task.done}">
      {{ task.text }}
    </label>
    </transition>

    <div class="item_btns">
      <button class="btn"
              v-if="hasEditMode"
              :disabled="isBtnSaveDisable"
              @click="handleSave">
        <SaveIcon />
      </button>

      <button class="btn"
              :disabled="hasEditMode"
              @click="handleEdit">
        <EditIcon />
      </button>

      <button class="btn"
            @click="handleDelete">
        <DeleteIcon />
      </button>
    </div>
  </li>
  </transition>
</template>

<script>
import DeleteIcon from "./icons/Delete.vue";
import EditIcon from "./icons/Edit.vue";
import ToDoInput from './Input.vue';
import SaveIcon from "./icons/Save.vue";

export default {
  name: 'ToDoListItem',
  components: { SaveIcon, DeleteIcon, EditIcon, ToDoInput },
  props: {
    task: {
      type: Object,
    },
  },
  data() {
    return {
      updatedText: '',
    }
  },
  computed: {
    hasEditMode () {
      return this.$store.state.editTaskId == this.task.id;
    },
    isBtnSaveDisable () {
      return !(this.updatedText.length + this.task.text.length);
    },
  },
  methods: {
    toggleDone () {
      this.$store.commit('toggleDone', this.task.id);
    },
    handleDelete () {
      this.$store.commit('deleteTodo', this.task.id);
    },
    handleEdit () {
      this.setEditModeId(this.task.id);
    },
    changeText(text) {
      this.updatedText = text;
    },
    handleSave () {
      if (!this.updatedText) {
        return;
      }
      this.$store.commit('editToDo', { id: this.task.id, text: this.updatedText });
      this.setEditModeId(0);
    },
    setEditModeId (id) {
      this.$store.commit('setEditModeTaskId', id);
    },

  }
}
</script>

<style type="text/css">
input {
  min-width: 200px;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  gap: 20px;
  border-radius: 10px;
  background-color: white;
  margin: 10px;
  color: black;
}
.item:hover {
  background-color: #e1adfd;
}
.done {
  text-decoration: line-through;
}
.label{
  word-break: break-all;
}
li {
  margin: 0;
}
@media(max-width: 560px) {
  .item {
    margin: 15px 0;
  }
}
</style>
