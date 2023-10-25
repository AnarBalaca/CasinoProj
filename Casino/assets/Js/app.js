
  $(document).ready(function() {
    (function() {
      var showChar = 400;
      var ellipsestext = "...";

      $(".truncate").each(function() {
        var content = $(this).html();
        if (content.length > showChar) {
          var c = content.substr(0, showChar);
          var h = content;
          var html =
            '<div class="truncate-text" style="display:block">' +
            c +
            '<span class="moreellipses">' +
            ellipsestext +
            '&nbsp;&nbsp;<a href="" class="moreless more">more</a></span></span></div><div class="truncate-text" style="display:none">' +
            h +
            '<a href="" class="moreless less">Less</a></span></div>';

          $(this).html(html);
        }
      });

      $(".moreless").click(function() {
        var thisEl = $(this);
        var cT = thisEl.closest(".truncate-text");
        var tX = ".truncate-text";

        if (thisEl.hasClass("less")) {
          cT.prev(tX).toggle();
          cT.slideToggle();
        } else {
          cT.toggle();
          cT.next(tX).fadeToggle();
        }
        return false;
      });
      /* end iffe */
    })();

    /* end ready */
  });

  $(window).scroll(function () {  
    const verticalScrollPx = window.scrollY || window.pageYOffset;
    console.log(verticalScrollPx);
    if (verticalScrollPx === 0) {
      document.querySelector("header").style.backgroundColor = "transparent";
    }
    else
    {
      document.querySelector("header").style.backgroundColor = "white";
    } 
  //  console.log(header)       
});




function Focus(){
  document.getElementById('mny').style.transform='translateX(-85px)'
}
function Focus1(){
  document.getElementById('tim').style.transform='translateX(-85px)'
}
function Focus2(){
  document.getElementById('faz').style.transform='translateX(-50px)'
}

function Focus3(){
  document.getElementById('txtarea').style.transform='translateX(-70px)'
}
function Bulur(){
  document.getElementById('mny').style.transform='translateX(0)'
}
function Bulur1(){
  document.getElementById('tim').style.transform='translateX(0)'
}
function Bulur2(){
  document.getElementById('faz').style.transform='translateX(0)'
}
function Bulur3(){
  document.getElementById('txtarea').style.transform='translateX(0)'
}
function BulurM(){
  var amountx =document.getElementById('money').value
  if(amountx.toString().length==0){
     Bulur()
  }
}
// function BulurT(){
//   var amountx =document.getElementById('time').value
//   if(amountx.toString().length==0){
//      Bulur1()
//   }
// }
// function BulurF(){
//   var amountx =document.getElementById('faiz').value
//   if(amountx.toString().length==0){
//      Bulur2()
//   }
// }

