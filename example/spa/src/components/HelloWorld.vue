<template>
  <div>
    <ul>
      <li v-for="(item, i) in list"
          :key="i">
          <b>{{ item }}</b>
      </li>
    </ul>
    <input 
    type="text" 
    @keypress="handleClick" 
    v-model="text">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      list: [
        "Nintendo Switch", 
        "Sony PS4", 
        "Micro$oft Xbox"
        ],
      text: ""
    }
  },
  methods: {
    handleClick(e) {
      if (e.key === "Enter") {
        this.list.push(this.text)
        this.text = ""
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
