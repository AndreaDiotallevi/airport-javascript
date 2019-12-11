function Airport(weather) {
  this._weather = typeof weather !== "undefined" ? weather : new Weather();
  this._hangar = [];
};

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  if (this._weather.isStormy()) {
    throw new Error("The weather is stormy!");
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function() {
  if(this._weather.isStormy()) {
    throw new Error('The weather is stormy!')
  }
  this._hangar = [];
};
