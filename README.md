# 產生 Apple 內建 Dictionary 的 Template

因為用 jsx 寫 xml 滿不錯的，所以 config 了 babel 可以直接用 node 寫 jsx 產生 xml。

## Prerequisite

1. 開 Xcode，`Xcode > Open Developer Tool > More Developer Tools…` 去抓 Additional Tools。
2. 解開來以後，找看看應該有 `Utilities/Dictionary Development Kit`
3. `mkdir -p /usr/local/bin/ddk`
4. `cp -R "/Volumes/Additional Tools/Utilities/Dictionary Development Kit/bin" /usr/local/bin/ddk`

## Create Dictionary

1. 改 `src/index.jsx`，產生相對應的 sutian.xml。
2. 修改以下檔案
  - `sutian.css`
  - `info.css`
  - `Makefile`
3. 執行 `make && make install && make test`
