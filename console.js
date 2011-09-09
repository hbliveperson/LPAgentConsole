console.log('console.js is here');

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
});