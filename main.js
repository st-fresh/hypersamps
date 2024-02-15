import { app } from 'hyperapp'
import ColorView from './colors.jsx'
app({
  init: {color:"red"},
  view: state => ColorView({
    currentColor: state.color,
    onChangeColor: (state, color) => ({...state, color})
  }),
  node: document.getElementById('app')
})
