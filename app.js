//javascript file
//select button
const button=document.querySelector('.btn');

//Array of Colors
const colors=['Blush','Tan','Yellow','Orange','Red','Pink','Purple','Blue','Green'];

//add Click Event to button
button.addEventListener('click',colorchange);



//fuction to change color
function colorchange(){
    //to pick body to change background color
    var bd=document.querySelector('body');

    //generate a random number
    var random=Math.floor(Math.random()*10);

    //change color using array with index of random generated number
    bd.style.backgroundColor=colors[random];
}