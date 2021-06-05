import { writable } from 'svelte/store'

export const curAnimation = writable(null)
export const curKeyframe = writable(null)

/**
 * @param {Animation} animation
 * @param {{}} keyframe
 */
export function openSidebar(animation, keyframe) {
  if (!(animation.effect instanceof KeyframeEffect)) {
    return console.warn('The selected animation is not a keyframe')
  }

  curAnimation.set(animation)
  curKeyframe.set(keyframe)
}

export function closeSidebar() {
  curAnimation.set(null)
  curKeyframe.set(null)
}
