

$(document).ready(function () {
  // anything in here is dom ready!
var albumTemplate = _.template($('#photoTmpl').html());
var obj = _.groupBy(photos, 'album');
var keys = Object.keys(obj);
 var keysToLife = keys.map(function(el) {
  return el.images[0];
});

var newHtmlString = "";
var lifeStillSucks = _.each(keysToLife, function(item){
  newHtmlString += albumTemplate(item);
});
console.log(newHtmlString);
$('.first-nav').html(newHtmlString);

});
/*

$('.albumPage1').click(function(event) {
     event.preventDefault();
      $('.allpicsview').removeClass("hidden");
      $('.allcolumns').addClass("hidden");
      $('.navbar').text("Alaska");
      $('.navbar').addClass('allpicsstyle');
      $(".albumPage1").siblings().css("display","none");

      var threePicTemplate = _.template($('#threePicTmpl').html());
      // 1. grab three photos associated with column1
      var alaskaAlbum = albums.filter(function(el) {
        return el.albumName === 'Alaska';
      });
      // 2. loop through photos, compile template, and add.
      alaskaAlbum[0].photos.forEach(function(photo, idx) {
         var newpicstring = "";

         newpicstring = threePicTemplate(photo);
         $(('.pic')+(idx+1)).html(newpicstring);
      });

      //
    });

$('.albumPage1').click(function(event) {
event.preventDefault();
 $('.').removeClass("hidden");
 $('.allAlbums').addClass("hidden");
 $(".albumPage1").siblings().css("display","none");

var albumPicsTmpl = _.template($('#photoTmpl').html());

var album1 = photos.filter(function(el) {
return el.album1 === 'album1';
});

album1[0].image.forEach(function(images, idx) {
var newpicstring = "";

newpicstring = albumPicsTmpl(images);
$(('.albumPage1')+(idx+1)).html(newpicstring);
});

});

var albumPicsTmpl = _.template($('#photoTmpl').html());

var album2 = photos.filter(function(el) {
  return el.album2 === 'album2';
});

album2[0].image.forEach(function(image, idx) {
   var newpicstring = "";

   newpicstring = albumPicsTmpl(image);
   $(('.albumPage2')+(idx+1)).html(newpicstring);
});

var albumPicsTmpl = _.template($('#photoTmpl').html());

var album3 = photos.filter(function(el) {
 return el.album3 === 'album3';
});

album3[0].image.forEach(function(image, idx) {
  var newpicstring = "";

  newpicstring = albumPicsTmpl(image);
  $(('.albumPage3')+(idx+1)).html(newpicstring);
});

var albumPicsTmpl = _.template($('#photoTmpl').html());

  var album4 = photos.filter(function(el) {
    return el.album4 === 'album4';
  });

  album4[0].image.forEach(function(image, idx) {
     var newpicstring = "";

     newpicstring = albumPicsTmpl(image);
     $(('.albumPage4')+(idx+1)).html(newpicstring);
  });

var albumPicsTmpl = _.template($('#photoTmpl').html());

   var album5 = photos.filter(function(el) {
     return el.album5 === 'album5';
   });

   album5[0].image.forEach(function(image, idx) {
      var newpicstring = "";

      newpicstring = albumPicsTmpl(image);
      $(('.albumPage5')+(idx+1)).html(newpicstring);
   });

var albumPicsTmpl = _.template($('#photoTmpl').html());

var album6 = photos.filter(function(el) {
  return el.album6 === 'album6';
});

album6[0].image.forEach(function(image, idx) {
   var newpicstring = "";

   newpicstring = albumPicsTmpl(image);
   $(('.albumPage6')+(idx+1)).html(newpicstring);
});

});


$('ul a').on('click', function (event) {
    event.preventDefault();

      var clickedSection = "." + $(this).attr('rel');
      console.log(clickedSection);
      $(clickedSection).addClass('.first-nav');
      $(clickedSection).siblings('nav').removeClass('.first-nav');

  });
});
*/
