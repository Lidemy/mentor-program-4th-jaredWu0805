## 前四週心得與解題心得
前面這四周打了很多基礎，這邊自己以各周為區分來個別記錄一下：
* 第一周
 
以前自己總是不太清楚 Git 在做什麼，但在第一周透過 huli 的影片教學還有功課實作，了解到 Git 就像是資料夾備份管理的架構，除了學到如何記錄、新增、刪除本地端的資料，還有如何同步、管理在 GitHub 上遠端的資料。

* 第二周

這周基本上算輕鬆的，主要是學習熟悉 JS 的語法，而這邊印象比較深刻的是 JS 的函式可以被當作 parameter 傳到另一個函式中，還有，array 和 null 都是物件的類別，而 object 在被 copy 時，不是 by value 的方式，而是複製原 object 指的記憶體位置到新 object
，所以兩個 object 會指向同一個記憶體位置。

* 第三周

第三周看了［JS102］學到了 require、export 等實用的技巧，另外也了解 NPM 就是一個線上套件庫。而自己也第一次知道單元測試相關的方法，利用 jest 可以對 module 裡的 function 們個別做測試，而 TDD 是一種基於先寫好測試 cases 再來開發功能的模式。

* 第四周

第四周真是對網路基礎的大補丸，透過 Huli 說的傳紙條和拉麵店的販賣機了解到網路之間的訊息是怎麼溝通、各部分的協定怎麼運作和 API 的概念是什麼；其中自己覺得要再多熟記的是 HTTP 的 Method、Status、TCP／IP 的四層結構、RESTful 風格，這些東西。而這周的作業也比較困難有趣些，要學會看 API document 使用正確的 method 在正確的 URL 搜尋或更改資料，還可以真實的抓 twitch上的資料，真的是讓自己練了蠻多工的。


Lidemy HTTP Challenge 心得與紀錄：

   *   這個小遊戲真的是好玩又同時可以複習 http API 的一些概念跟指令，前面幾題不外乎就是再熟悉看 API 然後使用 request 和不同的 Method 去解題，而問題從 lv6 就開始變難，後面幾題都是邊查資料邊解，有難度但又學到很多東西。
   *   在做題時有遇到要搜尋中文名字的書的問題，那時 run code 一直會有 unescaped characters 這個 error，後來上網查了一下才知道要用 encodeURIComponent() 將中文字轉換為 UTF-8 編碼才能放在 URI 中。
   *   再來就是 HTTP Basic Authorization 的問題，要先會把 username:password 轉換成 base64 的編碼，然後再放進 header 裡的 Authorization 的欄位，從 這邊 查到的資料得知，HTTP Authentication 除了 Basic 以外，還有 Digest、OAuth等方法，這邊的知識之後有空再來鑽研。
   *   第九關的 user agent 自己卡了很久，我知道要在 header 裡去改瀏覽器的資訊，但我怎麼 key IE6 都是秀 Invalid Brower，我原本還以為自己是不是改錯欄位，後來是看了 MDN 才發現 user agent 的表達方式好像跟自己想的不一樣，接著再找古歌才知道要怎麼輸入正確的瀏覽器資訊。
   *   第十一關一開始自己一直以為是要實作跟 CORS 有關的 code，但看了很久資料，雖然不是很懂可是總覺得沒有這麼困難，後來才發現只要在 header 加個 origin 欄位就能達到題目的要求。
   *   第十二關真的是卡到不要不要的，一開始雖然有看到 response 的網址跟 request 要求的不一樣，但完全沒想到是在考 redirect(完全忽視題目第一段的敘述LOL)，後來是上網查了一下攻略才恍然大悟 token 藏在哪…
   *   第十三關一開始也是盲人摸象地亂猜在考什麼，原本還想說是不是要用 VPN 解，後來看提示才發現 proxy 好像也能達到類似的功能，最後才用 X-Forwarded-For 解掉。
   *   第十四關也是看了提示才開始往 user-agent 方向查，這才了解可以針對特定的搜尋引擎 user-agent 來客製化。

這周就沒有再刷 LIOJ 的題目，主要因為玩 http challenge 就已經花了很多時間查資料與吸收新知，另外自己也有上 coursera 上的演算法課程，想要這周把它結束掉，而這周學習了 red-black tree 和 kd tree 這些與 BST 有關的演算法，這些演算法雖然看得當下可以理解，但要實作或應用時，還是需要花很多時間回憶，還需要再多練習練習 LOL
