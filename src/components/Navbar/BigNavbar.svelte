<script>
    import CartButton from '../Cart/CartButton.svelte';
    import {link} from 'svelte-routing';
</script>

<nav class="navbar">
    <div class="nav-container">
        <div class="nav-center">
            <p>nav links</p>
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