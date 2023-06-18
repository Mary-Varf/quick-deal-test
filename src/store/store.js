import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [],
    editTaskId: 0,
  },
  mutations: {
    setTodos (state) {
      if (!localStorage.getItem('todos')) {
        return [];
      }
      const todosList = JSON.parse(localStorage.getItem('todos'));

      todosList.map((todo) => {
        state.todos.push(todo);
      })
    },

    setEditModeTaskId (state, id) {
      state.editTaskId = id;
    },

    toggleDone (state, todoId) {
      let todo = store.getters.thisToDo(todoId);
      todo.done = !todo.done;
    },

    addToDo (state, todoText) {
      console.log(state.todos.length)
      const newId = !!state.todos.length ? state.todos.length + 1 : 1;
        state.todos.push({
        id: newId,
        text: todoText,
        done: false
      });
      setLocalStore(state.todos);
    },

    deleteTodo (state, todoId) {
      let todoIndex = state.todos.indexOf(store.getters.thisToDo(todoId));
      state.todos.splice(todoIndex, 1);
      setLocalStore(state.todos);
    },

    editToDo (state, { id, text }) {
      let todo = store.getters.thisToDo(id);
      todo.text = text;
      setLocalStore(state.todos);
    }
  },

  getters: {
    thisToDo: (state) => (todoId) => {
      return state.todos.find((todo) => todo.id === todoId)
    },
  },
})

function setLocalStore (todos)  {
  localStorage.setItem('todos', JSON.stringify(todos));
}
