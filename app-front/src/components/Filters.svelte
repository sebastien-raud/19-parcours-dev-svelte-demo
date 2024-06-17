<script>
  import { onMount } from 'svelte';
  import { collaboratorsList, cardsList, cardsListInit } from '../store';
  import { getCollaborators } from '../lib/Utils.svelte';

  let collaborators = [];
  let filters = {
    collaborator: '',
    status: ''
  };


  const getCards = async (filters) => {
    let results = [...$cardsListInit];

    if (filters.collaborator && filters.collaborator.length > 4) {
      results = results.filter((card) => {
        return filters.collaborator == card.User;
      });
    }

    if (filters.status && filters.status.length) {
      results = results.filter((card) => {
        return filters.status == card.status;
      });
    }

    cardsList.set(results);
  }

  onMount(() => {
    getCollaborators();
    getCards(filters);
  })
</script>

  <div class="filters">
    <form action="" method="get">
      Filter by
      <label for="filter_collaborator">collaborator</label>
      <select id="filter_collaborator" class="input" 
              bind:value={filters.collaborator}
              on:change={() => getCards(filters)}>
        <option value="0">All</option>
        {#each $collaboratorsList as collaborator}
          <option value="{collaborator.id}">{collaborator.first_name} {collaborator.last_name}</option>
        {/each}
      </select>
      <strong>and</strong>
      <label for="filter_status">by status</label>
      <select id="filter_status" class="input"
              bind:value={filters.status}
              on:change={() => getCards(filters)}>
        <option value="">All</option>
        <option value="available">Available</option>
        <option value="used">Used</option>
      </select>
    </form>
  </div>