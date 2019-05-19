# 各パッケージについて

package.json に記述されているパッケージについての解説です。  
webpack は以下に示すパッケージを使用し、javascript 等のソースを加工、編集して書き出す機能を使用します。

## devDependencies

- **@babel/core**  
  babel7 の本体  
  ES2015 以上でかかれた JavaScript を ES5 へトランスパイルする。
- **@babel/polyfill**  
  babel でトランスパイルしきれない一部機能を IE などレガシーブラウザでも実行できるように拡張するコードを追加する。
- **@babel/preset-env**  
  babel7 用 必要な Babel プラグインを自動で決定するライブラリ  
  JavaScript の新しくアップデートされた機能は babel に手動で追加しなければいけないが、これを導入し正しく設定すれば自動で追加される。
- **babel-eslint**  
  eslint のエラーチェックにて stage n (まだ標準化していないが、babel で使用できる新しい構文)の書き方を正しく解析できるようにする。
- **babel-loader**  
  webpack で babel 使えるようにする。
- **case-sensitive-paths-webpack-plugin**  
  JavaScript 内でファイルパスの大文字と小文字を区別できるようにする。
- **core-js**  
  @babel/polyfill でカバーしきれないコードをサポートする。
- **eslint**  
  JavaScript のエラー、非効率な記法等の警告を行い、ソースコードの品質を保つ。
- **eslint-config-prettier**  
  prettier と競合する eslint のルールを無効にする。
- **eslint-loader**
  コンパイル時にエラーをチェックし、ターミナルにエラーログを表示する。  
  エラーがある時はコンパイルが失敗する。
- **eslint-plugin-import**  
  import 文に関わるルールを拡張する。
- **eslint-plugin-prettier**  
  prettier を eslint で実行するようにする。
- **friendly-errors-webpack-plugin**  
  ターミナルに表示されるエラー・ログ表示を見やすくする。
- **prettier**  
  コードフォーマッター
- **webpack**  
  webpack 本体
- **webpack-cli**  
  webpack のコマンドを使用可能にする。
- **webpack-dev-server**  
  開発時に使用するローカルサーバーを作成するための webpack プラグイン。
- **webpack-merge**  
  分割された webpack の設定を使用時にマージする。
