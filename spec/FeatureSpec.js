'use strict';

describe("Feature Test:", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });


  describe("when the weather is not stormy", function() {

    beforeEach(function() {
      spyOn(airport, 'isStormy').and.returnValue(false)
    })

    it("planes can be instructed to land at an airport", function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it("planes can be instructed to take off", function() {
      plane.land(airport);
      console.log("FeatureSpec 26 : " + airport.isStormy());
      plane.takeoff();
      console.log("FeatureSpec 28 : " + airport.isStormy());
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe("when the weather is stormy", function() {

    beforeEach(function() {
      spyOn(airport, 'isStormy').and.returnValue(true)
    })

    it("raises an error if take off is called when the weather is stormy", function(){
      plane.land(airport)
      expect(function() { plane.takeoff(); } ).toThrowError("The weather is stormy!");
      expect(airport.planes()).toContain(plane);
    });
  })
});
