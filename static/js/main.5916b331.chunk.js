(this["webpackJsonpcard-match-game"]=this["webpackJsonpcard-match-game"]||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),s=a(8),o=a(4),d=a(3),l=a(2),u=a(14),m=a(5),f=a(16),h=a(15),b=a(17),g=a(9),k=a.n(g),C=150,p=250,j="IN_PROGRESS",v="CREATING",E="RESETTING",O="FINISHED",S="SELECTED",y="MATCHED",x="HIDDEN",N=Object(o.a)({card:{padding:5,borderRadius:5,height:p,width:C,border:"black 5px solid",position:"relative",transition:"all 0.4s linear",transformStyle:"preserve-3d",margin:"5px"},selected:{borderColor:"blue",transform:"rotateY(180deg)"},front:{transform:"rotateY(180deg)"},matched:{borderColor:"green",backgroundColor:"white",transform:"rotateY(180deg)"},inner:{position:"absolute",backfaceVisibility:"hidden"},back:{}}),w=function(e){var t,a=e.data,n=e.handleClick,c=e.index,i=a.id,s=a.url,o=a.status,l=N(),u=o===S,m=o===y;return r.a.createElement("div",{className:k()(l.card,(t={},Object(d.a)(t,l.selected,u),Object(d.a)(t,l.matched,m),t)),onClick:function(){o===x&&n(c,i)}},r.a.createElement("div",{className:k()(l.inner,l.front)},r.a.createElement("img",{src:s,alt:"card"})),r.a.createElement("div",{className:k()(l.inner,l.back)}))},G=Math.ceil(7.5),I=function(){for(var e=T(),t=e.concat(e);t.length>15;)t.pop();return t.sort((function(){return.5-Math.random()}))},T=function(){for(var e="".concat("https://picsum.photos","/").concat(C,"/").concat(p,"?random="),t=[],a=0;a<G;a++)t.push({id:a,url:e+a,status:x});return t},D={isLoading:!0,isChecking:!1,deck:{},count:0,firstCard:null,secondCard:null},L=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(f.a)(this,Object(h.a)(t).call(this))).initgame=function(){e.setState({deck:I(),isLoading:!1})},e.toggleCard=function(t,a){var n=Object(l.a)({},e.state.deck),r=Object(l.a)({},n[t]);r.status=a,n[t]=r,e.setState({deck:n})},e.checkSelectedCards=function(){var t,a=e.state,n=a.deck,r=a.firstCard,c=a.secondCard,i=Object(l.a)({},n[r.index]),s=Object(l.a)({},n[c.index]);r.id===c.id?(i.status=y,s.status=y):(i.status=x,s.status=x);var o=Object(l.a)({},n,(t={},Object(d.a)(t,r.index,i),Object(d.a)(t,c.index,s),t));setTimeout((function(){e.setState({deck:o}),e.checkGame()}),800),setTimeout(e.resetCards,800)},e.checkGame=function(){var t=e.state.deck;if(14===Object.keys(t).filter((function(e){return t[e].status===y})).length){var a=Object.keys(t).find((function(e){return t[e].status===x}));e.setState({deck:Object(l.a)({},t,Object(d.a)({},a,Object(l.a)({},t[a],{status:y})))}),e.props.handleFinish()}},e.resetCards=function(){e.setState({firstCard:null,secondCard:null,isChecking:!1})},e.flipCard=function(t,a){var n=e.state.count;n<2&&e.setState({count:n+1},(function(){1===e.state.count?e.setState({firstCard:{index:t,id:a}}):e.setState({secondCard:{index:t,id:a},count:0,isChecking:!0},e.checkSelectedCards),e.toggleCard(t,S)}))},e.handleClick=function(t,a){e.state.isChecking||e.flipCard(t,a)},e.state=Object(l.a)({},D),e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.initgame(),this.props.startGame()}},{key:"render",value:function(){var e=this,t=this.state,a=t.deck,n=t.isLoading;return r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",justifyItems:"center"}},n?"Loading...":Object.entries(a).map((function(t){var a=Object(s.a)(t,2),n=a[0],c=a[1];return r.a.createElement(w,{key:n,index:n,data:c,handleClick:e.handleClick})})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.gameStatus===E&&((t=Object(l.a)({},D)).deck=I(),t.isLoading=!1,e.startGame()),t}}]),t}(r.a.Component),M=Object(o.a)({root:{position:"fixed",display:"grid",top:"30%",left:"25%",width:"50%",height:200,background:"aliceblue",justifyItems:"center",alignItems:"center"},button:{background:"white",border:"solid 1px black",padding:"1em 2em"}}),A=function(e){var t=e.handleClick,a=M();return r.a.createElement("div",{className:a.root},r.a.createElement("div",null,"Congratulations, you've won!"),r.a.createElement("button",{className:a.button,onClick:t},"Play Again"))},R=Object(o.a)({header:{textAlign:"center"},footer:{textAlign:"center"}}),F=function(){var e=Object(n.useState)(v),t=Object(s.a)(e,2),a=t[0],c=t[1],i=R();return r.a.createElement("div",null,r.a.createElement("header",{className:i.header},r.a.createElement("h1",null,"Card Match Game")),r.a.createElement("div",null,r.a.createElement(L,{gameStatus:a,startGame:function(){c(j)},handleFinish:function(){c(O)}}),a===O&&r.a.createElement(A,{handleClick:function(){c(E)}})),r.a.createElement("footer",{className:i.footer},"Created by ",r.a.createElement("a",{href:"https://www.kazyamada.com/"},"Kaz Yamada")," |"," ",r.a.createElement("a",{href:"https://github.com/kaz-yamada/Card-Match-Game"},"Source")))};i.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5916b331.chunk.js.map