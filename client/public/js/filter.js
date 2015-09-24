app.filter('groupies', function () {
  return function (input) {
    if(input === true){
      return "Yes";
    }
    else{
      return "No";
    }
  };
});
