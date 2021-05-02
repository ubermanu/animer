<script>
    import Timeline from './Timeline.svelte'
    import Sidebar from './Sidebar.svelte'
    import { convertAnimationToCss } from './util'

    export let element = document.querySelector('.example')
    $: animations = element.getAnimations()

    $: console.log(animations)
</script>

<style>
    main {
        display: flex;
    }

    .animations {
        flex-grow: 1;
        padding-left: 0;
        list-style-position: inside;
    }
</style>

<main>
    <ol class="animations">
        {#each animations as animation}
            <li class="animation">
                <b>{animation.animationName}</b>
                <small>({animation.playState})</small>
                <button on:click={() => animation.play()}>Play</button>
                <button on:click={() => animation.pause()}>Pause</button>
                <button on:click={() => console.log(convertAnimationToCss(animation))}>Dump</button>
                <Timeline {animation} />
            </li>
        {/each}
    </ol>
    <Sidebar />
</main>
