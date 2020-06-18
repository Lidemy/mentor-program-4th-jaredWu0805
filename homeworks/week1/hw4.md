## 跟你朋友介紹 Git

Git 是一個版本控制的軟體，在開發軟體時隨著時間演進，開發者們會創建出一連串的新版本，使得版本間的關係雜亂且難以控管，而 Git 就是用來處理這樣的事情。Git 的原理很像電腦備份的概念，在每一次備份時，Git 會檢視使用者更改的檔案並跟使用者確定有哪些檔案需要更新在這次的備份中，而使用者也理所當然可以還原到前面的備份狀態，或是複製一個備份並且在複製的備份中更新檔案，而底下就用實際的指令來講解 Git 是如何運作的。

1. 開啟 Git Bash 並使用 Comman Line 移至想要版本控制的資料夾。
2. 在 CLI 輸入 git init－這將會將資料夾的環境初始化為 git repository，以上述電腦備份的概念來說，就好像將電腦初始化為一個可以開始創建備份的環境。
3. 在資料夾內新增 joke.txt 檔案，並在 CLI 輸入 **git add joke.txt**－由於有新的檔案創建，所以 git 會偵測到在這個備份中有更改的地方，利用 **git add <file_name>** ，可以將更改的資料檔，放在準備更新的位置，這就好像在電腦開始備份前，我們選擇會選擇哪些檔案或資料槽需要備份。
4. 輸入 **git status**－可以查看現在有哪些更動的檔案在準備備份區，哪些檔案沒有，沒有被更動的檔案就不會顯示出來。
5. 輸入 **git commit -am ＂message＂**－將更改的資料儲存並記錄在 git repository 中，附註這次更新更改了什麼，這就如同電腦備份目前的狀態並加以記錄哪些檔案受到更改。
6. **git log**－可以查看之前的 commit ，並知道 repository 的版號跟 commit message，如同查看電腦先前的備份並知道之前的備份是什麼時候被儲存還有修改了什麼。
7. **git branch New_Branch**－新建一個 名為 New_Branch 的branch，這就像複製一個名為 New_Branch 的電腦備份出來。
8. **git checkout New_Branch_name**－跳轉到 New_Branch 這個分支，這就像將作業環境跳轉到 New_Branch 這個電腦備份中。
9. 在更改 New_Branch 這個分支更改完檔案並 commit 後，如果想要把更改後的資料合併到原本的 master 版本內，可以先輸入 **git checkout master** 先回到 master branch，再輸入 **git merge New_Branch**，這樣就可以將在 New_Branch 中更改後的檔案合併入 master 版本中。