$(document).ready(function documentReady() {
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
    $('#menuBar > li > button').button().css('margin', 0);
    $('.menu li:not(.menuBreak)').button();
    $('.menu').addClass('ui-helper-hidden');
    
    // Setup menu buttons
    $('#menuBar > li').css('float', 'left')
        .children('button').click(function menuButtonClick() {
            var list = $(this).next();
            
            if (list.hasClass('ui-helper-hidden')) {
                list.removeClass('ui-helper-hidden');
            } else {
                list.addClass('ui-helper-hidden');
            }
        });
    $('#menuLogOn').click(function() {
        $('#dialogLogin').dialog('open');
    });
        
    // Dialogs
    $('#dialogLogin').dialog({
        autoOpen: false,
        height: 300,
        width: 300,
        modal: true,
        buttons: {
            'OK': function() {
                $(this).dialog('close');
            },
            'Cancel': function() {
                $(this).dialog('close');
            }
        },
        close: function() {
            
        }
    });
});