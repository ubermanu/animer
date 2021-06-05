<script>
    import { entries } from 'lodash-es'
    import { closeSidebar, curAnimation, curKeyframe } from './store'
    import { getCssProperties } from './util'
    import KeyframeCssProperty from './Sidebar/KeyframeCssProperty.svelte'
</script>

<style>
    .sidebar {
        min-width: 30%;
    }
</style>

{#if $curAnimation && $curKeyframe}
    <aside class="sidebar">
        <button on:click={() => closeSidebar()}>Close</button>
        {#each entries(getCssProperties($curKeyframe)) as [prop, value]}
            <KeyframeCssProperty {prop} {value}/>
        {/each}
    </aside>
{/if}
