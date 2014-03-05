module('Routing specs', {
    setup: function () { },
    teardown: function () {
      Ccl.reset();
  }
});




test('root route', function () {
    visit('/');
    andThen(function () {
      var current_route = Ccl.__container__.lookup('controller:appli\
cation').currentRouteName;
      equal(current_route, 'index', 'Expected index got: ' + current_route);
  })
});

