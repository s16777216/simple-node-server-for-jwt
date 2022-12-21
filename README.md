###### tags: `node js`

# 簡單nodejs API
- 在該專案資料夾下cmd執行指令，即可啟動伺服器。
    ```shell
    node ./index.js
    ```
- port: 65432
- 帳號密碼皆為root
- token 過期時間為 3分鐘
- 伺服器上有2隻API:/login與/auth
  - /login
      - method: post
      - 需要的資料JSON: 
        ```jsonld
        {
          username: 帳號,
          password: 密碼
        }
        ```
      
      - 驗證成功回傳的JSON: 
        ```jsonld
        {
            status: true,
            token: string,
            username: 帳號
        }
        ```
      
      - 驗證失敗回傳的JSON: 
        ```jsonld
        {
          status: false,
        }
        ```
  - /auth
      - method: post
      - 需要的資料JSON:
        ```jsonld
        {
            token: string
        }
        ```
      - 驗證成功回傳的JSON:
        ```jsonld
        {
            status: true,
            token: string,
            username: 帳號
        }
        ```
      - 驗證失敗回傳的JSON:
        ```jsonld
        {
          status: false,
        }
        ```
