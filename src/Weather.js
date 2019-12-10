function Weather() {
  CHANCE_OF_STORMY = 0.5;
}

Weather.prototype.isStormy = function() {
  if (Math.random() > CHANCE_OF_STORMY) { return true; }
  return false;
};
