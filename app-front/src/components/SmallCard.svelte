 <script>
  import { cardDetails } from '../store';
  import { formatNumber } from '../lib/Utils.svelte';

  export let holder = 'JANE APPLESEED', 
             number = '0000 0000 0000 0000', 
             amount = 0, 
             status = 'available', 
             month = '00', 
             year = '00', 
             cvc = '000';

  const showDetails = (event) => {
    cardDetails.set({
      number: number,
      holder: holder,
      month: month,
      year: year,
      cvc: cvc
    });
  }
 </script>
 
 <article class="card" aria-label="For {holder}">
    <div class="card-left">
      <p class="card-collaborator">{holder}</p>
      <p class="card-number">
        {#if status == 'used'}<span class="card-status">Used</span>{/if} 
        {formatNumber(number)}</p>
    </div>
    <div class="card-right">
      <p class="card-amount">{amount} &euro;</p>
      <p class="card-actions">
        <button class="btn btn--show details" data-number="{number}" data-holder="{holder}" data-mm="{month}"
          data-yy="{year}" data-cvc="{cvc}" on:click={showDetails}>Details</button>
        {#if status == 'available'}
            <button class="btn">Set as Used</button>
        {:else}
            <button class="btn btn--edit">Set as Available</button>
        {/if}
        <button class="btn btn--delete">Delete</button>
      </p>
    </div>
  </article>