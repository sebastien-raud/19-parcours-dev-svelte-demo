<script>
  import { cardDetails } from '../store';
  import { formatNumber } from '../lib/Utils.svelte';
</script>

  <section class="card-section" aria-label="Virtual Card Details">
    <div class="card-content">
      <div class="front-card">
        <img src="./assets/images/card-logo.svg" alt="card logo" class="card-logo">
        <p class="vcard-number" id="vcard-number" aria-label="Number">{formatNumber($cardDetails.number)}</p>
        <div class="flex">
          <p class="cardholder-name" id="vcard-holder" aria-label="Holder">{$cardDetails.holder}</p>
          <div class="card-date">
            <span class="month-iformation" id="vcard-mm" aria-label="Expiration (month)">{$cardDetails.month}</span>/<span class="year-information" id="vcard-yy" aria-label="Expiration (year)">{$cardDetails.year}</span>
          </div>
        </div>
      </div>
      <!--front-card-->
      <div class="back-card">
        <p class="card-cvc" id="vcard-cvc" aria-label="CVC">{$cardDetails.cvc}</p>
      </div>
    </div>
  </section>
  <!--card-section-->