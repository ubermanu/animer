import Animer from './Animer.svelte'

chrome.devtools.inspectedWindow.eval(
  'document.getAnimations()',
  function (animations) {
    console.log(animations)
    new Animer({ target: document.body, props: { animations } })
  }
)
