import { writable } from 'svelte/store'

export const selected = writable({})

/**
 * @param {Animation} animation
 * @param {{}} keyframe
 */
export function editKeyframe(animation, keyframe) {
  selected.set({ animation, keyframe })
}

export function closeSidebar() {
  selected.set({})
}
