1. 1
2. 3
3. 5
4. 2
5. 4

===========

各步驟解釋：

一開始 main() 先被放進 call stack，程式開始從第一步執行 main()，第一句 console.log(1) 被放到 call stack 裡然後被執行，所以 1 印出來。

接著第二句，setTimeout() 被放到 call stack 然後執行，瀏覽器的 webAPI 執行 setTimeout()，因為只有 0 秒，所以倒數很快被執行完，然後 callback function 被放到 callback queue 裡，而 event loop 看到 call stack 裡還有 main() 在，所以不會把 setTimeout() 的 callback function 放到 call stack 裡面執行。

接著第三句，console.log(3)，被放到 call stack 裡然後執行，印出 3， 

第四句，又遇到 setTimeout()，跟第二步的動作一樣，call back function 最終被放到 callback queue，但 callback queue 前面還有 console.log(2) 還沒被 event loop 推到 call stack 裡，所以 console.log(4) 就排在後面。

接著第五句，console.log(5)，一樣被放到 call stack 裡然後執行，印出 5。
main() 執行結束，call stack 此時淨空，event loop 便將 callback queue 中有的 callback function 一步一個地放到 call stack 裡執行而 callback function 裡又呼叫 console.log(2)，所以 console.log(2) 被放到 call stack 執行，執行完 pop，call stack 淨空，再相同地接著執行 console.log(4) 的 callback function。
