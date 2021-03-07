// // Lưu thông tin lớp học
// var ma = 'FE58';
// var ten = 'abc';
// // lưu thông tin 1 học viên
// var ma = 'GV001';
// var ten = 'abc';
// // cách truy xuát biến trong đối tượng
// var lopHoc = {
//     ma: 'FE58',
//     ten: 'abc',
//     hienThiThongTin: function(){
//         console.log('Mã lớp học:',this.ma);
//         console.log('Tên lớp học:',this.ten);
//     }
// }
// // cách 1
// console.log(lopHoc.ma);
// // cách 2
// console.log(lopHoc['ma']);

// lopHoc.hienThiThongTin();
// lopHoc['hienThiThongTin']();

// var giangVien = {
//     ma: 'FE58',
//     ten: 'Duy',
//     hienThiThongTin: function(){
//         console.log('Mã giảng viên:',this.ma);
//         console.log('Tên giảng viên:',this.ten);
//     }
// }

// giangVien.hienThiThongTin();
// giangVien['hienThiThongTin']();

// var sinhVien = new SinhVien();
// sinhVien.maSinhVien = 1;
// sinhVien.tenSinhVien = 'Nguyễn Văn A';
// console.log('sv1', sinhVien);


// var sinhVien2 = new SinhVien();
// sinhVien2.maSinhVien = 2;
// sinhVien2.tenSinhVien = 'Nguyễn Văn Tèo';
// console.log('sv2', sinhVien2);

var arrSinhVien = [];
var validate = new Validation();

