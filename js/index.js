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
   $(" #price button").click(function(event){
       //console.log("1");
       event.preventDefault();
       $(this).addClass("active").siblings(".active").removeClass("active");

   })
    $(" #jian").click(function(){
        //console.log("1");

        var btnHtml=$(this).next().html();
        console.log(btnHtml);
        if(btnHtml>0){
            btnHtml--;
        }
        $(this).next().html(btnHtml)
    })
    $(" #jia").click(function(){
        //console.log("1");

        var btnHtml=$(this).prev().html();
        console.log(btnHtml);
        if(btnHtml>=0){
            btnHtml++;
        }
        $(this).prev().html(btnHtml)
    })
});
