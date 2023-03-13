declare module 'remark-prism'
declare module '*.less' {
  const less: any
  export default less
}
declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
