$(document).ready(function () {

  photoAlbumPage.init();
  // anything in here is dom ready!

});

var photoAlbumPage = {
  init: function(){
    photoAlbumPage.styling();
    photoAlbumPage.events();
  },
  events: function(){

    $('rel').on('click', function (event) {
          event.preventDefault();
          var element = this

    });


    $('.jqPhoto').on('click',function(event) {
      event.preventDefault();
      console.log(this);
      var albumName = $(this).data('album-name');
      otherEl = photos.filter(function(el) {
        return el.name === albumName
      });

      console.log(otherEl);
      var photosTemplate = _.template($('#threePicTmpl').html());
      var pictureHTML = photosTemplate(otherEl[0]);
      $('.jqPhoto').css('display', 'none');
      $('.myAlbums').css('padding', '0');
      $('.sidebar').css('display', 'block');
      $('.allAlbums').html(pictureHTML).css('display', 'inline-block');
    })

    $('.jqPhotos img').on('click', function(event){
      event.preventDefault();
      var animWidth = this;
    if(this.hasClass('wide') ){
        animWidth=159;
    }else{
        animWidth=593;
    }
    $(this).toggleClass('wide').animate({width: animWidth}, "slow");
    });

    $('.second-nav a').on('click', function(event) {
      event.preventDefault();
      var albumName = $(this).data('album-name');
      otherEl = photos.filter(function(el) {
        return el.name === albumName
      });
      var sidebarTemplate = _.template($('#sidebarNav').html());
      var sidebarHTML = sidebarTemplate(otherEl[0]);
      $('.sidebar').prepend(sidebarTemplate).css('display', 'block');
      $('.myAlbums').css('display','inline-block');
    })



  },
  styling: function(){
    photoAlbumPage.loadAlbums();
  },
  loadAlbums: function(){
    var albumTemplate = _.template($('#photoTmpl').html());
    var keysToLife = _.map(photos, function(el) {
     return { photo1: el.photo1, name: el.name };
    });

    var keyString = "";
    keysToLife.forEach(function(photo) {
      keyString += albumTemplate(photo)
    })
    $('.first-nav').html(keyString);
},
  threePics: function(){

    var photosTemplate = _.template($('#threePicTmpl').html());
    var alby = $('.jqPhoto').first().data('album-name');
    photos.filter(function(el) {
    return el.name === alby;
  });

  var threeString = "";
  alby.forEach(function(photo) {
    threeString += photosTemplate(photo)
  })
  $('.jqPhotos').html(threeString);
},

// click: function(click) {
//   $('jqPhoto img').on('click', 'a', function(event) {
//     event.preventDefault();
//     console.log(this);
//     globalVar = $(this);
//     otherEl = photos.filter(function(el) {
//       return el.name === globalVar
//     })
//         });
//  },
};


/*

$('ul a').on('click', function (event) {
    event.preventDefault();

      var clickedSection = "." + $(this).attr('rel');
      console.log(clickedSection);
      $(clickedSection).addClass('.first-nav');
      $(clickedSection).siblings('nav').removeClass('.first-nav');

  });
});
*/
