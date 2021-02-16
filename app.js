const btn = document.querySelector('button');
const h2 = document.querySelector('h2');

btn.addEventListener('mouseover', function () {
    console.log('MOUSE OVER ME!');
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    btn.style.left = height + 'px';
    btn.style.top = width + 'px';
});

// btn.addEventListener('click', function () {
//     btn.innerText = 'YOU GOT ME';
//     document.body.style.backgroundColor = 'green';
// });

setTimeout(() => {
    document.body.style.backgroundColor = 'red';
    btn.hidden = true;
    h2.hidden = true;
}, 5000);
