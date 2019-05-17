# 最小構成ボイラーテンプレート

## パッケージ

- webpack
- babel
- eslint

## VS Code 設定

### setting.json

VSCode の設定

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
