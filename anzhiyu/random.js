var posts=["/wz/AN/","/wz/Anubis/","/wz/SMR-Helpers/","/wz/AN插件/","/wz/吃橙子不吐程子皮/","/wz/cdds/","/wz/奇遇原始人/","/wz/大学森/","/wz/小灵不晓/","/wz/季秋小小苏/","/wz/潇洒哥/","/wz/动画素材/","/wz/药胥虚/","/wz/萌面雕/","/wz/萧一白呀/","/wz/我用幻术控制全世界/","/wz/雕一蝉/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };