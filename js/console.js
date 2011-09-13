$(document).ready(function(){
    $('#loginSubmit').click(function formSubmit(){
        $.ajax({
            cache: false,
            dataType: 'json',
            type: 'POST',
            url: 'http://lpagentconsole.hbliveperson.cloud9ide.com/',
            data: JSON.stringify({
                user: $('#loginUser').val(),
                pass: $('#loginPass').val()
            }),
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            },
            success: function ajaxSuccess(data, textStatus, jqXHR) {
                console.log(data);
            }
        });
    });
    
    // JQuery Initialization
    $('button, .menu li').button();
    $('.menu').addClass('ui-helper-hidden');
    
    // Setup menu buttons
    $('#menuBar > li').css('float', 'left')
    .children('button').click(function menuButtonClick() {
        var list = $( this ).next();
        
        if (list.hasClass('ui-helper-hidden')) {
            list.removeClass('ui-helper-hidden');
        } else {
            list.addClass('ui-helper-hidden');
        }
    });
    
});