// Создаем слайдер на JS

// проходит один круг дальше по стрелкам

// document.getElementById('slider-left').onclick = sliderLeft;
// autoSlider();
// var a;
// a = 0;
// var timer;
// var timer1 = 0;

// function autoSlider()
// {
//     timer = setInterval(sliderRight, 1000);
// }

// function sliderLeft() {
//     var polosa = document.getElementById('polosa');
//     a = a +128;
//     if (a>0)
//     {
//         a = -512;
//     }
//     polosa.style.left = a+'px';

// }
// document.getElementById('slider-right').onclick = sliderRight;
// function sliderRight() {
//     var polosa = document.getElementById('polosa')
//     a = a -128;
//     if (a<-512){
//         a = 0;
//     }
//     timer1++;
//     polosa.style.left = a+'px';

//     if(timer1==5)
//     {
//         clearInterval(timer);
//     }
// }

// проходит один круг дальше по стрелкам


// document.querySelector('#slider-left').onclick = sliderLeft;

// let slider = document.querySelector('#slider');
// // если наведёшь на слайдер, то он остановится
// slider.onmouseover = function() {
//     clearTimeout(timer);
// };
// // если уберешь мышку со слайдера, он вновь запуститься
// slider.onmouseout = function() {
//     autoSlider();
// }

// autoSlider();
// let left = 0;
// let = timer;

// function autoSlider (){
//   timer = setTimeout(function () {
//     let polosa = document.querySelector('#polosa');
//     // .left работает только если у полосы стоит значение position
//     left = left - 128;
//     if (left < -512) {
//       left = 0;
//       // clearTimeout(timer);
//     }
//     polosa.style.left = left +'px';
//     autoSlider ();
//   }, 1000);
// }

// function sliderLeft() {
//   let polosa = document.querySelector('#polosa');
//   // .left работает только если у полосы стоит значение position
//   left = left - 128;
//   if (left < -512) {
//     left = 0;
//     clearTimeout(timer);
//   }
//   polosa.style.left = left +'px';
//   autoSlider ();
// }