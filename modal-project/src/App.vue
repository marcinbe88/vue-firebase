<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome</p>
    <div v-if="showModal">
      <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
        <h1>Hello vue!</h1>
        <p>Let's see how it works</p>
        <template v-slot:links>
          <a href="#">Sign up now</a>
          <a href="#">More info</a>
        </template>
      </Modal>
    </div>
    
    <div v-if="showModalTwo">
      <Modal theme="saleTwo" @close="toggleModalTwo">
        <h1>Modal Two</h1>
        <p>Let's see modal two</p>
        <template v-slot:links>
        </template>
      </Modal>
    </div>
    
    <button @click.alt = "toggleModal">Open modal (alt)</button><br>
    <button @click = "toggleModalTwo">Open another modal</button>

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
      // header: "Sign up for...",
      // text: "Grab something",
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
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
