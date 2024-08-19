<script setup lang="ts">
import { ref } from 'vue';

const subject = ref("");
const body = ref("");

const send = () => {
  window.open(`mailto:rennerlinkpdx@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(body.value)}`, '_blank').focus();
  console.log(subject._value);
}
</script>

<template>
  <input type="text" placeholder="Subject..." v-model="subject" />
  <textarea placeholder="Body..." rows="6" v-model="body" />
  <button @click="send">Send</button>
</template>

<style scoped>
textarea {
  resize: none; 
}

textarea, input {
  border: none;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 0.25rem;
  color: #666;
  font-size: 1rem;
  outline: none;
}

textarea:focus, input:focus {
  outline: 2px #777 solid;
}

button {
  background: transparent;
  border: 2px #000 solid;
  border-radius: 0.25rem;
  height: 2rem;
  cursor: pointer;
}

button:active {
  background: #000;
  border: none;
  color: #fff;
}
</style>
