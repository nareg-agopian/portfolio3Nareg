$('document').ready(function() {
    $('.yeah').css('background-color', 'blue');
    
    $('div:last p:nth-child(1)').css('background-color', 'red');
    $('div:last p:nth-child(2)').css('background-color', 'orange');
    $('div:last p:nth-child(3)').css('background-color', 'red');
    $('div:last p:nth-child(4)').css('background-color', 'orange');
    $('div:last p:nth-child(5)').css('background-color', 'red');
    $('div:last p:nth-child(6)').css('background-color', 'orange');

    // $('.2').css({visibility': 'hidden', 'position': 'absolute'}):

    // $('div:last p:nth-child(3)').css('backround-color', 'pink');

    //$("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
  
    //$('h1').bind('click', mouseClick);
    $('#replaceWText').css('color', 'green');

    $('#replaceWText').bind('click', replaceWText);

    $('#randPara').bind('click', addAPara);

    $('#removePara').bind('click', removeAPara);
    
     $('#show').css('visibility', 'hidden');
      
     $('#hide').bind('click', hideThePage);
     
     $('#show').bind('click', showThePage);
    
});

function removeAPara() {
    $('#randPara) p:last').remove();
}

function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText() {
    $('#randPara').html('<h1>SURE YES!</h1>');
}
      //$('#replaceWText').css('color', 'green');


//     $('#replaceWText').bind('click', replaceWText);
//
//     $('#randPara').bind('click', addPara);
//
//     $('#removePara').bind('click', removePara);
     
function hideThePage() {
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage() {
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}