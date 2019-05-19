# 最小構成ボイラーテンプレート

webpack を使用したモダンフロント開発用の最小構成のボイラーテンプレートです。
ここから各要件に合わせて必要なパッケージを追加して環境を作製していってください。

## branch

branch ごとに各環境別の最小構成を作成しています。  
要件によって使い分けてください。

| branchName      | 説明                        |
| :-------------- | :-------------------------- |
| develop         | 最小構成                    |
| reactTypescript | React/TypeScript の最小構成 |

## develop ブランチで使用している主なパッケージ

- webpack
- babel
- eslint
- prettier

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
    "prettier.eslintIntegration": true,
    "prettier.singleQuote": true,
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

## .eslintrc の設定について

こちらをご参照ください。  
[ABOUT_ESLINTRC](/ABOUT_ESLINTRC.md)

## 利用方法

### 準備

1. node.js / git が入っている環境にて、本ブランチをクローン
2. package.json が入っているフォルダに移動ののち  
   `$ npm install`  
   を実行すると必要なパッケージが DL されます。

### 実行

- `$ npm run watch`  
  開発用モードで実行します。
- `$ npm run build`  
  本番用モードでファイルを dist フォルダに書きだします。

## 使用パッケージについて

こちらをご参照ください。  
[ABOUT_PACKAGES](/ABOUT_PACKAGES.md)

## Get Stareted 集

本リポジトリにて扱っている 4 大要素についてさらに詳しく学ぶための参考リンクを用意しています。  
それぞれが非常に大きな機能を有しているため、本リポジトリでもほんの少しの機能しか使用していません。  
これらのリンクを足がかりにより深くまで学びプロフェッショナルとして羽ばたきましょう。

- [webpack](https://webpack.js.org/guides/getting-started/)
- [babel](https://babeljs.io/setup#installation)
- [eslint](https://eslint.org/docs/user-guide/getting-started)
- [prettier](https://prettier.io/docs/en/install.html)
