<script>
    export let id;
    export let location;
    // global store

    import products from '../stores/defaultProducts';
    import Loading from '../components/Loading.svelte';
    import {link} from 'svelte-routing';

    // check the incoming id against all the $products & assign to product
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
                    on:click={() => {console.log('add to cart')}}
                    class="btn btn-primary btn-block">
                    add to cart
                </button>
            </article>
        </div>
    </section>
{/if}