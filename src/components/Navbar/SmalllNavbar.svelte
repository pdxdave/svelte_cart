<script>
    // cart button
    import CartButton from '../Cart/CartButton.svelte';
    // global store
    import {link} from 'svelte-routing';

</script>

<nav class="navbar">
    <div class="nav-center">
        <button class="btn-sidebar-toggle">
            <i class="fas fa-bars"></i>
        </button>
        <a href="/" class="nav-logo" use:link>
            <img src="/assets/images/logo.svg" class="logo" alt="razor">
        </a>
        <CartButton />
    </div>
</nav>