1. undefined
2. 5
3. 6
4. 20
5. 1
6. 10
7. 100

==========

各步驟解釋:``

main() 開始執行，先設定 global 的 variable object 為
{ 
  a: 1,
  fn: function
}

接著開始執行 fn()，設定 fn() 的 variable object，先看有沒有傳入參數，然後看有沒有定義 function，接著再看有沒有變數宣告，其中 fn()，沒有參數，有定義 fn2()，然後有宣告變數 a，
所以一開始的 VO 是
{
  fn2: function,
  a: undefined
}

然後開始執行 fn() 裡面的敘述，先是 console.log(a)，查找 VO 發現 a 為 undefined，印出 undefined。
 
然後 assign a = 5，此時 VO 裡的 a: 5，再 console.log(a)，印出 5。
a++，此時 VO 裡的 a: 6，接著執行 var a，因為 a 已經被定義過了，所以忽略這句。

然後執行 fn2()，執行 console.log(a)，因為 fn2 的 VO 沒有定義 a，所以 JS 往上層找，找到 fn() 的 VO　裡有 a: 6，所以印出 6，然後 a = 20，因為 fn2 的 VO 裡沒有 a，所以找到 fn VO 裡的 a，並將它設為 20，接著 b = 100，因為 fn2 和 fn 的 VO 都沒有 b，所以找到最外層 global 的 VO，並定義 b: 100，結束 fn2，返回 fn()。

回到 fn() 裡，接著 console.log(a)，因為剛剛 fn2 有將 fn VO 的 a 設為 20，所以此時印出 20，結束 fn()，返回到 main() 中。

回到 main() 中，接著執行 console.log(a)，因為 global VO 裡的 a 為 1，所以印出 1，接著 a = 10，global VO 裡的 a 變成 10; console.log(a) 印出 10，最後一行 console.log(b) 印出 100，因為剛剛在執行 fn2 時定義了 global VO 裡 b: 100，程式結束。
