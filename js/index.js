$(function(){
    const pages = ['cmhtml/home.html', "cmhtml/aboutus.html", "cmhtml/productshow.html", "cmhtml/joinus.html", "cmhtml/contactus.html"];
    $("#mx-content").load(pages[0]);
    $("#mx-navigation li").click(function(){
        // event.preventDefault();
        $(this).addClass("select").siblings().removeClass("select");
        $("#mx-content").load(pages[$(this).index()]);
    })
    // $("#mx-content").load("home.html");
    // console.log($(".product-nav li"));
    /*--------productshow部分--------*/
    // $("#product-nav li").click(function(){
       
        // $(this).addClass("on").siblings().removeClass("on");
        // $("#product-box>ul").eq($(this).index()).show().siblings().hide();
        // $("#product-box>ul").eq($(this).index()).removeClass("ab").siblings().addClass("ab");
    // })
    
})
