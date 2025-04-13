// 平滑滚动JS
(function() {
  // 创建滚动容器
  const originalBody = document.body;
  const container = document.createElement('div');
  container.id = 'smooth-scroll-container';
  document.documentElement.appendChild(container);
  while(originalBody.firstChild) {
    container.appendChild(originalBody.firstChild);
  }
  
  // 惯性滚动参数
  let scrollPosition = 0;
  let currentSpeed = 0;
  let isScrolling = false;
  const damping = 0.15;  // 阻尼系数（0.1-0.3）
  const decay = 0.85;    // 速度衰减率

  // 鼠标滚轮事件
  container.addEventListener('wheel', e => {
    e.preventDefault();
    currentSpeed = e.deltaY * damping;
    if(!isScrolling) requestAnimationFrame(animateScroll);
  }, { passive: false });

  // 平滑滚动动画
  function animateScroll() {
    isScrolling = true;
    currentSpeed *= decay;
    scrollPosition += currentSpeed;
    
    container.scrollTop = scrollPosition;
    
    if(Math.abs(currentSpeed) > 0.5) {
      requestAnimationFrame(animateScroll);
    } else {
      isScrolling = false;
    }
  }

  // 同步滚动位置
  container.addEventListener('scroll', () => {
    scrollPosition = container.scrollTop;
    currentSpeed = 0;
  });
})();