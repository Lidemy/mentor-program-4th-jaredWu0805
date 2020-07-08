## 請以自己的話解釋 API 是什麼
API 基本上就是讓 server 提供給 client 互相交換資料的方式；以拉麵店的販賣機為例，
販賣機就是顧客點餐的 Interface，店家會在販賣機上標註有賣的拉麵口味或是能加什麼料的選項，
而顧客只能選購上面有的選項－這就像 server 會提供眾多資料或著功能給 client 使用，
但 API 沒有提供的功能或資料 client 就無法使用。接著當顧客用販賣機點完餐印出點餐券後，
點餐券會傳到拉麵店廚房為顧客做餐，在這其中，廚房跟顧客僅用點餐券溝通就能知道一端點的餐是什麼，
而另一端需要做什麼拉麵，最終廚房做好香噴噴的拉麵提供給顧客食用－這一段處理點餐券部分的過程也就像 server 
接收到 client 透過 API 發出的請求，接著 server 跟 Database 要資料來處理並回傳結果給 client，
而這其中 client 不會知道 server 在後端做了什麼事，而 server 也只需要專心處理從 API 來的請求不用管前端是誰。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹

#### 201 Created
請求成功而且請求資源在訊息回傳前就已被建立，這個狀態碼通常用於 POST 請求後的回應中。
像是 HW2 的新增書籍功能，向 server 發送 create 的請求後，
假如有成功新增書籍 server 就會回傳 statusCode - 201。

#### 502 Bad Gateway
執行請求的伺服器為閘道器或為代理工作的伺服器並且從上游伺服器接受到無效的回應。
502 錯誤代表 Server 處理 HTTP 請求服務的時間超時，
有可能是 server 收到的請求流量太大並且來不及處理造成連線超時的原因。

#### 418 I'm a teapot
此狀態碼定義在 Hyper Text Coffee Pot Control Protocol（HTCPCP）中，HTCPCP 是 HTTP 協定的擴充，
當伺服器為茶壺而非咖啡壺並且接收到 BREW 或 POST 的請求時，則會回傳此 error code。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

> 
> 此份文件定義餐廳 API  
> 包含的功能有 *回傳所有餐廳資料*、*回傳單一餐廳資料*、*刪除餐廳*、*新增餐廳*、*更改餐廳*
> Base URL：https://testRestaurant.com

---

##  回傳所有餐廳資料
以 JSON 格式回傳所有餐廳資料

URL
`GET https://testRestaurant.com/restaurant`

Example response
```JSON
{
  "data":[
    {
      "id": "1",
      "name": "No.1 restaurant",
      "capacity": 50,
      ...
    },
    {
      "id": "2",
      "name": "No.2 restaurant",
      "capacity": 22,
      ...
    },
    ...
  ],
  "total number of restaurants": 100,  
}
```
---
## 回傳單一餐廳資料
以 JSON 格式回傳單一餐廳資料

URL
`GET https://testRestaurant.com/restaurant/{id}`

Required Query Parameters

| Name | Type   | Description |
|------|--------|-------------|
| id   | string | Restaurant ID |
| name  | string | Restaurant Name |

Example response
```JSON
{
  "data":{
    "id": "1",
    "name": "No.10 restaurant",
    "capacity": 23,
    ...
  }
}
```
---
## 刪除餐廳
將餐廳資訊從餐廳名單中刪除

URL
`DELETE https://testRestaurant.com/restaurant/{id}`

Required Query Parameters

| Name | Type   | Description |
|------|--------|-------------|
| id   | string | Restaurant ID |
| name  | string | Restaurant Name |

Response Codes

| Code  | meaning   | 
|------|--------|
| 204   | Client succesfully delete restaurant from the list |
| 422   | Entity cannot be processed |

Example response

`204 No content`

---
## 新增餐廳
新增一間餐廳資訊至餐廳名單中

URL
`POST https://testRestaurant.com/restaurant/{name}`

Response Codes

| Code  | meaning   | 
|------|--------|
| 204   | Client succesfully create the restaurant |
| 422   | Entity cannot be processed |

Example response

`204 No content`


---
## 更改餐廳
更改已有的餐廳資料

URL
`PATCH https://testRestaurant.com/restaurant/{id}`

Required Query Parameters

| Name | Type   | Description |
|------|--------|-------------|
| id   | string | Restaurant ID |
| name  | string | Restaurant Name |

Optional Query Parameters

| Name | Type   | Description |
|------|--------|-------------|
| name | string | Restaurant ID |
| capacity | string | Restaurant capacity |

Response Codes

| Code  | meaning   | 
|------|--------|
| 204   | Client succesfully delete restaurant from the list |
| 422   | Entity cannot be processed |

Example response

```JSON
{
  "data":{
    "id": "1",
    "name": "No.1 restaurant",
    "capacity": 50,
    ...
  }
}
```


