## 這週學了一大堆以前搞不懂的東西，你有變得更懂了嗎？請寫下你的心得。
這周學了很多東西，而自己也用筆記記下每個東西的運作邏輯和例子，自己覺得這之後有些細節一定還是會忘記，但有筆記跟影片自己相信多複習幾次就會記熟的。

* primitive type 有六種 (為 immutable)
boolean、undefined、string、number、null、symbol(ES6)
其他都是 object type
其中 null 也是為 object type
Object.prototype.toString.call() 也可以用來檢驗型別


* 賦值
對 object 賦值會是賦予變數該內容的記憶體位置，所以當今天 assign obj2 = obj1 時，obj2 會指向跟 obj1 同一個記憶體位置，當對 obj2 進行改動時，obj1 相同的也會反映改動的內容

NaN 是絕對獨特的，所以 NaN === NaN 會回傳 false

== 代表值相等，=== 代表是指向相同的記憶體位置

* Scope chain 作用域鍊
let 與 const 會以 {} block 為作用域，而 var 是以 function 為作用域
let, const: block scope
var: function scope


* Hoisting 提升
只有宣告會被提升，賦值的動作不會。
在 block 之中也會 hoisting。
後面的 hoisting 會蓋掉前面的。
優先順序 function > arguments > var

Execution Context 和 Variable Object，初始 EC 時有傳參數就先放參數，然後有 func 就放 func，最後再找變數宣告。

let 與 const 有 hoisting，但運作方式不太一樣，他們直到賦值前都不能被存取。Temporal Dead Zone 的概念

* Closure
scope 和 scope chain，function 在初始化時會建立 Activation Object 來記錄變數，還會建立一個 scopeChain 去記錄其上層的 AO 和 VO。

* prototype chain
在 ES6 前，沒有 class 可以用，使用 Dog.prototype.function 來建立共用 function。
原型鍊：

ｄ.sayHello()

1. d 身上有沒有 sayHello
2. d.__proto__ 有沒有 sayHello 
3. d.__proto__.__proto__ 有沒有 sayHello
4. d.__proto__.__proto__.__proto__ 有沒有 sayHello


2. d.__proto__ == Dog.prototype
3. d.__proto__.__proto__ == Object.prototype
4. d.__proto__.__proto__.__proto__ == null 找到頂了

* new
```
function newDog(name) {
    obj = {}
    Dog.call(obj, name)
    obj.__proto__ = Dog.prototype
    return obj
}
```

* inheritance 和 super
使用 extends 可以繼承父類別，當要在子類別的 constructor 裡使用父類別的東西時，要先使用 super() 來呼叫父類別的 constructor，這樣父類別才會先初始化
```
class BlackDog extends Dog {
    constructor(name) {
        super(name)
        this.sayHello()
    } 
}
```
* this
在各個地方的預設值不一樣，基本上都是全域值。
在跟物件導向扯上時才有意義，他跟怎樣值在哪無關，跟怎樣呼叫才有關 :
func() => func.call(undefined)
obj.inner.test => obj.inner.test.call(obj.inner)

* call 和 apply
第一個欄位都是改變 this 的值
test.call(123, 1, 2, 3) -> call 是用一直傳下去的方式接參數
test.apply(123, [1, 2, 3]) -> apply 的第二個欄位是傳 array

* bind
強制綁定 this 值
const bindTest = obj.test.bind('hello')
bindTest() or bindTest.call(123) 都還是會把 this 當作 'hello'

* arrow function
像是 scope 的感覺，arrow function 跟怎麼呼叫沒關係，反而跟在哪呼叫有關係

* 同步與非同步
阻塞（blocking）代表執行時程式會卡在那一行，直到有結果為止，例如說readFileSync，要等檔案讀取完畢才能執行下一行
非阻塞（non-blocking）代表執行時不會卡住，但執行結果不會放在回傳值，而是需要透過回呼函式（callback function）來接收結果
