export default {
  // 类似 computed
  fullName (state) {
    return `${state.firstName}  ${state.lastName}`
  }
}