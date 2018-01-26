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
let canvasobj=document.querySelectorAll("canvas");
function all(canvasObj,max,color){
    let cobj=canvasObj.getContext("2d");
    cobj.textAlign="center";
    cobj.textBaseline="middle";
    cobj.font="20px 微软雅黑";
    cobj.lineWidth=20;
    cobj.lineCap="round";
    cobj.strokeStyle="#f66";
    cobj.strokeStyle=color;
    cobj.fillStyle="#fff";
    let n=0;
    function fn(){
        n++;
        if(n<max){
            requestAnimationFrame(fn);
        }
        let angel=2*Math.PI*n/100-Math.PI/2;
        cobj.save();
        cobj.shadowColor="#fff";
        cobj.shadowBlur="10";
        cobj.clearRect(0,0,300,300);
        cobj.beginPath();
        cobj.arc(150,150,80,-Math.PI/2,angel);
        cobj.stroke();
        cobj.restore();
        cobj.fillText(n+"%",150,150);
    }
    fn();
}
all(canvasobj[0],90);
all(canvasobj[1],85,"#6f6");
all(canvasobj[2],75,"#66f");
//项目
$(".next").click(function(){
    $(".scene ul").transition({rotateY:"-=60"})
});
$(".prev").click(function(){
    $(".scene ul").transition({rotateY:"+=60"})
});