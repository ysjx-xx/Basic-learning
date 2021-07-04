export default  {
  add(state) {
    state.counter++;
  },
  sub(state) {
    state.counter--;
  },
  adds(state, num) {
    state.counter += num;
  },
  addstar(state, student) {
    state.stars.push(student);
  }
}
