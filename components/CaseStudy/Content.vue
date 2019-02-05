<template>
  <container>
    <div>
      <h2 :style='{color: color}'>{{title}}</h2>
      <div class='tagline'>{{tagline}}</div>
      <div class='clients'>
        <img
          v-for='(folder,i) in clients'
          :src='`clients/${folder}/${logoFileName}`'
          :key='i'
        />
      </div>
    </div>
  </container>
</template>
