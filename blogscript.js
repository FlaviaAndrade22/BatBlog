const changeColorBtn = document.getElementById('changeColorBtn');
const header = document.querySelector('header');


const colors = ['#0e0e0eff', '#414141ff', '#f9ea16ff', '#000000ff', '#be185d'];
let colorIndex = 0;

changeColorBtn.addEventListener('click', () => {

colorIndex = (colorIndex + 1) % colors.length;

header.style.backgroundColor = colors[colorIndex];
});

