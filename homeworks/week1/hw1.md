## 交作業流程

1. 新增一個 branch：**git branch week1**
2. 移至新的 branch：**git checkout week1**
3. 撰寫作業並儲存
4. 確定那些作業檔案有被更改並需要加入下個 commit 中：**git status**
5. 將更改後的檔案加入 staged 並準備 commit： **git add .**
6. commit 檔案並附加備註：**git commit -am "week1 homework done"**
7. 將更新後的 branch 上傳至 GitHub：**git push origin week1**
8. 在 GitHub 上確認新的 branch 並 **create pull request** 將新的 branch merge 進 master branch 裡
9. 將 PR 的連結貼到作業連結
10. 助教批改完並完成 merge 後回到 Git Bash 下載新的 master branch：**git pull origin master**
11. 回到 master branch：**git checkout master**
12. 刪除 week1 branch：**git branch -d week1**