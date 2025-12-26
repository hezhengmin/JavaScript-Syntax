<template>
  <div class="tutorial-layout">
    <aside class="sidebar">
      <h3>{{ title }}</h3>
      <nav>
        <slot name="nav"></slot>
      </nav>
    </aside>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'TutorialLayout',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.tutorial-layout {
  display: flex;
  min-height: calc(100vh - 80px);
}

.sidebar {
  width: 250px;
  background-color: #f5f5f5;
  padding: 2rem 1rem;
  border-right: 1px solid #e0e0e0;
}

.sidebar h3 {
  color: #42b983;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar nav a {
  padding: 0.75rem 1rem;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s;
}

.sidebar nav a:hover {
  background-color: #e0e0e0;
}

.sidebar nav a.router-link-active {
  background-color: #42b983;
  color: white;
}

.content {
  flex: 1;
  padding: 2rem;
  background-color: white;
}

@media (max-width: 768px) {
  .tutorial-layout {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
  }
}
</style>
