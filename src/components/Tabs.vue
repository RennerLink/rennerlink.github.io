<script setup lang="ts">
import { ref } from 'vue';

const tab = ref(0);
</script>

<template>
  <div class="tabs">
    <div class="tabTitles">
      <span @click="tab = 0" :class="{selected: tab == 0}">Skills</span>
      <span @click="tab = 1" :class="{selected: tab == 1}">Experience</span>
    </div>
    <div class="content" v-show="tab == 0">
      <h4>Visual Design</h4>
      <p>Websites, infographics, videos, slideshows.</p>
      <h4>Visual Conception</h4>
      <p>I can easily think up objects or entire environments in 3D.</p>
      <h4>Problem Solving</h4>
      <p>Finding creative solutions to everyday problems.</p>
    </div>
    <div class="content" v-show="tab == 1">
      <h4>2023 & 2024</h4>
      <p>ACE Mentorship</p>
      <h4>Spring 2022</h4>
      <p>OSRO Soccer Referee</p>
      <h4>Summer 2020</h4>
      <p>Started a neighborhood bottle recycling service with a friend.</p>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.1rem;
}

.tabTitles {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.tabTitles > span {
  cursor: pointer;
  user-select: none;
}

.content {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.content > h4 {
  color: #026;
}

.tabTitles > span::after {
  content: '';
  display: block;
  width: 0;
  height: 0.25rem;
  background: #028;
  transition: width 0.25s ease-in-out;
  margin-top: 0.15rem;
}

.tabTitles > span.selected::after {
  width: 100%;
}
</style>
