<template>
  <div class="tutorial-page">
    <h1>事件的基本使用</h1>
    <p class="description">Vue 使用 v-on 指令（簡寫為 @）來監聽 DOM 事件。</p>
    
    <section class="example">
      <h2>1. 不傳參數</h2>
      <div class="demo">
        <p>點擊次數：{{ count1 }}</p>
        <button @click="handleClick1">點擊我（不傳參）</button>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;button @click="handleClick1"&gt;點擊我&lt;/button&gt;

methods: {
  handleClick1(event) {
    console.log('事件對象：', event)
    this.count1++
  }
}</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>2. 傳遞參數</h2>
      <div class="demo">
        <p>訊息：{{ message }}</p>
        <button @click="handleClick2('Hello')">傳遞 Hello</button>
        <button @click="handleClick2('Vue')">傳遞 Vue</button>
        <button @click="handleClick2('World')">傳遞 World</button>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;button @click="handleClick2('Hello')"&gt;傳遞 Hello&lt;/button&gt;

methods: {
  handleClick2(msg) {
    this.message = msg
  }
}</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>3. 傳遞事件對象與參數</h2>
      <div class="demo">
        <p>最後點擊的按鈕：{{ lastButton }}</p>
        <button @click="handleClick3($event, '按鈕1')">按鈕1</button>
        <button @click="handleClick3($event, '按鈕2')">按鈕2</button>
        <button @click="handleClick3($event, '按鈕3')">按鈕3</button>
        <p class="info">打開控制台查看事件對象</p>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;button @click="handleClick3($event, '按鈕1')"&gt;按鈕1&lt;/button&gt;

methods {
  handleClick3(event, name) {
    console.log('事件對象：', event)
    console.log('參數：', name)
    this.lastButton = name
  }
}</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>4. 多個事件處理器</h2>
      <div class="demo">
        <p>狀態：{{ status }}</p>
        <button @click="method1(); method2()">執行兩個方法</button>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;button @click="method1(); method2()"&gt;執行兩個方法&lt;/button&gt;

methods: {
  method1() {
    console.log('方法1執行')
  },
  method2() {
    console.log('方法2執行')
  }
}</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>5. 內聯語句</h2>
      <div class="demo">
        <p>計數：{{ inlineCount }}</p>
        <button @click="inlineCount++">+1</button>
        <button @click="inlineCount--">-1</button>
        <button @click="inlineCount = 0">重置</button>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;button @click="inlineCount++"&gt;+1&lt;/button&gt;
&lt;button @click="inlineCount--"&gt;-1&lt;/button&gt;
&lt;button @click="inlineCount = 0"&gt;重置&lt;/button&gt;</code></pre>
      </div>
    </section>

    <section class="explanation">
      <h2>說明</h2>
      <ul>
        <li><strong>v-on:click</strong> 可以簡寫為 <strong>@click</strong></li>
        <li>方法可以不帶括號，Vue 會自動傳入事件對象</li>
        <li>需要同時傳遞事件對象和參數時，使用 <strong>$event</strong></li>
        <li>可以在事件處理中使用內聯語句</li>
        <li>可以使用分號分隔多個語句</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EventBasic',
  data() {
    return {
      count1: 0,
      message: '尚未點擊',
      lastButton: '尚未點擊',
      status: '待執行',
      inlineCount: 0
    }
  },
  methods: {
    handleClick1(event) {
      console.log('事件對象：', event)
      this.count1++
    },
    handleClick2(msg) {
      this.message = msg
    },
    handleClick3(event, name) {
      console.log('事件對象：', event)
      console.log('參數：', name)
      this.lastButton = name
    },
    method1() {
      console.log('方法1執行')
      this.status = '方法1和方法2已執行'
    },
    method2() {
      console.log('方法2執行')
    }
  }
}
</script>

<style scoped>
.tutorial-page {
  max-width: 900px;
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
  margin-bottom: 1.5rem;
  border-left: 4px solid #42b983;
}

.demo p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.demo button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.demo button:hover {
  background-color: #35a372;
}

.demo button:active {
  transform: scale(0.98);
}

.info {
  color: #666;
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 1rem !important;
}

.code {
  background-color: #2c3e50;
  color: #42b983;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
}

.code h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.code pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  line-height: 1.5;
}

.code code {
  color: #42b983;
  font-size: 0.95rem;
}

.explanation {
  background-color: #f0f9ff;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
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
</style>
