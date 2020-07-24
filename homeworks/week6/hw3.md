## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. \<audio> 
<br>功能就類似 \<img> 元素，只是 \<audio> 用來內嵌音訊檔案，可以用 src 特性或是 \<source> 來指定音訊來源，另外它擁有 autoplay、loop、等等的 attributes 供使用者調整。
2. \<canvas>
<br> 用來與 canvas scripting API 或是 WebGL API 來在網頁上畫圖和渲染 2D、3D Graphics，其中，webGL 是用於在瀏覽器中呈現 3D Graphics 的技術標準，由於 WebGL 是基於 OpenGL ES 所建立的，所以使得這個 API 可以運用使用者的繪圖硬體做加速運算。
資料參考 [這裡](http://test.domojyun.net/MEMO/3D/webgl.html)
3. \<object>
<br> 用來引入外部資源，這資源可能是一張圖片、或是一個插件所使用的資源，在早期 Flash 和 java applet 盛行的年代，常被用來嵌入這些資源。

## 請問什麼是盒模型（box modal）
在 html 裡面的每個元素都可以看成是一個 box，由 content、padding、border、margin 從內而外地組成。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
display: block <br>
會將元素以一個一個的 block 呈現，而每一個 block 會佔滿整行並且後面都會換行，所以元素會直向的往下排放，上下寬高 margin、padding 都可以隨意調整。

display: inline <br>
相較於 block 一行放一個元素，inline 會將元素們當作 inline boxes 橫向排放，不會每個元素後面都換行，所以假如在同一橫排還有空間可以擺放元素，元素就會被排列在一起，另外，調整寬高和上下邊距沒有用，調上下的 padding 雖然會有用，但並不會推開影響其他元素，所以容易造成重疊的結果。

display: inline-block <br>
融合了 inline 跟 block 的特性，排版像 inline，可以多個元素並排，不會一個佔滿一行，但又同時像 block 一樣可以調整寬高。
## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

position: static <br>
為預設值，元素會按照正常的流程排版，調整上下左右位置和 z-index 都沒有用。
<br>沒有要調整元素位置時即用 static。

position: relative <br>
像 static 一樣，元素也會按照正常的流程排版，但可以以這個原始位置為基準點調整上下左右位置，並且不會影響到其他元素。
<br>假如底下的子元素要用以其為基準點時，就會設置成 relative，另外要挑整位置時也可以，

position: absolute <br>
元素並不會依照正常的流程排版，元素會找到離他最近的 positioned ancestor（意即不是 static 的元素）作為基準點，依上下左右位置做調整。
<br>當想要元素放置於另外一個元素的絕對位置時可以使用，像是想要將 copyright 的字眼總是置中於 footer 時，即可這樣寫
```css
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

position: fixed <br>
元素並不會依照正常的流程排版，元素會依據　viewport 的第一個 block 做定位（通常就是以瀏覽器為定位），位置會依上下左右做調整。
<br>當想要元素總是置於視窗上的某個點時可以使用 fixed，像是有些網頁的網路客服或聊天機器人連結都會固定在視窗右下角。
