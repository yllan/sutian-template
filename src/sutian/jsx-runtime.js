import { create } from 'xmlbuilder2'

export const jsxs = (tag, attrs) => ({ tag, attrs })
export const jsx = jsxs
export const Fragment = 'Fragment'
export const render = (o, options) => {
  const set = (parent, o) => {
    if (typeof o === 'string') {
      parent.txt(o)
      return parent
    } else {
      const node = o.tag === Fragment ? parent : parent.ele(o.tag)
      o.attrs && Object.entries(o.attrs).forEach(([k, v]) =>
        k === 'children'
        ? [v].flat().forEach(c => set(node, c))
        : node.att(k, v)
      )
      return node
    }
  }
  const doc = set(create(), o)
  return doc.end(options)
}
