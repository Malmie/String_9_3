var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'

var dinosaur = 'triceratops';
console.log(dinosaur);

var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);

var NewText = text.replace('Velociraptor', dinosaurUpperCased);
var partOfNewText = NewText.slice(0, NewText.length/2);

console.log(partOfNewText);