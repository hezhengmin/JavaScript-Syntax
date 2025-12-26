<template>
  <div class="tutorial-page">
    <h1>插槽 (Slot)</h1>
    <p class="description">插槽是 Vue 實現內容分發的 API，讓父組件可以向子組件插入內容。</p>

    <section class="example">
      <h2>1. 默認插槽</h2>
      <div class="demo">
        <div class="result">
          <alert-box>
            <strong>警告！</strong>
            這是一條重要提示信息。
          </alert-box>
          <alert-box>請注意保存您的工作內容。</alert-box>
        </div>
      </div>

      <div class="code">
        <h3>子組件定義：</h3>
        <pre><code>Vue.component('alert-box', {
  template: `
    &lt;div class="alert"&gt;
      &lt;span class="icon"&gt;⚠️&lt;/span&gt;
      &lt;slot&gt;&lt;/slot&gt;
    &lt;/div&gt;
  `
})</code></pre>

        <h3>父組件使用：</h3>
        <pre><code>&lt;alert-box&gt;
  &lt;strong&gt;警告！&lt;/strong&gt;這是一條重要提示信息。
&lt;/alert-box&gt;</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>2. 具名插槽</h2>
      <div class="demo">
        <div class="result">
          <card-layout>
            <template v-slot:header>
              <h3>📌 文章標題</h3>
            </template>

            <template v-slot:default>
              <p>這是文章的主要內容區域。</p>
              <p>可以包含任意多的內容。</p>
            </template>

            <template v-slot:footer>
              <small>發布時間：2024-12-26</small>
            </template>
          </card-layout>
        </div>
      </div>

      <div class="code">
        <h3>子組件定義：</h3>
        <pre><code>Vue.component('card-layout', {
  template: `
    &lt;div class="card"&gt;
      &lt;header&gt;
        &lt;slot name="header"&gt;&lt;/slot&gt;
      &lt;/header&gt;
      &lt;main&gt;
        &lt;slot&gt;&lt;/slot&gt;
      &lt;/main&gt;
      &lt;footer&gt;
        &lt;slot name="footer"&gt;&lt;/slot&gt;
      &lt;/footer&gt;
    &lt;/div&gt;
  `
})</code></pre>

        <h3>父組件使用：</h3>
        <pre><code>&lt;card-layout&gt;
  &lt;template v-slot:header&gt;
    &lt;h3&gt;標題&lt;/h3&gt;
  &lt;/template&gt;
  
  &lt;template v-slot:default&gt;
    &lt;p&gt;內容&lt;/p&gt;
  &lt;/template&gt;
  
  &lt;template v-slot:footer&gt;
    &lt;small&gt;底部&lt;/small&gt;
  &lt;/template&gt;
&lt;/card-layout&gt;</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>3. 作用域插槽</h2>
      <div class="demo">
        <div class="result">
          <user-list :users="users">
            <template v-slot="{ user }">
              <div class="user-item">
                <span class="user-name">{{ user.name }}</span>
                <span class="user-role" :class="user.role">
                  {{ user.role }}
                </span>
              </div>
            </template>
          </user-list>
        </div>
      </div>

      <div class="code">
        <h3>子組件定義（傳遞數據）：</h3>
        <pre><code>Vue.component('user-list', {
  props: ['users'],
  template: `
    &lt;div class="user-list"&gt;
      &lt;slot 
        v-for="user in users" 
        :user="user" 
        :key="user.id"&gt;
      &lt;/slot&gt;
    &lt;/div&gt;
  `
})</code></pre>

        <h3>父組件使用（接收數據）：</h3>
        <pre><code>&lt;user-list :users="users"&gt;
  &lt;template v-slot:default="slotProps"&gt;
    &lt;div&gt;
      {{ slotProps.user.name }}
      {{ slotProps.user.role }}
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/user-list&gt;</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>4. 默認內容</h2>
      <div class="demo">
        <div class="result">
          <submit-button>提交表單</submit-button>
          <submit-button></submit-button>
        </div>
      </div>

      <div class="code">
        <h3>子組件定義（帶默認內容）：</h3>
        <pre><code>Vue.component('submit-button', {
  template: `
    &lt;button class="submit-btn"&gt;
      &lt;slot&gt;默認按鈕&lt;/slot&gt;
    &lt;/button&gt;
  `
})</code></pre>

        <h3>說明：</h3>
        <pre><code>// 有內容時顯示傳入的內容
&lt;submit-button&gt;提交表單&lt;/submit-button&gt;

// 無內容時顯示默認內容
&lt;submit-button&gt;&lt;/submit-button&gt;</code></pre>
      </div>
    </section>

    <section class="explanation">
      <h2>插槽說明</h2>
      <ul>
        <li>
          <strong>默認插槽</strong>
          ：使用 &lt;slot&gt;&lt;/slot&gt; 定義內容插入點
        </li>
        <li>
          <strong>具名插槽</strong>
          ：使用 name 屬性命名插槽，如 &lt;slot name="header"&gt;
        </li>
        <li>
          <strong>作用域插槽</strong>
          ：子組件可以向插槽傳遞數據
        </li>
        <li>
          <strong>v-slot 指令</strong>
          ：縮寫為 #，如 v-slot:header 可以寫成 #header
        </li>
        <li>
          <strong>默認內容</strong>
          ：在 &lt;slot&gt; 標籤內定義的內容是默認內容
        </li>
        <li>
          <strong>插槽 props</strong>
          ：作用域插槽可以接收子組件傳遞的任意數據
        </li>
      </ul>
    </section>

    <section class="tips">
      <h2>💡 注意事項</h2>
      <ul>
        <li>✨ v-slot 只能添加在 &lt;template&gt; 上（除了獨占默認插槽）</li>
        <li>📌 v-slot:default 可以簡寫為 v-slot</li>
        <li>⚠️ 父級模板里的所有內容都是在父級作用域中編譯的</li>
        <li>💡 子模板里的所有內容都是在子作用域中編譯的</li>
        <li>🎯 舊語法 slot 和 slot-scope 已廢棄，建議使用 v-slot</li>
      </ul>
    </section>
  </div>
</template>

<script>
// 警告框組件
const AlertBox = {
  template: `
    <div class="alert">
      <span class="icon">⚠️</span>
      <slot></slot>
    </div>
  `,
};

// 卡片布局組件
const CardLayout = {
  template: `
    <div class="card">
      <header class="card-header">
        <slot name="header"></slot>
      </header>
      <main class="card-body">
        <slot></slot>
      </main>
      <footer class="card-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  `,
};

// 用戶列表組件（作用域插槽）
const UserList = {
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  template: `
    <div class="user-list">
      <template v-for="user in users" :key="user.id">
        <slot :user="user"></slot>
      </template>
    </div>
  `,
};

// 提交按鈕組件
const SubmitButton = {
  template: `
    <button class="submit-btn">
      <slot>默認按鈕</slot>
    </button>
  `,
};

export default {
  name: "ComponentSlot",
  components: {
    AlertBox,
    CardLayout,
    UserList,
    SubmitButton,
  },
  data() {
    return {
      users: [
        { id: 1, name: "張三", role: "admin" },
        { id: 2, name: "李四", role: "user" },
        { id: 3, name: "王五", role: "guest" },
      ],
    };
  },
};
</script>

<style scoped>
.tutorial-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #42b983;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.example {
  margin-bottom: 3rem;
}

h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border-bottom: 2px solid #42b983;
  padding-bottom: 0.5rem;
}

.demo {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #42b983;
  margin-bottom: 1rem;
}

.result {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

/* 警告框樣式 */
.alert {
  background-color: #fff3cd;
  border: 1px solid #ffc107;
  border-left: 4px solid #ff9800;
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 500px;
  width: 100%;
}

.alert .icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* 卡片布局樣式 */
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 500px;
  width: 100%;
}

.card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
}

.card-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.card-body {
  padding: 1.5rem;
  color: #666;
  line-height: 1.6;
}

.card-footer {
  background-color: #f8f9fa;
  padding: 1rem 1.5rem;
  border-top: 1px solid #dee2e6;
  color: #6c757d;
}

/* 用戶列表樣式 */
.user-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 400px;
}

.user-item {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.user-item:hover {
  transform: translateX(5px);
}

.user-name {
  font-weight: 500;
  color: #2c3e50;
}

.user-role {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

.user-role.admin {
  background-color: #ef4444;
  color: white;
}

.user-role.user {
  background-color: #3b82f6;
  color: white;
}

.user-role.guest {
  background-color: #6b7280;
  color: white;
}

/* 提交按鈕樣式 */
.submit-btn {
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.submit-btn:active {
  transform: translateY(0);
}

.code {
  background-color: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.code h3 {
  color: #2c3e50;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.code pre {
  background-color: #2d2d2d;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 0;
}

.code code {
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.explanation {
  background-color: #f0f9ff;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
  margin-bottom: 2rem;
}

.explanation ul {
  margin-left: 1.5rem;
}

.explanation li {
  margin-bottom: 0.8rem;
  line-height: 1.6;
  color: #2c3e50;
}

.explanation strong {
  color: #3b82f6;
}

.tips {
  background-color: #fffbeb;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #f59e0b;
}

.tips ul {
  margin-left: 1.5rem;
}

.tips li {
  margin-bottom: 0.8rem;
  line-height: 1.6;
  color: #2c3e50;
}
</style>
