// 存数据
function saveData(name, data) { localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data })) };
// 取数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (-1 < t && t < (time * 60000)) return d.data;
    }
    return 0;
};

let talkTimers = null;
function indexTalk() {
    if (talkTimers) {
        clearInterval(talkTimers)
        talkTimers = null;
    }
    if (!document.getElementById('bber-talk')) return

    function toText(ls) {
        let text = []
        ls.forEach(item => {
            item.content = item.content.replace(/```/g,'')
            text.push(item.content.replace(/#(.*?)\s/g, '').replace(/\{(.*?)\}/, '').replace(/\!\[(.*?)\]\((.*?)\)/g, '<i class="fa-solid fa-image"></i>').replace(/\[(.*?)\]\((.*?)\)/g, '<i class="fa-solid fa-link"></i>').replace(/{\s*bilibili\s*(.*)\s*}/g, '<i class="fa-brands fa-bilibili"></i>').replace(/{\s*music\s*(.*)\s*}/g, '<i class="fa-solid fa-music"></i>'))
        });
        return text
    }

    function talk(ls) {
        let html = ''
        ls.forEach((item, i) => { html += `<li class="item item-${i + 1}">${item}</li>` });
        let box = document.querySelector("#bber-talk .talk-list")
        if (!box) return
        box.innerHTML = html;
        talkTimers = setInterval(() => {
            box.appendChild(box.children[0]);
        }, 3000);
    }

    let d = loadData('talk', 10);
    if (d) talk(d);
    else {
        fetch('https://me.guozy.online/api/memo?creatorId=1&tag=说说&limit=10').then(res => res.json()).then(data => { // 更改地址和ID
            data = toText(data.data)
            talk(data);
            saveData('talk', data);
        })
    }
}
// indexTalk();

// pjax注释掉上面的 indexTalk(); 使用如下方法：
function whenDOMReady() {
    indexTalk();
}

whenDOMReady()
document.addEventListener("pjax:complete", whenDOMReady)
