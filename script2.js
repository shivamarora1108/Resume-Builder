function addNewWEField() {
    // console.log("Adding New Field");
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here")

    let weOb = document.getElementById('we');
    let weAddButtonOb = document.getElementById('weAddButton');
    // Refrence Diya kyunki isse Phle agla add krna hai 

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here")

    let aqOb = document.getElementById('aq');
    let aqAddButtonOb = document.getElementById('aqAddButton');
    // Refrence Diya kyunki isse Phle agla add krna hai 

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

//Generate CV(Take Responses and add to Template)
function generateCV() {
    // console.log("Shivi is the Best")
    let nameField = document.getElementById('nameField').value;

    let nameT1 = document.getElementById('nameT1');

    nameT1.innerHTML = nameField;

    document.getElementById('nameT2').innerHTML = nameField;

    document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;

    document.getElementById('addressT').innerHTML = document.getElementById("addressField").value;

    document.getElementById('fbT').innerHTML = document.getElementById("fbField").value;

    document.getElementById('instaT').innerHTML = document.getElementById("instaField").value;

    document.getElementById('linkedT').innerHTML = document.getElementById("linkedInField").value;

    document.getElementById('objectiveT').innerHTML = document.getElementById("objectiveField").value;

    // Work Experience
    let wes = document.getElementsByClassName('weField');
    let str = "";
    for (let e of wes) {
        str = str + '<li> ${e.value} </li>';
    }
    document.getElementById('weT').innerHTML = str;

    //Academic qualification
    let aqs = document.getElementsByClassName('eqField');
    let str1 = '';

    for (let e of aqs) {
        str1 += '<li> ${e.value} </li>';
    }
    document.getElementById('aqT').innerHTML = str1;

    //code for image
    let file = document.getElementById('imgField').files[0];

    console.log(file);

    let reader = new FileReader()

    reader.readAsDataURL(file);

    console.log(reader.result);

    // Set Image to Template

    reader.onloadend = function () {
        document.getElementById('imgTemplate').src = reader.result
    }
    // document.getElementById('imgTemplate').src = reader.result;
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('resume-template').style.display = 'block';
}

//Print CV
function printCV() {
    window.print()
}