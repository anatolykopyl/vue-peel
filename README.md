# Vue Peel

<!-- <div style="text-align: center; margin: auto;"> -->
<div style="display: flex; justify-content: center; align-items: center; gap: 32px; font-size: 128px;">
  <img src="assets/vue.png" width="30%" style="object-fit: contain;">
  +
  <img src="assets/peel.png" width="30%" style="object-fit: contain;">
</div>

## About

*This is a Vue wrapper around the peel.js library originally created by Andrew Plummer in 2014.*

## **Check out the docs at https://anatolykopyl.github.io/vue-peel** 

# Getting Started

## Installation

```sh
npm install vue-peel
```

## Basic usage

```vue
<template>
  <Peel 
    drag
    :peel-position="{ x: 150, y: 150 }"
  >
    <template #top>
      Top
    </template>
    <template #back>
      Back
    </template>
    <template #bottom>
      Bottom
    </template>
  </Peel>
</template>

<script setup>
  import Peel from 'vue-peel'
  import 'vue-peel/style.css'
</script>
```
