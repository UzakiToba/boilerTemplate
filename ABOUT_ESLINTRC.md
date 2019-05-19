# .eslintrc

- **root**
  - true: このプロジェクト内のみに適用
- **env**  
  適用する環境を指定する
  - `"browser": true` - ブラウザのグローバル変数
  - `"node": true` - node のグローバル変数と node 特有のルール
  - `"es6": true` - モジュールを除くすべての ECMAScript 6 機能を有効にします
- **plugins**  
  サードパーティ製プラグインの使用をサポート
- **parser**  
  デフォルトでは、ECMAScript 5 構文を使用しますが。パーサーオプションを使用して、JSX だけでなく他の ECMAScript バージョンのサポートを有効にするためにその設定をオーバーライドできます。
- **extends**  
  ルールの設定を拡張します。
- **parserOptions**  
  ES5 以降の JavaScript への対応の設定
  - `"sourceType": "module"`  
    Modules に対応
- **rules**  
  ルールを記述する。
