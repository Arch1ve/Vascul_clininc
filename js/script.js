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

// form validation

function setCursorPosition(pos, e) {
  e.focus();
  if (e.setSelectionRange) e.setSelectionRange(pos, pos);
  else if (e.createTextRange) {
    let range = e.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select()
  }
}

function mask(e) {
  let matrix = this.placeholder,
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function(a) {
    return val.charAt(i++) || "_"
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
  setCursorPosition(i, this)
}

window.addEventListener("DOMContentLoaded", function() {
  let input = document.querySelector("#phone-number");
  input.addEventListener("input", mask, false);
});


