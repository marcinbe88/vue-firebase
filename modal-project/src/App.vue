<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome</p>
    <div v-if="showModal">
      <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>
    </div>
    <button @click = "toggleModal">Open modal</button>
    <!-- <input type = "text" ref = "name">
    <button @click = "handleClick">click me</button> -->
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My first vue app :)',
      header: "Sign up for...",
      text: "Grab something",
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
  // methods: {
  //   handleClick() {
  //     console.log(this.$refs.name)
  //     this.$refs.name.classList.add("active")
  //     this.$refs.name.focus()
  //   }
  // }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
  color: black;
}
</style>
