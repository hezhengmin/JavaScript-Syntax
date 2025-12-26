# Vue 3 教學專案

這個專案整理了 Vue 3 的新特性與進階範例。

## 🚀 Vue 3 新特性

### Composition API
- setup 函數
- ref 和 reactive
- computed 和 watch
- 生命週期鉤子

### 新增功能
- Teleport
- Suspense  
- Fragment（多根節點）
- emits 選項
- Custom Directives API 更新

## 📚 教學內容（待整理）

本專案將整理以下 Vue 3 相關教學：

1. **基礎部分**
   - Composition API 入門
   - ref vs reactive
   - toRef 和 toRefs

2. **響應式系統**
   - computed
   - watch 和 watchEffect
   - 響應式原理（Proxy）

3. **組件進階**
   - Props 和 Emits
   - 插槽（Slots）
   - Provide/Inject
   - Teleport

4. **路由與狀態管理**
   - Vue Router 4
   - Pinia（新一代狀態管理）

5. **工具與生態**
   - Vite 構建工具
   - TypeScript 支持
   - 組合式函數（Composables）

## 🛠️ 技術棧

- Vue 3.x
- Vue Router 4.x
- Vite 6.x

## 🚀 快速開始

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 構建生產版本
npm run build

# 預覽生產構建
npm run preview
```

## 📖 從 Vue 2 遷移

### 主要差異

1. **創建應用實例**
```javascript
// Vue 2
new Vue({
  render: h => h(App)
}).$mount('#app')

// Vue 3
createApp(App).mount('#app')
```

2. **數據選項**
```javascript
// Vue 2
data() {
  return { count: 0 }
}

// Vue 3 Composition API
import { ref } from 'vue'
setup() {
  const count = ref(0)
  return { count }
}
```

3. **生命週期**
```javascript
// Vue 2
created() { }
mounted() { }

// Vue 3 Composition API
import { onMounted } from 'vue'
setup() {
  onMounted(() => { })
}
```

## 🔗 相關資源

- [Vue 3 官方文檔](https://vuejs.org/)
- [Vue Router 4 文檔](https://router.vuejs.org/)
- [Pinia 文檔](https://pinia.vuejs.org/)
- [Vite 文檔](https://vitejs.dev/)

## 📝 注意事項

- 本專案基於 Vue 3.x 版本
- 主要展示 Composition API 用法
- 兼容 Options API（向下兼容）
- 建議先學習 Vue 2 基礎再學習 Vue 3 新特性

## 🎯 學習路徑

1. 了解 Vue 2 基礎（參見 vue2-tutorial 專案）
2. 學習 Composition API 基本概念
3. 掌握響應式系統（ref、reactive）
4. 學習組合式函數（Composables）
5. 深入理解 Vue 3 新特性

## 📦 專案結構規劃

```
vue3-tutorial/
├── src/
│   ├── views/
│   │   ├── Home.vue                 # 首頁
│   │   ├── 01-Basics/               # 基礎
│   │   │   ├── RefAndReactive.vue
│   │   │   ├── ComputedAndWatch.vue
│   │   │   └── ...
│   │   ├── 02-Components/           # 組件
│   │   │   ├── PropsEmits.vue
│   │   │   ├── Slots.vue
│   │   │   └── ...
│   │   ├── 03-Advanced/             # 進階
│   │   │   ├── Composables.vue
│   │   │   ├── Teleport.vue
│   │   │   └── ...
│   │   └── ...
│   ├── components/                  # 組件
│   ├── composables/                 # 組合式函數
│   ├── router/                      # 路由
│   └── ...
└── ...
```
