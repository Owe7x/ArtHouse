console.log('file 1');
$(document).ready(function($){

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
       
     });
    
    $('.spoiler_links').click(function(){
        $(this).parents().children('.spoiler_body').toggle('slow');
        $(this).toggleClass('close')
        return false;
    });
    
})


function sliderHandler(price) {
    // calculate
    if (price === undefined) {
      price = srvPrices;
    }
 
    var persents = price.totalS1 * price.totalS2 * 120000 * 0.05;
    var result = Math.round(price.totalS1 * price.totalS2 * 120000 - persents);
    document.getElementById("s1").innerHTML = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ' + 'рублей';
    document.querySelector(".polzunok__value").innerHTML = price.totalS1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") ;
    document.querySelector(".polzunok__value-one").innerHTML = price.totalS2;
  }
 
  var srvPrices = {}
  var c1 = document.getElementById("s3-check1");
  var c2 = document.getElementById("s3-check2");
 
 
  $(".range1").ionRangeSlider({
    from: 25,
    grid: false,
    values: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
    onChange: function (data) {
      srvPrices.totalS1 = data.from_value;
      sliderHandler(srvPrices)
    },
    onStart: function(data) {
      srvPrices.totalS1 = data.from_value;
      sliderHandler(srvPrices)
    }
 });
 