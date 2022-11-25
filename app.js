 const app = Vue.createApp({
    data() {
        return{
            showBooks: true,
            title: "The Final Empire!",
            author: "Brandon Sanderson",
            age: 45,
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        // changeTitle(title) {
        // //    this.title = "Harry Potter"
        // this.title = title
        // }
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {

        }
    }
 })

 app.mount('#app')

