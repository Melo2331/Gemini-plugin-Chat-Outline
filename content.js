(function() {
    const createPanel = () => {
        if (document.getElementById('gemini-nav')) return;
        const div = document.createElement('div');
        div.id = 'gemini-nav';
        // 样式微调：增加半透明效果和更精致的边框
        div.style.cssText = "position:fixed;right:20px;top:100px;width:240px;max-height:60vh;background:rgba(40,42,45,0.95);color:#e3e3e3;z-index:999999;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.5);border:1px solid #444;display:flex;flex-direction:column;backdrop-filter:blur(10px);";
        div.innerHTML = `
            <div style="padding:12px;font-weight:bold;border-bottom:1px solid #444;display:flex;justify-content:space-between;background:rgba(30,31,32,0.8);">
                <span>💬 提问导航</span>
                <span id="close-nav" style="cursor:pointer;opacity:0.6">✕</span>
            </div>
            <div id="nav-list" style="overflow-y:auto;flex:1;padding:5px;"></div>
        `;
        document.body.appendChild(div);
        document.getElementById('close-nav').onclick = () => div.remove();
        refresh();
    };

    const refresh = () => {
        const list = document.getElementById('nav-list');
        if (!list) return;

        // 1. 精准抓取：只抓取最外层的用户提问容器
        const rawQs = document.querySelectorAll('user-query');
        
        // 2. 去重逻辑：使用 Set 存储文本，防止内容完全一样的重复索引
        const seenTexts = new Set();
        const uniqueQs = [];

        rawQs.forEach(q => {
            const text = q.innerText.trim();
            // 过滤掉空字符串和已经存在的重复文本
            if (text && !seenTexts.has(text)) {
                seenTexts.add(text);
                uniqueQs.push(q);
            }
        });

        // 3. 渲染列表
        list.innerHTML = '';
        uniqueQs.forEach((q, i) => {
            const item = document.createElement('div');
            item.style.cssText = "padding:10px;font-size:12px;cursor:pointer;border-bottom:1px solid #333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:0.2s;";
            
            // 限制索引显示的文字长度，让界面更整洁
            const shortText = q.innerText.trim().substring(0, 20);
            item.innerText = `${i + 1}. ${shortText}${q.innerText.length > 20 ? '...' : ''}`;
            
            item.onclick = () => {
                q.scrollIntoView({behavior: 'smooth', block: 'center'});
                // 添加一个临时的闪烁效果，让你知道跳到了哪
                q.style.outline = "2px solid #8ab4f8";
                setTimeout(() => q.style.outline = "none", 1000);
            };

            item.onmouseover = () => { item.style.background = '#3c4043'; item.style.color = '#8ab4f8'; };
            item.onmouseout = () => { item.style.background = 'transparent'; item.style.color = '#e3e3e3'; };
            list.appendChild(item);
        });
    };

    // 监听逻辑保持不变
    setInterval(refresh, 2000);
    setInterval(createPanel, 3000);
})();