<script>
    import globalStore from '../../stores/globalStore';
    import {fly, fade, blur} from 'svelte/transition';
    import {link} from 'svelte-routing';
    // item list
    import ItemsList from './ItemsList.svelte';
    let user = true;
</script>

<div class="cart-overlay" transition:blur>
    <div class="cart-container" transition:fly={{x: 100}}>
        <div class="cart" transition:fade={{delay: 400}}>
            <div class="cart-header">
                <button 
                    on:click={() => {globalStore.toggleItem('cart', false)}}
                    class="btn-close">
                    <i class="fas fa-window-close"></i>
                </button>
                <h2 class="cart-title">your bag</h2>
                <span />
            </div><!-- end of header-->
            <ItemsList />
            
            <div class="cart-footer">
            {#if user}
                <a href="/checkout" 
                    on:click={() => {globalStore.toggleItem('cart', false)}}
                    class="btn btn-primary btn-block" use:link>checkout</a>
            {:else}
                <p class="cart-login"> to checkout please 
                    <a href="/login" 
                    on:click={() => {globalStore.toggleItem('cart', false)}}
                    use:link>login</a>
                </p> 
            {/if}
            </div>
        </div><!-- end of cart -->
    </div>
</div>