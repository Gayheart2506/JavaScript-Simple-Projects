let counter = 0;

function count(){
    counter++;
    document.querySelector('h1').innerHTML = counter;
    if (counter % 2 == 0){
        alert(`${counter} is an even number`);
    }else {
        alert(`${counter} is an odd number`);
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').onclick = count;
});
        
        