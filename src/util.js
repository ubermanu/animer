import { forEach } from 'lodash-es'

/**
 * @param {string} str
 * @return {string}
 */
export function camelToKebabCase(str) {
  return str.replace(/[A-Z]/g, (l) => `-${l.toLowerCase()}`)
}

/**
 * Convert an animation to plain CSS.
 * Note: Supports only keyframes at the moment
 *
 * @param {Animation} animation
 * @return {string}
 */
export function convertAnimationToCss(animation) {
  let css = `@keyframes ${animation.animationName} {\n`

  if (animation.effect instanceof KeyframeEffect) {
    const keyframes = animation.effect.getKeyframes()

    forEach(keyframes, (keyframe) => {
      const { offset, computedOffset, easing, composite, ...props } = keyframe
      css += `\t${offset * 100}% {\n`
      forEach(props, (value, prop) => {
        css += `\t\t${camelToKebabCase(prop)}: ${value};\n`
      })
      css += `\t}\n`
    })
  }

  return css + `}`
}
