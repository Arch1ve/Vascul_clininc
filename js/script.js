"use strict"

let faq1Clicked = false;
let faq2Clicked = false;
let faq3Clicked = false;
let faq4Clicked = false;

function viewDiv1() {
    if (faq1Clicked == false) {
        faq1Clicked = true;
        document.getElementById("faq1").style.display = "block";
    } else {
        faq1Clicked = false;
        document.getElementById("faq1").style.display = "none";
    }
};

function viewDiv2() {
    if (faq2Clicked == false) {
        faq2Clicked = true;
        document.getElementById("faq2").style.display = "block";
    } else {
        faq2Clicked = false;
        document.getElementById("faq2").style.display = "none";
    }
};

function viewDiv3() {
    if (faq3Clicked == false) {
        faq3Clicked = true;
        document.getElementById("faq3").style.display = "block";
    } else {
        faq3Clicked = false;
        document.getElementById("faq3").style.display = "none";
    }
};

function viewDiv4() {
    if (faq4Clicked == false) {
        faq4Clicked = true;
        document.getElementById("faq4").style.display = "block";
    } else {
        faq4Clicked = false;
        document.getElementById("faq4").style.display = "none";
    }
};
