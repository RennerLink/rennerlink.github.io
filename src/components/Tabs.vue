<script setup lang="ts">
import { ref } from 'vue';

const { tabs } = defineProps<{
  tabs: {
    title: string,
    sections?: {
      title: string,
      body: string
    }[],
    slotName?: string
  }[]
}>();

const selectedTab = ref(0);
</script>

<template>
  <div class="tabs">
    <div class="tabTitles">
      <span v-for="(tab, i) in tabs" @click="selectedTab = i" :class="{selected: selectedTab == i}">{{tab.title}}</span>
    </div>
    <div v-for="(tab, i) in tabs" class="content" v-show="selectedTab == i">
      <template v-if="tab.sections != null" v-for="section in tab.sections">
        <h4>{{section.title}}</h4>
        <p>{{section.body}}</p>
      </template>
      <slot v-if="tab.slotName != null" :name="tab.slotName" />
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
