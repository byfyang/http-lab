angular.module('Infamous Criminals', [])
  .controller('CriminalsController', CriminalsController);

  CriminalsController.$inject = ['$http'];

  function CriminalsController($http){
    var self = this;
    this.createCriminal = createCriminal;
    this.newCriminal = {};
    this.getCriminals = getCriminals;
    this.deleteCriminal = deleteCriminal;
    self.all = [];

    function deleteCriminal(criminal){
      $http
      .delete('http://localhost:3000/criminals/' + criminal._id)
      .then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });
    }


    function createCriminal(){
      $http
      .post('http://localhost:3000/criminals', self.newCriminal)
      .then(function(response){
        getCriminals();
        self.newCriminal = {};
      });
    }

    function getCriminals(){
      $http
        .get('http://localhost:3000/criminals')
        .then(function(response){
          self.all=response.data.criminals;
        });
    }
    
    getCriminals();
  }