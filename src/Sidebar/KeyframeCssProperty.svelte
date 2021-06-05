<script>
    import color from 'color'
    import { HsvPicker } from 'svelte-color-picker'
    import { curAnimation, curKeyframe, updateKeyframeProperty } from '../store'
    import { camelToKebabCase } from '../util'

    export let prop
    export let value
    let input

    function onColorChange(ev) {
        const { r, g, b } = ev.detail
        const v = color({ r, g, b }).string()
        input.value = v
        updateKeyframeProperty($curAnimation, $curKeyframe, prop, v)
    }

    function onInputChange(ev) {
        updateKeyframeProperty($curAnimation, $curKeyframe, prop, ev.target.value)
    }
</script>

<div>
    <label>{camelToKebabCase(prop)}</label>
    <input name={prop} {value} on:change|preventDefault={onInputChange} bind:this={input} />
    {#if prop.includes('color')}
        <HsvPicker on:colorChange={onColorChange} startColor={color(value).hex()} />
    {/if}
</div>
