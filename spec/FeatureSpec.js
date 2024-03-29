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
      spyOn(Math, 'random').and.returnValue(0);
    });

    it("planes can be instructed to land at an airport", function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it("planes can be instructed to take off", function() {
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe("when the weather is stormy", function() {

    it("raises an error if take off is called when the weather is stormy", function(){
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function() { plane.takeoff(); } ).toThrowError("The weather is stormy!");
      expect(airport.planes()).toContain(plane);
    });

    it("raises an error if a plane tries to land when the weather is stormy", function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(function() { plane.land(airport); }).toThrowError("The weather is stormy!");
      expect(airport.planes()).toEqual([]);
    });
  });
});
