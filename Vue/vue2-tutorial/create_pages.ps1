# 批量創建教學頁面腳本
$pages = @(
  @{Path="src/views/02-Events/Modifiers.vue"; Title="事件修飾符"; Description="事件修飾符（.stop, .prevent, .capture 等）的使用"; Icon="🛑"},
  @{Path="src/views/02-Events/Keyboard.vue"; Title="鍵盤事件"; Description="鍵盤事件與按鍵修飾符"; Icon="⌨️"},
  @{Path="src/views/04-Watch/Deep.vue"; Title="深度監聽"; Description="使用 deep 選項監聽對象內部值的變化"; Icon="🔍"},
  @{Path="src/views/05-ClassStyle/Index.vue"; Title="Class 與 Style 綁定"; Description="動態綁定 CSS 類名和內聯樣式"; Icon="🎨"},
  @{Path="src/views/06-Conditional/Index.vue"; Title="條件渲染"; Description="v-if、v-else-if、v-else 和 v-show 的使用"; Icon="🔀"},
  @{Path="src/views/07-List/Index.vue"; Title="列表渲染"; Description="v-for 遍歷數組、對象和範圍"; Icon="📋"},
  @{Path="src/views/07-List/Basic.vue"; Title="列表基本使用"; Description="使用 v-for 遍歷各種數據"; Icon="📝"},
  @{Path="src/views/07-List/Key.vue"; Title="Key 的作用"; Description="key 屬性在列表渲染中的重要性"; Icon="🔑"},
  @{Path="src/views/07-List/Filter.vue"; Title="列表過濾"; Description="使用 computed 實現列表過濾"; Icon="🔍"},
  @{Path="src/views/07-List/Sort.vue"; Title="列表排序"; Description="使用 computed 實現列表排序"; Icon="🔢"},
  @{Path="src/views/08-Form/Index.vue"; Title="表單輸入綁定"; Description="v-model 在表單元素上的使用"; Icon="📝"},
  @{Path="src/views/09-Directives/Index.vue"; Title="指令"; Description="內建指令和自定義指令"; Icon="🎯"},
  @{Path="src/views/10-Lifecycle/Index.vue"; Title="生命週期"; Description="Vue 實例的生命週期鉤子函數"; Icon="♻️"},
  @{Path="src/views/11-Component/Index.vue"; Title="組件"; Description="組件的創建和使用"; Icon="🧩"},
  @{Path="src/views/11-Component/Basic.vue"; Title="組件基礎"; Description="組件的基本概念和使用"; Icon="📦"},
  @{Path="src/views/11-Component/Props.vue"; Title="Props"; Description="父組件向子組件傳遞數據"; Icon="⬇️"},
  @{Path="src/views/11-Component/Emit.vue"; Title="Emit"; Description="子組件向父組件發送事件"; Icon="⬆️"},
  @{Path="src/views/11-Component/Slot.vue"; Title="插槽"; Description="使用插槽分發內容"; Icon="🎰"},
  @{Path="src/views/12-Filters/Index.vue"; Title="過濾器"; Description="使用過濾器格式化文本"; Icon="🔧"},
  @{Path="src/views/13-Storage/Index.vue"; Title="瀏覽器存儲"; Description="LocalStorage 和 SessionStorage"; Icon="💾"},
  @{Path="src/views/14-Transition/Index.vue"; Title="過渡動畫"; Description="使用 transition 組件添加動畫效果"; Icon="✨"}
)

Write-Host "準備創建頁面模板..." -ForegroundColor Yellow
Write-Host "共 $($pages.Count) 個頁面" -ForegroundColor Cyan
