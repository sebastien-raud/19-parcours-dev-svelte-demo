<script>
  import { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';
</script>

<header class="top">
    <h1 class="headings-1">Virtual Card Manager</h1>
    <menu>
        <ul>
            <li>
                <a href="/" class="link" use:active={{className: 'link--active'}} use:link>Home</a>
            </li>
            <li>
                <a href="/admin" class="link" use:active={{className: 'link--active'}} use:link>List all cards</a>
            </li>
            <li>
                <a href="/create-cc" class="link" use:active={{className: 'link--active'}} use:link>Create new card</a>
            </li>
            <li>
                <a href="/" class="link" use:active={{className: 'link--active'}} use:link>Logout</a>
            </li>
        </ul>
    </menu>
</header>
