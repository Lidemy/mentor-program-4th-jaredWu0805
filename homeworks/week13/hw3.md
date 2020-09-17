## Webpack 是做什麼用的？可以不用它嗎？
webpack 是一個用來打包跟模組化的工具，它可以把任何資源都視為模組，藉由 webpack 的 loader 我們可以將各種資源載入並轉換，簡化並能統一的處理程式模組化的流程。

## gulp 跟 webpack 有什麼不一樣？
gulp 是任務管理的工具，它可以自動化網路開發中的任務，與用於打包與模組化的 webpack 不同。

## CSS Selector 權重的計算方式為何？
!important：相當等於 10000，會直接蓋過所有 style 

style=""：等於 1000

ID selector：等於百位數

class selector、attributes selectors、pseudo-classes：等於十位數

type selector、pseudo-elements：等於個位數

Universal selector 和 combinator 不會增加權重

參考網站 - https://specifishity.com/
