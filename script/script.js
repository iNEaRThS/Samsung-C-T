$(document).ready(function(){

  $(".history_in .box").mouseover(function(){
    $(this).animate({
      bottom:"0px"
    });

  });

  $(".history_in .box").mouseleave(function(){
    $(this).animate({
      bottom:"-151px"
    });

  });


  /* -----visual 건축사업 제이쿼리----- */
  $("#visual .visual_in .build").mouseenter(function(){
    $(this).animate({width:"100%", backgroundPositionX:"0px"},300);
    $(this).css({"z-index":"100"});
    $("#visual .visual_in .build .black_bg").css({"opacity":"1"});
    $("#visual .visual_in .build .visual_text").animate({top:"200px"});
    $("#visual .visual_in .civil,.plant,.house").animate({opacity:"0"});
  });

  $("#visual .visual_in .build").mouseleave(function(){
    $(this).animate({width:"25%", backgroundPositionX:"-550px"});
    $(this).css({"z-index":"1"});
    $("#visual .visual_in .build .black_bg").css({"opacity":"0"});
    $("#visual .visual_in .build .visual_text").animate({top:"300px"},300);
    $("#visual .visual_in .civil,.plant,.house").animate({opacity:"1"});
  });


  /* -----visual 토목사업 제이쿼리----- */
  $("#visual .visual_in .civil").mouseenter(function(){
    $(this).animate({width:"100%", left:"0", backgroundPositionX:"0px"},300);
    $(this).css({"z-index":"100"});
    $("#visual .visual_in .civil .black_bg").css({"opacity":"1"});
    $("#visual .visual_in .civil .visual_text").animate({top:"200px"});
    $("#visual .visual_in .build,.plant,.house").animate({opacity:"0"});
  });

  $("#visual .visual_in .civil").mouseleave(function(){
    $(this).animate({width:"25%", left:"25%", backgroundPositionX:"-650px"},300);
    $(this).css({"z-index":"1"});
    $("#visual .visual_in .civil .black_bg").css({"opacity":"1"});
    $("#visual .visual_in .civil .visual_text").animate({top:"300px"});
    $("#visual .visual_in .build,.plant,.house").animate({opacity:"1"});
  });


    /* -----visual 플랜트사업 제이쿼리----- */
  $("#visual .visual_in .plant").mouseenter(function(){
    $(this).animate({width:"100%", left:"0", backgroundPositionX:"0px"},300);
    $(this).css({"z-index":"100"});
    $("#visual .visual_in .plant .black_bg").css({"opacity":"1"});
    $("#visual .visual_in .plant .visual_text").animate({top:"200px"});
    $("#visual .visual_in .build,.civil,.house").animate({opacity:"0"});
  });

  $("#visual .visual_in .plant").mouseleave(function(){
    $(this).animate({width:"25%", left:"50%", backgroundPositionX:"-800px"},300);
    $(this).css({"z-index":"1"});
    $("#visual .visual_in .plant .black_bg").css({"opacity":"1"});
    $("#visual .visual_in .plant .visual_text").animate({top:"300px"});
    $("#visual .visual_in .build,.civil,.house").animate({opacity:"1"});
  });


    /* -----visual 주거사업 제이쿼리----- */
  $("#visual .visual_in .house").mouseenter(function(){
    $(this).animate({width:"100%", left:"0", backgroundPositionX:"0px"},300);
    $(this).css({"z-index":"100"});
    $("#visual .visual_in .house .black_bg").css({"opacity":"1"});
    $("#visual .visual_in .house .visual_text").animate({top:"200px"});
    $("#visual .visual_in .build.civil.plant").animate({opacity:"0"});
  });

  $("#visual .visual_in .house").mouseleave(function(){
    $(this).animate({width:"25%", left:"75%", backgroundPositionX:"-700px"},300);
    $(this).css({"z-index":"1"});
    $("#visual .visual_in .house .black_bg").css({"opacity":"1"});
    $("#visual .visual_in .house .visual_text").animate({top:"300px"});
    $("#visual .visual_in .build.civil.plant").animate({opacity:"1"});
  });

  /* family site 제이쿼리 */
  $(".familysites").hover(function(){
    $(".familysites_show").addClass("active");
    $(".familysites_list ul").slideDown();
    $(".familysites_show").css({"border":"none"});
  },function(){
    $(".familysites_show").removeClass("active");
    $(".familysites_list ul").slideUp();
    $(".familysites_show").css({"border":"2px solid #333"});
  });
  
  /* 갤러리 제이쿼리 */
  
  let oldidx=0;
  let idx=0;

  function gallery(idx){

    if(oldidx!=idx){

      $(".contents_in #gallery .thumbnail li").eq(oldidx).css({"opacity":"0.3"});
      $(".contents_in #gallery .thumbnail li").eq(idx).css({"opacity":"1"});
      $(".contents_in #gallery .showimg li").eq(oldidx).stop().fadeOut(300);
      $(".contents_in #gallery .showimg li").eq(idx).stop().fadeIn(300);

    }
    oldidx=idx;

  }

  $(".thumbnail li").click(function(){
    idx=$(this).index();
    gallery(idx);
  });

  $(".status .status_one").click(function(){
    $(this).addClass("act");
    $(".status .status_two").removeClass("act");
    $(".second").stop().hide();
    $(".first").stop().show();
  });

  $(".status .status_two").click(function(){
    $(this).addClass("act");
    $(".status .status_one").removeClass("act");
    $(".first").stop().hide();
    $(".second").stop().show();
  });

  $("#history .first_five").click(function(){
    $("#history .first_box").slideToggle();
  });

  $("#history .second_five").click(function(){
    $("#history .second_box").slideToggle();
  });

  $("#history .third_five").click(function(){
    $("#history .third_box").slideToggle();
  });

  $("#history .fourth_five").click(function(){
    $("#history .fourth_box").slideToggle();
  });

  $("#history .after_five").click(function(){
    $("#history .fifth_box").slideToggle();
  });

});