// 1 sec is 1000 ms
const intervalID = setInterval(myCallback, 1000);

function myCallback(a, b)
{
    // Your code here
    // Parameters are purely optional.
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
