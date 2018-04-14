$(document).ready(function(){
    $(".sportsContainer").click(function(){
        $(".musicContainer").hide();
        $(".familyContainer").hide();
        
        
    });
    $(".musicContainer").click(function(){
        $(".sportsContainer").hide();
        $(".familyContainer").hide();
    });
    $(".familyContainer").click(function(){
        $(".sportsContainer").hide();
        $(".musicContainer").hide();
    });
});
