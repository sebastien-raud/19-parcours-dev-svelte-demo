<script>
  import Filters from "../components/Filters.svelte";
  import SmallCard from "../components/SmallCard.svelte";
  import Card from "../components/Card.svelte";

  import { cardsList } from '../store';
</script>

  <Card />

  <section class="right-content">
    <h2 class="headings-2">Collaborators' cards</h2>
    <Filters />

    {#each $cardsList as card}
      <SmallCard holder={card.holder} 
                 number={card.number}
                 amount={card.amount}
                 status={card.status}
                 month={card.month}
                 year={card.year}
                 cvc={card.cvc}
      />  
    {/each}
  </section>