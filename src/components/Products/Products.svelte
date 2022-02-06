<script>
    import products from '../../stores/defaultProducts';
    
</script>

<h1>this is the products component</h1>
{#each $products as product}
    <p>{product.title}</p>
{/each}