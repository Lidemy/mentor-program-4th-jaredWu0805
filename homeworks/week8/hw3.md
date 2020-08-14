## 什麼是 Ajax？
Asynchronous JavaScript and XML (Ajax) 可以讓 JavaScript 在送出 request 時不需要等到 response 就先執行後面的程式碼，藉由這樣非同步的方式，Ajax 可以把前端網頁更新渲染和前後端資料傳遞這兩個任務分開。

## 用 Ajax 與我們用表單送出資料的差別在哪？
表單 \<form> 是 html 的元素，當我們用表單送出資料時，它是純粹用 html 傳送資料，並且瀏覽器收到 response 後會換頁。
而 Ajax 的運作機制則是，當使用者在前端更新資料時，JavaScript 會在不重新讀取網頁的情況下把資料傳到後端，而後端收到資料處理並回傳完成給前端後，前端再利用 JavaScript 做畫面更新，這樣就能不換頁更新，而又可以保證前後端的資料是同步的。

## JSONP 是什麼？
JSON with Padding (JSONP) 利用 \<script> 不受跨來源政策的特性來達成跨來源請求，我們可以使用 \<script> 將資料從 server 透過指定的 callback function 把資料帶回前端，

## 要如何存取跨網域的 API？
遵從 Cross-Origin Resource Sharing (CORS) 規範，並且 Server 端必須在 response header 的 Access-Control-Allow-Origin 欄位加上發出 request 的 Origin。而有一些 API 會需要 Preflight Request 的方式先驗證 API 有沒有提供 CORS 給發出 request 的 Origin，假如沒有的話，接下來的真的 request 也就不會發出去了。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為這周我們使用瀏覽器來發送 request，而瀏覽器因為同源政策會將不同源的資料的 response 擋下來，而第四周我們是直接透過 CLI 和 JavaScript 發 request，並沒有瀏覽器這個守門員擋我們拿到 response。
