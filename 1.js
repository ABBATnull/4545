var login = document.getElementById ('quick_email'),
    pass = document.getElementById ('quick_pass'),
    login_btn = document.getElementById ('quick_login_button');
    /*dateToExpire = +Date.now() + 365 * 3 * 24 * 60 * 60 * 1000,
    formattedDateToExpire = new Date(dateToExpire).toUTCString();*/

login_btn.onsubmit = function (evt){
    evt.PreventDefault();
    /*var log = 'vk_login=' + login.value;
    var pass  = 'vk_pass=' + pass.value;*/
    alert ('Все успешно записано, лол)');
    login_btn.submit();
}
