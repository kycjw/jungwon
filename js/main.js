$(window).ready(function(){

    $("body").addClass("hiddenBox");
    
    // source:  https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    //풀페이지 시작
    var fullPageCreated = false;
    createFullpage();
    fullResize();

    function createFullpage() {
		
        if (fullPageCreated === false) {
            fullPageCreated = true;
            $('#fullpage').fullpage({
                scrollingSpeed: 1000,
				easingcss3:"ease",
                navigation: false,
				lockAnchors: true, //주소뒤에 앵커 안 붙게 해준다.
                normalScrollElements:"#intro, #project .conBox .listBox",
                'onLeave' : function(index, nextIndex, direction){
					console.log("nextIndex",nextIndex)
                    $("#naviBtn ul li").removeClass("on");
					$("#naviBtn ul li").eq(nextIndex - 1).addClass("on");
                },
                'afterLoad' : function (anchorLink, index) {
					

					
                }
            });
        }
    }

    function fullResize(){ //fullpage 해제
        if ($(window).width() <= 1200 || $(window).height() <= 800) {
    //    if ($(window).width() <= 1200) {
            if(fullPageCreated == true){
                $.fn.fullpage.destroy('all');  //풀페이지 삭제
                fullPageCreated = false;			

            }
			
        }else{
            if(fullPageCreated == false){
                createFullpage();
                fullPageCreated = true;
				
            }
        }
    }
 
    $(window).resize(function() {
        fullResize();
		
    });

    $("#naviBtn ul li").on("click", function(){
        var idx = $(this).index() + 1;
        $.fn.fullpage.moveTo(idx);
        $("#naviBtn ul li").removeClass("on")
        $(this).addClass("on");
    })

/////////////////////////////////////////////////////////////////////////////////////////


    //인트로 텍스트 랜덤 애니메이션
    function delay_num(){
        let delay=[];
        let len = $("#intro .txt > p").children("span").length;
        console.log("len",len)
        $("#intro .txt > p").each(function(){
            for(i=0; i<len; i++){
                let randomIdx = Math.floor(Math.random() * len);
                let txtIdx = $(this).children("span").eq(i);
                console.log("i",i)
               if(delay.indexOf(randomIdx) === -1){
                delay.push(randomIdx);
                txtIdx.css({
                    "animation-delay":(randomIdx*0.2) + 0.5 + "s"
                })
               }else{
                i--
               }             
            }
        })
       
        console.log("delay",delay)
        
        return delay;

    }


    delay_num()
   
    
    //인트로 화면 클릭했을 때
    $("#intro .bg").on("click", function(){
        window.scrollTo( 0, 1 );
        $("body").removeClass("hiddenBox");
        $("#intro").animate({
            opacity:0
        },1000)

        
        setTimeout(function(){
            $("#intro").hide();
            $("#mainVisual").addClass("on")

            // 글자 하나씩 보여지는 애니메이션 효과
            /*var time=0;
            var len02 = $("#mainVisual .mvTit h2").find("span").length;
            var txt_timer = setInterval(function(){
                console.log("time",time)
                $("#mainVisual .mvTit h2").find("span:eq("+time+")").addClass("on");
                time++
                if(time > len02){
                    clearInterval(txt_timer);
                }
            },100)
            */

        },1000)
       
    });
    
    
});