(function() {
    'use strict';
    console.log('reading js');
    let select, prevselect;
    const interest = document.querySelector('.interests');
    const puppyimage = document.querySelector('#puppy img');
    const puppyfig = document.querySelector('#puppy figcaption');
    const cookies = document.querySelector('.cookies');
    const bunny = document.querySelector('.bunny');
    const hat = document.querySelector('.hat');
    const sweater = document.querySelector('.sweater');

    cookies.addEventListener('click', function() {
        cookies.className = 'selected';
        bunny.className = 'unselected';
        hat.className = 'unselected';
        sweater.className = 'unselected'; 

        prevselect = cookies;
        interest.innerHTML = 'Snack time!';
        puppyfig.innerHTML = 'I am a weird little dog who refuses to eat dog treats so I make my humans get me Vanilla Wafer cookies, as it is the only thing I will eat!';
        puppyimage.src = 'images/cookiess.jpg'; // Ensure this path is correct
    });

    bunny.addEventListener('click', function() {
        cookies.className = 'unselected';
        bunny.className = 'selected';
        hat.className = 'unselected';
        sweater.className = 'unselected'; 
        interest.innerHTML = 'Bunny plush!';
        puppyfig.innerHTML = 'This is my first ever toy! I have had it for years, every since I was a puppy, and I like to snuggle up with it on the couch while my humans watch that strange box with pictures.';
        puppyimage.src = 'images/sleepyy.jpg'; // Ensure this path is correct
    });

    hat.addEventListener('click', function() {
        cookies.className = 'unselected';
        bunny.className = 'unselected';
        hat.className = 'selected';
        sweater.className = 'unselected'; 
        interest.innerHTML = 'Birthday hat!';
        puppyfig.innerHTML = 'This right here is my special birthday hat that was made for me by my humans! I get to wear it every April 1st and I get extra Vanilla Wafers that day because I am a year older (or something...what is time to a tiny dog??)';
        puppyimage.src = 'images/birthdayhat.jpg'; // Ensure this path is correct
    });

    sweater.addEventListener('click', function() {
        cookies.className = 'unselected';
        bunny.className = 'unselected';
        hat.className = 'unselected';
        sweater.className = 'selected'; 
        interest.innerHTML = 'Winter "coat"!';
        puppyfig.innerHTML = 'This right here is the sweater that my humans force me to wear whenever it is chilly outside! I cannot tell you what color it is but it keeps me very warm! (Even if I look like a small potato)';
        puppyimage.src = 'images/mysweater.jpg'; // Ensure this path is correct
    });
})();
