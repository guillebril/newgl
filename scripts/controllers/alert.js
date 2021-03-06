'use strict';

function sweetAlertCtrl($scope, SweetAlert, COLORS) {
  $scope.demo1 = function() {
    SweetAlert.swal('Here\'s a message');
  };
  $scope.demo2 = function() {
    SweetAlert.swal({
      title: 'Auto close alert!',
      text: 'I will close in 2 seconds.',
      timer: 2000
    });
  };
  $scope.demo3 = function() {
    SweetAlert.swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
  };
  $scope.demo4 = function() {
    SweetAlert.swal('Good job!', 'You clicked the button!', 'success');
  };
  $scope.demo5 = function() {
    SweetAlert.swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: COLORS.danger,
      confirmButtonText: 'Yes, delete it!',
      closeOnConfirm: false,
    }, function() {
      swal('Deleted!', 'Your imaginary file has been deleted!', 'success');
    });
  };
  $scope.demo6 = function() {
    SweetAlert.swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: COLORS.danger,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel plx!',
      closeOnConfirm: false,
      closeOnCancel: false
    }, function(isConfirm) {
      if (isConfirm) {
        swal('Deleted!', 'Your imaginary file has been deleted!', 'success');
      } else {
        swal('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  };
  $scope.demo7 = function() {
    SweetAlert.swal({
      title: 'Sweet!',
      text: 'Here\'s a custom image.',
      imageUrl: 'images/avatar.jpg'
    });
  };
  $scope.demo8 = function() {
    SweetAlert.swal({
      title: 'HTML <small>Title</small>!',
      text: 'A custom <span style=\"color:#F8BB86\">html<span> message.',
      html: true
    });
  };
  $scope.demo9 = function() {
    SweetAlert.swal({
      title: 'An input!',
      text: 'Write something interesting:',
      type: 'input',
      showCancelButton: true,
      closeOnConfirm: false,
      animation: 'slide-from-top',
      inputPlaceholder: 'Write something'
    }, function(inputValue) {
      if (inputValue === false) {
        return false;
      }
      if (inputValue === '') {
        swal.showInputError('You need to write something!');
        return false;
      }
      swal('Nice!', 'You wrote: ' + inputValue, 'success');
    });
  };
  $scope.demo10 = function() {
    SweetAlert.swal({
      title: 'Ajax request example',
      text: 'Submit to run ajax request',
      type: 'info',
      showCancelButton: true,
      closeOnConfirm: false,
      showLoaderOnConfirm: true,
    }, function() {
      setTimeout(function() {
        swal('Ajax request finished!');
      }, 2000);
    });
  };
}
angular.module('app').controller('sweetAlertCtrl', ['$scope', 'SweetAlert', 'COLORS', sweetAlertCtrl]);