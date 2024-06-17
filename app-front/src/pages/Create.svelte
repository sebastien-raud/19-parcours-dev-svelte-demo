<script>
  import { onMount } from "svelte";
  import Card from "../components/Card.svelte";

  import { cardsListInit, collaboratorsList } from '../store';
  import { getCollaborators, formatNumber } from '../lib/Utils.svelte';

  let cardData = {
    User: '', 
    amount: '', 
    holder: '', 
    number: '', 
    month: '', 
    year: '', 
    cvc: '',
    status: 'available'
  }

  const formSubmit = async (event) => {
    event.preventDefault();
    
    let result = $cardsListInit;
    result.push(cardData);
    console.log(result);
    cardsListInit.set(result);
  }

  const changeUser = async (event) => {
    cardData.holder = event.currentTarget.querySelector('option[value="' + event.currentTarget.value + '"]').text;
  }

  const changeNumber = async (event) => {
    const value = event.currentTarget.value;
    if (value.length < 4) return ;

    cardData.number = formatNumber(value);
  }

  const changeMonth = (event) => {
    const value = event.currentTarget.value;

    if (value < 10 && value.length == 1) {
      cardData.month = '0' + value;
    }
  }

  onMount(() => {
    getCollaborators();
  })

</script>

  <Card />

  <section class="right-content">
    <h2 class="headings-2">New virtual card</h2>
    <form class="card-inputs" id="addcard_form" on:submit={formSubmit}>
      <div class="cardholder-input-section">
        <p>COLLABORATOR</p>
        <select class="input" name="collaborator" bind:value={cardData.User} on:change={changeUser} >
          <option>choose</option>
          {#each $collaboratorsList as collaborator}
            <option value="{collaborator.id}">{collaborator.first_name} {collaborator.last_name}</option>
          {/each}
        </select>
        <p class="error-msg">can't be blank</p>
      </div>
      <!--cardholder-input-section-->

      <div class="cardholder-input-section">
        <p>AMOUNT (&euro;)</p>
        <input type="number" name="amount" class="input" min="1" step="1" max="99999" bind:value={cardData.amount}>
        <p class="error-msg">can't be blank</p>
      </div>
      <!--cardholder-input-section-->

      <div class="cardholder-input-section">
        <p>CARDHOLDER NAME</p>
        <input type="text" name="cardholder" class="input cardholder-input" maxlength="20"
          placeholder="e.g. Jane Applessed" bind:value={cardData.holder}>
        <p class="error-msg">can't be blank</p>
      </div><!--cardholder-input-section-->

      <div class="cardnumber-input-section">
        <p>CARD NUMBER</p>
        <input type="text" name="cardnumber" class="input cardnumber-input"
          placeholder="e.g. 1234 5678 9123 0000" bind:value={cardData.number} on:keyup={changeNumber}>
        <p class="error-msg">can't be blank or incomplete</p>
      </div><!--cardnumber-input-section-->

      <div class="flex">
        <div class="datecard-input-section">
          <p>EXP. DATE (MM/YY)</p>
            <div class="flex">
              <input type="number" name="month" min="1" step="1" max="12" class="input month-input" placeholder="MM" maxlength="2" bind:value={cardData.month} on:change={changeMonth}>
              <input type="number" name="year" min="24" step="1" max="34" class="input year-input"
                placeholder="YY" maxlength="2" bind:value={cardData.year}>
            </div>
            <p class="error-msg">invalid date</p>
        </div><!--datecard-input-section-->

        <div class="cvc-input-section">
          <p>CVC</p>
          <input type="number" name="cvc" class="input cvc-input" placeholder="e.g. 123" bind:value={cardData.cvc}>
          <p class="error-msg">can't be blank</p>
        </div>

      </div><!--flex-->
      <input type="submit" value="Create" class="submit-button">
    </form><!--card-inputs-->
    <div class="thank-section hidden">
      <img src="src/assets/images/icon-complete.svg" alt="icon-complete">
      <h3>THANK YOU!</h3>
      <p>we've added your card details</p>
      <button>Continue</button>
    </div>
  </section>