document.querySelector('#btnXacNhan').onclick = function () {
    var sinhVien = new SinhVien();
    // Lấy thông tin người dùng nhập vào và gán vào đối tượng
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVien.diemToan = document.querySelector('#diemToan').value;
    sinhVien.diemLy = document.querySelector('#diemLy').value;
    sinhVien.diemHoa = document.querySelector('#diemHoa').value;
    sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sinhVien.email = document.querySelector('#email').value;
    sinhVien.soDienThoai = document.querySelector('#soDienThoai').value;
    // Hiển thị dữ liệu lên giao diện
    document.querySelector('#txtTenSinhVien').innerHTML = sinhVien.tenSinhVien;
    document.querySelector('#txtMaSinhVien').innerHTML = sinhVien.maSinhVien
    document.querySelector('#txtLoaiSinhVien').innerHTML = sinhVien.loaiSinhVien
    document.querySelector('#txtXepLoai').innerHTML = sinhVien.xepLoaiSinhVien();
    document.querySelector('#txtDiemTrungBinh').innerHTML = sinhVien.tinhDiemTrungBinh().toFixed(2);



    //=========== Kiểm tra dữ liệu hợp lệ trước khi thêm vào mảng ============
    var valid = true;
    // 1.Kiểm tra rỗng
    valid &= validate.kiemTraRong('#maSinhVien', 'Mã sinh viên', '#kiemTraRong_maSinhVien') &
        validate.kiemTraRong('#tenSinhVien', 'Tên sinh viên', '#kiemTraRong_tenSinhVien') &
        validate.kiemTraRong('#email', 'Email', '#kiemTraRong_email') &
        validate.kiemTraRong('#soDienThoai', 'Số điện thoại', '#kiemTraRong_soDienThoai') &
        validate.kiemTraRong('#diemToan', 'Điểm Toán', '#kiemTraRong_diemToan') &
        validate.kiemTraRong('#diemLy', 'Điểm Lý', '#kiemTraRong_diemLy') &
        validate.kiemTraRong('#diemHoa', 'Điểm Hóa', '#kiemTraRong_diemHoa') &
        validate.kiemTraRong('#diemRenLuyen', 'Điểm rèn luyện', '#kiemTraRong_diemRenLuyen');

    valid &= validate.kiemTraTatCaSo('#maSinhVien', 'Mã sinh viên', '#kiemTraSo_maSinhVien') &
        validate.kiemTraTatCaSo('#soDienThoai', 'Số điện thoại', '#kiemTraSo_soDienThoai') &
        validate.kiemTraTatCaSo('#diemToan', 'Điểm toán', '#kiemTraSo_diemToan') &
        validate.kiemTraTatCaSo('#diemLy', 'Điểm lý', '#kiemTraSo_diemLy') &
        validate.kiemTraTatCaSo('#diemHoa', 'ĐIểm hóa', '#kiemTraSo_diemHoa') &
        validate.kiemTraTatCaSo('#diemRenLuyen', 'Điểm rèn luyện', '#kiemTraSo_diemRenLuyen');

    valid &= validate.kiemTraDoDai('#maSinhVien', 'Mã sinh viên', '#kiemTraDoDai_maSinhVien', 4, 6);
    valid &= validate.kiemTraGiaTri('#diemToan', 'Điểm toán', '#kiemTraGiaTri_diemToan', 0, 10) &
        validate.kiemTraGiaTri('#diemLy', 'Điểm lý', '#kiemTraGiaTri_diemLy', 0, 10) &
        validate.kiemTraGiaTri('#diemHoa', 'ĐIểm hóa', '#kiemTraGiaTri_diemHoa', 0, 10) &
        validate.kiemTraGiaTri('#diemRenLuyen', 'Điểm rèn luyện', '#kiemTraGiaTri_diemRenLuyen', 0, 10);

    valid &= validate.kiemTraEmail('#email', 'Email', '#kiemTraDinhDang_email');


    // if (sinhVien.maSinhVien === '') {
    //     document.querySelector('#kiemTraRong_maSinhVien').innerHTML = 'Mã sinh viên không được bỏ trống';
    //     valid = false;
    // } else {
    //     document.querySelector('#kiemTraRong_maSinhVien').innerHTML = '';
    // }
    // if (sinhVien.tenSinhVien === '') {
    //     document.querySelector('#kiemTraRong_tenSinhVien').innerHTML = 'Tên sinh viên không được bỏ trống';
    //     valid = false;
    // } else {
    //     document.querySelector('#kiemTraRong_tenSinhVien').innerHTML = '';
    // }

    // var regexCyberlearn = /cyberlearn/ig;
    // var value = 'abccyberlearn';
    // console.log(regexCyberlearn.test(value));

    if (!valid) {
        return;
    }

    // Mỗi lần click thêm sinh viên -> lấy đối tượng sinh viên lưu vào mảng
    arrSinhVien.push(sinhVien);
    // Sau khi thêm sinh viên vào mảng->lấy mảng sinh viên tạo ra chuỗi thẻ tr rồi in lên giao diện
    renderTableSinhVien(arrSinhVien);
    console.log('mangSinhVien', arrSinhVien);

    // Lưu data vào storage
    luuStorage();







    // // tạo thẻ JS
    // var trSinhVien = document.createElement('tr');
    // // trSinhVien.className = 'text-center';

    // var tdMaSinhVien = document.createElement('td');
    // tdMaSinhVien.innerHTML = sinhVien.maSinhVien;
    // tdMaSinhVien.className = 'text-center';

    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sinhVien.tenSinhVien;
    // tdTenSinhVien.className = 'text-center';

    // var tdLoaiSinhVien = document.createElement('td');
    // tdLoaiSinhVien.innerHTML = sinhVien.loaiSinhVien;
    // tdLoaiSinhVien.className = 'text-center';

    // var tdDiemTrungBinh = document.createElement('td');
    // tdDiemTrungBinh.innerHTML = sinhVien.tinhDiemTrungBinh().toFixed(2);
    // tdDiemTrungBinh.className = 'text-center';

    // var tdDiemRenLuyen = document.createElement('td');
    // tdDiemRenLuyen.innerHTML = sinhVien.diemRenLuyen;
    // tdDiemRenLuyen.className = 'text-center';


    // var buttonXoa = document.createElement('button');
    // buttonXoa.innerHTML = 'Xóa';
    // buttonXoa.className = 'btn btn-danger';
    // // định nghĩa sự kiện ckick khi tạo button
    // buttonXoa.onclick = function (event) {  //biến event là js trả ra cho từng sự kiện
    //     alert(sinhVien.tenSinhVien);
    //     let btnXoa = event.target; //event.target là thẻ xay ra sự kiện
    //     //từ thẻ con -> dom đến thẻ cha
    //     let tdCN = btnXoa.parentNode;
    //     // let trSV = tdCN.parentNode;
    //     let trSV = btnXoa.closest('tr'); //chọn selector ko phải chọn thẻ
    //     trSV.remove();
    //     console.log('tdCN', tdCN);
    // }

    // // đưa thẻ td vào thẻ tr
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdLoaiSinhVien);
    // trSinhVien.appendChild(tdDiemTrungBinh);
    // trSinhVien.appendChild(tdDiemRenLuyen);
    // trSinhVien.appendChild(buttonXoa);
    // // đưa thẻ tr vào tbody
    // document.querySelector('#tblSinhVien').appendChild(trSinhVien);

}

