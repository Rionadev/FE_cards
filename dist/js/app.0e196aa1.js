(function(e){function t(t){for(var n,i,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"83eb1750"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(e);var u=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,r[1](u)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1d40":function(e,t,r){e.exports=r.p+"img/unnamed.9fd16f9e.jpg"},"1fb4":function(e,t,r){"use strict";var n=r("2a98"),a=r.n(n);a.a},"2a98":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},s=[],i=(r("fffb"),r("2877")),o={},c=Object(i["a"])(o,a,s,!1,null,null,null),u=c.exports,d=(r("4160"),r("b0c0"),r("159b"),r("96cf"),r("1da1")),l=r("ade3"),p=r("2f62"),m=r("2ef0"),f=r.n(m),h="https://api.nieidenawybory.pl",g="https://nieidenawybory.pl/",v=(r("99af"),r("d3b7"),r("53ca")),b=r("bc3a"),y=r("aced");b["defaults"].headers.common={"Content-Type":"application/json"},b["interceptors"].response.use((function(e){return e}),(function(e){return console.log(e.response),e.response.data["hydra:description"]&&y["a"].open({message:e.response.data["hydra:description"],type:"is-danger"}),Promise.reject(e)}));var w,C=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["get"]("".concat(h,"/api/games/").concat(t));case 2:return r=e.sent,n=P(r,200),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={},void 0!==t&&(r.name=t),e.next=4,b["post"]("".concat(h,"/api/games"),r);case 4:return n=e.sent,a=P(n,201),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["get"]("".concat(h,"/api/players/").concat(t));case 2:return r=e.sent,n=P(r,200),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={name:t,game:r},e.next=3,b["post"]("".concat(h,"/api/players"),n);case 3:return a=e.sent,s=P(a,201),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),S=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={game:t["@id"]},e.next=3,b["post"]("".concat(h,"/api/rounds"),r);case 3:return n=e.sent,a=P(n,201),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["get"]("".concat(h).concat(t));case 2:return r=e.sent,n=P(r,200),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["delete"]("".concat(h).concat(t));case 2:return r=e.sent,P(r,204),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,r,n){var a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={round:n["@id"],card:t,player:r["@id"]},e.next=3,b["post"]("".concat(h,"/api/round_cards"),a);case 3:return s=e.sent,i=P(s,201),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["put"]("".concat(h).concat(t["@id"]),r);case 2:return n=e.sent,a=P(n,200),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),P=function(e,t){if(e.status!==t)throw Error(e.message);var r=e.data;return"object"!==Object(v["a"])(r)&&(r=void 0),r},I={getGame:C,newGame:R,getPlayer:x,addPlayer:k,newRound:S,deleteRound:_,newRoundCard:j,updateRound:A,getRound:O},G=(r("b166"),{methods:{getButtonColor:function(e){switch(e){case"startRound":if(!this.round||!this.round.questionCard||"finished"===this.round.status)return"is-success";break;case"refreshRound":if(this.round&&this.round.questionCard&&"finished"!==this.round.status)return"is-success";break;case"finishRound":if(this.round&&"finished"!==this.round.status&&this.round.questionCard&&this.round.questionCard.answerCount*this.game.playersCount==this.round.cardsPlayedCount)return"is-success";break;case"reloadGame":if(this.game.id&&this.player.id)return"is-success";break;case"beforeGame":if(!this.game.id)return"is-success";break}return"is-light"},getCardImage:function(e){return h+e},getGameUrl:function(e){return g+"?game="+e},scrollToTop:function(){window.scrollTo(0,0)}}}),N="updateGame",q="addGame",U="updatePlayer",J="newRound",T="updateRound",D="addRoundCard",E="finishRound",M="roundPlayed",$="cardsSelected";n["a"].use(p["a"]);var B=function(){return{game:{},player:{},round:{},cardsSelected:[],roundPlayed:!1}},L=(w={},Object(l["a"])(w,q,(function(e,t){window.localStorage.setItem("game",JSON.stringify(t)),e.game=t})),Object(l["a"])(w,N,(function(e,t){window.localStorage.setItem("game",JSON.stringify(t)),e.game=t})),Object(l["a"])(w,U,(function(e,t){window.localStorage.setItem("player",JSON.stringify(t)),e.player=t})),Object(l["a"])(w,T,(function(e,t){window.localStorage.setItem("round",JSON.stringify(t)),e.round=t})),Object(l["a"])(w,J,(function(e,t){e.round=t,window.localStorage.setItem("round",JSON.stringify(t))})),Object(l["a"])(w,D,(function(e,t){void 0==e.round.cards&&(e.round.cards=[]),e.round.cards.push(t)})),Object(l["a"])(w,E,(function(e,t){e.round.winner=t.winner,e.round.status=t.status,window.localStorage.setItem("round",JSON.stringify(e.round))})),Object(l["a"])(w,M,(function(e,t){e.roundPlayed=t,window.localStorage.setItem("roundPlayed",JSON.stringify(t))})),Object(l["a"])(w,$,(function(e,t){e.cardsSelected=t,window.localStorage.setItem("cardsSelected",JSON.stringify(t))})),w),W={setGameId:function(e,t){var r=e.commit,n=e.state,a=f.a.cloneDeep(n.game);a.id=t,r(N,a)},createGameAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.state,t.next=3,I.newGame(n.player.name);case 3:a=t.sent,r(q,a),a.players.length&&r(U,a.players[0]),r(T,{});case 7:case"end":return t.stop()}}),t)})))()},getGameAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.state,t.next=3,I.getGame(n.game.id);case 3:a=t.sent,r(N,a),a.activeRound&&a.activeRound["@id"]==n.round["@id"]||(r(T,a.activeRound?a.activeRound:{}),r(M,!1),r($,[]));case 6:case"end":return t.stop()}}),t)})))()},getPlayerAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.state,t.next=3,I.getPlayer(n.player.id);case 3:a=t.sent,r(U,a);case 5:case"end":return t.stop()}}),t)})))()},addPlayerAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.state,t.next=3,I.addPlayer(n.player.name,n.game["@id"]);case 3:a=t.sent,r(U,a);case 5:case"end":return t.stop()}}),t)})))()},setPlayerName:function(e,t){var r=e.commit,n=e.state,a=f.a.cloneDeep(n.player);a.name=t,r(U,a)},getRoundAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.state,t.next=3,I.getRound(n.round["@id"]);case 3:a=t.sent,a["@id"]!=n.round["@id"]&&(r(M,!1),r($,[])),r(T,a);case 6:case"end":return t.stop()}}),t)})))()},startRoundAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.state,t.next=3,I.newRound(n.game);case 3:a=t.sent,r(J,a),r(M,!1),r($,[]);case 7:case"end":return t.stop()}}),t)})))()},cancelRoundAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.state,t.next=3,I.deleteRound(n.round["@id"]);case 3:r(T,{});case 4:case"end":return t.stop()}}),t)})))()},playCardsAction:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=e.commit,a=e.state,t.forEach(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I.newRoundCard(t,a.player,a.round);case 2:r=e.sent,n(D,r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return r.stop()}}),r)})))()},finishRoundAction:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,a,s,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.state,s={winner:t,status:"finished"},r.next=4,I.updateRound(a.round,s);case 4:i=r.sent,n(E,i);case 6:case"end":return r.stop()}}),r)})))()},setGame:function(e,t){var r=e.commit;r(N,t)},setPlayer:function(e,t){var r=e.commit;r(U,t)},setRound:function(e,t){var r=e.commit;r(T,t)},setRoundPlayed:function(e,t){var r=e.commit;r(M,t)},setCardsSelected:function(e,t){var r=e.commit;r($,t)}},F={},Y=new p["a"].Store({strict:!1,state:B,mutations:L,actions:W,getters:F}),H=r("8c4f"),K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Ze game",src:r("1d40")}}),n("section",[n("div",{staticClass:"tile is-parent"},[n("article",{staticClass:"tile is-child is-danger"},[n("p",{staticClass:"title"},[e._v("Karty dżentelmenów")]),n("div",{staticClass:"content"},[n("Game"),n("Round"),n("Player")],1)])])])])},Z=[],z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-collapse",{staticClass:"card",attrs:{animation:"slide","aria-id":"gameCard"},scopedSlots:e._u([{key:"trigger",fn:function(t){return r("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"gameCard"}},[r("p",{staticClass:"card-header-title"},[e._v(" Game details ")]),r("a",{staticClass:"card-header-icon"},[r("b-icon",{attrs:{icon:t.open?"menu-down":"menu-up"}})],1)])}}])},[r("div",{staticClass:"card-content"},[e.game.playersCount?r("nav",{staticClass:"level is-mobile"},[r("div",{staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading"},[e._v("Players")]),r("p",{staticClass:"title"},[e._v(e._s(e.game.playersCount))])])]),r("div",{staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading"},[e._v("Rounds")]),r("p",{staticClass:"title"},[e._v(e._s(e.game.roundsCount))])])])]):e._e(),e.game.scores?r("div",[r("h4",[e._v("Scores")]),r("nav",{staticClass:"level"},e._l(e.game.scores,(function(t){return r("div",{key:t.player,staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading"},[e._v(e._s(t.player))]),r("p",{staticClass:"title"},[e._v(e._s(t.score))])])])})),0)]):e._e(),r("section",{staticClass:"hero"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("b-field",{attrs:{grouped:""}},[r("b-field",{attrs:{label:"Game ID",expanded:""}},[r("b-field",[r("b-input",{attrs:{placeholder:"Paste game ID here to join",expanded:""},model:{value:e.gameId,callback:function(t){e.gameId=t},expression:"gameId"}}),r("button",{staticClass:"button"},[r("b-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.getGameUrl(e.gameId),expression:"getGameUrl(gameId)",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{pack:"fas",icon:"copy",title:"copy to clipboard"}})],1)],1)],1),r("b-field",{attrs:{label:"Your name",expanded:""}},[r("b-input",{attrs:{placeholder:"Player name"},model:{value:e.playerName,callback:function(t){e.playerName=t},expression:"playerName"}})],1)],1)],1)])])]),r("footer",{staticClass:"card-footer"},[r("b-button",{staticClass:"card-footer-item",attrs:{type:e.getButtonColor("beforeGame")},on:{click:e.joinGame}},[e._v("Join")]),r("b-button",{staticClass:"card-footer-item",attrs:{type:e.getButtonColor("reloadGame")},on:{click:e.reloadGame}},[e._v("Reload")]),r("b-button",{staticClass:"card-footer-item",attrs:{type:e.getButtonColor("beforeGame")},on:{click:e.createGame}},[e._v("Create")])],1)])},Q=[],V=r("5530"),X={name:"Game",data:function(){return{notification:{},timer:"",retry:3}},mixins:[G],created:function(){if(this.$route.query.game)this.gameId=this.$route.query.game;else{var e=JSON.parse(window.localStorage.getItem("game"));e&&this.setGame(e)}this.startAutoUpdate()},beforeDestroy:function(){clearInterval(this.timer)},computed:Object(V["a"])({},Object(p["c"])(["game","player","round"]),{isDuringGame:function(){return this.game.id},gameId:{get:function(){return this.game.id},set:function(e){this.setGameId(e)}},playerName:{get:function(){return this.player.name},set:function(e){this.setPlayerName(e)}}}),methods:Object(V["a"])({},Object(p["b"])(["createGameAction","addPlayerAction","getGameAction","setPlayerName","setGameId","setGame"]),{createGame:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.player.name){t.next=3;break}return y["a"].open({message:"enter player name to create a game",type:"is-danger"}),t.abrupt("return",!1);case 3:if(!e.game.id){t.next=7;break}e.$buefy.dialog.confirm({title:"Confirm",message:"You will leave current game. Are you sure?",confirmText:"Reset game",type:"is-danger",hasIcon:!0,onConfirm:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.createGameAction();case 2:case"end":return t.stop()}}),t)})));function r(){return t.apply(this,arguments)}return r}()}),t.next=9;break;case 7:return t.next=9,e.createGameAction();case 9:case"end":return t.stop()}}),t)})))()},reloadGame:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.refresh();case 2:case"end":return t.stop()}}),t)})))()},joinGame:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.game.id&&e.player.name){t.next=3;break}return y["a"].open({message:"enter player name and game id to join",type:"is-danger"}),t.abrupt("return",!1);case 3:return t.next=5,e.getGameAction();case 5:return t.next=7,e.addPlayerAction();case 7:return t.next=9,e.getGameAction();case 9:case"end":return t.stop()}}),t)})))()},refresh:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!e.game.id){t.next=6;break}return console.log("game refresh"),t.next=5,e.getGameAction();case 5:e.startAutoUpdate();case 6:t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),e.cancelAutoUpdate(),e.setGame({id:e.gameId});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},cancelAutoUpdate:function(){console.log("cancel autoupdate game"),clearInterval(this.timer)},startAutoUpdate:function(){clearInterval(this.timer),this.timer=setInterval(this.refresh,3e3)},onCopy:function(e){y["a"].open({message:"You just copied: "+e.text,type:"is-success"})},onError:function(e){y["a"].open({message:"Failed to copy text",type:"is-danger"})}})},ee=X,te=Object(i["a"])(ee,z,Q,!1,null,null,null),re=te.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.game.id?r("b-collapse",{staticClass:"card",attrs:{animation:"slide","aria-id":"roundCard"},scopedSlots:e._u([{key:"trigger",fn:function(t){return r("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"roundCard",id:"round-card"}},[r("p",{staticClass:"card-header-title"},[e._v(" Round ")]),r("a",{staticClass:"card-header-icon"},[r("b-icon",{attrs:{icon:t.open?"menu-down":"menu-up"}})],1)])}}],null,!1,966041462)},[e.round&&e.round.questionCard?r("div",{staticClass:"card-content"},[r("img",{attrs:{src:e.getCardImage(e.round.questionCard.image)}}),r("nav",{staticClass:"level"},[r("div",{staticClass:"level-item has-text-centered",class:e.roundCardsSelected()},[r("div",[r("p",{staticClass:"heading"},[e._v("Answers needed")]),r("p",{staticClass:"title"},[e._v(" "+e._s(e.round.questionCard.answerCount)+" ")])])]),r("div",{staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading"},[e._v("Cards Played")]),r("p",{staticClass:"title"},[e._v(e._s(e.round.cardsPlayedCount))])])]),r("div",{staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading"},[e._v("Status")]),r("p",{staticClass:"title"},[e._v(" "+e._s(e.round.status)+" ")])])]),r("div",{staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading"},[e._v("Winner")]),r("p",{staticClass:"title"},[e._v(" "+e._s(e.round.winner?e.round.winner.name:"--")+" ")])])])])]):e._e(),r("footer",{staticClass:"card-footer"},[r("b-button",{staticClass:"card-footer-item",attrs:{type:e.getButtonColor("startRound")},on:{click:e.startRound}},[e._v("Start")]),r("b-button",{staticClass:"card-footer-item",attrs:{type:e.getButtonColor("refreshRound")},on:{click:e.getRoundAction}},[e._v("Refresh")]),r("b-button",{staticClass:"card-footer-item",attrs:{type:"is-light"},on:{click:e.cancelRound}},[e._v("Cancel")]),r("b-button",{staticClass:"card-footer-item",attrs:{type:e.getButtonColor("finishRound")},on:{click:e.finishRound}},[e._v("Finish")])],1)]):e._e(),e.round&&e.round.questionCard?r("b-modal",{attrs:{active:e.isRoundModalActive,"has-modal-card":"","trap-focus":"","aria-role":"dialog","aria-modal":""},on:{"update:active":function(t){e.isRoundModalActive=t}}},[r("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[r("header",{staticClass:"modal-card-head"},[r("p",{staticClass:"modal-card-title"},[e._v("The question was:")])]),r("section",{staticClass:"modal-card-body"},[r("div",{staticClass:"block"},[r("img",{attrs:{src:e.getCardImage(e.round.questionCard.image)}})]),r("header",{staticClass:"modal-card-head"},[r("p",{staticClass:"modal-card-title"},[e._v("And the winner is:")])]),r("div",{staticClass:"block"},e._l(e.round.playersAnswers,(function(t){return r("div",{key:t.player.id},[r("p",[r("b-radio",{attrs:{name:"winner","native-value":t.player["@id"]},model:{value:e.winner,callback:function(t){e.winner=t},expression:"winner"}},[e._v(" "+e._s(t.player.name)+" ")])],1),e._l(t.cards,(function(t){return r("div",{key:t["@id"]},[r("div",{staticClass:"card-answer"},[r("img",{attrs:{src:e.getCardImage(t.image)}})])])}))],2)})),0)]),r("footer",{staticClass:"modal-card-foot"},[r("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.closeWinnerPopup()}}},[e._v(" Close ")]),r("button",{staticClass:"button is-primary",on:{click:function(t){return e.setRoundWinner()}}},[e._v(" Finish round ")])])])]):e._e()],1)},ae=[],se={name:"Round",data:function(){return{notification:{},isRoundModalActive:!1,winner:"",currentRoundIri:""}},created:function(){var e=JSON.parse(window.localStorage.getItem("round"));e?this.setRound(e):this.setRound({}),this.startAutoUpdate()},beforeDestroy:function(){clearInterval(this.timer)},mixins:[G],computed:Object(V["a"])({},Object(p["c"])(["game","player","round","cardsSelected"])),methods:Object(V["a"])({},Object(p["b"])(["startRoundAction","cancelRoundAction","finishRoundAction","setRound","getRoundAction"]),{startRound:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.startRoundAction();case 2:e.startAutoUpdate();case 3:case"end":return t.stop()}}),t)})))()},cancelRound:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.round&&e.round.questionCard){t.next=3;break}return y["a"].open({message:"no round in progress",type:"is-danger"}),t.abrupt("return",!1);case 3:if("finished"!==e.round.status){t.next=6;break}return y["a"].open({message:"cannot cancel finished round",type:"is-danger"}),t.abrupt("return",!1);case 6:return t.next=8,e.cancelRoundAction();case 8:e.setRound(e.round);case 9:case"end":return t.stop()}}),t)})))()},finishRound:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("finished"!==e.round.status){t.next=3;break}return y["a"].open({message:"round alredy finished",type:"is-danger"}),t.abrupt("return",!1);case 3:if(e.round.questionCard){t.next=6;break}return y["a"].open({message:"no round in progress",type:"is-danger"}),t.abrupt("return",!1);case 6:if(e.round.cardsPlayedCount){t.next=9;break}return y["a"].open({message:"no cards played - cancel round if you want",type:"is-danger"}),t.abrupt("return",!1);case 9:return e.round.questionCard.answerCount*e.game.playersCount>e.round.cardsPlayedCount?e.$buefy.dialog.confirm({title:"Confirm",message:"Not all players ready. Do you still want to finish this round?",confirmText:"Finish round",type:"is-danger",hasIcon:!0,onConfirm:function(){e.cancelAutoUpdate(),e.isRoundModalActive=!0}}):(e.cancelAutoUpdate(),e.isRoundModalActive=!0),e.winner="",t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t)})))()},setRoundWinner:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isRoundModalActive=!1,t.next=3,e.finishRoundAction(e.winner);case 3:y["a"].open({message:"Round finished, how about starting another one?",type:"is-success"}),e.startAutoUpdate();case 5:case"end":return t.stop()}}),t)})))()},roundCardsSelected:function(){return!this.cardsSelected||this.round.questionCard&&this.round.questionCard.answerCount!=this.cardsSelected.length?"has-background-danger":"has-background-success"},refresh:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.round["@id"]||"new"!==e.round.status){t.next=6;break}return console.log("round refresh"),t.next=4,e.getRoundAction();case 4:t.next=7;break;case 6:e.setRound(e.round);case 7:e.round["@id"]!=e.currentRoundIri&&(e.isRoundModalActive=!1,e.startAutoUpdate());case 8:case"end":return t.stop()}}),t)})))()},cancelAutoUpdate:function(){clearInterval(this.timer)},startAutoUpdate:function(){this.cancelAutoUpdate(),this.timer=setInterval(this.refresh,3e3)},closeWinnerPopup:function(){this.isRoundModalActive=!1,this.startAutoUpdate()}})},ie=se,oe=Object(i["a"])(ie,ne,ae,!1,null,null,null),ce=oe.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.game.playersCount?r("b-collapse",{staticClass:"card",attrs:{animation:"slide","aria-id":"playerCard"},scopedSlots:e._u([{key:"trigger",fn:function(t){return r("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"playerCard"}},[r("p",{staticClass:"card-header-title"},[e._v(e._s(e.player.name)+" - Your cards")]),r("a",{staticClass:"card-header-icon"},[r("b-icon",{attrs:{icon:t.open?"menu-down":"menu-up"}})],1)])}}],null,!1,2526821250)},[e.player.cards?r("div",{staticClass:"card-content"},[r("nav",{staticClass:"level is-mobile"},[r("div",{staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading"},[e._v("Cards")]),r("p",{staticClass:"title"},[e._v(e._s(e.player.cards.length))])])]),r("div",{staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading"},[e._v("Selected")]),r("p",{staticClass:"title"},[e._v(e._s(e.cardsSelected?e.cardsSelected.length:0))])])])]),e._l(e.player.cards,(function(t){return r("div",{key:t.card["@id"],staticClass:"level-item has-text-centered"},[r("div",{staticClass:"card-answer",class:e.checkCardSelected(t.card["@id"]),on:{click:function(r){return e.toggleCardSelect(t.card["@id"])}}},[r("img",{attrs:{src:e.getCardImage(t.card.image)}})])])}))],2):e._e(),r("footer",{staticClass:"card-footer"},[r("b-button",{staticClass:"card-footer-item",attrs:{type:"is-light"},on:{click:e.getPlayerAction}},[e._v("Refresh")]),r("b-button",{staticClass:"card-footer-item",attrs:{type:"is-light",disabled:e.playCardsDisabled()},on:{click:e.playCards}},[e._v("Play cards")])],1)]):e._e()},de=[],le=(r("4de4"),{name:"Player",data:function(){return{notification:{}}},mixins:[G],created:function(){var e=JSON.parse(window.localStorage.getItem("player"));e&&this.setPlayer(e);var t=JSON.parse(window.localStorage.getItem("roundPlayed"));t?this.setRoundPlayed(t):this.setRoundPlayed(!1);var r=JSON.parse(window.localStorage.getItem("cardsSelected"));r?this.setCardsSelected(r):this.setCardsSelected([]),this.debouncedLSSync=f.a.debounce(this.localStorageSync,1e3),this.timer=setInterval(this.refresh,3e3)},beforeDestroy:function(){clearInterval(this.timer)},watch:{cardsSelected:function(){this.debouncedLSSync()},roundPlayed:function(){this.debouncedLSSync()}},computed:Object(V["a"])({},Object(p["c"])(["game","player","round","cardsSelected","roundPlayed"])),methods:Object(V["a"])({},Object(p["b"])(["getPlayerAction","playCardsAction","setPlayer","setRoundPlayed","setCardsSelected"]),{localStorageSync:function(){window.localStorage.setItem("roundPlayed",JSON.stringify(this.roundPlayed)),window.localStorage.setItem("cardsSelected",JSON.stringify(this.cardsSelected))},playCards:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.playCardsDisabled()){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,e.playCardsAction(e.cardsSelected);case 4:e.setRoundPlayed(!0),y["a"].open({message:"Cards sent",type:"is-success"}),e.getPlayerAction(),e.$scrollTo("#round-card");case 8:case"end":return t.stop()}}),t)})))()},toggleCardSelect:function(e){var t=this;if(this.roundPlayed)return!1;var r=this.cardsSelected.filter((function(t){return t===e}));if(r.length){var n=this.cardsSelected.filter((function(t){return t!==e}));this.setCardsSelected(n)}else{var a=f.a.clone(this.cardsSelected);a.push(e),this.setCardsSelected(a)}this.playCardsDisabled()?this.notification.close&&this.notification.close():this.notification=this.$buefy.snackbar.open({message:"Ready to play?",type:"is-success",position:"is-bottom",actionText:"Send cards",indefinite:!0,queue:!1,onAction:function(){t.playCards()}})},checkCardSelected:function(e){if(!this.cardsSelected)return"";var t=this.cardsSelected.filter((function(t){return t===e}));return t.length?"has-background-success":""},playCardsDisabled:function(){return!this.cardsSelected||!this.round.questionCard||this.round.questionCard.answerCount!==this.cardsSelected.length||this.roundPlayed},refresh:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.player["@id"]){t.next=4;break}return console.log("player refresh"),t.next=4,e.getPlayerAction();case 4:case"end":return t.stop()}}),t)})))()},cancelAutoUpdate:function(){clearInterval(this.timer)}})}),pe=le,me=(r("1fb4"),Object(i["a"])(pe,ue,de,!1,null,null,null)),fe=me.exports,he={name:"Home",components:{Game:re,Round:ce,Player:fe}},ge=he,ve=Object(i["a"])(ge,K,Z,!1,null,null,null),be=ve.exports;n["a"].use(H["a"]);var ye=[{path:"/",name:"Home",component:be},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"754b"))}}],we=new H["a"]({mode:"history",base:"/",routes:ye}),Ce=we,Re=r("289d"),xe=(r("5abe"),r("4eb5")),ke=r.n(xe),Se=r("f13c"),Oe=r.n(Se);n["a"].config.productionTip=!1,n["a"].use(Re["a"]),n["a"].use(ke.a),n["a"].use(Oe.a),new n["a"]({store:Y,router:Ce,render:function(e){return e(u)}}).$mount("#app")},a210:function(e,t,r){},fffb:function(e,t,r){"use strict";var n=r("a210"),a=r.n(n);a.a}});
//# sourceMappingURL=app.0e196aa1.js.map