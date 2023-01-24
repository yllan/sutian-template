/** @jsxImportSource ./sutian */
import { render } from './sutian/jsx-runtime'
import { writeFileSync } from 'fs'

const items = <>
  <d:entry id="2283" d:title="好">
    <d:index d:value="好" d:yomi="hònn" />
    <d:index d:value="hònn" d:yomi="hònn" />
    <d:index d:value="hòⁿ" d:yomi="hònn" />
    <h1>好
      <span class="reading">文</span>
      <span class="syntax">
        <span d:pr="TL">/ hònn /</span>
        <span d:pr="POJ">/ hòⁿ /</span>
      </span>
    </h1>
    <div class="body">
      <div class="def_element">喜愛。
        <ul class="example">
          <li>
            <div class="example_hanzi single_line"><strong>好</strong>奇</div>
            <div d:pr="TL" class="example_tailo single_line">hònn-kî</div>
            <div d:pr="POJ" class="example_tailo single_line">hòⁿ-kî</div>
            <div class="example_hanyu single_line"></div>
          </li>
          <li>
            <div class="example_hanzi single_line"><strong>好</strong>玄</div>
            <div d:pr="TL" class="example_tailo single_line">hònn-hiân</div>
            <div d:pr="POJ" class="example_tailo single_line">hòⁿ-hiân</div>
            <div class="example_hanyu single_line">(好奇)</div>
          </li>
        </ul>
      </div>
    </div>
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

writeFileSync('sutian.xml', render(dictionary, { prettyPrint: true }))
