<template>
  <div>
  <h2>counter</h2>
  <p>{{count}}</p>
  <button @click="add">+1</button>    
  </div>
</template>

<script>
export default{
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    add(){
      this.$store.commit("counter")
    }
  }
} 
</script>