var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.photo = {url: "https://upload.wikimedia.org/wikipedia/commons/1/17/Downtown_San_Francisco.JPG",
                  date:"December 3rd, 2013"}
})

app.directive('photo', function() {
  return {
    restrict: 'AECM',

    template: '<figure><img width="500px"/><figcaption/></figure>',
    replace: true,

    link: function(scope, element, attrs) {
      attrs.$observe('caption', function(value) {
        element.find('figcaption').text(value)
      })

      attrs.$observe('photoSrc', function(value) {
        element.find('img').attr('src', value)
      })
    }
  }
})

// app.directive('photo', function() {
//     return {
//         restrict: 'E',
//         templateUrl: "photo.html",
//         replace: true,
//         scope: {
//             caption: '@',
//             photoSrc: '@'
//         }
//     }
// })