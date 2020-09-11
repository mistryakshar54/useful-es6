// Example 1:
var pokemon = 'Pikachu'
{
  var pokemon = 'Charmander'
  console.log(pokemon) // Charmander
}
console.log(pokemon) // Charmander


// Example 2:
var pokemon = 'Pikachu'

function showAPokemon() {
  var pokemon = 'Raichu'
  console.log(pokemon) // Raichu
}

console.log(pokemon) // Pikachu
showAPokemon();


// Example 3:
var pokemon = 'Pikachu';
var pokemon = 'Pichu';
console.log(pokemon) // Pichu

// Example 4 :
pokemon = 'Pikachu';
var pokemon; 
console.log(pokemon); // Pikachu
// The above is translated to :
var pokemon;
pokemon = 'Pikachu';

// Example 5 :
const pokemon = 'Pikachu'
{
  const pokemon = 'Charmander'
  console.log(pokemon) // Charmander
}
console.log(pokemon) // Pikachu

// Example 6 :
const pokemon = {} //Const values don't change right?
pokemon.name = "Pikachu";
console.log(pokemon.name) // Pikachu 🤯🤯 ??


// Example 7 :
var a = 10;
function A() {
var a = 20;
C();
function C(){
   console.log(a); //undefined <- Why? Again a is hoisted here
   var a = 40;
   console.log(a) // 40 <- a is set as 40
 }
}
A();


// Example 8 :
var a = 10;
function A() {
var a = 20;
B();
 function B() {
   console.log(a); //Error!!! a is used before initialization
   let a = 30;
   console.log(a)  // 30
 }
}
A();


// Example 9 :
for( var i = 0; i < 3; i++ ){
  setTimeout( ()=>{
    console.log(i);
  }, 100 );
}
console.log(i);
i++;
setTimeout( ()=>{
  console.log(i);
},0 );


// Example 10 :
for( let i = 0; i < 2; i++ ){
  setTimeout( ()=> {
    console.log(i);
  }, 100 );
}