var posts=["/wz/SMR-Helpers/","/wz/cdds/","/wz/AN插件/","/wz/我用幻术控制全世界/","/wz/动画素材/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };