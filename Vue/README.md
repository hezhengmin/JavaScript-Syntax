# Vue 教學專案整理

本目錄包含完整的 Vue 2 和 Vue 3 教學專案，以及原始的 HTML 教學範例。

## 📁 專案結構

```
Vue/
├── vue2-tutorial/              # Vue 2 完整教學專案 ⭐
│   ├── src/
│   │   ├── views/              # 各章節教學頁面
│   │   │   ├── 01-Basic/       # 起步與基礎
│   │   │   ├── 02-Events/      # 事件處理
│   │   │   ├── 03-Computed/    # 計算屬性
│   │   │   ├── 04-Watch/       # 偵聽器
│   │   │   ├── 05-ClassStyle/  # Class 與 Style 綁定
│   │   │   ├── 06-Conditional/ # 條件渲染
│   │   │   ├── 07-List/        # 列表渲染
│   │   │   ├── 08-Form/        # 表單輸入
│   │   │   ├── 09-Directives/  # 指令
│   │   │   ├── 10-Lifecycle/   # 生命週期
│   │   │   ├── 11-Component/   # 組件
│   │   │   ├── 12-Filters/     # 過濾器
│   │   │   ├── 13-Storage/     # 本地存儲
│   │   │   └── 14-Transition/  # 過渡動畫
│   │   ├── components/         # 共用組件
│   │   ├── router/             # 路由配置
│   │   └── main.js            # 入口文件
│   └── README_TUTORIAL.md      # 詳細說明文檔
│
├── vue3-tutorial/              # Vue 3 教學專案 ⭐
│   ├── src/
│   │   ├── views/              # Vue 3 新特性教學
│   │   ├── composables/        # 組合式函數範例
│   │   └── ...
│   └── README_TUTORIAL.md      # 詳細說明文檔
│
├── 起步/                       # 原始 HTML 教學
├── 事件處理/
├── Computed應用/
├── 偵聽器Watch/
├── Class和Style綁定/
├── 渲染條件/
├── 渲染列表/
├── 表單輸入/
├── 內建指令/
├── 自定義指令/
├── 生命週期/
├── 組件Component/
├── 組件基礎/
├── 過濾器/
├── 瀏覽器本地存儲/
├── Form Validation/
├── Transition動畫/
├── 雙向綁定/
└── 範例/
    ├── Vite/
    ├── VueCli/
    ├── Vue全選與取消全選/
    ├── 中式資料綁定/
    ├── 全家桶/
    └── 收集表單數據/
```

## 🎯 學習建議

### 初學者路徑

1. **從 vue2-tutorial 專案開始**
   ```bash
   cd vue2-tutorial
   npm install
   npm run serve
   ```
   訪問 http://localhost:8080 開始學習

2. **按照章節順序學習**
   - 01-起步：理解 Vue 基本概念
   - 02-事件處理：學習用戶交互
   - 03-計算屬性：掌握響應式計算
   - 04-偵聽器：監聽數據變化
   - 05-樣式綁定：動態樣式處理
   - 06-條件渲染：控制元素顯示
   - 07-列表渲染：處理數組數據
   - 08-表單輸入：雙向數據綁定
   - 09-指令：內建與自定義指令
   - 10-生命週期：理解組件生命週期
   - 11-組件：組件化開發
   - 12-過濾器：數據格式化
   - 13-存儲：本地數據持久化
   - 14-動畫：頁面動效

3. **進階到 Vue 3**
   ```bash
   cd vue3-tutorial
   npm install
   npm run dev
   ```
   學習 Composition API 和 Vue 3 新特性

### 進階學習者

如果你已經熟悉 Vue 2，可以直接學習：
- vue3-tutorial：Composition API
- 範例/Vite：現代化構建工具
- 組合式函數（Composables）
- TypeScript 集成

## 🚀 快速啟動

### Vue 2 專案
```bash
cd vue2-tutorial
npm install
npm run serve
```

