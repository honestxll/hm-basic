<script lang="ts" setup>
import { ref } from 'vue'
interface Post {
  title: string
  description: string
  author: string
  publishedAt: string
  urlToImage: string
}
const posts = ref<Post[]>([])

fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=f5e6749812cd40e583b615dd99f7f1f7')
  .then((res) => res.json())
  .then((res) => {
    posts.value = res.articles
  })
</script>

<template>
  <div class="blog-container">
    <div class="post-list space-y-2">
      <article class="post-item" v-for="(post, index) in posts" :key="index">
        <div class="post-body">
          <h3 class="post-title">{{ post.title }}</h3>
          <div class="post-description">
            {{ post.description }}
          </div>
          <div class="post-meta">
            <span class="post-meta__author">{{ post.author }}</span>
            <span class="post-meta__time">{{ post.publishedAt }}</span>
          </div>
        </div>
        <div class="post-thumbnail">
          <img :src="post.urlToImage" :alt="post.title" />
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="scss">
.blog-container {
  width: 1100px;
  margin: 0 auto;
  padding-top: 100px;
}
.post-item {
  display: flex;
  cursor: pointer;

  &:hover {
    color: lighten(#000, 30%);
    transition: color 0.2s ease-in-out;
  }
  .post-body {
    flex-grow: 1;
  }
  .post-thumbnail {
    flex-shrink: 0;
    width: 300px;
    height: 170px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      vertical-align: bottom;
    }
  }
}
</style>
