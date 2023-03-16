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

function isValidEmail(str) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(str);
}

const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const input = form.querySelector("input");
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var eMail = document.getElementById("email").value;


    if (isEmpty(firstName) || firstName.length <= 2) {
      alert("Podaj imię!");
      return false;
      } else if (!isAlphabet(firstName)) {
      alert("Imię może zawierać tylko litery!");
      return false;
      }
    if (isEmpty(lastName) || lastName.length <= 2) {
      alert("Podaj nazwisko!");
      return false;
      } else if (!isAlphabet(lastName)) {
      alert("Nazwisko może zawierać tylko litery!");
      return false;
      }
    if (isEmpty(eMail) || eMail.length <= 3) {
      alert("Podaj email!");
      return false;
      } 
    form.submit();
    
})