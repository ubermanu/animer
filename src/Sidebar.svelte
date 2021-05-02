<script>
    import { entries } from 'lodash-es'
    import { closeSidebar, selected } from './store'
    import { camelToKebabCase, getCssProperties } from './util'
</script>

{#if $selected.animation && $selected.keyframe}
    <aside class="sidebar">
        <button on:click={() => closeSidebar()}>Close</button>
        {#each entries(getCssProperties($selected.keyframe)) as [prop, value]}
            <div>
                <label>{camelToKebabCase(prop)}</label>
                <input name={prop} {value} />
            </div>
        {/each}
    </aside>
{/if}
