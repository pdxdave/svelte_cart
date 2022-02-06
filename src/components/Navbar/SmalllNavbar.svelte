<script>
    // cart button
    import CartButton from '../Cart/CartButton.svelte';
    import {link} from 'svelte-routing';
    // global store
    import globalStore from '../../stores/globalStore'
    

</script>

<nav class="navbar">
    <div class="nav-center">
        <button 
            on:click={() => {globalStore.toggleItem('sidebar', true)}}
            class="btn-sidebar-toggle">
            <i class="fas fa-bars"></i>
        </button>
        <a href="/" class="nav-logo" use:link>
            <img src="/assets/images/logo.svg" class="logo" alt="razor">
        </a>
        <CartButton />
    </div>
</nav>