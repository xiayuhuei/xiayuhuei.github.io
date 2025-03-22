var posts=["/cdds/","2025/03/21/制作方向/","/hfgx/","/zbhf/","2025/03/22/素材购买/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };