// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else {
        bg.style.backgroundImage = s
    }
    bg.style.backgroundSize = "contain";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundRepeat = "no-repeat";
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: '#49b1f5',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <div class="note info modern"><p>点击对应样式即可切换背景(主页不显示可跳转到文章查看) </p>
    </div>

    <div class="note danger modern"><i class="note-icon fa-solid.fa-image"></i><p>有效期为一天，到期切回默认壁纸</p>
    </div>

    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
     </time></header><details class="folding-tag" ><summary> 查看电脑壁纸 </summary>
      <div class='content'>
      <div class="bgbox">
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s21.ax1x.com/2025/04/13/pER7Y0P.png)" class="pimgbox" 
        onclick="changeBg('url(https\://s21.ax1x.com/2025/04/13/pER7Y0P.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s21.ax1x.com/2025/04/13/pER7Jmt.png)" class="pimgbox" 
        onclick="changeBg('url(https\://s21.ax1x.com/2025/04/13/pER7Jmt.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s21.ax1x.com/2025/04/13/pER736A.png)" class="pimgbox" 
        onclick="changeBg('url(https\://s21.ax1x.com/2025/04/13/pER736A.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s21.ax1x.com/2025/04/13/pER78OI.png)" class="pimgbox" 
        onclick="changeBg('url(https\://s21.ax1x.com/2025/04/13/pER78OI.png)')"></a>   
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s21.ax1x.com/2025/04/13/pER71ld.png)" class="pimgbox" 
        onclick="changeBg('url(https\://s21.ax1x.com/2025/04/13/pER71ld.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s21.ax1x.com/2025/04/13/pER7tTf.png)" class="pimgbox" 
        onclick="changeBg('url(https\://s21.ax1x.com/2025/04/13/pER7tTf.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s21.ax1x.com/2025/04/13/pER7atS.png)" class="pimgbox" 
        onclick="changeBg('url(https\://s21.ax1x.com/2025/04/13/pER7atS.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://s21.ax1x.com/2025/04/13/pER7Uk8.png)" class="pimgbox" 
        onclick="changeBg('url(https\://s21.ax1x.com/2025/04/13/pER7Uk8.png)')"></a>                              
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://free4.yunpng.top/2025/04/13/67fa9f153837e.png)" class="pimgbox" 
        onclick="changeBg('url(https\://free4.yunpng.top/2025/04/13/67fa9f153837e.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://free4.yunpng.top/2025/04/13/67fa9f13ddd78.png)" class="pimgbox" 
        onclick="changeBg('url(https\://free4.yunpng.top/2025/04/13/67fa9f13ddd78.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://free4.yunpng.top/2025/04/13/67fa9f17aed6b.png)" class="pimgbox" 
        onclick="changeBg('url(https\://free4.yunpng.top/2025/04/13/67fa9f17aed6b.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://free4.yunpng.top/2025/04/13/67fa9f1a97c51.png)" class="pimgbox" 
        onclick="changeBg('url(https\://free4.yunpng.top/2025/04/13/67fa9f1a97c51.png)')"></a>          
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://free4.yunpng.top/2025/04/13/67fa9f1c0bd62.png)" class="pimgbox" 
        onclick="changeBg('url(https\://free4.yunpng.top/2025/04/13/67fa9f1c0bd62.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://free4.yunpng.top/2025/04/13/67fa9f201ec85.png)" class="pimgbox" 
        onclick="changeBg('url(https\://free4.yunpng.top/2025/04/13/67fa9f201ec85.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://free4.yunpng.top/2025/04/13/67fa9f216d723.png)" class="pimgbox" 
        onclick="changeBg('url(https\://free4.yunpng.top/2025/04/13/67fa9f216d723.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://free4.yunpng.top/2025/04/13/67fa9f26b9366.png)" class="pimgbox" 
        onclick="changeBg('url(https\://free4.yunpng.top/2025/04/13/67fa9f26b9366.png)')"></a>          
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://free4.yunpng.top/2025/04/13/67fa9f289676d.png)" class="pimgbox" 
        onclick="changeBg('url(https\://free4.yunpng.top/2025/04/13/67fa9f289676d.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://free4.yunpng.top/2025/04/13/67fa9f2c56025.png)" class="pimgbox" 
        onclick="changeBg('url(https\://free4.yunpng.top/2025/04/13/67fa9f2c56025.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://free4.yunpng.top/2025/04/13/67fa9fb6c1d2d.png)" class="pimgbox" 
        onclick="changeBg('url(https\://free4.yunpng.top/2025/04/13/67fa9fb6c1d2d.png)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://free4.yunpng.top/2025/04/13/67fa9fb7025bf.png)" class="pimgbox" 
        onclick="changeBg('url(https\://free4.yunpng.top/2025/04/13/67fa9fb7025bf.png)')"></a>
     </details></article><div class="post-copyright">
