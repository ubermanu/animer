<script>
    import { entries, map } from 'lodash-es'
    import { closeSidebar, selected } from './store'
    import { camelToKebabCase, getCssProperties } from './util'

    // TODO: Clean this
    function update(e) {
        const { name, value } = e.target

        let keyframes = $selected.animation.effect.getKeyframes()
        keyframes = map(keyframes, k => k.computedOffset === $selected.keyframe.computedOffset ? {
            ...$selected.keyframe,
            [name]: value
        } : k)

        keyframes = map(keyframes, k => getCssProperties(k))
        $selected.animation.effect.setKeyframes(keyframes)
    }
</script>

<style>
    .sidebar {
        min-width: 30%;
    }
</style>

{#if $selected.animation && $selected.keyframe}
    <aside class="sidebar">
        <button on:click={() => closeSidebar()}>Close</button>
        {#each entries(getCssProperties($selected.keyframe)) as [prop, value]}
            <div>
                <label>{camelToKebabCase(prop)}</label>
                <input name={prop} {value} on:keyup|preventDefault={update} />
            </div>
        {/each}
    </aside>
{/if}
