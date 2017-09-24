$(document).ready(function() {
  //клонирует объект
  function CloneObject(who, into, count) {
    var par = $(into);
    var clone = $(who);
    for (var i = 0; i < count; i++) {
      $(clone).clone().appendTo(par);
    }

  }
  //CloneObject('.sort-brend .target-brend','.sort-brend>.row',3);
  //CloneObject('.list-car .item','.list-car>.row',5);

  //Отключает .active
  function disActive(tag) {
    $(tag).each(function(indx, el) {
      $(el).removeClass('active');
    })
  }
  $('.sort-brend .target-brend').click(function() {
    var listTarget = $('.sort-brend .target-brend');
    disActive(listTarget);
    var listCar = $('#sort .list-car');
    disActive(listCar);


    if ($(this).hasClass('active') == true) {
      $(this).removeClass('active');
    } else {
      ind=0;
      var main=this;
      $(listTarget).each(function(index,el){
        if (el==main){
          ind=index;

        }
      })
      $(listCar).each(function(index,el){
        if (index==ind){
          $(el).css('opacity',0);
          $(el).addClass('active');
          $(el).animate({'opacity':1},500);
        }
      })
      $(this).addClass('active');
    }

  })
  setImage();



  $('.category-part .item-category-part').click(function() {
    var listTarget = $('.category-part .item-category-part');
    disActive(listTarget);

    if ($(this).hasClass('active') == true) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }

  })



  //Устанавливает картинку в select
  function setImage() {
    var name = $('#dillerlist').val();
    //$('.list .container .listlogo ').css('background-image','url("img/topMenu/'+name+'.png")');
    $('.list .container-fluid .listlogo img').attr('src', 'img/topMenu/' + name + '.png');

  }
  $('#dillerlist').change(function() {
    setImage();
  })


})
