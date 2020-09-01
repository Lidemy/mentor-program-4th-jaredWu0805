## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
加密裡的 input 和 output 是種一對一的關係，並且加密與解密時需要透過 key 來存讀取資料，而用加密方法來存密碼的缺點是，假如駭客破解了 key 的機制，就可以藉由 key 來解密並回推使用者加密前的原始密碼。反之，在雜湊中，input 和 output 是一種多對一的對應關係，藉由這樣原理，就算駭客知道了雜湊函數是什麼，他也無法藉由雜湊完的密碼去回推原始密碼。

## `include`、`require`、`include_once`、`require_once` 的差別
`include` 在找不到匯入檔案時只會發出 E_WARNING 程式並不會停止，而 `require` 在找不到時會發出 E_ERROR 並且程式停止執行，而加了後綴字 _once 的意思則可避免重複引入，_once 函式會先檢查要匯入的檔案是不是已經在該程式中其他地方已經被匯入過，如果有的話就不會重複匯入該檔案。

## 請說明 SQL Injection 的攻擊原理以及防範方法
駭客透過拼接不正當的 SQL query 字串，來操縱資料庫進而達到駭入資料庫的目的。
以 MySql 而言，我們可以使用 prepared statement 來防範 SQL Injection，其原理是藉由 prepared statement，MySql 會將後端傳入的參數當作字串拼接再執行 SQL query，而非只是從後端接收 SQL query 然後動作。

##  請說明 XSS 的攻擊原理以及防範方法
駭客在網頁有漏洞可以寫入程式碼的地方（如留言板、輸入欄位...等）插入自己的惡意腳本，使其他使用者操作網頁時不小心執行其惡意程式的手法。
在使用者可以自己控制輸入的地方添加跳脫特別字元的函式，避免網頁把其當作程式碼執行，以 php 而言可以使用 `htmlspecialchars()` 來處理特殊字元。 

## 請說明 CSRF 的攻擊原理以及防範方法
駭客在網頁中埋藏其他網站伺服器的請求位址，當使用者不小心觸發攻擊者的連結，網站就會接到使用者的請求，並且誤以為是使用者提出的請求，因為其請求會夾帶使用者本地端的 Cookie，而攻擊者可以利用這種攻擊來讓使用者從自身帳戶進行一些出乎的操作，像是銀行帳戶轉帳到攻擊者的帳戶。
防範方法：
1. 使用者端養成離開網站便登出的習慣，這樣 Cookie 就不會記錄該網站的使用者資訊。
2. 後端檢查 referer，不是合法 domain 即直接拒絕掉。
3. 加上圖形驗證碼，攻擊者並不會知道使用者收到什麼圖形驗證碼，所以攻擊就會失效。
4. 加上 CSRF token，伺服器在 form 當中增加隱藏的 csrftoken input 元素，夾帶著由 server 隨機產生的值，並且這個值存在 server 的 session 當中，當表單送出後，server 會驗證 csrftoken 的值是不是跟 session 裡面存的值一樣，是的話就代表是使用者自己送出的表單，因為攻擊者不會知道這個在使用者端的 csrftoken 的值，但假如 server 支援 cross origin 的 request，攻擊者可以在頁面先發起一個 request，拿到 csrftoken 再誘導使用者上鉤產生攻擊。
5. Double Submit Cookie 利用攻擊者的發出 request 的 domain 和使用者在正常網站發出 request 的 domain 的不同來預防 CSRF，透過在使用者端設定一個跟 csrftoken 表單一樣值的 Cookie，伺服器可以在接收到 request 時，去驗證表單的 csrftoken 跟 Cookie 中的 csrftoken 的值是不是一樣的進而驗證是不是使用者發出的請求，假如是 CSRF 攻擊，攻擊者不會知道使用者的 Cookie 內的 csrftoken 值，所以偽造的 form 的 csrftoken 值就會跟使用者的 Cookie 的不一樣。
6. Client 端的 Double Submit Cookie，出發點跟上面第五點一樣，只是 token 的值是由 client 端統一生成，當發出 request 到 server 端後，server 再驗證 form 裡面的 csrftoken 還有 Cookie 帶的 csrftoken 有沒有相同，一樣攻擊者無法知道 Cookie 內的 csrftoken，所以就無法偽造惡意 request form 裡面的 csrftoken。 
7. Browser 本身的防禦，如 Chrome 可以用 SameSite 定義 Cookie 的使用方法，進而避免 Cross Site 請求附加上使用者的 Cookie。
