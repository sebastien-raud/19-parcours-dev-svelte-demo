<script>
  import Router from 'svelte-spa-router';

  import Header from './components/Header.svelte';

  import Home from './pages/Home.svelte';
  import Admin from './pages/Admin.svelte';
  import Create from './pages/Create.svelte';

  import { collaboratorsList, cardsList, cardsListInit } from './store';
  import { initLists } from './lib/Utils.svelte';
  import { onMount } from 'svelte';

  const routes = {
    '/': Home,
    '/admin': Admin,
    '/create-cc': Create
  };

  onMount(() => {
    initLists();
  });

</script>

<Header />
<main class="main">
  <Router {routes} />
</main>