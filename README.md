# Webpack 4
## 設定值介紹
- **entry**：專案的輸入點
- **output**：專案打包後的輸出點，包含輸出檔案的檔案名稱與檔案路徑
- **module**：告訴 Webpack 啟動時需要執行的模組
- **rules**：此屬性是在 module 屬性裡，放置每個 loader 的地方
- **use**：表示是使用哪一個 loader 
- **test**：哪個附檔名需要轉譯
- **exclude**：需要排除哪個資料夾
- **plugins**：來處理一些特殊的功能，比如:打包後輸出一支css
## Babel模組介紹
- **babel-core**：babel 的核心功能模組，負責將 ES6 轉譯成 ES5
- **babel-loader**：babel 與 Webpack 之間的橋樑
- **babel-preset-env**：ES6 轉譯成 ES5 時，會自動載入合適的 plugin 和自動選擇支持舊瀏覽器的 javascript 的語法
## plugins常用
- **ＭiniCssExtractPlugin**：打包後會生成一支獨立的 CSS 檔
- **HtmlWebpackPlugin**：打包後會自動生成一支 html 檔
