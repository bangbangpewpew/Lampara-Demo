"use strict";const a=require("react"),l=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},s=l(a),u=t=>{const n=a.useRef(null);a.useEffect(()=>{if(!n.current)return;let e='<script type="text/javascript"><\/script>';if("html"in t)e=t.html;else if("src"in t)e=`<script src=${t.src}><\/script>`;else if("children"in t){const{children:r}=t;e=`<script type=${"type"in t?t.type:"text/javascript"}>`+r+"<\/script>"}else if("file"in t){i(t.file);return}const c=document.createRange().createContextualFragment(e);n.current.append(c)},[]);const i=async e=>{if(!n.current)return;const c=await(await fetch(e)).text(),r=document.createRange().createContextualFragment(c);n.current.append(r)};return s.default.createElement("div",{style:{display:"contents"},ref:n})};module.exports=u;