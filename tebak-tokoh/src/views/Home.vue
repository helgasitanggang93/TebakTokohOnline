<template>
    <div class="center text-center">
    <h1 data-heading="Tebak Gambar">
		<span contenteditable data-heading="Tebak Gambar">Tebak Gambar</span>
	</h1>
   <div class="row">
      <form class="form-input col-5 mx-auto" @submit.prevent="register">
      <label class="sr-only"></label>
      <input type="text" class="form-control" v-model="username" required>
    </form>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data(){
    return{
      username:''
    }
  },
  created(){
    console.log('ini rooomnya')
  },
  methods:{
    register(){
       localStorage.setItem('username', this.username);
       this.$store.commit('register',this.username)
       this.$store.dispatch('getAllRoom')
       this.$router.push('/lobby')

    }
  }
};
</script>
<style>


</style>
