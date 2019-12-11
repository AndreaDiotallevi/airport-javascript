'use strict';

describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    plane = jasmine.createSpy("plane");
    weather = jasmine.createSpyObj("weather", ["isStormy"]);
    airport = new Airport(weather);
  });

  it("has no planes by default", function() {
    expect(airport.planes()).toEqual([]);
  });

  describe("Under clear conditions", function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
    });
  });

  it("can clear planes for landing", function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it("can clear planes for takeoff", function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff();
    expect(airport.planes()).toEqual([]);
  });

  describe('under stormy conditions', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    });

    it('does not clear planes for take off', function() {
      expect(function() { airport.clearForTakeOff(); } ).toThrowError('The weather is stormy!')
    });

    it("does not clear planes to land", function() {
      expect(function() { airport.clearForLanding(plane); }).toThrowError("The weather is stormy!")
    });
  });
});
