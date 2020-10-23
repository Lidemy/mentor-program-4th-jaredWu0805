obj.inner.hello() // 輸出 2

obj2.hello() // 輸出 2

hello() // 輸出 undefined

===========

obj.inner.hello() 等於 obj.inner.hello.call(obj.inner)，所以 hello 函式內的 console.log(this.value) 就變成 console.log(obj.inner.value)，所以印出 2

obj2.hello() 等於 obj2.hello.call(obj2)，所以 hello 函式內的 console.log(this.value) 就變成 console.log(obj2.value)，而 obj2 === obj.inner ，所以也印出 2

hello()，因為 global 中沒有定義 hello 這個 function，所以印出 undefined
