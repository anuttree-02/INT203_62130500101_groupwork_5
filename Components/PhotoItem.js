app.component('img-item',{
    props:{
        searchphotos: {
            type: Array,
            require: true
        }
    },
    template: 
    /*html*/
    `
    <div>
        <ul v-if="searchphotos.length !== 0" class="grid grid-cols-2 gap-y-10 ml-10 lg:grid-cols-5">
          <li v-for="(photo, index) in searchphotos">

            <button @click="zoomPhoto(index)"><img :src="photo.src" class="px-2 py-5 h-auto w-" :alt="photo.title"></button>
            
            <div class="flex flex-row justify-start space-x-1">

              <button
                class="bg-blue-300 text-white  font-serif px-3 my-auto  ml-2 text-lg rounded-md focus:outline-none"
                v-on:click="favorite(index)">
                Like
                <span class="material-icons mt-1 text-white text-xl ml-1" v-if="photo.like > 0">favorite</span>

              </button>

            </div>
            <p class="ml-2 text-lg font-serif text-gray-500">{{ photo.title }}</p>
          </li>
        </ul>

        <ul v-else>
          <li class="text-lg font-serif text-gray-500 flex justify-center">Not have any Photo</li>
        </ul>
      </div>
    `,
    methods: {
        favorite(index){
            this.$emit('like-photo',index)
        },
        zoomPhoto(index){
            this.$emit('zoom-photo',index)
        }
        
    }
})