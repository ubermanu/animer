<script>
    import { entries, map } from 'lodash-es'
    import { closeSidebar, curAnimation, curKeyframe } from './store'
    import { camelToKebabCase, getCssProperties } from './util'

    // TODO: Clean this
    function update(e) {
        const { name, value } = e.target

        const data = {
            ...$curKeyframe,
            [name]: value
        }

        let keyframes = $curAnimation.effect.getKeyframes()
        keyframes = map(keyframes, k => k.computedOffset === $curKeyframe.computedOffset ? data : k)
        keyframes = map(keyframes, k => getCssProperties(k))

        $curAnimation.effect.setKeyframes(keyframes)
    }
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
            <div>
                <label>{camelToKebabCase(prop)}</label>
                <input name={prop} {value} on:keyup|preventDefault={update} />
            </div>
        {/each}
    </aside>
{/if}
