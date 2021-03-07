// Xây dựng class để kiểm tra dữ liệu
var Validation = function () {
    // trim():loại bỏ khoảng trống đầu và cuối của chuỗi
    this.kiemTraRong = function (selector, name, error_selector) {
        if (document.querySelector(selector).value.trim() === '') {
            document.querySelector(error_selector).innerHTML = name + ' không được bỏ trống !';
            return false;
        }
        document.querySelector(error_selector).innerHTML = '';
        return true;
    }
    this.kiemTraEmail = function (selector, name, error_selector) {
        var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(document.querySelector(selector).value)) {
            document.querySelector(error_selector).innerHTML = '';
            return true;
        }
        document.querySelector(error_selector).innerHTML = 'Email không đúng định dạng!';
    }
    this.kiemTraTatCaSo = function (selector, name, error_selector) {
        var regex = /^[0-9]+$/;
        if (regex.test(document.querySelector(selector).value)) {
            document.querySelector(error_selector).innerHTML = '';
            return true;
        }
        document.querySelector(error_selector).innerHTML = name + ' phải là số!';
        return false;
    }
    this.kiemTraDoDai = function (selector, name, error_selector, minLength, maxLength) {
        var value = document.querySelector(selector).value;
        if (value.length < minLength || value.length > maxLength) {
            document.querySelector(error_selector).innerHTML = `${name} từ ${minLength} đến ${maxLength} ký tự!`;
            return false;
        }
        document.querySelector(error_selector).innerHTML = '';
        return true;
    }
    this.kiemTraGiaTri = function (selector, name, error_selector, minValue, maxValue) {
        var value = document.querySelector(selector).value;
        if (Number(value) < minValue || Number(value) > maxValue) {
            document.querySelector(error_selector).innerHTML = `${name} từ ${minValue} đến ${maxValue}!`;
            return false;
        }
        document.querySelector(error_selector).innerHTML = '';
        return true;
    }
    this.kiemTraQRCode = function(){
        console.log('check QR Code');
    }
    this.chucNangUserA = function(){
        console.log('userA');
    }
}