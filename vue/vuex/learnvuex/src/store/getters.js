export default {
  dayu20(state) {
    return state.stars.filter(stars => {
      return stars.age > 20;
    });
  },
  dayuage(state) {
    return function(age) {
      return state.stars.filter(stars => stars.age > age);
    };
  }
}
