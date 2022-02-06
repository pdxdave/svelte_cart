<script>
    import links from '../../constants/links';
    import {link} from 'svelte-routing';
</script>
<div class="sidebar-container">
    <div class="sidebar">
        <div class="sidebar-header">
            <button class="btn-close">
                <i class="fas fa-window-close"></i>
            </button>
        </div>
        <img src="/assets/images/logo.svg"  class="logo sidebar-logo" alt="log">
        <ul class="sidebar-links">
            {#each links as sideLink}
                <li><a href={sideLink.url}>{sideLink.text}</a></li>
            {/each}
        </ul>
    </div>
</div>