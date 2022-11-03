$(window).ready(function(){ 

    const projectList = [
        {
            title : "지아이셀",
            imgName : "img_gicell",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "메인 fullpage.js 사용하여 작업"
            ],
            link : "https://gi-cell.com/kr/index.asp"

        },
        {
            title : "와이바이오로직스",
            imgName : "img_ybiologics",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "메인 fullpage.js 사용하여 작업"
            ],
            link : "https://ybiologics.com/kr/"

        },
        {
            title : "와이바이오로직스CRO",
            imgName : "img_ybiocro",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "메인 fullpage.js 사용하여 작업"
            ],
            link : "https://ybioservice.com/kr/"

        },
        {
            title : "삼영에스앤씨",
            imgName : "img_samyoung",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "product 공통 페이지 Ajax 사용하여 작업"
            ],
            link : "http://www.samyoungsnc.com/"

        },
        {
            title : "6G글로벌",
            imgName : "img_6gglobal",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 80%)"
            ],
            link : "http://6gglobal.org/kr/"
        },
        {
            title : "인마크글로벌",
            imgName : "img_inmark",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://www.inmarkglobal.com/"
        },
       /* 
       {
            title : "펄송",
            imgName : "img_purrsong",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "https://purrsong.com/",
            desc : "개발은 고객사에서 하였고 현재는 고객사에서 유지보수를 한 것으로 보입니다."
        }, 
        */
        {
            title : "쥬피터익스프레스",
            imgName : "img_jupiter",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "메인 fullpage.js 사용하여 작업"
            ],
            link : "https://jupiterexp.com/kr/"
        },
        {
            title : "이노피아테크",
            imgName : "img_innopia",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "메인 fullpage.js 사용하여 작업"
            ],
            link : "https://www.innopia.co.kr/en/"
        },
        {
            title : "셀레믹스",
            imgName : "img_celemics",
            infoTxt : [
                "유지보수",
                "gnb 하위 메뉴 디자인 변경(PRODUCT, SERVICE)",
                "추가페이지 작업 <br> - PRODUCT, SERVICE <br> - NEWS&SUPPORT <br>(Resources, Promotions, Publications)"
            ],
            link : "https://www.celemics.com/"
        },
        {
            title : "예일이퀍먼트",
            imgName : "img_yale",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)"
            ],
            link : "http://www.yalekorea.co.kr/"
        },
        {
            title : "하이스터코리아",
            imgName : "img_hyster",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "예일이퀍먼트 카피 사이트"
            ],
            link : "http://www.hysterkorea.co.kr/"
        },
        {
            title : "예일로직스",
            imgName : "img_yalelogics",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 70%)"
            ],
            link : "http://www.yalelogis.co.kr/"
        },
        {
            title : "고려호이스트",
            imgName : "img_khc",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100%)"
            ],
            link : "http://www.koreahoist.co.kr/"
            // link : "http://khc.webmoa21.co.kr/kr/"

        },
        {
            title : "센솔루션코리아",
            imgName : "img_sensolution",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://www.sensolution.co.kr/"
        },
        {
            title : "보라전기공업",
            imgName : "img_pora",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://pora.com/kr/"
        },
        {
            title : "키즈캐슬",
            imgName : "img_kizcastle",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "fullpage.js 사용하여 작업"
            ],
            link : "http://junytony.co.kr/kr/"
        },
        
        {
            title : "센트로이드",
            imgName : "img_centroid",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://centroid.webmoa21.co.kr/"
        },
        {
            title : "천생보이",
            imgName : "img_boyjoa",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://cheonsaengboi.com"
        },
        {
            title : "오산중기",
            imgName : "img_osan",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://www.osancrane.co.kr/"
        },
        {
            title : "이에스티그린",
            imgName : "img_estgreen",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://estgreen.com/"
        },
        {
            title : "에코월드",
            imgName : "img_ecoworld",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
                "메인 fullpage.js 사용하여 작업"
            ],
            link : "http://ecoworldpharm.com/kr/"
        },
        {
            title : "디팍",
            imgName : "img_dpac",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "https://dpacpnp.com/"
        },
        {
            title : "원자력미래기술정책연구소",
            imgName : "img_niftep",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://niftep.snu.ac.kr/"

        },
        {
            title : "림스코",
            imgName : "img_limsco",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://www.ilimsco.com/kr/"

        },
        {
            title : "건설코킹",
            imgName : "img_cscaulking",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://cscaulking.com/"

        },
        {
            title : "엘림존",
            imgName : "img_elimzone",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://elimz.webmoa21.co.kr/"

        },
        {
            title : "제리코무역",
            imgName : "img_jerrykor",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://jerrykor.co.kr"

        },
        {
            title : "특허법인 AIP",
            imgName : "img_aiplaw",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://aiplaw.com/"

        },
        {
            title : "숙명여자대학교 음악치료대학원",
            imgName : "img_smmt",
            infoTxt : [
                "반응형 작업",
                "참여도(기본구축 100% + 전체서브 100%)",
            ],
            link : "http://sm-mt.kr/"

        }
    ]

    
    let listBox = $("#project .listBox .inner");
    let txtBox = $("#project .txtBox");

   
    function workInfo(listBox, index){
        listBox.find(".img").find("img").attr("src","img/"+projectList[index].imgName+".jpg");
        listBox .find(".tit").html(projectList[index].title);
        txtBox.find(".info > dl > dt").html(projectList[0].title);
    };

    for(let i = 0; i < projectList.length; i++){ //첫번째 리스트 복사해서 프로젝트 개수만큼 넣어줌
        let listClone = listBox.children("article:eq(0)").clone();
        if(i < projectList.length - 1){
            listBox.append(listClone);
        }
    }

    listBox.children("article").each(function(index){
        workInfo($(this), index);
    });

    listBox.children("article:eq(0)").addClass("on");
    listBox.children("article").on("click", function(){
        let idx = $(this).index();
        console.log("idx",idx)
        listBox.children("article").removeClass("on");
        $(this).addClass("on");
        $("#project").css({
            "background-image":"url(img/"+projectList[idx].imgName+".jpg)"
        })
        txtBox.find(".info dl > dt").html("");
        txtBox.find(".info dl > dt").html(projectList[idx].title);
        txtBox.find(".info dl > dd").html("")
        for(let i = 0; i < (projectList[idx].infoTxt).length; i++){ //클릭한 list의 infoTxt 개수 
            txtBox.find(".info dl > dd").append("<p>"+projectList[idx].infoTxt[i]+"</p>")
        }
        txtBox.find(".desc").html("");
        txtBox.find(".desc").html(projectList[idx].desc);
        txtBox.find(".viewBtn").attr("href",projectList[idx].link);
        
    });


    //모바일 화면에서 프로젝트 리스트 박스 높이값 맞춰줌
    boxResize();
    function boxResize(){
        let articleH = 100;
        if($(window).width() <= 1200 || $(window).height() <= 800){
            let art = $("#project .conBox .listBox article").length
            articleH = $("#project .conBox .listBox article").height();
            console.log("articleH",articleH)
    
            $("#project .conBox .listBox").css({
                "height":articleH*2
            });
        }else{
            return articleH;
        }
    }
    $(window).resize(function(){
        boxResize();
    })
    
        
    
    
});