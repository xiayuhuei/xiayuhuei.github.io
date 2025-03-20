var posts=["2025/03/21/制作方向/","/cdds/","/hfgx/","/zbhf/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };