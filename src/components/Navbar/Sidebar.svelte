<script>
    import links from '../../constants/links';
    import {link} from 'svelte-routing';
    import {fly, fade} from 'svelte/transition';
    import LoginLink from '../LoginLink.svelte';

    // global store
    import globalStore from '../../stores/globalStore'
</script>
<div class="sidebar-container" transition:fly={{x: -1000}}>
    <div class="sidebar" transition:fade={{delay: 400}}>
        <div class="sidebar-header">
            <button 
                    on:click={() => {globalStore.toggleItem('sidebar', false)}}
                    class="btn-close">
                <i class="fas fa-window-close"></i>
            </button>
        </div>
        <img src="/assets/images/logo.svg"  class="logo sidebar-logo" alt="log">
        <ul class="sidebar-links">
            {#each links as sideLink}
                <li><a href={sideLink.url} use:link>{sideLink.text}</a></li>
            {/each}
            <li><LoginLink /></li>
        </ul>
    </div>
</div>