$(window).ready(function(){
    const win_h = $(window).height();
    console.log("win_h", win_h);
    // $("#wrap").height()
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
					if(nextIndex == 1){  // 스크롤 하고 메인비주얼로 돌아왔을 때 기능들 다시 시작
						
						
					}

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
   
    

    $("#intro .bg").on("click", function(){
        window.scrollTo( 0, 1 );
        $("body").removeClass("hiddenBox");
        $("#intro").animate({
            opacity:0
        },1000)
        setTimeout(function(){
            $("#intro").hide();
            $("#mainVisual").addClass("on")

            var time=0;
            var len02 = $("#mainVisual .mvTit h2").find("span").length;
            var txt_timer = setInterval(function(){
                console.log("time",time)
                $("#mainVisual .mvTit h2").find("span:eq("+time+")").addClass("on");
                time++
                if(time > len02){
                    clearInterval(txt_timer);
                }
            },100)
            
        },1000)
       
    });
    
    
});