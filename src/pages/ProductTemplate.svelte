<script>
    export let id;
    export let location;
    
    // global store
    import globalStore from '../stores/globalStore';

    import products from '../stores/defaultProducts';
    import Loading from '../components/Loading.svelte';
    import {link} from 'svelte-routing';

    import {addToCart} from '../stores/cart';


    // check the incoming id against all the $products & assign to product
    // id sent via products/product
    $: product = $products.find(item => item.id  === parseInt(id))

</script>

{#if !product}
    <Loading />
{:else}
    <section class="single-product">
        <a href="/products" class="btn btn-primary" use:link>back to products</a>
        <div class="single-product-container">
            <article class="single-product-image">
                <img src={product.image} alt={product.title}>
            </article>
            <article>
                <h1>{product.title}</h1>
                <h2>${product.price}</h2>
                <p>{product.description}</p>
                <button 
                    on:click={() => {
                        addToCart(product),
                        globalStore.toggleItem('cart', true)}}
                    class="btn btn-primary btn-block">
                    add to cart
                </button>
            </article>
        </div>
    </section>
{/if}