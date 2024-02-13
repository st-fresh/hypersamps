import {app} from 'https://cdn.skypack.dev/hyperapp'
import ColorView from './colors.js'
app({
  init: {color:"red"},
  view: state => ColorView({
    currentColor: state.color,
    onChangeColor: (state, color) => ({...state, color})
  }),
  node: document.getElementById('app')
})