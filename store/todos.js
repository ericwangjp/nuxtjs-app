export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, payload) {
    state.list.push({ payload, done: false })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
}
