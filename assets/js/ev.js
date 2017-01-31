$(document).ready(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
	$(".events-list1").hide();	
	$(".events-list2").hide();	
	$(".close-btn").click(function(){
		//document.getElementById("cbtn").style.transform = "rotate(5deg)";
		$(".events-list").fadeOut("1000");
		$(".work").fadeIn("2000");
	});
	$(".close-btn2").click(function(){
		//document.getElementById("cbtn").style.transform = "rotate(5deg)";
		$(".events-list2").fadeOut("1000");
		$(".work2").fadeIn("2000");
	});
    $(".slider--item-left").click(function(){
        //show(on);
		var x=screen.height;
		$(".scroll").css("height",x*0.6);
		$(".work").fadeOut("slow");
		$(".events-list").fadeIn("slow").css("backgroundColor","#fff").css("marginLeft","10%").css("marginRight","10%").css("marginTop","5%");
		document.getElementById("event-head").innerHTML="INSTRUMENTAL MUSIC";
		$(".event-item").css("height",.2262*x);
		$(".im").fadeIn(2000);
		$(".mu").hide();
		$(".fa").hide();
    });
	$(".slider--item-right").click(function(){
        //show(off);
		var x=screen.height;
		$(".scroll").css("height",x*0.6);
		$(".work").fadeOut("slow");
		$(".events-list").fadeIn("slow").css("backgroundColor","#fff").css("marginLeft","10%").css("marginRight","10%").css("marginTop","5%");
		document.getElementById("event-head").innerHTML="FINE ARTS";
		$(".event-item").css("height",.2262*x);
		$(".im").hide();
		$(".mu").hide();
		$(".fa").fadeIn(2000);
	});
	$(".slider--item-center").click(function(){
        //show(all);
		var x=screen.height;
		$(".scroll").css("height",x*0.6);
		$(".work").fadeOut("slow");
		$(".events-list").fadeIn("slow").css("backgroundColor","#fff").css("marginLeft","10%").css("marginRight","10%").css("marginTop","5%");
		document.getElementById("event-head").innerHTML="MUSIC";
		$(".event-item").css("height",.2262*x);
		$(".im").hide();
		$(".fa").hide();
		$(".mu").fadeIn(2000);
    });
    $(".slider--item-1").click(function(){
        //show(on);
		var x=screen.height;
		$(".scroll2").css("height",x*0.6);
		$(".work2").fadeOut("slow");
		$(".events-list2").fadeIn("slow").css("backgroundColor","#fff").css("marginLeft","10%").css("marginRight","10%").css("marginTop","5%");
		document.getElementById("event-head2").innerHTML="LITERARY EVENTS";
		$(".event-item").css("height",.2262*x);
		$(".li").fadeIn(2000);
		$(".da").hide();
		$(".te").hide();
    });
	$(".slider--item-3").click(function(){
        //show(off);
		var x=screen.height;
		$(".scroll2").css("height",x*0.6);
		$(".work2").fadeOut("slow");
		$(".events-list2").fadeIn("slow").css("backgroundColor","#fff").css("marginLeft","10%").css("marginRight","10%").css("marginTop","5%");
		document.getElementById("event-head2").innerHTML="THEATRE EVENTS";
		$(".event-item").css("height",.2262*x);
		$(".li").hide();
		$(".da").hide();
		$(".te").fadeIn(2000);
	});
	$(".slider--item-2").click(function(){
        //show(all);
		var x=screen.height;
		$(".scroll2").css("height",x*0.6);
		$(".work2").fadeOut("slow");
		$(".events-list2").fadeIn("slow").css("backgroundColor","#fff").css("marginLeft","10%").css("marginRight","10%").css("marginTop","5%");
		document.getElementById("event-head2").innerHTML="DANCE";
		$(".event-item").css("height",.2262*x);
		$(".li").hide();
		$(".te").hide();
		$(".da").fadeIn(2000);
    });
});
