/** @jsx _x */
/** @jsxFrag _xf */

import { create } from 'xmlbuilder2'

/* ----- begin: generate xml from jsx ----- */
const _xf = 'Fragment'
const _x = (tag, attrs, ...children) => ({ tag, attrs, children })
const render = (o, options) => {
  const set = (parent, o) => {
    if (typeof o === 'string') {
      parent.txt(o)
      return parent
    } else {
      const node = o.tag === _xf ? parent : parent.ele(o.tag)
      o.attrs && Object.entries(o.attrs).forEach(kv => node.att(...kv))
      o.children && o.children.forEach(c => set(node, c))
      return node
    }
  }
  const doc = set(create(), o)
  return doc.end(options)
}
/* ----- end: generate xml from jsx ----- */


const items = <>
  <d:entry id="1" d:title="a">
    <title>Fuck! {"Hello >_< "}</title>
  </d:entry>
  <d:entry id="2" d:title="b">
  </d:entry>
</>

const front_back_matter = <main id="front_and_back">
  <h1 id="dic_name">(辭典名稱)</h1>
  <hr />
  <div id="edition">(版本)</div>
  <hr />
  <article>
  <h2>授權</h2>
  <dl>
    <dt>資料</dt>
    <dd><a href="https://example.com/">(來源)</a>，採用<a href="https://example.com/">授權條款</a>。</dd>
  </dl>
  </article>
  </main>

const dictionary = <d:dictionary xmlns="http://www.w3.org/1999/xhtml" xmlns:d="http://www.apple.com/DTDs/DictionaryService-1.0.rng">
  {items}
  <d:entry id="front_back_matter" d:title="Front/Back Matter">
  <d:index d:value="(front/back matter)" />
    {front_back_matter}
  </d:entry>
</d:dictionary>

console.log(render(dictionary, { prettyPrint: true }))