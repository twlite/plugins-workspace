if("__TAURI__"in window){var __TAURI_SQL__=function(){"use strict";class _{constructor(_){this.path=_}static async load(t){const e=await window.__TAURI_INVOKE__("plugin:sql|load",{db:t});return new _(e)}static get(t){return new _(t)}async execute(_,t){const[e,n]=await window.__TAURI_INVOKE__("plugin:sql|execute",{db:this.path,query:_,values:null!=t?t:[]});return{lastInsertId:n,rowsAffected:e}}async select(_,t){return await window.__TAURI_INVOKE__("plugin:sql|select",{db:this.path,query:_,values:null!=t?t:[]})}async close(_){return await window.__TAURI_INVOKE__("plugin:sql|close",{db:_})}}return _}();Object.defineProperty(window.__TAURI__,"sql",{value:__TAURI_SQL__})}