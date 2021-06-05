import { map } from 'lodash-es'
import { writable } from 'svelte/store'
import { getCssProperties } from './util'

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

/**
 * @param animation
 * @param keyframe
 * @param name
 * @param value
 */
export function updateKeyframeProperty(animation, keyframe, name, value) {
  const data = {
    ...keyframe,
    [name]: value
  }

  let keyframes = animation.effect.getKeyframes()
  keyframes = map(keyframes, (k) =>
    k.computedOffset === keyframe.computedOffset ? data : k
  )
  keyframes = map(keyframes, (k) => getCssProperties(k))

  animation.effect.setKeyframes(keyframes)
}
