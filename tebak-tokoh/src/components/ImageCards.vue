<template>
<div>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card" style="width:400px">
                    <form v-on:submit.prevent='next'>
                        <div v-if="thanks"> <img :src="animateThanks" alt=""> </div>
                    <img class="card-img-top" :src="data[counter].image" alt="Card image">
                        <label for="email">Siapakah tokoh Diatas:</label>
                    <div class="col">
                        <form v-on:submit.prevent='next'>
                        <img class="card-img-top img-fluid" :src="data[counter].image" alt="Card image">
                        <label> {{data[counter].hint}} </label><br>
                        <label>Siapakah tokoh Diatas?</label>
                     <input v-model="answer" type="text" class="form-control">
                     <button type="submit">Next</button>
                    </form>

                    </div>
                    
                </div>
            </div>
            <div class="col">
                <h3>
                    {{score}}
                </h3>
            </div>
        </div>
    </div>
</div>
</template>

<script>
let audio = new Audio('https://storage.googleapis.com/upload-mini-wp-photo/04%20All%20of%20Us.mp3');
audio.play();
export default {
    props: ['data'],
    name: 'image-cards',
    data(){
        return {
            counter : 0,
            answer: '',
            score: 0,
            thanks: false,
            animateThanks : 'https://media.giphy.com/media/l0IypwpsgNs8GYREY/giphy.gif'
        }
    },
    methods: {
        next(){
            console.log(this.answer)
            console.log(this.data[this.counter].name)
            if(this.answer === this.data[this.counter].name){
                let corSound = document.getElementById("audiocor")
                corSound.play()
                console.log('benar')
                this.score++
                this.counter++
                if(this.counter === this.data.length){
                    this.thanks = true
                }
            }
            else{
                let sound = document.getElementById("audio")
                sound.play()
                console.log('salah')
         
            }
            this.answer = ''
        }
    }
}
</script>

