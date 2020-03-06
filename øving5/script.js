/* Part 2 */
console.log('PART 2')
for (var i = 0; i < 21; i++) {
    var sqrt_f = Math.sqrt(i)
    console.log(sqrt_f);
}
/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let i = 0; i < numbers.length; i++){
  if (numbers[i] % 3 == 0){
    console.log("Eple")
  }
  else if (numbers[i] % 5 == 0){
    console.log("Kake")
  }
  else {
    console.log(numbers[i])
  }
}


/* Part 4 */
document.getElementById("title").innerText = "Hello JavaScript";
/* Part 5 */
document.getElementById("button_1").addEventListener("click", changeDisplay);
document.getElementById("button_2").addEventListener("click", changeVisibility);
document.getElementById("button_3").addEventListener("click", reset);
function changeDisplay () {
  document.getElementById("magic").style.display = "none";

}

function changeVisibility () {
  document.getElementById("magic").style.visibility = "hidden";
  document.getElementById("magic").style.display = "block";

}

function reset () {
  document.getElementById("magic").style.visibility = "visible";
  document.getElementById("magic").style.display = "block";

}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];
var tech = document.getElementById("tech");
for (let i = 0; i < technologies.length; i++){
  let li = document.createElement ("LI");
  let text = document.createTextNode(technologies[i]);
  li.appendChild(text);
  tech.appendChild(li);
}
