(function(glabal,undefined){

    var tools = {

        setFontSize:function(size){
            var oHtml = document.querySelector("html");
            var width = oHtml.getBoundingClientRect().width;
            oHtml.style.fontSize = width/size + "px";
        }

    }

    glabal.tools = tools;

})(window,undefined);
$(function(){
    $("#head ul li").click(function(event){
        event.preventDefault();
        console.log("1");
        $(this).addClass("active").siblings(".active").removeClass("active");
    });
   $(" #price button").click(function(event){
       //console.log("1");
       event.preventDefault();
       $(this).addClass("active").siblings(".active").removeClass("active");

   });
    $(" #jian").click(function(){
        //console.log("1");

        var btnHtml=$(this).next().html();
        console.log(btnHtml);
        if(btnHtml>0){
            btnHtml--;
        }
        $(this).next().html(btnHtml)
    });
    $(" #jia").click(function(){
        //console.log("1");

        var btnHtml=$(this).prev().html();
        console.log(btnHtml);
        if(btnHtml>=0){
            btnHtml++;
        }
        $(this).prev().html(btnHtml);
    });
    $(" #millRental .btn").click(function(){
        location.href="";
    });
    $(" .shadow .btn-yellow").click(function(){
        location.href="";
    });
});
