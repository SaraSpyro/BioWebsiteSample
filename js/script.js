$(document).ready(function() {

    $('.detailBtnOne').click(function() {
        $(".modalOne").removeClass("displayNone");
        $("body").css('overflow', "hidden");
    });
    
    $('.closeBtnOne').click(function() {
        $(".modalOne").addClass("displayNone")
        $("body").css('overflow', "scroll");
    });


    $('.detailBtnTwo').click(function() {
        $(".modalTwo").removeClass("displayNone");
        $("body").css('overflow', "hidden");
    });
    
    $('.closeBtnTwo').click(function() {
        $(".modalTwo").addClass("displayNone")
        $("body").css('overflow', "scroll");
    });


    $('.detailBtnThree').click(function() {
        $(".modalThree").removeClass("displayNone");
        $("body").css('overflow', "hidden");
    });
    
    $('.closeBtnThree').click(function() {
        $(".modalThree").addClass("displayNone")
        $("body").css('overflow', "scroll");
    });
    
});