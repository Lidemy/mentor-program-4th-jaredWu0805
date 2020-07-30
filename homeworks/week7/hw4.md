## 什麼是 DOM？
Document Object Model(DOM)，是一種可以將文件轉換成結構化階層式物件的程式介面，它使得文件可以被程式－像是 Javascript－存取和改變，進而更改畫面上顯示的東西，簡單來說，DOM 就像程式碼與文件間的橋樑。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
事件傳遞按照先捕獲後冒泡的順序處理，假設我們點了畫面上的一個按鈕，事件會從它的最上層節點（通常是 window）一層一層傳遞下去到 target，而這個由上層往下層傳遞的階段為捕獲階段（Capturing phase），當事件傳遞到我們點擊的目標後，事情會再往上層一層一層回傳，這個階段就稱為冒泡（Bubbling phase）。

## 什麼是 event delegation，為什麼我們需要它？
假設我們今天有很多子元素需要添加 event listener 來處理事件，與其在每個子元素上都 addEventListener，我們可以在它們的父元素上直接加 addEventListener 當作 event delegation，這個代理人可以負責接收使用者的動作，並再用 event.target 去判斷使用者確切是在哪一個子元素上做操作，進而使網頁進行相對應的動作，event delegation 的好處還有當我們在增加子元素時，不用再對其 addEventListener，因為 delegation 會一併處理它的 event。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault() 是用來阻止元素接收到 event 後直接進行自己的 default 動作的，舉 \<input type="submit"> 為例，當按下 submit 按鈕後的 default 動作是瀏覽器會直接傳送 form 到伺服器端，假如我們不想要一按鈕就傳送表格，可以在 JavaScript 中加上 event.preventDefault() 來阻止預設的動作，另外一點要注意的是，event.preventDefault() 是有延續性的，只要 preventDefault 被呼叫了，再接下來的事件傳遞鍊上的元素也都會被 preventDefault。
event.stopPropagation() 是用來阻止事件傳遞到傳遞鍊上的下一個元素，假設在捕獲階段時，原本事件傳遞鍊是從 \<form> 往 \<button> 這樣傳遞，當我們在事件傳遞到 \<form> 時，加上 element.stopPropagation()，這樣事件就不會被傳遞到 \<button> 元素。
