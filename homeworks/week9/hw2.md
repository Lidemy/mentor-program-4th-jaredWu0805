## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
TEXT 的最大 size 是固定的 65535 characters，VARCHAR 的最大 size 則是可改變的，但其最大範圍也是 65535 characters，所以說 VARCHAR 是可以選擇 size 的，但 TEXT 不行。
另外一點就是 VARCHAR 可以作為 index 但是 TEXT 只有 Prefix 的部分可以作為 index。


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
Cookie 就是存放在瀏覽器裡的一些資訊，用戶端可以使用 Cookie 來讓 Server 端知道有關用戶的多一點資訊，例如在 Cookie 中設置 SessionID，這樣瀏覽器在發 request 時帶上有 SessionID 的 Cookie，Server 就知道這個 request 是誰發的了（靠 SessionID 來認人）。

在收到 request 後，Server 可以在response 的 header 內，加上 Set-Cookie 欄位並帶上其要求用戶端設定的內容，語法如下
`Set-Cookie: <cookie-name>=<cookie-value>`
這樣一來，瀏覽器收到 response 後，就會依照指示在其 Cookie 內設置這些內容，當下次瀏覽器再傳送 request 到同個伺服器時，就會在 header 裡放上相對應的 Cookie，進而提供 Server 有關用戶的狀態資訊。


## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
目前自己已經遇到兩個小問題：
1. 第一個是使用者可以在 input 輸入空白鍵當作內容，原本的檢查 `if (!empty($_POST['username'])` 並沒有排除掉空白鍵當作內容的狀況，後來自己查了一下，最後用 `trim($_POST['username'])` 這個方法先把文字前後段的空白給去除掉。
2. 第二個是使用者假如在一些地方輸入特殊字元，會造成 php 程式錯誤，像是在程式碼的這個部分 
`$addSQL = sprintf("INSERT INTO comments (nickname, content) VALUES ('%s', ' %s ')",
 $nickname, $content);` 
假如使用者在 $nickname 或 $content 輸入特殊字元 ' ，那麼程式就會把 `$addSQL` 解讀成 `"INSERT INTO comments (nickname, content) VALUES (''', ''')"` ，而這樣就會造成 php 看不懂這段程式碼導致錯誤。
後來自己上網查了可以用 `$conn->real_escape_string($content);` 的方法來跳脫特殊字元解決這個問題。

可能有的問題：
1. SessionID 被偷，這樣攻擊者就可以假冒使用者亂留言。
其它想不到... 因為已經把 Cookie-based session 的方式，改成用 SessionID 來辨識，目前的知識感覺想不太到什麼破解的方式。
