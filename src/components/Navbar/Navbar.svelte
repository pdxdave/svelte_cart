<script>
    import SmallNavbar from './SmalllNavbar.svelte';
    import BigNavbar from './BigNavbar.svelte';
    let screenWidth;

    // global store
    import globalStore from '../../stores/globalStore';
    $: if (screenWidth > 992){
        globalStore.toggleItem('sidebar', false)
    }

</script>
<svelte:window bind:innerWidth={screenWidth } />

{#if screenWidth > 992}
    <BigNavbar />
{:else}
    <SmallNavbar />
{/if}

