<template>

  <transition name="fade">
  <li class="item">
    <input type="checkbox"
           class="checkbox"
           :id="task.id"
           :checked="task.done"
           @click="toggleDone"
    />
    <ToDoInput v-if="hasEditMode"
               :id="task.id"
               :text="task.text"
               ref="inputContainer"
               @change-text="changeText"
               @handle-enter="handleSave"
    />

    <label class="label"
           v-else
           :for="task.id"
           :class="{'done': task.done}">
      {{ task.text }}
    </label>

    <div class="item_btns">
      <button class="btn"
              data-name="save"
              v-if="hasEditMode"
              @click="handleSave">
        <SaveIcon />
      </button>

      <button class="btn"
              data-name="edit"
              :disabled="hasEditMode"
              @click="handleEdit">
        <EditIcon />
      </button>

      <button class="btn"
              data-name="delete"
              @click="handleDelete">
        <DeleteIcon />
      </button>
    </div>
  </li>
  </transition>
</template>

<script>
import Vue from 'vue';
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
      hasError: false,
    }
  },
  computed: {
    hasEditMode () {
      return this.$store.state.editTaskId == this.task.id;
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
      Vue.nextTick(() => {
        this.focusInput();
      });
    },
    changeText(text) {
      this.updatedText = text;
    },
    handleSave () {
      if (!(this.updatedText || this.task.text)) {
        return;
      }
      const text = this.updatedText.length ? this.updatedText : this.task.text;
      this.$store.commit('editToDo', { id: this.task.id, text });
      this.setEditModeId(0);
    },
    setEditModeId (id) {
      this.$store.commit('setEditModeTaskId', id);
    },
    focusInput () {
      this.$refs.inputContainer.$refs.input.focus();

    }
  },
}
</script>

<style type="text/css">
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  gap: 20px;
  border-radius: 10px;
  background-color: var(--white);
  margin: 10px;
  color: black;
  transition: color 0.5s;
}
.item:hover {
 color: var(--coral);
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