<div>

    
    </div>
     <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
     </time></header><details class="folding-tag" ><summary> 查看电脑壁纸 </summary>
      <div class='content'>
      <div class="bgbox">
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa54e3c151f.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa54e3c151f.png)')"></a>
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa54e2362ba.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa54e2362ba.png)')"></a>
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa54e982f37.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa54e982f37.png)')"></a>
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa54ebe2c3e.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa54ebe2c3e.png)')"></a>    
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa54f0906ee.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa54f0906ee.png)')"></a>    
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa54f369097.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa54f369097.png)')"></a>    
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa54f89e516.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa54f89e516.png)')"></a>    
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa54f84549e.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa54f84549e.png)')"></a>    
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa54fd76a83.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa54fd76a83.png)')"></a>    
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa5638c6ad7.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa5638c6ad7.png)')"></a>    
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa5639c1c20.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa5639c1c20.png)')"></a>    
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa563f83da8.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa563f83da8.png)')"></a>    
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa5640deb3a.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa5640deb3a.png)')"></a>    
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa5648c5ef5.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa5648c5ef5.png)')"></a>
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa85029d222.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa85029d222.png)')"></a>
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa8500575b4.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa8500575b4.png)')"></a>   
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa8504616c2.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa8504616c2.png)')"></a>   
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa850a0993c.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa850a0993c.png)')"></a>   
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa850b62d52.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa850b62d52.png)')"></a>   
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa850e9bd40.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa850e9bd40.png)')"></a>   
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa8511c75c5.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa8511c75c5.png)')"></a>   
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa85120959d.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa85120959d.png)')"></a>   
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa8516dd4de.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa8516dd4de.png)')"></a>   
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa851756942.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa851756942.png)')"></a>   
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa868409909.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa868409909.png)')"></a>   
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa8682b36ef.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa8682b36ef.png)')"></a>   
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa8686a8339.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa8686a8339.png)')"></a>   
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa8687dd002.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa8687dd002.png)')"></a>   
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa868b52f42.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa868b52f42.png)')"></a>  
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa868d67835.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa868d67835.png)')"></a>  
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa869710c8e.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa869710c8e.png)')"></a>  
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa8696d7b30.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa8696d7b30.png)')"></a>  
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa869bc678a.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa869bc678a.png)')"></a>  
        <a href="javascript:;" style="background-image:url(https://free4.yunpng.top/2025/04/12/67fa869e8e1d0.png)" class="imgbox"
           onclick="changeBg('url(https\://free4.yunpng.top/2025/04/12/67fa869e8e1d0.png)')"></a>  
        <a href="javascript:;" style="background-image:url(https://img.picui.cn/free/2025/04/12/67fa8798961ea.png)" class="imgbox"
           onclick="changeBg('url(https\://img.picui.cn/free/2025/04/12/67fa8798961ea.png)')"></a>  
        <a href="javascript:;" style="background-image:url(https://img.picui.cn/free/2025/04/12/67fa8798d815a.png)" class="imgbox"
           onclick="changeBg('url(https\://img.picui.cn/free/2025/04/12/67fa8798d815a.png)')"></a>  
        <a href="javascript:;" style="background-image:url(https://img.picui.cn/free/2025/04/12/67fa87997aad6.png)" class="imgbox"
           onclick="changeBg('url(https\://img.picui.cn/free/2025/04/12/67fa87997aad6.png)')"></a>  
        <a href="javascript:;" style="background-image:url(https://img.picui.cn/free/2025/04/12/67fa8799d6ca6.png)" class="imgbox"
           onclick="changeBg('url(https\://img.picui.cn/free/2025/04/12/67fa8799d6ca6.png)')"></a>  
        <a href="javascript:;" style="background-image:url(https://img.picui.cn/free/2025/04/12/67fa879aa9568.png)" class="imgbox"
           onclick="changeBg('url(https\://img.picui.cn/free/2025/04/12/67fa879aa9568.png)')"></a>                                                                                                                
        <a href="javascript:;" style="background-image:url(https://img.picui.cn/free/2025/04/12/67fa879b6ca64.png)" class="imgbox"
           onclick="changeBg('url(https\://img.picui.cn/free/2025/04/12/67fa879b6ca64.png)')"></a>             
        <a href="javascript:;" style="background-image:url(https://img.picui.cn/free/2025/04/12/67fa879c05009.png)" class="imgbox"
           onclick="changeBg('url(https\://img.picui.cn/free/2025/04/12/67fa879c05009.png)')"></a>             
        <a href="javascript:;" style="background-image:url(https://img.picui.cn/free/2025/04/12/67fa879cc92cd.png)" class="imgbox"
           onclick="changeBg('url(https\://img.picui.cn/free/2025/04/12/67fa879cc92cd.png)')"></a>             
        <a href="javascript:;" style="background-image:url(https://img.picui.cn/free/2025/04/12/67fa879d54592.png)" class="imgbox"
           onclick="changeBg('url(https\://img.picui.cn/free/2025/04/12/67fa879d54592.png)')"></a>             
        <a href="javascript:;" style="background-image:url(https://img.picui.cn/free/2025/04/12/67fa879e1f250.png)" class="imgbox"
           onclick="changeBg('url(https\://img.picui.cn/free/2025/04/12/67fa879e1f250.png)')"></a>             
        <a href="javascript:;" style="background-image:url(https://img.picui.cn/free/2025/04/12/67fa8812d4211.png)" class="imgbox"
           onclick="changeBg('url(https\://img.picui.cn/free/2025/04/12/67fa8812d4211.png)')"></a>
     </details></article><div class="post-copyright">
    </div>
   
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
     </time></header><details class="folding-tag" ><summary> 查看渐变色壁纸 </summary>
      <div class='content'>
      <div class="bgbox">
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(to right, #eecda3, #ef629f)" 
           onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(to right, #ff6b6b, #ffd93d)" 
           onclick="changeBg('linear-gradient(to right, #ff6b6b, #ffd93d)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)" 
           onclick="changeBg('linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(to bottom right, #43cea2, #185a9d)" 
           onclick="changeBg('linear-gradient(to bottom right, #43cea2, #185a9d)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(135deg, #ff9a9e, #fad0c4)" 
           onclick="changeBg('linear-gradient(135deg, #ff9a9e, #fad0c4)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(to right, #4facfe, #00f2fe)" 
           onclick="changeBg('linear-gradient(to right, #4facfe, #00f2fe)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(45deg, #ff6a00, #ee0979)" 
           onclick="changeBg('linear-gradient(45deg, #ff6a00, #ee0979)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(to left, #159957, #155799)" 
           onclick="changeBg('linear-gradient(to left, #159957, #155799)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(45deg, #ec008c, #fc6767)" 
           onclick="changeBg('linear-gradient(45deg, #ec008c, #fc6767)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(to top, #007991, #78ffd6)" 
           onclick="changeBg('linear-gradient(to top, #007991, #78ffd6)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(135deg, #654ea3, #eaafc8)" 
           onclick="changeBg('linear-gradient(135deg, #654ea3, #eaafc8)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(to right, #ff512f, #dd2476)" 
           onclick="changeBg('linear-gradient(to right, #ff512f, #dd2476)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(45deg, #00c6ff, #0072ff)" 
           onclick="changeBg('linear-gradient(45deg, #00c6ff, #0072ff)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(to bottom, #f857a6, #ff5858)" 
           onclick="changeBg('linear-gradient(to bottom, #f857a6, #ff5858)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(135deg, #43e97b, #38f9d7)" 
           onclick="changeBg('linear-gradient(135deg, #43e97b, #38f9d7)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(to right, #636363, #a2ab58)" 
           onclick="changeBg('linear-gradient(to right, #636363, #a2ab58)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(45deg, #ff9966, #ff5e62)" 
           onclick="changeBg('linear-gradient(45deg, #ff9966, #ff5e62)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(to left, #6d6027, #d3cbb8)" 
           onclick="changeBg('linear-gradient(to left, #6d6027, #d3cbb8)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(135deg, #556270, #ff6b6b)" 
           onclick="changeBg('linear-gradient(135deg, #556270, #ff6b6b)')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: linear-gradient(to top right, #834d9b, #d04ed6)" 
           onclick="changeBg('linear-gradient(to top right, #834d9b, #d04ed6)')"></a>
     </details>
    </div>

    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
     </time></header><details class="folding-tag" ><summary> 查看渐纯色壁纸 </summary>
      <div class='content'>
      <div class="bgbox">
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #F0ECE3" 
           onclick="changeBg('#F0ECE3')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #B2B8A3" 
           onclick="changeBg('#B2B8A3')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #7C898B" 
           onclick="changeBg('#7C898B')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #DFD3C3" 
           onclick="changeBg('#DFD3C3')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #A19882" 
           onclick="changeBg('#A19882')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #6D8B74" 
           onclick="changeBg('#6D8B74')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #556052" 
           onclick="changeBg('#556052')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #D0CAB2" 
           onclick="changeBg('#D0CAB2')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #9A9483" 
           onclick="changeBg('#9A9483')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #6E7C7C" 
           onclick="changeBg('#6E7C7C')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #FF6F61" 
           onclick="changeBg('#FF6F61')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #88B04B" 
           onclick="changeBg('#88B04B')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #5F4B8B" 
           onclick="changeBg('#5F4B8B')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #FFD700" 
           onclick="changeBg('#FFD700')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #2C3539" 
           onclick="changeBg('#2C3539')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #3B2F2F" 
           onclick="changeBg('#3B2F2F')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #FF6F61" 
           onclick="changeBg('#FF6F61')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #0F4C81" 
           onclick="changeBg('#0F4C81')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #F5DF4D" 
           onclick="changeBg('#F5DF4D')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #B8A99A" 
           onclick="changeBg('#B8A99A')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #8C8070" 
           onclick="changeBg('#8C8070')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #C3272B" 
           onclick="changeBg('#C3272B')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #446CCF"
           onclick="changeBg('#446CCF')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #F8B195"
           onclick="changeBg('#F8B195')"></a>
        <a href="javascript:;" rel="noopener external nofollow" class="box" 
           style="background: #355C7D"
           onclick="changeBg('#355C7D')"></a>
     </details>
    </div>
`;
}

// 适应窗口大小
function winResize() {
    let box = document.querySelector('#changeBgBox')
    if (!box || box.classList.contains('min') || box.classList.contains('max')) return // 2023-02-10更新
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}    