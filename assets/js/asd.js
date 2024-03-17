a="pink"
s="orange";
d="lightblue";
q="purple";
w="gray";
e="brown";

const ele = document.getElementById("key");
const ele1 = document.getElementById("key2");

document.addEventListener('keydown', function(event) {
    if(event.key === 'a'){
        ele.style.backgroundColor = a;
    }else if(event.key === 's'){
        ele.style.backgroundColor = s;
    }else if(event.key === 'd'){
        ele.style.backgroundColor = d;
    }else if(event.key === 'q'){
        ele1.style.backgroundColor = q;
        ele1.style.height = '200px';
        ele1.style.width = '200px';
        ele1.style.border = '1px solid black';
    }else if(event.key === 'w'){
        ele1.style.backgroundColor = w;
        ele1.style.height = '200px';
        ele1.style.width = '200px';
        ele1.style.border = '1px solid black';
    }else if(event.key === 'e'){
        ele1.style.backgroundColor = e;
        ele1.style.height = '200px';
        ele1.style.width = '200px';
        ele1.style.border = '1px solid black';
    }
});

