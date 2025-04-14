// 创建动态加载器（在主题的 JS 文件中添加）
document.addEventListener('DOMContentLoaded', function() {
    // 动态加载 Lenis
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.39/dist/lenis.min.js';
    script.onload = initLenis; // 加载完成后初始化
    document.head.appendChild(script);
  
    // 初始化函数
    function initLenis() {
      // 创建实例
      const lenis = new Lenis({
        lerp: 0.16,
        smoothWheel: true,
        smoothTouch: false // 移动端建议禁用
      });
  
      // 动画循环
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
  
      // 自动处理链接锚点
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          lenis.scrollTo(this.getAttribute('href'), {
            offset: -80 // 根据导航栏高度调整
          });
        });
      });
  
      // 调试用（可选）
      window.__lenis = lenis;
    }
  });