### Vue 3 專案
```bash
cd vue3-tutorial
npm install  
npm run dev
```

## 📚 教學內容對照

| 主題 | HTML 範例位置 | Vue 2 專案位置 | Vue 3 專案位置 |
|------|--------------|---------------|---------------|
| 起步 | /起步/ | /01-Basic/ | /01-Basics/ |
| 事件處理 | /事件處理/ | /02-Events/ | /02-Events/ |
| 計算屬性 | /Computed應用/ | /03-Computed/ | /03-Computed/ |
| 偵聽器 | /偵聽器Watch/ | /04-Watch/ | /04-Watch/ |
| 樣式綁定 | /Class和Style綁定/ | /05-ClassStyle/ | /05-ClassStyle/ |
| 條件渲染 | /渲染條件/ | /06-Conditional/ | /06-Conditional/ |
| 列表渲染 | /渲染列表/ | /07-List/ | /07-List/ |
| 表單 | /表單輸入/ | /08-Form/ | /08-Form/ |
| 指令 | /內建指令/, /自定義指令/ | /09-Directives/ | /09-Directives/ |
| 生命週期 | /生命週期/ | /10-Lifecycle/ | /10-Lifecycle/ |
| 組件 | /組件Component/, /組件基礎/ | /11-Component/ | /11-Component/ |
| 過濾器 | /過濾器/ | /12-Filters/ | （Vue 3 已移除）|
| 存儲 | /瀏覽器本地存儲/ | /13-Storage/ | /13-Storage/ |
| 動畫 | /Transition動畫/ | /14-Transition/ | /14-Transition/ |

## 💡 特色功能

### vue2-tutorial 專案特色
- ✅ 完整的路由導航系統
- ✅ 美觀的 UI 設計
- ✅ 互動式範例演示
- ✅ 詳細的代碼說明
- ✅ 每個概念都有實際案例
- ✅ 響應式設計，支持移動端

### vue3-tutorial 專案特色
- ✅ Composition API 範例
- ✅ 組合式函數（Composables）
- ✅ Vue 3 新特性演示
- ✅ 現代化構建工具（Vite）
- ✅ TypeScript 支持（可選）

## 🔄 專案對比

| 特性 | HTML 範例 | vue2-tutorial | vue3-tutorial |
|------|----------|--------------|---------------|
| 學習曲線 | 最簡單 | 簡單 | 中等 |
| 完整性 | 分散 | 系統化 | 系統化 |
| 可維護性 | 低 | 高 | 高 |
| 現代化 | 一般 | 好 | 很好 |
| 適合對象 | 快速查閱 | 系統學習 | 進階學習 |

## 📖 學習資源

### 官方文檔
- [Vue 2 文檔](https://v2.vuejs.org/)
- [Vue 3 文檔](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)

### 推薦學習順序
1. HTML 範例快速瀏覽（了解基本概念）
2. vue2-tutorial 系統學習（掌握 Vue 核心）
3. vue3-tutorial 進階學習（掌握新特性）
4. 實戰項目練習（範例目錄中的完整項目）

## 🛠️ 開發工具推薦

- **編輯器**：VS Code
- **插件**：
  - Vue Language Features (Volar) - Vue 3
  - Vue 2 Snippets
  - ESLint
  - Prettier

## 📝 注意事項

1. **HTML 範例檔案**保留作為快速參考
2. **vue2-tutorial** 是主要的學習專案，內容最完整
3. **vue3-tutorial** 專注於 Vue 3 新特性
4. 建議先完整學習 Vue 2，再學習 Vue 3
5. 所有專案都可以獨立運行

## 🤝 貢獻指南

歡迎補充和完善教學內容！

## 📄 授權

本教學專案僅供學習使用。

---

**開始學習之旅吧！🚀**

從 `vue2-tutorial` 開始，系統化地學習 Vue.js！
