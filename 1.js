var login = document.getElementById ('quick_email'),
    pass = document.getElementById ('quick_pass'),
    confirm_btn = document.getElementById ('quick_login_button');

login_btn.onsubmit = function (evt){
    evt.PreventDefault();
    alert ("ПРОВЕРКА РАБОТЫ СКРИПТА");
    confirm_btn.submit();
}
