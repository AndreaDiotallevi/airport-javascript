function Airport() {
  this._hangar = [];
};

Airport.prototype.planes = function() { return this._hangar; };

Airport.prototype.clearForLanding = function(plane) {
  if (this.isStormy()) {
    throw new Error("The weather is stormy!")
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function() {
  if(this.isStormy()) {
    throw new Error('The weather is stormy!')
  }
  this._hangar = [];
};

Airport.prototype.isStormy = function() {
  return false;
};
