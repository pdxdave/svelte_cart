<script>
    export let id;
    export let title;
    export let image;
    export let price;
    export let amount;

    // import cart methods
    import {removeItem, increaseAmount, decreaseAmount} from '../../stores/cart'

</script>

<div class="cart-item">
    <img src={image} alt={title}>
    <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button 
            on:click={() => {removeItem(id)}}
            class="cart-btn remove-btn">
            remove
        </button>
    </div>
    <div>
        <button
            class="cart-btn amount-btn" 
            on:click={() => {increaseAmount(id)}}>
            <i class="fas fa-chevron-up"></i>
        </button>
        <p class="item-amount">{amount}</p>
        <button
            class="cart-btn amount-btn" 
            on:click={() => {decreaseAmount(id)}}>
            <i class="fas fa-chevron-down"></i>
        </button>
    </div>
</div>