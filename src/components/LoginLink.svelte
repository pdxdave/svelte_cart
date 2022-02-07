<script>
    import user from '../stores/user';
    import {link} from 'svelte-routing';
    // logout func
    import globalStore from '../stores/globalStore';

</script>


{#if $user.jwt}
    <a href="/" 
        on:click={() => {globalStore.toggleItem('sidebar', false)}}
        class="logout-btn" use:link>logout</a>
{:else}
    <a href="/login" 
        on:click={() => {globalStore.toggleItem('sidebar', false)}}
        use:link>login</a>
{/if}