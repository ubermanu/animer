<script>
    /** @type {Animation} */
    export let animation
</script>

<style>
    .timeline {
        height: 3rem;
        border: 1px solid black;
        border-radius: 3px;
        display: flex;
        position: relative;
        user-select: none;
    }

    .keyframe {
        height: 100%;
        width: 2rem;
        background: cornflowerblue;
        font-size: 0.8rem;
        font-weight: bold;
        text-align: center;
        cursor: pointer;

        --offset: 0;
        position: absolute;
        top: 0;
        left: calc((100% - 2rem) * var(--offset));
    }
</style>

<div class="timeline">
    {#each animation.effect.getKeyframes() as { offset }}
        <div class="keyframe" style="--offset: {offset}">{offset * 100}%</div>
    {/each}
</div>
