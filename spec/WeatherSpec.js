'use strict';

describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  })

  describe("randomly sets the weather", function() {
    it("sometimes to stormy", function() {
      spyOn(Math, "random").and.returnValue(1);
      expect(weather.isStormy()).toEqual(true);
    })

    it("sometimes not to stormy", function() {
      spyOn(Math, "random").and.returnValue(0);
      expect(weather.isStormy()).toEqual(false);
    });
  });
})
