# Gemini-plugin-Chat-Outline
一个为 Gemini 网页版提供提问目录导航的 Chrome 插件
# 🚀 Gemini Chat Navigator (Gemini 对话目录导航)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](https://github.com/)

这是一款轻量级的 Chrome 浏览器扩展程序，专为解决 **Gemini** 长对话中的翻页痛苦而生。它会自动在网页右侧生成一个提问大纲，让你像翻阅书本目录一样管理你的对话记录。

---

## ✨ 核心功能 (Highlights)

* **🔍 智能索引**：自动捕获所有用户提问，过滤冗余信息。
* **🎯 精准去重**：采用文本指纹识别，确保每个提问在目录中仅出现一次。
* **🌊 平滑跳转**：点击目录项即可实现丝滑滚动定位，并伴有高亮视觉反馈。
* **🌓 深度适配**：完美支持 Gemini 官方深色模式（Dark Mode）。
* **⚡ 实时监听**：动态监测对话更新，无需手动刷新列表。

---

## 🛠️ 安装指南 (Installation)

1.  **下载仓库** 点击右上角 `Code` -> `Download ZIP` 并解压到本地文件夹。
2.  **进入扩展程序页面** 在 Chrome 地址栏输入 `chrome://extensions/`。
3.  **开启开发者模式** 打开页面右上角的 **“开发者模式”** 开关。
4.  **载入插件** 点击 **“加载已解压的扩展程序”**，选择包含 `manifest.json` 的文件夹。
5.  **即刻使用** 刷新你的 Gemini 页面，右侧即会出现导航面板。

---

## 📂 文件说明 (Structure)

```text
GeminiNavigator/
├── manifest.json   # 插件配置文件 (身份证)
├── content.js      # 核心逻辑 (抓取与跳转)
└── style.css       # 界面样式 (UI 布局)