var renderTableSinhVien = function (mangSinhVien) {
    var content = '';
    for (var i = 0; i < mangSinhVien.length; i++) {
        var sinhVien = mangSinhVien[i];
        sv = new SinhVien(sinhVien.maSinhVien, sinhVien.tenSinhVien, sinhVien.loaiSinhVien, sinhVien.diemToan, sinhVien.diemLy, sinhVien.diemHoa, sinhVien.diemRenLuyen, sinhVien.email, sinhVien.soDienThoai);

        content += `
        <tr>
        <td>${sv.maSinhVien}</td>
        <td>${sv.tenSinhVien}</td>
        <td>${sv.loaiSinhVien}</td>
        <td>${sv.tinhDiemTrungBinh()}</td>
        <td>${sv.diemRenLuyen}</td>
        <td>${sv.email}</td>
        <td>${sv.soDienThoai}</td>
        <td>
        <button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">Xóa</button>
        <button class="btn btn-danger" onclick="chinhSua('${sv.maSinhVien}')">Chỉnh sửa</button>
        </td>
        </tr>
        `;
    }
    document.querySelector('#tblSinhVien').innerHTML = content;
}
var chinhSua = function (maSinhVien) {
    for (var i = 0; i < arrSinhVien.length; i++) {
        var sv = arrSinhVien[i];
        if (sv.maSinhVien === maSinhVien) {
            // Load lại lên control phía trên
            document.querySelector('#maSinhVien').value = sv.maSinhVien;
            document.querySelector('#tenSinhVien').value = sv.tenSinhVien;
            document.querySelector('#email').value = sv.email;
            document.querySelector('#soDienThoai').value = sv.soDienThoai;
            document.querySelector('#diemToan').value = sv.diemToan;
            document.querySelector('#diemLy').value = sv.diemLy;
            document.querySelector('#diemHoa').value = sv.diemHoa;
            document.querySelector('#diemRenLuyen').value = sv.diemRenLuyen;
            document.querySelector('#email').value = sv.email;
            document.querySelector('#soDienThoai').value = sv.soDienThoai;
        }
    }
}

window.xoaSinhVien = function (maSV) {
    for (var i = arrSinhVien.length - 1; i >= 0; i--) {
        var sv = arrSinhVien[i];
        if (sv.maSinhVien === maSV) {
            arrSinhVien.splice(i, 1);
        }
    }
    // gọi hàm tạo lại bảng
    renderTableSinhVien(arrSinhVien);
    luuStorage();
}


var luuStorage = function () {
    // Biến đổi mảng (arrSinhVien) thành chuỗi
    var chuoiArrSinhVien = JSON.stringify(arrSinhVien);
    localStorage.setItem('arrSinhVien', chuoiArrSinhVien);

}

var layDataStorage = function () {
    // kiểm tra có storage đó hay ko
    if (localStorage.getItem('arrSinhVien')) {
        // Dữ liệu lấy ra từ localStorage là dạng chuỗi
        var chuoiArrSinhVien = localStorage.getItem('arrSinhVien');
        // Chuyển chuỗi json về object json
        arrSinhVien = JSON.parse(chuoiArrSinhVien);

        // Gọi hàm render table từ dữ liệu trong storage
        renderTableSinhVien(arrSinhVien);
    }
}



// Cập nhật sinh viên
document.querySelector('#btnCapNhatSinhVien').onclick = function () {
    var svCapNhat = new SinhVien();
    svCapNhat.maSinhVien = document.querySelector('#maSinhVien').value;
    svCapNhat.tenSinhVien = document.querySelector('#tenSinhVien').value;
    svCapNhat.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    svCapNhat.diemToan = document.querySelector('#diemToan').value;
    svCapNhat.diemLy = document.querySelector('#diemLy').value;
    svCapNhat.diemHoa = document.querySelector('#diemHoa').value;
    svCapNhat.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    svCapNhat.email = document.querySelector('#email').value;
    svCapNhat.soDienThoai = document.querySelector('#soDienThoai').value;


    for (var i = 0; i < arrSinhVien.length; i++) {
        var sv = arrSinhVien[i];
        if (sv.maSinhVien === svCapNhat.maSinhVien) {
            sv.maSinhVien=svCapNhat.maSinhVien;
            sv.tenSinhVien=svCapNhat.tenSinhVien;
            sv.loaiSinhVien=svCapNhat.loaiSinhVien;
            sv.diemToan=svCapNhat.diemToan;
            sv.diemLy=svCapNhat.diemLy;
            sv.diemHoa=svCapNhat.diemHoa;
            sv.diemRenLuyen=svCapNhat.diemRenLuyen;
            sv.email=svCapNhat.email;
            sv.soDienThoai=svCapNhat.soDienThoai;
        }
    }
    renderTableSinhVien(arrSinhVien);
    luuStorage();
}

layDataStorage();
