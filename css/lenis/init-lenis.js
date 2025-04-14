document.addEventListener('DOMContentLoaded', () => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothTouch: true,
      normalizeWheel: true
    });
  
    // 适配 Hexo 的锚点跳转
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -20 });
        }
      });
    });
  
    // 自动处理 mathjax 冲突
    if (window.MathJax) {
      MathJax.Hub.Register.StartupHook('End', () => {
        lenis.resize();
      });
    }
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });