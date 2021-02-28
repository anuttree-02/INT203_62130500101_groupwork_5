const app = Vue.createApp({
    data() {
        return {
            msg: 'Hello & Welcome, Vue3',
            show: { icon: true, searchbar: false },
            input: '',
            select_image: false,
            photos: [{
                src: 'Gallery/1.jpg',
                title: 'Choi Hyun Suk',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'Gallery/2.jpg',
                title: 'Park Ji Hoon',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'Gallery/3.jpg',
                title: 'Kanemoto Yoshinori',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'Gallery/4.jpg',
                title: 'Kim Jun Kyu',
                favor: false,
                like: 0,
                zoom: false

            },
            {
                src: 'Gallery/5.jpg',
                title: 'Takata Mashiho',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'Gallery/6.jpg',
                title: 'Yoon Jae Hyuk',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'Gallery/7.jpg',
                title: 'Hamada Asahi',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'Gallery/8.jpg',
                title: 'Bang Ye Dam',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'Gallery/9.jpg',
                title: 'Kim Do Young',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'Gallery/10.jpg',
                title: 'Watanabe Haruto',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'Gallery/11.jpg',
                title: 'Park Jeong Woo',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'Gallery/12.jpg',
                title: 'So Jung Hwan',
                favor: false,
                like: 0,
                zoom: false
            },

            ],


        }
    },

    methods: {
        favorite(index) {
            this.photos[index].favor = !this.photos[index].favor
            this.photos[index].like = this.photos[index].like +1
            
        },

        toggle(){
            this.show.icon = !this.show.icon
            this.show.searchbar = !this.show.searchbar
            this.input = ''
        },

        zoomPhoto(index){
            for (let i = 0; i < this.photos.length; i++) {
                if(i == index){
                    this.photos[i].zoom = true;
                    console.log('select :' + index);
                } else {
                    this.photos[i].zoom = false;
                }
            }
            this.select_image = true
        },

        closePhoto(){
            this.select_image = false
        }

    },

    computed: {
        searchphotos(){
                return this.photos.filter(c => {
                    return c.title.toLowerCase().includes(this.input.toLowerCase())
                })
            
        },

        countPhoto(){   
            return this.photos.length
        },

        searchSelectPhoto(){
            return this.photos.filter(c => c.zoom)
        },
        countLike() {
            return this.photos.filter(t => t.like).length
        }
    }   

 

})