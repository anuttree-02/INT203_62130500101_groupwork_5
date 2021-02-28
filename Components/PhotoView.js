app.component('select-image',{
    props:{
        searchselectphotos: {
            type: Array,
            require: true
        },
        select_image: Boolean,
        searchphotos: {
            type: Array,
            require: true
        }
    },
    template: 
    /*html*/
    `
    
    <div v-if="select_image" class="h-auto w-auto  bg-blue-100	mx-auto my-auto px-2 pb-10">
    <div v-for="(photo, index) in searchselectphotos" class="ml-96 flex flex-row">

      <img :src="photo.src" class="w-1/5 h-4/5 ml-52">
      <button><span @click="closePhoto" v-if="select_image == true" class="material-icons bg-white ml-2 mb-96">
          close
        </span></button>
    </div>`,
    methods: {
        closePhoto(){
            this.$emit('close-photo')
        },
        zoomPhoto(index){
            this.$emit('zoom-photo',index)
        }
        
    }
})