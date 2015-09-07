var isMobile = {
     Android: function () {
         return navigator.userAgent.match(/Android/i);
     },
     BlackBerry: function () {
         return navigator.userAgent.match(/BlackBerry/i);
     },
     iOS: function () {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
     },
     Opera: function () {
         return navigator.userAgent.match(/Opera Mini/i);
     },
     Windows: function () {
         return navigator.userAgent.match(/IEMobile/i);
     },
     any: function () {
         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
     }
 };


 if (isMobile.any()) {
     if (isMobile.iOS()) {
         $(".download-button.ios").css("display", "inline-block");
     } else if (isMobile.Android()) {
         $(".download-button.android").css("display", "inline-block");
     }
 } else {
     $(".download-button.ios").css("display", "inline-block");
     $(".download-button.android").css("display", "inline-block");
 }