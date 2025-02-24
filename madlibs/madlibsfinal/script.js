(function(){
    "use strict";
    console.log("reading JS");

    const madlibForm = document.querySelector('form');

    const questionsSection = document.querySelector('#madlibs-questions');
    const outputSection = document.querySelector('#madlibs-output');
    const formData = document.querySelectorAll('input[type=text]');
    const errorBox = document.querySelector('#message');
    const again = document.querySelector('#again');

    

    madlibForm.addEventListener('submit', function(event){
        event.preventDefault();
        processFormData(formData);
    });


    function processFormData(formData){
        const inputs = [];
        const emptyfields = [];
        let counter = 0;

        for (const eachInputs of formData){
            if(eachInputs.value){
                inputs.push(eachInputs.value);
                eachInputs.value = '';
            }else{
                emptyfields.push(counter);
            }
            counter++;
        }

        if(emptyfields.length > 0){
            showErrors(formData, emptyfields);
        }else{
            makeMadlibs(inputs);
        }
    }

    function showErrors(formData, emptyfields){
        const errorId = formData[emptyfields[0]].id;
        const errorText = `Please fill out this field: <span>${errorId}</span>`;

        errorBox.style.display='block';
        errorBox.innerHTML = errorText;
        errorBox.style.backgroundColor = '#FFFBFB'


        document.querySelector(`#${errorId}`).focus();
    }

    function makeMadlibs(inputs){
        questionsSection.style.display = 'none';
        outputSection.style.display = 'block';
        const here = document.querySelector('#puthere');

        inputs[2] = inputs[2].charAt(0).toUpperCase() + inputs[2].slice(1)

        const myText = `<p>You and your <span>${inputs[0]}</span> friend <span>${inputs[1]}</span> are going to the <span>${inputs[2]}</span> Coffee Cafe to <span>${inputs[3]}</span>. You decide to order a <span>${inputs[4]}</span> because it sounds really nice after a <span>${inputs[5]}</span> week, you absolutely deserve a little treat! You and your friend spend <span>${inputs[6]}</span> hours at the cafe and before you leave, you decide to get a <span>${inputs[7]}</span> to go. All and all, it was a <span>${inputs[8]}</span> day out with your friend and you feel ready for the week ahead!</p>`;

        here.innerHTML =  myText;
    }

    again.addEventListener('click', function(event){
        event.preventDefault();
        questionsSection.style.display = 'block';
        outputSection.style.display = 'none';
        errorBox.style.display = 'none'

        for(const eachField of formData){
            eachField.value = '';
        }

    });

    
})();