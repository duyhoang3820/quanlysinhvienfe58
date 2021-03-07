// lưu ý tên lớp đối tượng class phải viết hoa
var SinhVien = function (maSV,tenSV,loaiSV,dToan,dLy,dHoa,dRenLuyen,email,soDT) {
    this.maSinhVien = maSV;
    this.tenSinhVien = tenSV;
    this.loaiSinhVien = loaiSV;
    this.diemToan = dToan;
    this.diemLy = dLy;
    this.diemHoa = dHoa;
    this.diemRenLuyen = dRenLuyen;
    this.email = email;
    this.soDienThoai = soDT;

    this.tinhDiemTrungBinh = function () {
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return dtb;
    }

    this.xepLoaiSinhVien = function () {
        var kqXepLoai = '';
        var diemTrungBinh = this.tinhDiemTrungBinh();
        if (diemTrungBinh < 5 || this.diemRenLuyen < 5) {
            kqXepLoai = 'Yếu';
        } else if (diemTrungBinh >= 5 && diemTrungBinh < 6) {
            kqXepLoai = 'Trung bình';
        } else if (diemTrungBinh >= 6 && diemTrungBinh < 7) {
            kqXepLoai = 'Trung bình khá';
        } else if (diemTrungBinh >= 7 && diemTrungBinh < 8) {
            kqXepLoai = 'Khá';
        } else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
            kqXepLoai = 'Giỏi';
        } else if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
            kqXepLoai = 'Xuất sắc';
        } else {
            kqXepLoai = 'Không hợp lệ';
        }
        return kqXepLoai;
    }
}

