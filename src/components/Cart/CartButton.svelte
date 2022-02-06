<script>
    import globalStore from '../../stores/globalStore';
</script>

<div class="btn-cart-container">
    <button class="btn-cart-toggle">
        <i 
            on:click={() => {globalStore.toggleItem('cart', true)}}
            class="fas fa-cart-plus"></i>
    </button>
    <span class="btn-cart-items">4</span>
</div>