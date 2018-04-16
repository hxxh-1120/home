$("#container").fullpage({
    verticalCentered: false,
    anchors: ["p1", "p2", "p3", "p4", "p5"],
    sectionsColor: ["#ccc", "yellow", "red", "#f88", "#99f"],
    scrollingSpeed: 1000,
    navigation: true,
    navigationPosition: "right",
    continuousVertical: true,
    fixedElements:"#menu",
    menu:"#menu",
    afterLoad:function(anchor,index){
        if(index===1){
            $(".lhx").css('transform',"translateY(0)");
            $(".jianjie").css('transform',"translateY(0)");
        }
        if(index===2){
            $("canvas").css('transform','scale(1,1)');
            $(".skill-list").css('transform','scale(1,1)')
        }
        if(index===3){
            $(".scene").css('transform','scale(1,1)');
        }
        if(index===4){
            $(".first").css('transform','translateY(0)');
            $(".er").css('transform','translateY(0)');
            $(".three").css('transform','translateY(0)');
            $(".four").css('transform','translateY(0)');

        }
    },
    onLeave:function(index){
        if(index===1){
            $(".jianjie").css('transform',"translateY(-500px)");
            $(".lhx").css('transform',"translateY(-500px)");
        }
        if(index===2){
            $("canvas").css('transform','scale(0,0)');
            $(".skill-list").css('transform','scale(0,0)')
        }
        if(index===3){
            $(".scene").css('transform','scale(0,0)');
        }
        if (index===4){
            $ (".first").css('transform','translateY(-500px)');
            $(".er").css('transform','translateY(-550px)');
            $(".three").css('transform','translateY(-600px)');
            $(".four").css('transform','translateY(-650px)');

        }
    }
});
//轮播图
/*banner*/
//轮播图
{
    var banner=document.querySelectorAll(".banner .ban-img li");
    var btn=document.querySelectorAll(".circle ul li");
    var left=document.querySelector(".left");
    var right=document.querySelector(".right");
    var box=document.querySelector(".banner");

    btn.forEach(function(ele,index){
        ele.onclick = function () {
            for(var i=0;i<banner.length;i++){
                banner[i].classList.remove("active");
                btn[i].classList.remove("active");
            }
            banner[index].classList.add("active");
            btn[index].classList.add("active");
             n=index;
        };
    });
    n=0;
    function bannerFn(bir="r") {
        if(bir==="r"){
            n++;
        }else if(bir="l"){
            n--;
        }
        if(n==banner.length){
            n=0;
        }
        if(n===-1){
            n=banner.length-1;
        }
        for(var i=0;i<banner.length;i++){
            banner[i].classList.remove("active");
            btn[i].classList.remove("active");
        }
        banner[n].classList.add("active");
        btn[n].classList.add("active");
        box.onmouseover=function () {
            clearInterval(st);
        }
        box.onmouseout=function(){
            st=setInterval(bannerFn,3000);
        }
    }
    var st=setInterval(bannerFn,3000);
    box.onmouseover=function(){
        clearInterval(st);
    }
    box.onmouseout=function(){
        st=setInterval(bannerFn,3000);
    }
    //解决点击事件的bug
    var flag=true;

    //左右点击事件
     right.onclick=function(){

        if(flag){
            flag=false;
            bannerFn();
        }
    }
    left.onclick=function(){

        if(flag){
            flag=false;
            bannerFn("l");
        }
    }
    banner.forEach(function(ele,index){
        ele.addEventListener("transitionend",function(){
            flag=true;
        })
    })

}
//项目
$(".next").click(function(){
    $(".scene ul").transition({rotateY:"-=60"})
});
$(".prev").click(function(){
    $(".scene ul").transition({rotateY:"+=60"})
});