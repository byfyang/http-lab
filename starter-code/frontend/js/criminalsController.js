angular.module('Infamous Criminals')
  .controller('CriminalsController', CriminalsController);

Criminalscontroller.$inject = ['$resource'];

app.factory ('Criminal', function($resource){
  return $resource('http://localhost:3000/criminals', null,{
    query:{
      method: 'GET',
      isArray: false,
    }
  });
});



app.controller('CriminalsController', function($scope, Criminal){
  var self = this;
  self.all = [];

  var allCriminals = Criminal.query(function(){
    self.all = allCriminals.criminals;
  });

});

  // function CriminalsController(){
    // var self = this;
    // this.createCriminal = createCriminal;
    // this.newCriminal = {};
    // this.getCriminals = getCriminals;
    // this.deleteCriminal = deleteCriminal;
    // self.all = [];

    // function deleteCriminal(criminal){
    //   $http
    //   .delete('http://localhost:3000/criminals/' + criminal._id)
    //   .then(function(response){
    //     var index = self.all.indexOf(criminal);
    //     self.all.splice(index, 1);
    //   });
    // }


    // function createCriminal(){
    //   $http
    //   .post('http://localhost:3000/criminals', self.newCriminal)
    //   .then(function(response){
    //     getCriminals();
    //     self.newCriminal = {};
    //   });
    // }

    // function getCriminals(){
    //   $http
    //     .get('http://localhost:3000/criminals')
    //     .then(function(response){
    //       self.all=response.data.criminals;
    //     });
    // }
    
    // getCriminals();
  // }