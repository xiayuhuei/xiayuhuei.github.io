var posts=["/wz/2025-03-24/","/wz/2025-03-25/","/wz/2025-03-26/","/wz/SMR-Helpers/","/wz/恢复更新/","/wz/制作进度/","/wz/cdds/","/wz/zbhf/","/wz/动画素材/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };