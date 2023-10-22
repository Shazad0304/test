function generateID() {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var id = "";
  for (var i = 0; i < 2; i++) {
    id += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  for (var j = 0; j < 4; j++) { // Change 'i' to 'j' here
    id += Math.floor(Math.random() * 10);
  }
  return id;
}

export default generateID;
