(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comple","chunk-863a1ee8"],{"13aa":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container-fluid banner-interno"},[a("div",{staticClass:"banner-interno__fondo",style:{"background-image":`url(${t.globalData.fondoBannerPrincipal})`}}),a("div",{staticClass:"container"},[a("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?a("div",{staticClass:"banner-interno__titulo__icono me-3"},[a("i",{class:t.icono})]):t._e(),a("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},o=[],s={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:()=>({}),computed:{globalData(){return this.$config.global}}},r=s,i=(n("4cfe"),n("2877")),c=Object(i["a"])(r,e,o,!1,null,null,null);a["default"]=c.exports},"4c48":function(t,a,n){},"4cfe":function(t,a,n){"use strict";n("4c48")},"85ef":function(t,a,n){},d737:function(t,a,n){"use strict";n("85ef")},dd8c:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"curso-main-container complementario"},[a("BannerInterno",{attrs:{icono:"far fa-folder-open",titulo:"Material complementario"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[a("div",{staticClass:"table-responsive"},[a("table",[t._m(0),a("tbody",t._l(t.computedData,(function(n,e){return a("tr",{key:"complementario-"+e},[a("td",{staticClass:"text-start",attrs:{colspan:"3",scope:"row"},domProps:{innerHTML:t._s(n.tema)}}),a("td",{staticClass:"text-start",attrs:{colspan:"5",scope:"row"},domProps:{innerHTML:t._s(n.referencia)}}),a("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(n.tipo)}}),a("td",{attrs:{colspan:"2"}},[a("div",{staticClass:"complementario__enlaces"},t._l(n.link,(function(t){return a("a",{staticClass:"complementario__btn",attrs:{href:t,target:"_blank"}},[a("i",{staticClass:"fas fa-external-link-alt"})])})),0)])])})),0)])])])],1)},o=[function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",{attrs:{colspan:"3",scope:"col"}},[t._v("Tema")]),a("th",{attrs:{colspan:"5",scope:"col"}},[t._v("Referencia APA del material")]),a("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Tipo ")]),a("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Enlace")])])])}],s=n("13aa"),r={name:"MaterialComplementario",components:{BannerInterno:s["default"]},computed:{complementarioData(){return this.$config.complementario},computedData(){const t=this.$config.complementario;return t.map(t=>{let a=[];return t.link?"string"===typeof t.link?a.push(t.link):a=t.link:t.descarga&&("string"===typeof t.descarga?a.push(this.obtenerLink(t.descarga)):t.descarga.forEach(t=>{a.push(this.obtenerLink(t))})),{...t,link:a}})}}},i=r,c=(n("d737"),n("2877")),l=Object(c["a"])(i,e,o,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=comple.d3b15a85.js.map