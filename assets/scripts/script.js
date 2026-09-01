// old school reminder that JS is hooked up
//alert('Garflix is live!'); 

var characters = [
  'Garfield',
  'Odie',
  'Jon',
  'Nermal',
  'Arlene'
];

// picks a random character line from the array and logs it
function greetRandomCharacter() {
  var pick = characters[Math.floor(Math.random() * characters.length)];
  console.log('Your daily Garfield character is ' + pick);
  return pick;
}

// defensive: only run once the DOM is actually ready
document.addEventListener('DOMContentLoaded', function () {
  console.log('Garflix loaded! Try calling greetRandomCharacter() in the console.');
  greetRandomCharacter();
});
