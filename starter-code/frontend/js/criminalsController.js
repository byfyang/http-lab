angular.module('Infamous Criminals', [])
  .controller('CriminalsController', CriminalsController);

  CriminalsController.$inject = ['$http'];

  function CriminalsController($http){
    var self = this;
    this.createCriminal = createCriminal;
    this.newCriminal = {};
    this.getCriminals = getCriminals;
    self.all = [];



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