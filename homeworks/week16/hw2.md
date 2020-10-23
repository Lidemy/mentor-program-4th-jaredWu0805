1. i: 0
2. i: 1
3. i: 2
4. i: 3
5. i: 4
6. 5
7. 5
8. 5
9. 5
10. 5

===========

各步驟解釋:
流程跟第一題一樣，因為 event loop 的關係，setTimeout() 再被執行完後其 callback function 會被放到 callback queue 裡等待 ，然後等 call stack 被清空才會被放到 call stack 執行， 所以 console.log('i: ' + i) 的 i: 0,1,2,3,4 先被印出來，接著 event loop 再一個一個將 callback function 放到 call stack 執行，而因為在 for loop 宣告 var 是等同於在 global 宣告 var，所以此時 global EC 裡的 i 值經過 for loop 後已等於 5，所以在執行 console.log(i) 時，會是印出 5。
