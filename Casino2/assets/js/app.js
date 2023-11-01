var icons = document.querySelectorAll('.fa');
        var selectedIcon = null;
        icons.forEach(function(icon) {
        icon.addEventListener('click', function() {
        if (selectedIcon) {
          selectedIcon.style.color = 'black';
          selectedIcon.style.border = 'white';
        }
        icon.style.color = '#f54e07';
        icon.style.borderLeft = '4px solid #f54e07';
        icon.style.transition = '0.2s';
        selectedIcon = icon;
      });
    });


    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed: 2000,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


var currentLocation = location.href;
var menuItem = document.querySelectorAll('.nav-bar li div a');
console.log(currentLocation);


for (var i = 0; i < menuItem.length; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].parentElement.previousElementSibling.classList.add('active');
    }
    console.log( menuItem[i].parentElement.previousElementSibling);
}