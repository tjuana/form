import{t as o,b as c,c as f,j as p}from"./index-jadRRisZ.js";const m={success:s=>o.success(s),error:s=>o.error(s)};function u(s){var e,r,t="";if(typeof s=="string"||typeof s=="number")t+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(e=0;e<a;e++)s[e]&&(r=u(s[e]))&&(t&&(t+=" "),t+=r)}else for(r in s)s[r]&&(t&&(t+=" "),t+=r);return t}function b(){for(var s,e,r=0,t="",a=arguments.length;r<a;r++)(s=arguments[r])&&(e=u(s))&&(t&&(t+=" "),t+=e);return t}const x=()=>c(),y=f,g=({children:s,type:e="button",onClick:r,disabled:t=!1,loading:a=!1,fullWidth:n=!1,ariaLabel:i,className:l})=>p.jsx("button",{type:e,onClick:r,disabled:t||a,className:b("px-4 py-2 rounded-md text-white text-sm font-medium transition-all duration-150","bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400","disabled:opacity-50 disabled:cursor-not-allowed",n&&"w-full",l),"aria-disabled":t||a,"aria-busy":a,"aria-label":i,"aria-live":"polite",children:a?"Loading...":s});export{g as B,y as a,b as c,m as t,x as u};
