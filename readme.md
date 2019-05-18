# 最小構成ボイラーテンプレート

webpack を使用したモダンフロント開発用の最小構成のボイラーテンプレートです。  
ここから各要件に合わせて必要なパッケージを追加して環境を作製していってください。

## パッケージ

- webpack
- babel
- eslint

## VS Code 設定

以下の設定を VS Code に設定すると ESLint が反映されます。  
setting.json は

- Mac の場合  
  [command + p] で [>基本設定: 設定(JSON)を開く] から
- Windows の場合  
  [ctr + p] で [>基本設定: 設定(JSON)を開く] から

### setting.json

```
  {
    "eslint.autoFixOnSave": true,
    "eslint.enable": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
        "language": "vue",
        "autoFix": true
        },
        {
        "language": "typescript",
        "autoFix": true
        },
        {
        "language": "typescriptreact",
        "autoFix": true
        },
    ]
  }
```

## 利用方法

### 準備

node.js が入っている環境にて、package.json が入っているフォルダに移動ののち

`$ npm install`

を実行すると必要なパッケージが DL されます。

### 実行

- `$ npm run watch`  
  開発用モードで実行します。
- `$ npm run build`  
  本番用モードでファイルを dist フォルダに書きだします。

## Get Stareted 集

本リポジトリにて扱っている

- webpack
- babel
- eslint

上記の 3 大要素についてさらに詳しく学ぶための参考リンクを用意しています。  
それぞれが非常に大きな機能を有しているため、本リポジトリでもほんの少しの機能しか使用していません。  
これらのリンクを足がかりにより深くまで学びプロフェッショナルとして羽ばたきましょう。

- webpack
  - https://webpack.js.org/guides/getting-started/
- babel
  - https://babeljs.io/setup#installation
- eslint
  - https://eslint.org/docs/user-guide/getting-started
