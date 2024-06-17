const app = {
  vCardNumberElement: document.getElementById('vcard-number'),
  vCardHolderElement: document.getElementById('vcard-holder'),
  vCardMMElement: document.getElementById('vcard-mm'),
  vCardYYElement: document.getElementById('vcard-yy'),
  vCardCVCElement: document.getElementById('vcard-cvc'),
  addCardHolderElement: null,
  addCardNumberElement: null,
  addCardMonthElement: null,
  addCardYearElement: null,
  addCardCVCElement: null,
  init: function() {
    // click on details buttons
    document.querySelectorAll('.details').forEach(function(el) {
      el.addEventListener('click', app.handleCardDetails);
    });

    // Get the "add card" form
    const addCardForm = document.getElementById('addcard_form');
    // If the form exists on current page
    if (addCardForm) {
      // then, get all forms elements
      app.addCardHolderElement = addCardForm.querySelector('.cardholder-input');
      app.addCardNumberElement = addCardForm.querySelector('.cardnumber-input');
      app.addCardMonthElement = addCardForm.querySelector('.month-input');
      app.addCardYearElement = addCardForm.querySelector('.year-input');
      app.addCardCVCElement = addCardForm.querySelector('.cvc-input');
      
      // and add a key event to fill the card on the left
      app.addCardHolderElement.addEventListener('keyup', app.handleAddCardFormKeyUp);
      app.addCardNumberElement.addEventListener('keyup', app.handleAddCardFormKeyUp);
      app.addCardMonthElement.addEventListener('keyup', app.handleAddCardFormKeyUp);
      app.addCardYearElement.addEventListener('keyup', app.handleAddCardFormKeyUp);
      app.addCardCVCElement.addEventListener('keyup', app.handleAddCardFormKeyUp);
    }
  },
  handleCardDetails: function(event) {
    // get clicked button
    const button = event.currentTarget;

    // get each info (in data-xxx attributes)
    // can be retrieved with const holder = button.dataset.holder; for each
    // but we'll use destructuring JS feature
    const { number, holder, mm, yy, cvc } = button.dataset;
    // console.log(number, holder, mm, yy, cvc);

    // now, we change the DOM to display infos in vcard in left
    // but first, empty all fields
    app.emptyCardDetails();
    // and after 250ms, fill the card
    window.setTimeout(function () {
      app.fillCardDetails(number, holder, mm, yy, cvc);
    }, 250);
  },
  emptyCardDetails: function() {
    app.vCardNumberElement.textContent = '';
    app.vCardHolderElement.textContent = '';
    app.vCardMMElement.textContent = '';
    app.vCardYYElement.textContent = '';
    app.vCardCVCElement.textContent = '';
  },
  fillCardDetails: function(number, holder, month, year, cvc) {
    // change DOM
    const numbersResult = number.replace(' ', '').substring(0, 16).match(/.{1,4}/g);
    if (numbersResult) {
      app.vCardNumberElement.textContent = numbersResult.join(' ');
    } else {
      app.vCardNumberElement.textContent = number;
    }
    app.vCardHolderElement.textContent = holder.trim();
    app.vCardMMElement.textContent = month.trim().replace(' ', '').substring(0, 2);
    app.vCardYYElement.textContent = year.trim().replace(' ', '').substring(0, 2);
    app.vCardCVCElement.textContent = cvc.trim().replace(' ', '').substring(0, 3);
    // And we should also modify the data in form inputs...
  },
  handleAddCardFormKeyUp: function(event) {
    app.fillCardDetails(
      app.addCardNumberElement.value,
      app.addCardHolderElement.value,
      app.addCardMonthElement.value,
      app.addCardYearElement.value,
      app.addCardCVCElement.value
    );
  }
};

document.addEventListener('DOMContentLoaded', app.init);
