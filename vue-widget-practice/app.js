 const app = Vue.createApp({
    data() {
        return{
            url: "http://racepix.pl",
            showBooks: true,
            books: [
                {title: 'name of the book', author: 'patrick rothfuss', img: '', isFav: true},
                {title: 'harry potter 1', author: 'j k rowling', img: '', isFav: false},
                {title: 'harry potter 4', author: 'j k rowling', img: '', isFav: true}
            ],
            // title: "The Final Empire!",
            // author: "Brandon Sanderson",
            // age: 45,
            x: 0,
            y: 0,
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
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleIsFav(book) {
            book.isFav = !book.isFav
        },
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
 })

 app.mount('#app')

