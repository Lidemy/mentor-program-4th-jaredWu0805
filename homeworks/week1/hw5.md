## 請解釋後端與前端的差異。
基本上前端是指使用者可以看到和互動的部份，就像是網頁瀏覽器所呈現的內容，前端負責傳送 request 至後端後索取資料，而後端則是網頁背後處理前端傳來的請求並與資料庫溝通提取資料後並回傳 response 至前端的部分，而一般使用者不會跟這後面的部分互動。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
瀏覽器發送＂搜尋 JavaScript＂的 request，作業系統處理瀏覽器發送的指令並與底層的硬體溝通，底層的網路卡將包裝成封包的 request 上傳至 Internet ，訊號在經過諸多網路上的路由器後傳送至 google server ，google server 接收到 ＂搜尋 JavaScript＂的 request 並向資料庫索取有關 JavaScript 的資料並內嵌在 response 內回傳給使用者，使用者的網路卡收取到 response，上層們加以解讀封包，最終在使用者面前的瀏覽器呈現搜尋結果。



## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. route：可以查看或修改電腦的路由表，其中包含網路目的地（Network Destination）與其對應的封包傳送目的地（Gateway），適用於網路除錯的時候。
2. netstat：顯示當下網路狀況的指令，可以列出像是 socket、TCP、UDP、IP等網路資訊。
   		netstat -s 可以列出各種協定的統計數據
      		netstat -n 可以列出所有連結埠
3. ssh username@host：建立一個 SSH 連線到 host 網路。
   		ex：ssh bbcu@ptt.cc 就能連線到 ptt 網站
