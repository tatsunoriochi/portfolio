$(function(){$(".hamburger_menu_btn").on("click",function(){$(".hamburger_menu").toggleClass("active"),$("body").toggleClass("open").css("top","0"),$(".header").toggleClass("show"),$(".header_area").toggleClass("show")}),$(".header_area a").click(function(){$(".header_menu_btn").removeClass("active"),$(".header_area").removeClass("show")})});