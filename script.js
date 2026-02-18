var btn = document.querySelector("button");
var main = document.querySelector("main");


var arr = ['blaahh','lalalalal','meowwwww','Kuku','Annie-Pieeeee','Chashmish-Tamato','Lovey-dovey','Okie-Dokie','Tanvuuuuu','Mwahhh','Ayyyyyy','Mwahhh-mwahhh','Love-You','Gulabi-Dil'];




btn.addEventListener('click',function(){

    var h1 = document.createElement('h1');
    var a = Math.floor(Math.random()*arr.length);
    var x = Math.random()*80;
    var y = Math.random()*80;
    var rot = Math.random()*360;
    var scl = Math.random()*3;
    var c1 = Math.floor(Math.random()*266);
    var c2 = Math.floor(Math.random()*266);
    var c3 = Math.floor(Math.random()*266);
    h1.innerHTML= arr[a]
    // console.log(h1);
    // console.log(h1);

    
    main.appendChild(h1);
    h1.style.color="White";


    h1.style.position="absolute";
    h1.style.left = x+"%";
    h1.style.scale = scl;
    h1.style.top = y+"%";
    h1.style.rotate = rot+"deg";
    h1.style.color = `rgb(${c1},${c2},${c3})`;
})