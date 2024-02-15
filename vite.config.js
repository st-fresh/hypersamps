export default {
  server: {
    host: '0.0.0.0',
  },
  esbuild: {
    jsxInject: 'import jsx from "hyperapp-jsx-pragma"',
    jsxFactory: 'jsx'
  }
}
