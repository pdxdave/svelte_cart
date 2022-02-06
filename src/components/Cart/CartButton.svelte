<script>
    import globalStore from '../../stores/globalStore';
    import cart from '../../stores/cart';

    $: total = $cart.reduce((acc, curr) => {
        return (acc += curr.amount)
    }, 0)
</script>

<div class="btn-cart-container">
    <button class="btn-cart-toggle">
        <i 
            on:click={() => {globalStore.toggleItem('cart', true)}}
            class="fas fa-cart-plus"></i>
    </button>
    <span class="btn-cart-items">{total}</span>
</div>