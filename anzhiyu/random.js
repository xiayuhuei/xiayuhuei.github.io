var posts=["/wz/SMR-Helpers/","/wz/cdds/","/wz/制作进度/","/wz/zbhf/","/wz/恢复更新/","/wz/动画素材/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };