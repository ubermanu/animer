<script>
    import { writable } from 'svelte/store'
    import { camelToKebabCase } from './util'

    const selected = writable({ animation: null, keyframe: null })

    export function select(animation, keyframe) {
        $selected.animation = animation
        $selected.keyframe = keyframe
    }

    export function close() {
        selected.set({ animation: null, keyframe: null })
    }
</script>

{#if $selected.animation && $selected.keyframe}
    <aside class="sidebar">
        {#each Object.entries($selected.keyframe) as [prop, value]}
            <div>
                <label>{camelToKebabCase(prop)}</label>
                <input name={prop} {value} />
            </div>
        {/each}
    </aside>
{/if}
