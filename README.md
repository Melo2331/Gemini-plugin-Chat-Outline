# Gemini-plugin-Chat-Outline
一个为 Gemini 网页版提供提问目录导航的 Chrome 插件
🌟 功能特性 (Features)
自动索引：智能识别 user-query 标签，自动提取提问文本。
精准去重：采用文本指纹识别逻辑，确保同一个提问不会在索引中出现多次。
平滑跳转：点击索引项，页面自动平滑滚动至目标提问位置，并伴有短暂的视觉高亮提醒。
深色模式适配：完美兼容 Gemini 默认的暗黑主题（Dark Theme），界面美观统一。
实时更新：内置监控逻辑，无论是继续提问还是切换对话，索引列表都会自动同步。
🛠️ 安装步骤 (Installation)
下载代码：点击 GitHub 右上角的 Code -> Download ZIP 并解压，或直接克隆本仓库。
打开扩展程序页面：在 Chrome 浏览器地址栏输入 chrome://extensions/ 并回车。
开启开发者模式：勾选页面右上角的“开发者模式 (Developer mode)”。
加载插件：点击“加载已解压的扩展程序 (Load unpacked)”，选择包含 manifest.json 的文件夹。
开始使用：刷新你的 Gemini 页面，右侧即可看到“提问大纲”面板。
📂 文件结构 (Project Structure)
manifest.json: 扩展程序的配置文件（身份证）。
content.js: 核心逻辑脚本，负责 DOM 抓取与交互。
style.css: 导航面板的样式定义。
