document.addEventListener('DOMContentLoaded', function(){


    document.querySelector('h1').innerHTML = add(100, 200);
    
    function add(num1, num2) {
        console.log(num1);
        console.log(num1 + num2);
        return num1 + num2;
    }

    const language = "JavaScript";
    const li = document.createElement('li');
    let num = language.length;

    for(let i= 0; i < language.length; i++) {
        li.innerHTML = language[i];
        document.querySelector('#unordered-list').append(li)
    }
    

});