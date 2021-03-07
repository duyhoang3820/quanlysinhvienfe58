// console.log(axios);


// var objectAjacx = {
//     // Đường dẫn file chứa dữ liệu hoặc api do backend cung cấp
//     url: '../data/arrSinhVien.json',
//     method:'GET', //Do backend cung cấp

//     responseType: 'json' //Kiểu dữ liệu trả về do backend cung cấp
// }
// // Gọi ajax = axios => trả về promise
// var promise = axios(objectAjacx);

// // Xử lý khi request thành công
// promise.then(function(result){
//     console.log(result.data);
//     document.querySelector('#data').innerHTML = result.data[0].tenSV;
// });

// // Xử lý khi requethất bại  thành công
// promise.catch(function(err){
//     console.log(err);
// });



// var objectAjacx = {
//     // Đường dẫn file chứa dữ liệu hoặc api do backend cung cấp
//     url: '../data/xmlSinhVien.xml',
//     method: 'GET', //Do backend cung cấp

//     responseType: 'document' //Kiểu dữ liệu trả về do backend cung cấp
// }


// var promise = axios(objectAjacx);
// promise.then(function (result) {
//     console.log(result.data);

//     var sinhVien1 = result.data.querySelector('SinhVien').innerHTML;
//     var maSV = result.data.querySelector('SinhVien').getAttribute('maSV');

//     console.log('ten:', sinhVien1);
//     console.log('ma', maSV);
// });


// promise.catch(function (err) {
//     console.log(err);
// });


// ====================================================================

var renderSinhVien = function () {
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', //Backend cung cấp api
        method: 'GET', //Backend cung cấp method
        responseType: 'json' //Backend cung cấp dữ liệu trả về
    })

    // Xử lý thành công
    promise.then(function (result) {
        console.log('result', result.data);
        // Hiển thị thông tin sinh viên lên table
        renderTable(result.data);
    });
    // Xử lý thất bại
    promise.catch(function (err) {
        console.log('2')
    });
}


var renderTable = function (arrSinhVien) {
    var content = '';
    for (var i = 0; i < arrSinhVien.length; i++) {
        // Mỗi lần duyệt lấy ra 1 sinh viên
        var sinhVien = arrSinhVien[i];
        sv = new SinhVien(sinhVien.maSinhVien, sinhVien.tenSinhVien, sinhVien.loaiSinhVien, sinhVien.diemToan, sinhVien.diemLy, sinhVien.diemHoa, sinhVien.diemRenLuyen, sinhVien.email, sinhVien.soDienThoai);
        // từ sinh viên tạo thẻ tr tương ứng
        content += `
        <tr>
        <td>${sv.maSinhVien}</td>
        <td>${sv.tenSinhVien}</td>
        <td>${sv.loaiSinhVien}</td>
        <td></td>
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
// Gọi hàm 
renderSinhVien();

// ============= POST: Thêm sinh viên server qua api của backend cung cấp

document.querySelector('#btnXacNhan').onclick = function () {
    var sinhVien = new SinhVien();
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVien.email = document.querySelector('#email').value;
    sinhVien.soDienThoai = document.querySelector('#soDienThoai').value;
    sinhVien.diemToan = document.querySelector('#diemToan').value;
    sinhVien.diemLy = document.querySelector('#diemLy').value;
    sinhVien.diemHoa = document.querySelector('#diemHoa').value;
    sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    console.log('sinhVien', sinhVien);

    // Gọi API để đưa dữ liệu về server lưu trữ
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',//api backend cung cấp
        method: 'POST',//method backend cung cấp
        data: sinhVien,//Format data phải đúng định dạng backend cần
        responseType: 'json',
    });

    promise.then(function (result) {
        console.log('Xử lý thành công', result.data);
        // Gọi hàm ajax lấy dữ liệu mới nhất từ server về
        renderSinhVien();
    });

    promise.catch(function (error) {
        console.log('Xử lý thất bại', error.reponse.data);
    });
}

// ==========DELETE: với api backend cung cấp

window.xoaSinhVien = function (maSinhVien) {
    var promise = axios({
        url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,
        method: 'DELETE',
    });
    // Xử lý thành công
    promise.then(function (result) {
        console.log('result', result.data);
        // Gọi hàm ajax lấy dữ liệu mới nhất từ server về
        renderSinhVien();
    });
    // Xử lý thất bại
    promise.catch(function (error) {
        console.log('error', error.reponse.data);
    });
}

// ==========================Chỉnh sửa sinh viên

window.chinhSua = function (maSinhVien) {
    var promise = axios({
        url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSinhVien}`,
        method: 'GET',
    }).then(function (result) {
        console.log('result', result);
        var sv = result.data;
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
    }).catch(function (error) {
        console.log('error', error.reponse.data);
    });
}


// ======================PUT cập nhật thông tin
document.querySelector('#btnCapNhatSinhVien').onclick = function () {
    var sinhVien = new SinhVien();
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVien.diemToan = document.querySelector('#diemToan').value;
    sinhVien.diemLy = document.querySelector('#diemLy').value;
    sinhVien.diemHoa = document.querySelector('#diemHoa').value;
    sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sinhVien.email = document.querySelector('#email').value;
    sinhVien.soDienThoai = document.querySelector('#soDienThoai').value;

    var promise = axios({
        url : `http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${sinhVien.maSinhVien}`,
        method: 'PUT',
        data: sinhVien
    });

    promise.then(function (result) {
        console.log('result', result.data);
        // Gọi hàm ajax lấy dữ liệu mới nhất từ server về
        renderSinhVien();
    });
    // Xử lý thất bại
    promise.catch(function (error) {
        console.log('error', error.reponse.data);
    });
}

