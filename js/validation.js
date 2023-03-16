/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function isEmpty(str) {
    return (!str || 0 === str.length);
  }

function isAlphabet(str) {
  var letters = /^[A-Za-z]+$/;
  return letters.test(str);
}

var firstName = document.getElementById("first-name").value;
const form = document.querySelector("form");
const input = form.querySelector("input");

form.addEventListener("submit", e => {
    e.preventDefault();

    if (isEmpty(firstName) || firstName.length <= 2) {
        alert("Podaj imię!");
        return false;
        } else if (!isAlphabet(firstName)) {
        alert("Imię może zawierać tylko litery!");
        return false;
        }
    form.submit();
    
})