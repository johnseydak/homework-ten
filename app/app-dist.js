import*as MODEL from"../model/model.js";function init(){let e="home";$("nav a").click((function(o){let a=this.id,n=a+"Content";"home"==a?($(".hero").css("display","block"),$(".hero").removeClass(`${e}-hero-image`).addClass(`${a}-hero-image`),$("#app").removeClass("otherPadding").addClass("homePadding"),e=a):($(".hero").removeClass(`${e}-hero-image1`),$(".hero").css("display","none"),$("#app").removeClass("HomePadding").addClass("otherPadding"),e=a),$(".hero-content .page-name").html(a),MODEL.getPageContent(n)}))}$(document).ready((function(){init(),MODEL.getPageContent("homeContent"),$("#app").addClass("homePadding")}));