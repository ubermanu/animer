<script>
    const element = document.querySelector('.example')
    const animations = element.getAnimations()

    console.log(animations)
    // console.log(getComputedStyle(element))
</script>

{#each animations as animation}
    <div class="animation">
        <h4>
            <span>{animation.animationName}</span>
            <small>({animation.playState})</small>
        </h4>
        <button on:click={() => animation.play()}>Play</button>
        <button on:click={() => animation.pause()}>Pause</button>
    </div>
    <div class="keyframes">
        {#each animation.effect.getKeyframes() as { offset, computedOffset, easing, composite, ...keyframe }}
            <ul>
                {#each Object.entries(keyframe) as [prop, value]}
                    <li>{prop}: {value}</li>
                {/each}
            </ul>
        {/each}
    </div>
{/each}
