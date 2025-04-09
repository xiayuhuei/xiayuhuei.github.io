var posts=["/wz/AN/","/wz/SMR-Helpers/","/wz/AN插件/","/wz/cdds/","/wz/动画素材/","/wz/我用幻术控制全世界/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };