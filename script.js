// first level below

$('.leveloneform').on('mouseenter', () => { 

    $(".leveloneform").off('mouseenter');

    let seconds = 14;

    const countdown = window.setInterval(function() {  

        seconds = seconds - 1;

        $('.timerone').text(seconds);

        if (seconds <=14) { 
            
            $('.levelone').css('background','black');
        }

        if (seconds <=12) { 
            
            $('.levelone').css('background','darkred');
            $('.picone').css('filter','invert(100%)');

        }

        if (seconds <=10) { 
            
            $('.levelone').css('background','black');
            $('.picone').css('filter','invert(0%)');

        }
        
        if (seconds <=8) { 
            
            $('.levelone').css('background','darkred');
            $('.picone').css('filter','invert(100%)');

        }

        if (seconds <=6) { 

            $('.levelone').css('background','black');
            $('.picone').css('filter','invert(0%)');

        }

        if (seconds <=4) { 

            $('.levelone').css('background','darkred');
            $('.picone').css('filter','invert(100%)');

        }

        if (seconds <=2) { 

            $('.levelone').css('background','black');
            $('.picone').css('filter','invert(0%)');

        }

        if (seconds == 0){
            
            clearInterval(countdown);
            $('.levelone').css('display','none');
            $('.failone').show();

        }

    },1400); 

});

$('.leveloneform').on('submit', function(e){

    e.preventDefault();

    let userword = $('input[type=text]').val();

    let numbaz = 0;

    if (userword == 'individual') {

        numbaz = numbaz + 1;

        $('.count').text(numbaz);

        $('.displaywordone').show();

        $('.displaywordone').append(userword);

        $(".leveloneform").empty();

        $(".boxone").hide();

        $(".boxtwo").show();

        // console.log("level one correct answer")

    } else {
    
        $(".wrong").show(1500);
        $(".wrong").hide(1500);

        // console.log("level one wrong answer")
    
    }

});

// second level below

$('.leveltwoform').on('mouseenter', () => { 

    $(".leveltwoform").off('mouseenter');

    let seconds = 14;

    const countdown = window.setInterval(function() {  

        seconds = seconds - 1;      

        $('.timertwo').text(seconds);
        
        if (seconds <=14) { 
            
            $('.leveltwo').css('background','black');
        }

        if (seconds <=12) { 
            
            $('.leveltwo').css('background','darkred');
            $('.pictwo').css('filter','invert(100%)');

        }

        if (seconds <=10) { 
            
            $('.leveltwo').css('background','black');
            $('.pictwo').css('filter','invert(0%)');

        }
        
        if (seconds <=8) { 
            
            $('.leveltwo').css('background','darkred');
            $('.pictwo').css('filter','invert(100%)');

        }

        if (seconds <=6) { 

            $('.leveltwo').css('background','black');
            $('.pictwo').css('filter','invert(0%)');

        }

        if (seconds <=4) { 

            $('.leveltwo').css('background','darkred');
            $('.pictwo').css('filter','invert(100%)');

        }

        if (seconds <=2) { 

            $('.leveltwo').css('background','black');
            $('.pictwo').css('filter','invert(0%)');

        }

        if (seconds == 0){
            
            clearInterval(countdown);
            $('.leveltwo').css('display','none');
            $('.failtwo').show();

        }

    },1400);

});


$('.leveltwoform').on('submit', function(e){

    e.preventDefault();

    let userword = $('input[type=text]').val();

    let numbaz = 1;

    if (userword == 'power') {

        numbaz = numbaz + 1;
        
        $('.count').text(numbaz);

        $('.displaywordtwo').show();

        $('.displaywordtwo').append(userword);

        $(".leveltwoform").empty();

        $(".boxtwo").hide();

        $(".boxthree").show();

        // console.log("level two correct answer")

    } else {

        $(".wrong").show(1500);
        $(".wrong").hide(1500);

        // console.log("level two wrong answer")
    }

});

// level three below

$('.levelthreeform').on('mouseenter', () => { 

    $(".levelthreeform").off('mouseenter');

    let seconds = 14;

    const countdown = window.setInterval(function() {  

        seconds = seconds - 1;      

        $('.timerthree').text(seconds); 

        if (seconds <=14) { 
            
            $('.levelthree').css('background','black');

        }

        if (seconds <=12) { 
            
            $('.levelthree').css('background','darkred');
            $('.picthree').css('filter','invert(100%)');

        }

        if (seconds <=10) { 
            
            $('.levelthree').css('background','black');
            $('.picthree').css('filter','invert(0%)');

        }
        
        if (seconds <=8) { 
            
            $('.levelthree').css('background','darkred');
            $('.picthree').css('filter','invert(100%)');

        }

        if (seconds <=6) { 

            $('.levelthree').css('background','black');
            $('.picthree').css('filter','invert(0%)');

        }

        if (seconds <=4) { 

            $('.levelthree').css('background','darkred');
            $('.picthree').css('filter','invert(100%)');

        }

        if (seconds <=2) { 

            $('.levelthree').css('background','black');
            $('.picthree').css('filter','invert(0%)');

        }

        if (seconds == 0){
            
            clearInterval(countdown);
            $('.levelthree').css('display','none');
            $('.failthree').show();

        }

    },1400);

});

$('.levelthreeform').on('submit', function(e){

    e.preventDefault();

    let userword = $('input[type=text]').val();

    let numbaz = 2;

    if (userword == 'leave') {

        numbaz = numbaz + 1;

        $('.count').text(numbaz);

        $('.displaywordthree').show();

        $('.displaywordthree').append(userword);

        $(".levelthreeform").empty();

        $(".boxthree").hide();

        $(".boxfour").show();

        console.log("level three correct answer")

    } else {

        $(".wrong").show(1500);
        $(".wrong").hide(1500);

        console.log("level three wrong answer")

    }

});

// level four below

$('.levelfourform').on('mouseenter', () => { 

    $(".levelfourform").off('mouseenter');

    let seconds = 14;

    const countdown = window.setInterval(function() {  

        seconds = seconds - 1;      

        $('.timerfour').text(seconds); 

        if (seconds <=14) { 
            
            $('.levelfour').css('background','black');

        }

        if (seconds <=12) { 
            
            $('.levelfour').css('background','darkred');
            $('.picfour').css('filter','invert(100%)');

        }

        if (seconds <=10) { 
            
            $('.levelfour').css('background','black');
            $('.picfour').css('filter','invert(0%)');

        }
        
        if (seconds <=8) { 
            
            $('.levelfour').css('background','darkred');
            $('.picfour').css('filter','invert(100%)');

        }

        if (seconds <=6) { 

            $('.levelfour').css('background','black');
            $('.picfour').css('filter','invert(0%)');

        }

        if (seconds <=4) { 

            $('.levelfour').css('background','darkred');
            $('.picfour').css('filter','invert(100%)');

        }

        if (seconds <=2) { 

            $('.levelfour').css('background','black');
            $('.picfour').css('filter','invert(0%)');

        }

        if (seconds == 0){
            
            clearInterval(countdown);
            $('.levelfour').css('display','none');
            $('.failfour').show();

        }

    },1400);

});

$('.levelfourform').on('submit', function(e){

    e.preventDefault();

    let userword = $('input[type=text]').val();

    let numbaz = 3;

        if (userword == 'tribe') {

            numbaz = numbaz + 1;

            $('.count').text(numbaz);

            $('.displaywordfour').show();

            $('.displaywordfour').append(userword);

            $(".levelfourform").empty();

            $(".boxfour").hide();

            $(".boxfive").show();
        
            console.log("level four correct answer")

        } else {

            $(".wrong").show(1500);
            $(".wrong").hide(1500);

            console.log("level four wrong answer")

        }

});

// level five below

$('.levelfiveform').on('mouseenter', () => { 

    $(".levelfiveform").off('mouseenter');

    let seconds = 14;

    const countdown = window.setInterval(function() {  

        seconds = seconds - 1;      

        $('.timerfive').text(seconds); 

        if (seconds <=14) { 
            
            $('.levelfive').css('background','black');

        }

        if (seconds <=12) { 
            
            $('.levelfive').css('background','darkred');
            $('.picfive').css('filter','invert(100%)');

        }

        if (seconds <=10) { 
            
            $('.levelfive').css('background','black');
            $('.picfive').css('filter','invert(0%)');

        }
        
        if (seconds <=8) { 
            
            $('.levelfive').css('background','darkred');
            $('.picfive').css('filter','invert(100%)');

        }

        if (seconds <=6) { 

            $('.levelfive').css('background','black');
            $('.picfive').css('filter','invert(0%)');

        }

        if (seconds <=4) { 

            $('.levelfive').css('background','darkred');
            $('.picfive').css('filter','invert(100%)');

        }

        if (seconds <=2) { 

            $('.levelfive').css('background','black');
            $('.picfive').css('filter','invert(0%)');

        }

        if (seconds == 0){
            
            clearInterval(countdown);
            $('.levelfive').css('display','none');
            $('.failfive').show();

        }

    },1400);

});

$('.levelfiveform').on('submit', function(e){

    e.preventDefault();

    let userword = $('input[type=text]').val();

    let numbaz = 4;

        if (userword == 'share') {

            numbaz = numbaz + 1;

            $('.count').text(numbaz);

            $('.displaywordfive').show();

            $('.displaywordfive').append(userword);

            $(".levelfiveform").empty();

            $(".boxfive").hide();

            $(".boxsix").show();
        
            console.log("level four correct answer")

        } else {

            $(".wrong").show(1500);
            $(".wrong").hide(1500);

            console.log("level four wrong answer")

        }

});

// level six below

$('.levelsixform').on('mouseenter', () => { 

    $(".levelsixform").off('mouseenter');

    let seconds = 14;

    const countdown = window.setInterval(function() {  

        seconds = seconds - 1;      

        $('.timersix').text(seconds); 

        if (seconds <=14) { 
            
            $('.levelsix').css('background','black');

        }

        if (seconds <=12) { 
            
            $('.levelsix').css('background','darkred');
            $('.picsix').css('filter','invert(100%)');

        }

        if (seconds <=10) { 
            
            $('.levelsix').css('background','black');
            $('.picsix').css('filter','invert(0%)');

        }
        
        if (seconds <=8) { 
            
            $('.levelsix').css('background','darkred');
            $('.picsix').css('filter','invert(100%)');

        }

        if (seconds <=6) { 

            $('.levelsix').css('background','black');
            $('.picsix').css('filter','invert(0%)');

        }

        if (seconds <=4) { 

            $('.levelsix').css('background','darkred');
            $('.picsix').css('filter','invert(100%)');

        }

        if (seconds <=2) { 

            $('.levelsix').css('background','black');
            $('.picsix').css('filter','invert(0%)');

        }

        if (seconds == 0){
            
            clearInterval(countdown);
            $('.levelsix').css('display','none');
            $('.failsix').show();

        }

    },1400);

});

$('.levelsixform').on('submit', function(e){

    e.preventDefault();

    let userword = $('input[type=text]').val();

    let numbaz = 5;

        if (userword == 'strenght') {

            numbaz = numbaz + 1;

            $('.count').text(numbaz);

            $('.displaywordsix').show();

            $('.displaywordsix').append(userword);

            $(".levelsixform").empty();

            $(".boxsix").hide();

            $(".boxseven").show();
        
            console.log("level four correct answer")

        } else {

            $(".wrong").show(1500);
            $(".wrong").hide(1500);

            console.log("level four wrong answer")

        }

});

// level seven below

$('.levelsevenform').on('mouseenter', () => { 

    $(".levelsevenform").off('mouseenter');

    let seconds = 14;

    const countdown = window.setInterval(function() {  

        seconds = seconds - 1;      

        $('.timerseven').text(seconds); 

        if (seconds <=14) { 
            
            $('.levelseven').css('background','black');

        }

        if (seconds <=12) { 
            
            $('.levelseven').css('background','darkred');
            $('.picseven').css('filter','invert(100%)');

        }

        if (seconds <=10) { 
            
            $('.levelseven').css('background','black');
            $('.picseven').css('filter','invert(0%)');

        }
        
        if (seconds <=8) { 
            
            $('.levelseven').css('background','darkred');
            $('.picseven').css('filter','invert(100%)');

        }

        if (seconds <=6) { 

            $('.levelseven').css('background','black');
            $('.picseven').css('filter','invert(0%)');

        }

        if (seconds <=4) { 

            $('.levelseven').css('background','darkred');
            $('.picseven').css('filter','invert(100%)');

        }

        if (seconds <=2) { 

            $('.levelseven').css('background','black');
            $('.picseven').css('filter','invert(0%)');

        }

        if (seconds == 0){
            
            clearInterval(countdown);
            $('.levelseven').css('display','none');
            $('.failseven').show();

        }

    },1400);

});

$('.levelsevenform').on('submit', function(e){

    e.preventDefault();

    let userword = $('input[type=text]').val();

    let numbaz = 6;

        if (userword == 'honor') {

            numbaz = numbaz + 1;

            $('.count').text(numbaz);

            $('.displaywordseven').show();

            $('.displaywordseven').append(userword);

            $(".levelsevenform").empty();

            $(".boxseven").hide();

            $(".boxeight").show();
        
            console.log("level four correct answer")

        } else {

            $(".wrong").show(1500);
            $(".wrong").hide(1500);

            console.log("level four wrong answer")

        }

});

// level eight below

$('.leveleightform').on('mouseenter', () => { 

    $(".leveleightform").off('mouseenter');

    let seconds = 14;

    const countdown = window.setInterval(function() {  

        seconds = seconds - 1;      

        $('.timereight').text(seconds); 

        if (seconds <=14) { 
            
            $('.leveleight').css('background','black');

        }

        if (seconds <=12) { 
            
            $('.leveleight').css('background','darkred');
            $('.piceight').css('filter','invert(100%)');

        }

        if (seconds <=10) { 
            
            $('.leveleight').css('background','black');
            $('.piceight').css('filter','invert(0%)');

        }
        
        if (seconds <=8) { 
            
            $('.leveleight').css('background','darkred');
            $('.piceight').css('filter','invert(100%)');

        }

        if (seconds <=6) { 

            $('.leveleight').css('background','black');
            $('.piceight').css('filter','invert(0%)');

        }

        if (seconds <=4) { 

            $('.leveleight').css('background','darkred');
            $('.piceight').css('filter','invert(100%)');

        }

        if (seconds <=2) { 

            $('.leveleight').css('background','black');
            $('.piceight').css('filter','invert(0%)');

        }

        if (seconds == 0){
            
            clearInterval(countdown);
            $('.leveleight').css('display','none');
            $('.faileight').show();

        }

    },1400);

});

$('.leveleightform').on('submit', function(e){

    e.preventDefault();

    let userword = $('input[type=text]').val();

    let numbaz = 7;

        if (userword == 'ancestors') {

            numbaz = numbaz + 1;

            $('.count').text(numbaz);

            $('.displaywordeight').show();

            $('.displaywordeight').append(userword);

            $(".leveleightform").empty();

            $(".boxeight").hide();

            $(".boxnine").show();
        
            console.log("level four correct answer")

        } else {

            $(".wrong").show(1500);
            $(".wrong").hide(1500);

            console.log("level four wrong answer")

        }

});

// level nine below

$('.levelnineform').on('mouseenter', () => { 

    $(".levelnineform").off('mouseenter');

    let seconds = 14;

    const countdown = window.setInterval(function() {  

        seconds = seconds - 1;      

        $('.timernine').text(seconds); 

        if (seconds <=14) { 
            
            $('.levelnine').css('background','black');

        }

        if (seconds <=12) { 
            
            $('.levelnine').css('background','darkred');
            $('.picnine').css('filter','invert(100%)');

        }

        if (seconds <=10) { 
            
            $('.levelnine').css('background','black');
            $('.picnine').css('filter','invert(0%)');

        }
        
        if (seconds <=8) { 
            
            $('.levelnine').css('background','darkred');
            $('.picnine').css('filter','invert(100%)');

        }

        if (seconds <=6) { 

            $('.levelnine').css('background','black');
            $('.picnine').css('filter','invert(0%)');

        }

        if (seconds <=4) { 

            $('.levelnine').css('background','darkred');
            $('.picnine').css('filter','invert(100%)');

        }

        if (seconds <=2) { 

            $('.levelnine').css('background','black');
            $('.picnine').css('filter','invert(0%)');

        }

        if (seconds == 0){
            
            clearInterval(countdown);
            $('.levelnine').css('display','none');
            $('.failnine').show();

        }

    },1400);

});

$('.levelnineform').on('submit', function(e){

    e.preventDefault();

    let userword = $('input[type=text]').val();

    let numbaz = 8;

        if (userword == 'defend') {

            numbaz = numbaz + 1;

            $('.count').text(numbaz);

            $('.displaywordnine').show();

            $('.displaywordnine').append(userword);

            $(".levelnineform").empty();

            $(".boxnine").hide();

            $(".boxten").show();
        
            console.log("level four correct answer")

        } else {

            $(".wrong").show(1500);
            $(".wrong").hide(1500);

            console.log("level four wrong answer")

        }

});

// level ten below

$('.leveltenform').on('mouseenter', () => { 

    $(".leveltenform").off('mouseenter');

    let seconds = 14;

    const countdown = window.setInterval(function() {  

        seconds = seconds - 1;      

        $('.timerten').text(seconds); 

        if (seconds <=14) { 
            
            $('.levelten').css('background','black');

        }

        if (seconds <=12) { 
            
            $('.levelten').css('background','darkred');
            $('.picten').css('filter','invert(100%)');

        }

        if (seconds <=10) { 
            
            $('.levelten').css('background','black');
            $('.picten').css('filter','invert(0%)');

        }
        
        if (seconds <=8) { 
            
            $('.levelten').css('background','darkred');
            $('.picten').css('filter','invert(100%)');

        }

        if (seconds <=6) { 

            $('.levelten').css('background','black');
            $('.picten').css('filter','invert(0%)');

        }

        if (seconds <=4) { 

            $('.levelten').css('background','darkred');
            $('.picten').css('filter','invert(100%)');

        }

        if (seconds <=2) { 

            $('.levelten').css('background','black');
            $('.picten').css('filter','invert(0%)');

        }

        if (seconds == 0){
            
            clearInterval(countdown);
            $('.levelten').css('display','none');
            $('.failten').show();

        }

    },1400);

});

$('.leveltenform').on('submit', function(e){

    e.preventDefault();

    let userword = $('input[type=text]').val();

    let numbaz = 9;

        if (userword == 'dreams') {

            numbaz = numbaz + 1;

            $('.count').text(numbaz);

            $('.displaywordten').show();

            $('.displaywordten').append(userword);

            $(".leveltenform").empty();

            $(".levelten").hide();

            $('.failten').remove();

            $('.gameover').show();

        
            console.log("level four correct answer")

        } else {

            $(".wrong").show(1500);
            $(".wrong").hide(1500);
            
            console.log("level four wrong answer")

        }

});
