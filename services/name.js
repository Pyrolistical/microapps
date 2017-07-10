export default (localStorage) => {
  const self = {
    save(name) {
      localStorage.setItem('name', name)
    },

    get() {
      return localStorage.getItem('name')
    }
  }

  return self
}
