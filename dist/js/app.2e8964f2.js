(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"bdd47a6b"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(e);var u=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",u.name="ChunkLoadError",u.type=r,u.request=s,n[1](u)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d40":function(e,t,n){e.exports=n.p+"img/unnamed.9fd16f9e.jpg"},"1fb4":function(e,t,n){"use strict";var r=n("2a98"),a=n.n(r);a.a},"2a98":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},s=[],i=(n("fffb"),n("2877")),o={},c=Object(i["a"])(o,a,s,!1,null,null,null),u=c.exports,d=(n("4160"),n("b0c0"),n("159b"),n("96cf"),n("1da1")),l=n("ade3"),p=n("2f62"),m=n("2ef0"),f=n.n(m),h="https://api.nieidenawybory.pl",g=(n("99af"),n("d3b7"),n("53ca")),v=n("bc3a"),b=n("aced");v["defaults"].headers.common={"Content-Type":"application/json"},v["interceptors"].response.use((function(e){return e}),(function(e){return console.log(e.response),e.response.data["hydra:description"]&&b["a"].open({message:e.response.data["hydra:description"],type:"is-danger"}),Promise.reject(e)}));var y,w=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v["get"]("".concat(h,"/api/games/").concat(t));case 2:return n=e.sent,r=A(n,200),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={},void 0!==t&&(n.name=t),e.next=4,v["post"]("".concat(h,"/api/games"),n);case 4:return r=e.sent,a=A(r,201),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v["get"]("".concat(h,"/api/players/").concat(t));case 2:return n=e.sent,r=A(n,200),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={name:t,game:n},e.next=3,v["post"]("".concat(h,"/api/players"),r);case 3:return a=e.sent,s=A(a,201),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={game:t["@id"]},e.next=3,v["post"]("".concat(h,"/api/rounds"),n);case 3:return r=e.sent,a=A(r,201),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v["get"]("".concat(h).concat(t));case 2:return n=e.sent,r=A(n,200),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v["delete"]("".concat(h).concat(t));case 2:return n=e.sent,A(n,204),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={round:r["@id"],card:t,player:n["@id"]},e.next=3,v["post"]("".concat(h,"/api/round_cards"),a);case 3:return s=e.sent,i=A(s,201),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v["put"]("".concat(h).concat(t["@id"]),n);case 2:return r=e.sent,a=A(r,200),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(e,t){if(e.status!==t)throw Error(e.message);var n=e.data;return"object"!==Object(g["a"])(n)&&(n=void 0),n},P={getGame:w,newGame:C,getPlayer:R,addPlayer:x,newRound:S,deleteRound:O,newRoundCard:_,updateRound:j,getRound:k},I=(n("b166"),{methods:{getButtonColor:function(e){switch(e){case"startRound":if(!this.round||!this.round.questionCard||"finished"===this.round.status)return"is-success";break;case"refreshRound":if(this.round&&this.round.questionCard&&"finished"!==this.round.status)return"is-success";break;case"finishRound":if(this.round&&"finished"!==this.round.status&&this.round.questionCard&&this.round.questionCard.answerCount*this.game.playersCount==this.round.cardsPlayedCount)return"is-success";break;case"reloadGame":if(this.game.id&&this.player.id)return"is-success";break;case"beforeGame":if(!this.game.id)return"is-success";break}return"is-light"},getCardImage:function(e){return h+e}}}),G="updateGame",N="addGame",q="updatePlayer",J="newRound",D="updateRound",E="addRoundCard",M="finishRound",T="roundPlayed",U="cardsSelected";r["a"].use(p["a"]);var $=function(){return{game:{},player:{},round:{},cardsSelected:[],roundPlayed:!1}},B=(y={},Object(l["a"])(y,N,(function(e,t){window.localStorage.setItem("game",JSON.stringify(t)),e.game=t})),Object(l["a"])(y,G,(function(e,t){window.localStorage.setItem("game",JSON.stringify(t)),e.game=t})),Object(l["a"])(y,q,(function(e,t){window.localStorage.setItem("player",JSON.stringify(t)),e.player=t})),Object(l["a"])(y,D,(function(e,t){window.localStorage.setItem("round",JSON.stringify(t)),e.round=t})),Object(l["a"])(y,J,(function(e,t){e.round=t,window.localStorage.setItem("round",JSON.stringify(t))})),Object(l["a"])(y,E,(function(e,t){void 0==e.round.cards&&(e.round.cards=[]),e.round.cards.push(t)})),Object(l["a"])(y,M,(function(e,t){e.round.winner=t.winner,e.round.status=t.status,window.localStorage.setItem("round",JSON.stringify(e.round))})),Object(l["a"])(y,T,(function(e,t){e.roundPlayed=t,window.localStorage.setItem("roundPlayed",JSON.stringify(t))})),Object(l["a"])(y,U,(function(e,t){e.cardsSelected=t,window.localStorage.setItem("cardsSelected",JSON.stringify(t))})),y),L={setGameId:function(e,t){var n=e.commit,r=e.state,a=f.a.cloneDeep(r.game);a.id=t,n(G,a)},createGameAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,t.next=3,P.newGame(r.player.name);case 3:a=t.sent,n(N,a),a.players.length&&n(q,a.players[0]),n(D,{});case 7:case"end":return t.stop()}}),t)})))()},getGameAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,t.next=3,P.getGame(r.game.id);case 3:a=t.sent,n(G,a),a.activeRound&&a.activeRound["@id"]==r.round["@id"]||(n(D,a.activeRound?a.activeRound:{}),n(T,!1),n(U,[]));case 6:case"end":return t.stop()}}),t)})))()},getPlayerAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,t.next=3,P.getPlayer(r.player.id);case 3:a=t.sent,n(q,a);case 5:case"end":return t.stop()}}),t)})))()},addPlayerAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,t.next=3,P.addPlayer(r.player.name,r.game["@id"]);case 3:a=t.sent,n(q,a);case 5:case"end":return t.stop()}}),t)})))()},setPlayerName:function(e,t){var n=e.commit,r=e.state,a=f.a.cloneDeep(r.player);a.name=t,n(q,a)},getRoundAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,t.next=3,P.getRound(r.round["@id"]);case 3:a=t.sent,a["@id"]!=r.round["@id"]&&(n(T,!1),n(U,[])),n(D,a);case 6:case"end":return t.stop()}}),t)})))()},startRoundAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,t.next=3,P.newRound(r.game);case 3:a=t.sent,n(J,a),n(T,!1),n(U,[]);case 7:case"end":return t.stop()}}),t)})))()},cancelRoundAction:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,t.next=3,P.deleteRound(r.round["@id"]);case 3:n(D,{});case 4:case"end":return t.stop()}}),t)})))()},playCardsAction:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,a=e.state,t.forEach(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P.newRoundCard(t,a.player,a.round);case 2:n=e.sent,r(E,n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})))()},finishRoundAction:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,a,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.state,s={winner:t,status:"finished"},n.next=4,P.updateRound(a.round,s);case 4:i=n.sent,r(M,i);case 6:case"end":return n.stop()}}),n)})))()},setGame:function(e,t){var n=e.commit;n(G,t)},setPlayer:function(e,t){var n=e.commit;n(q,t)},setRound:function(e,t){var n=e.commit;n(D,t)},setRoundPlayed:function(e,t){var n=e.commit;n(T,t)},setCardsSelected:function(e,t){var n=e.commit;n(U,t)}},F={},Y=new p["a"].Store({strict:!1,state:$,mutations:B,actions:L,getters:F}),H=n("8c4f"),W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Ze game",src:n("1d40")}}),r("section",[r("div",{staticClass:"tile is-parent"},[r("article",{staticClass:"tile is-child is-danger"},[r("p",{staticClass:"title"},[e._v("Karty dżentelmenów")]),r("div",{staticClass:"content"},[r("Game"),r("Round"),r("Player")],1)])])])])},K=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-collapse",{staticClass:"card",attrs:{animation:"slide","aria-id":"gameCard"},scopedSlots:e._u([{key:"trigger",fn:function(t){return n("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"gameCard"}},[n("p",{staticClass:"card-header-title"},[e._v(" Game details ")]),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:t.open?"menu-down":"menu-up"}})],1)])}}])},[n("div",{staticClass:"card-content"},[e.game.playersCount?n("nav",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v("Players")]),n("p",{staticClass:"title"},[e._v(e._s(e.game.playersCount))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v("Rounds")]),n("p",{staticClass:"title"},[e._v(e._s(e.game.roundsCount))])])])]):e._e(),e.game.scores?n("div",[n("h4",[e._v("Scores")]),n("nav",{staticClass:"level"},e._l(e.game.scores,(function(t){return n("div",{key:t.player,staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v(e._s(t.player))]),n("p",{staticClass:"title"},[e._v(e._s(t.score))])])])})),0)]):e._e(),n("section",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("b-field",{attrs:{grouped:""}},[n("b-field",{attrs:{label:"Game ID",expanded:""}},[n("b-field",[n("b-input",{attrs:{placeholder:"Paste game ID here to join",expanded:""},model:{value:e.gameId,callback:function(t){e.gameId=t},expression:"gameId"}}),n("button",{staticClass:"button"},[n("b-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.gameId,expression:"gameId",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{pack:"fas",icon:"copy",title:"copy to clipboard"}})],1)],1)],1),n("b-field",{attrs:{label:"Your name",expanded:""}},[n("b-input",{attrs:{placeholder:"Player name"},model:{value:e.playerName,callback:function(t){e.playerName=t},expression:"playerName"}})],1)],1)],1)])])]),n("footer",{staticClass:"card-footer"},[n("b-button",{staticClass:"card-footer-item",attrs:{type:e.getButtonColor("beforeGame")},on:{click:e.joinGame}},[e._v("Join")]),n("b-button",{staticClass:"card-footer-item",attrs:{type:e.getButtonColor("reloadGame")},on:{click:e.getGameAction}},[e._v("Reload")]),n("b-button",{staticClass:"card-footer-item",attrs:{type:e.getButtonColor("beforeGame")},on:{click:e.createGame}},[e._v("Create")])],1)])},z=[],Q=n("5530"),V={name:"Game",data:function(){return{notification:{},timer:""}},mixins:[I],created:function(){var e=JSON.parse(window.localStorage.getItem("game"));e&&this.setGame(e),this.timer=setInterval(this.refresh,3e3)},beforeDestroy:function(){clearInterval(this.timer)},computed:Object(Q["a"])({},Object(p["c"])(["game","player","round"]),{isDuringGame:function(){return this.game.id},gameId:{get:function(){return this.game.id},set:function(e){this.setGameId(e)}},playerName:{get:function(){return this.player.name},set:function(e){this.setPlayerName(e)}}}),methods:Object(Q["a"])({},Object(p["b"])(["createGameAction","addPlayerAction","getGameAction","setPlayerName","setGameId","setGame"]),{createGame:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.player.name){t.next=3;break}return b["a"].open({message:"enter player name to create a game",type:"is-danger"}),t.abrupt("return",!1);case 3:if(!e.game.id){t.next=7;break}e.$buefy.dialog.confirm({title:"Confirm",message:"You will leave current game. Are you sure?",confirmText:"Reset game",type:"is-danger",hasIcon:!0,onConfirm:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.createGameAction();case 2:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()}),t.next=9;break;case 7:return t.next=9,e.createGameAction();case 9:case"end":return t.stop()}}),t)})))()},joinGame:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.game.id&&e.player.name){t.next=3;break}return b["a"].open({message:"enter player name and game id to join",type:"is-danger"}),t.abrupt("return",!1);case 3:return t.next=5,e.getGameAction();case 5:return t.next=7,e.addPlayerAction();case 7:return t.next=9,e.getGameAction();case 9:case"end":return t.stop()}}),t)})))()},refresh:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.game.id){t.next=4;break}return console.log("game refresh"),t.next=4,e.getGameAction();case 4:case"end":return t.stop()}}),t)})))()},cancelAutoUpdate:function(){clearInterval(this.timer)},onCopy:function(e){b["a"].open({message:"You just copied: "+e.text,type:"is-success"})},onError:function(e){b["a"].open({message:"Failed to copy text",type:"is-danger"})}})},X=V,ee=Object(i["a"])(X,Z,z,!1,null,null,null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.game.id?n("b-collapse",{staticClass:"card",attrs:{animation:"slide","aria-id":"roundCard"},scopedSlots:e._u([{key:"trigger",fn:function(t){return n("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"roundCard"}},[n("p",{staticClass:"card-header-title"},[e._v(" Round ")]),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:t.open?"menu-down":"menu-up"}})],1)])}}],null,!1,1319430646)},[e.round&&e.round.questionCard?n("div",{staticClass:"card-content"},[n("img",{attrs:{src:e.getCardImage(e.round.questionCard.image)}}),n("nav",{staticClass:"level"},[n("div",{staticClass:"level-item has-text-centered",class:e.roundCardsSelected()},[n("div",[n("p",{staticClass:"heading"},[e._v("Answers needed")]),n("p",{staticClass:"title"},[e._v(" "+e._s(e.round.questionCard.answerCount)+" ")])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v("Cards Played")]),n("p",{staticClass:"title"},[e._v(e._s(e.round.cardsPlayedCount))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v("Status")]),n("p",{staticClass:"title"},[e._v(" "+e._s(e.round.status)+" ")])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v("Winner")]),n("p",{staticClass:"title"},[e._v(" "+e._s(e.round.winner?e.round.winner.name:"--")+" ")])])])])]):e._e(),n("footer",{staticClass:"card-footer"},[n("b-button",{staticClass:"card-footer-item",attrs:{type:e.getButtonColor("startRound")},on:{click:e.startRound}},[e._v("Start")]),n("b-button",{staticClass:"card-footer-item",attrs:{type:e.getButtonColor("refreshRound")},on:{click:e.getRoundAction}},[e._v("Refresh")]),n("b-button",{staticClass:"card-footer-item",attrs:{type:"is-light"},on:{click:e.cancelRound}},[e._v("Cancel")]),n("b-button",{staticClass:"card-footer-item",attrs:{type:e.getButtonColor("finishRound")},on:{click:e.finishRound}},[e._v("Finish")])],1)]):e._e(),e.round&&e.round.questionCard?n("b-modal",{attrs:{active:e.isRoundModalActive,"has-modal-card":"","trap-focus":"","aria-role":"dialog","aria-modal":""},on:{"update:active":function(t){e.isRoundModalActive=t}}},[n("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[e._v("The question was:")])]),n("section",{staticClass:"modal-card-body"},[n("div",{staticClass:"block"},[n("img",{attrs:{src:e.getCardImage(e.round.questionCard.image)}})]),n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[e._v("And the winner is:")])]),n("div",{staticClass:"block"},e._l(e.round.playersAnswers,(function(t){return n("div",{key:t.player.id},[n("p",[n("b-radio",{attrs:{name:"winner","native-value":t.player["@id"]},model:{value:e.winner,callback:function(t){e.winner=t},expression:"winner"}},[e._v(" "+e._s(t.player.name)+" ")])],1),e._l(t.cards,(function(t){return n("div",{key:t["@id"]},[n("div",{staticClass:"card-answer"},[n("img",{attrs:{src:e.getCardImage(t.image)}})])])}))],2)})),0)]),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){e.isRoundModalActive=!1}}},[e._v(" Close ")]),n("button",{staticClass:"button is-primary",on:{click:function(t){return e.setRoundWinner()}}},[e._v(" Finish round ")])])])]):e._e()],1)},re=[],ae={name:"Round",data:function(){return{notification:{},isRoundModalActive:!1,winner:""}},created:function(){var e=JSON.parse(window.localStorage.getItem("round"));e?this.setRound(e):this.setRound({}),this.startAutoUpdate()},beforeDestroy:function(){clearInterval(this.timer)},mixins:[I],computed:Object(Q["a"])({},Object(p["c"])(["game","player","round","cardsSelected"])),methods:Object(Q["a"])({},Object(p["b"])(["startRoundAction","cancelRoundAction","finishRoundAction","setRound","getRoundAction"]),{startRound:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.startRoundAction();case 2:e.startAutoUpdate();case 3:case"end":return t.stop()}}),t)})))()},cancelRound:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.round&&e.round.questionCard){t.next=3;break}return b["a"].open({message:"no round in progress",type:"is-danger"}),t.abrupt("return",!1);case 3:if("finished"!==e.round.status){t.next=6;break}return b["a"].open({message:"cannot cancel finished round",type:"is-danger"}),t.abrupt("return",!1);case 6:return t.next=8,e.cancelRoundAction();case 8:e.setRound(e.round);case 9:case"end":return t.stop()}}),t)})))()},finishRound:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("finished"!==e.round.status){t.next=3;break}return b["a"].open({message:"round alredy finished",type:"is-danger"}),t.abrupt("return",!1);case 3:if(e.round.questionCard){t.next=6;break}return b["a"].open({message:"no round in progress",type:"is-danger"}),t.abrupt("return",!1);case 6:if(e.round.cardsPlayedCount){t.next=9;break}return b["a"].open({message:"no cards played - cancel round if you want",type:"is-danger"}),t.abrupt("return",!1);case 9:return e.round.questionCard.answerCount*e.game.playersCount>e.round.cardsPlayedCount?e.$buefy.dialog.confirm({title:"Confirm",message:"Not all players ready. Do you still want to finish this round?",confirmText:"Finish round",type:"is-danger",hasIcon:!0,onConfirm:function(){e.cancelAutoUpdate(),e.isRoundModalActive=!0}}):(e.cancelAutoUpdate(),e.isRoundModalActive=!0),e.winner="",t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t)})))()},setRoundWinner:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isRoundModalActive=!1,t.next=3,e.finishRoundAction(e.winner);case 3:b["a"].open({message:"Round finished, how about starting another one?",type:"is-success"}),e.startAutoUpdate();case 5:case"end":return t.stop()}}),t)})))()},roundCardsSelected:function(){return!this.cardsSelected||this.round.questionCard&&this.round.questionCard.answerCount!=this.cardsSelected.length?"has-background-danger":"has-background-success"},refresh:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.round["@id"]||"new"!==e.round.status){t.next=6;break}return console.log("round refresh"),t.next=4,e.getRoundAction();case 4:t.next=7;break;case 6:e.setRound(e.round);case 7:case"end":return t.stop()}}),t)})))()},cancelAutoUpdate:function(){clearInterval(this.timer)},startAutoUpdate:function(){this.cancelAutoUpdate(),this.timer=setInterval(this.refresh,3e3)}})},se=ae,ie=Object(i["a"])(se,ne,re,!1,null,null,null),oe=ie.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.game.playersCount?n("b-collapse",{staticClass:"card",attrs:{animation:"slide","aria-id":"playerCard"},scopedSlots:e._u([{key:"trigger",fn:function(t){return n("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"playerCard"}},[n("p",{staticClass:"card-header-title"},[e._v(e._s(e.player.name)+" - Your cards")]),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:t.open?"menu-down":"menu-up"}})],1)])}}],null,!1,2526821250)},[e.player.cards?n("div",{staticClass:"card-content"},[n("nav",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v("Cards")]),n("p",{staticClass:"title"},[e._v(e._s(e.player.cards.length))])])]),n("div",{staticClass:"level-item has-text-centered"},[n("div",[n("p",{staticClass:"heading"},[e._v("Selected")]),n("p",{staticClass:"title"},[e._v(e._s(e.cardsSelected?e.cardsSelected.length:0))])])])]),e._l(e.player.cards,(function(t){return n("div",{key:t.card["@id"],staticClass:"level-item has-text-centered"},[n("div",{staticClass:"card-answer",class:e.checkCardSelected(t.card["@id"]),on:{click:function(n){return e.toggleCardSelect(t.card["@id"])}}},[n("img",{attrs:{src:e.getCardImage(t.card.image)}})])])}))],2):e._e(),n("footer",{staticClass:"card-footer"},[n("b-button",{staticClass:"card-footer-item",attrs:{type:"is-light"},on:{click:e.getPlayerAction}},[e._v("Refresh")]),n("b-button",{staticClass:"card-footer-item",attrs:{type:"is-light",disabled:e.playCardsDisabled()},on:{click:e.playCards}},[e._v("Play cards")])],1)]):e._e()},ue=[],de=(n("4de4"),{name:"Player",data:function(){return{notification:{}}},mixins:[I],created:function(){var e=JSON.parse(window.localStorage.getItem("player"));e&&this.setPlayer(e);var t=JSON.parse(window.localStorage.getItem("roundPlayed"));t?this.setRoundPlayed(t):this.setRoundPlayed(!1);var n=JSON.parse(window.localStorage.getItem("cardsSelected"));n?this.setCardsSelected(n):this.setCardsSelected([]),this.debouncedLSSync=f.a.debounce(this.localStorageSync,1e3),this.timer=setInterval(this.refresh,3e3)},beforeDestroy:function(){clearInterval(this.timer)},watch:{cardsSelected:function(){this.debouncedLSSync()},roundPlayed:function(){this.debouncedLSSync()}},computed:Object(Q["a"])({},Object(p["c"])(["game","player","round","cardsSelected","roundPlayed"])),methods:Object(Q["a"])({},Object(p["b"])(["getPlayerAction","playCardsAction","setPlayer","setRoundPlayed","setCardsSelected"]),{localStorageSync:function(){window.localStorage.setItem("roundPlayed",JSON.stringify(this.roundPlayed)),window.localStorage.setItem("cardsSelected",JSON.stringify(this.cardsSelected))},playCards:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.playCardsDisabled()){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,e.playCardsAction(e.cardsSelected);case 4:e.setRoundPlayed(!0),b["a"].open({message:"Cards sent",type:"is-success"}),e.getPlayerAction();case 7:case"end":return t.stop()}}),t)})))()},toggleCardSelect:function(e){var t=this;if(this.roundPlayed)return!1;var n=this.cardsSelected.filter((function(t){return t===e}));if(n.length){var r=this.cardsSelected.filter((function(t){return t!==e}));this.setCardsSelected(r)}else{var a=f.a.clone(this.cardsSelected);a.push(e),this.setCardsSelected(a)}this.playCardsDisabled()?this.notification.close&&this.notification.close():this.notification=this.$buefy.snackbar.open({message:"Ready to play?",type:"is-success",position:"is-bottom",actionText:"Send cards",indefinite:!0,queue:!1,onAction:function(){t.playCards()}})},checkCardSelected:function(e){if(!this.cardsSelected)return"";var t=this.cardsSelected.filter((function(t){return t===e}));return t.length?"has-background-success":""},playCardsDisabled:function(){return!this.cardsSelected||!this.round.questionCard||this.round.questionCard.answerCount!==this.cardsSelected.length||this.roundPlayed},refresh:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.player["@id"]){t.next=4;break}return console.log("player refresh"),t.next=4,e.getPlayerAction();case 4:case"end":return t.stop()}}),t)})))()},cancelAutoUpdate:function(){clearInterval(this.timer)}})}),le=de,pe=(n("1fb4"),Object(i["a"])(le,ce,ue,!1,null,null,null)),me=pe.exports,fe={name:"Home",components:{Game:te,Round:oe,Player:me}},he=fe,ge=Object(i["a"])(he,W,K,!1,null,null,null),ve=ge.exports;r["a"].use(H["a"]);var be=[{path:"/",name:"Home",component:ve},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"754b"))}}],ye=new H["a"]({mode:"history",base:"/",routes:be}),we=ye,Ce=n("289d"),Re=(n("5abe"),n("4eb5")),xe=n.n(Re);r["a"].config.productionTip=!1,r["a"].use(Ce["a"]),r["a"].use(xe.a),new r["a"]({store:Y,router:we,render:function(e){return e(u)}}).$mount("#app")},a210:function(e,t,n){},fffb:function(e,t,n){"use strict";var r=n("a210"),a=n.n(r);a.a}});
//# sourceMappingURL=app.2e8964f2.js.map