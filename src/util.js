import { forEach } from 'lodash-es'

/**
 * @param {string} str
 * @return {string}
 */
export function camelToKebabCase(str) {
  return str.replace(/[A-Z]/g, (l) => `-${l.toLowerCase()}`)
}

/**
 * Filter the props of a keyframe to return the CSS ones.
 *
 * @param {{}} keyframe
 * @return {{}}
 */
export function getCssProperties(keyframe) {
  const { offset, computedOffset, easing, composite, ...styles } = keyframe
  return styles
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
      css += `\t${keyframe.offset * 100}% {\n`
      forEach(getCssProperties(keyframe), (value, prop) => {
        css += `\t\t${camelToKebabCase(prop)}: ${value};\n`
      })
      css += `\t}\n`
    })
  }

  return css + `}`
}
