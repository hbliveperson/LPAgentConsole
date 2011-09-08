console.log('console.js is here');

$.ajax({
    cache: false,
    dataType: 'json',
    url: 'http://lpagentconsole.hbliveperson.cloud9ide.com/',
    data: {
        username: 'name',
        password: 'pass'
    },
    error: function ajaxError(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
    },
    success: function ajaxSuccess(data, textStatus, jqXHR) {
        console.log(data);
    }
});