<script>
    import CartButton from '../Cart/CartButton.svelte';
    import {link} from 'svelte-routing';
    import links from '../../constants/links'
</script>

<nav class="navbar">
    <div class="nav-container">
        <div class="nav-center">
            <ul class="nav-links">
            {#each links as navLink}
                <li><a href={navLink.url} use:link>{navLink.text}</a></li>
            {/each}
            </ul>
            <a href="/" class="nav-logo big-logo" use:link>
                <img 
                    class="logo"
                    src="/assets/images/logo.svg" alt="logo">
            </a>
            <div class="nav-aside">
                <CartButton />
            </div>
        </div>
    </div>
</nav>