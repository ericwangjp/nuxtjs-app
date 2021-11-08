<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
        <span :class="{ done: todo.done }">{{ todo.payload }}</span>
      </li>
      <li>
        <input
          type="text"
          placeholder="你需要做什么？"
          @keyup.enter="addTodo"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    todos() {
      return this.$store.state.todos.list
    },
  },
  methods: {
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle',
    }),
  },
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
.done {
  text-decoration: line-through;
}
</style>
