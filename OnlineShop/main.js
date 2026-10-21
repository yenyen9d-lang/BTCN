
//Đăng nhập, đăng kí

let danhSachTaiKhoan = [
    { taiKhoan: "khach1", matKhau: "123456" }
];

let taiKhoanDangNhap = null;

// Lấy các phần tử HTML
const oTaiKhoan = document.getElementById("oTaiKhoan");
const oMatKhau = document.getElementById("oMatKhau");
const oThongBaoLoi = document.getElementById("thongBaoLoi");
const oManHinhDangNhap = document.getElementById("manHinhDangNhap");
const oManHinhCuaHang = document.getElementById("manHinhCuaHang");
const oTenDangNhap = document.getElementById("tenDangNhap");

// TODO 1: Tìm tài khoản
function timTaiKhoan(taiKhoan) {
    for (let i = 0; i < danhSachTaiKhoan.length; i++) {
        if (danhSachTaiKhoan[i].taiKhoan === taiKhoan) {
            return danhSachTaiKhoan[i];
        }
    }

    return null;
}

// TODO 2: Đăng ký
function dangKy() {
    let taiKhoan = oTaiKhoan.value.trim();
    let matKhau = oMatKhau.value;

    if (taiKhoan === "" || matKhau === "") {
        oThongBaoLoi.className = "thong-bao loi";
        oThongBaoLoi.textContent = "Vui lòng nhập đầy đủ tài khoản và mật khẩu.";
        return;
    }

    if (timTaiKhoan(taiKhoan) !== null) {
        oThongBaoLoi.className = "thong-bao loi";
        oThongBaoLoi.textContent =
            "Tài khoản đã tồn tại, vui lòng chọn tên khác hoặc đăng nhập.";
        return;
    }

    danhSachTaiKhoan.push({
        taiKhoan: taiKhoan,
        matKhau: matKhau
    });

    oThongBaoLoi.className = "thong-bao thanh-cong";
    oThongBaoLoi.textContent =
        "Đăng ký thành công! Bây giờ hãy đăng nhập.";

    oTaiKhoan.value = "";
    oMatKhau.value = "";
}

// TODO 3: Đăng nhập
function dangNhap() {
    let taiKhoan = oTaiKhoan.value.trim();
    let matKhau = oMatKhau.value;

    let tk = timTaiKhoan(taiKhoan);

    if (tk === null || tk.matKhau !== matKhau) {
        oThongBaoLoi.className = "thong-bao loi";
        oThongBaoLoi.textContent = "Sai tài khoản hoặc mật khẩu.";
        return;
    }

    taiKhoanDangNhap = tk;

    oTaiKhoan.value = "";
    oMatKhau.value = "";
    oThongBaoLoi.textContent = "";

    hienThiManHinh();
}

// TODO 4: Đăng xuất
function dangXuat() {
    taiKhoanDangNhap = null;
    hienThiManHinh();
}

// TODO 5: Hiển thị màn hình
function hienThiManHinh() {
    if (taiKhoanDangNhap === null) {
        oManHinhDangNhap.style.display = "block";
        oManHinhCuaHang.style.display = "none";
    } else {
        oManHinhDangNhap.style.display = "none";
        oManHinhCuaHang.style.display = "block";
        oTenDangNhap.textContent = taiKhoanDangNhap.taiKhoan;
    }
}

/* =========================
   PHẦN B: SẢN PHẨM VÀ GIỎ HÀNG
   ========================= */

let danhSachSanPham = [
    { id: "SP001", ten: "Áo thun", gia: 150000 },
    { id: "SP002", ten: "Quần jean", gia: 350000 },
    { id: "SP003", ten: "Giày sneaker", gia: 500000 },
    { id: "SP004", ten: "Mũ lưỡi trai", gia: 80000 },
    { id: "SP005", ten: "Balo", gia: 250000 }
];

let gioHang = [];

const oBangSanPham = document.getElementById("bangSanPham");
const oBangGioHang = document.getElementById("bangGioHang");
const oTongTien = document.getElementById("tongTien");

// Định dạng giá tiền
function dinhDangTien(soTien) {
    return soTien.toLocaleString("vi-VN") + "đ";
}

// Tìm sản phẩm theo mã
function timSanPham(id) {
    for (let i = 0; i < danhSachSanPham.length; i++) {
        if (danhSachSanPham[i].id === id) {
            return danhSachSanPham[i];
        }
    }

    return null;
}

// Hiển thị danh sách sản phẩm
function hienThiSanPham() {
    oBangSanPham.innerHTML = "";

    for (let i = 0; i < danhSachSanPham.length; i++) {
        let sp = danhSachSanPham[i];

        let dong = document.createElement("tr");

        let cotTen = document.createElement("td");
        cotTen.textContent = sp.ten;

        let cotGia = document.createElement("td");
        cotGia.textContent = dinhDangTien(sp.gia);

        let cotNut = document.createElement("td");
        let nutThem = document.createElement("button");

        nutThem.textContent = "Thêm vào giỏ";
        nutThem.onclick = function () {
            themVaoGio(sp.id);
        };

        cotNut.appendChild(nutThem);

        dong.appendChild(cotTen);
        dong.appendChild(cotGia);
        dong.appendChild(cotNut);

        oBangSanPham.appendChild(dong);
    }
}

// Hiển thị giỏ hàng
function hienThiGioHang() {
    oBangGioHang.innerHTML = "";

    let tongTien = 0;

    if (gioHang.length === 0) {
        oBangGioHang.textContent = "Giỏ hàng đang trống.";
    } else {
        for (let i = 0; i < gioHang.length; i++) {
            let sp = gioHang[i];
            tongTien += sp.gia;

            let dong = document.createElement("div");
            let tenVaGia = document.createElement("span");
            let nutXoa = document.createElement("button");

            tenVaGia.textContent =
                sp.ten + " - " + dinhDangTien(sp.gia);

            nutXoa.textContent = "Xóa";
            nutXoa.onclick = function () {
                xoaKhoiGio(i);
            };

            dong.appendChild(tenVaGia);
            dong.appendChild(document.createTextNode(" "));
            dong.appendChild(nutXoa);

            oBangGioHang.appendChild(dong);
        }
    }

    oTongTien.textContent = dinhDangTien(tongTien);
}

// Thêm sản phẩm vào giỏ
function themVaoGio(id) {
    let sp = timSanPham(id);

    if (sp !== null) {
        gioHang.push(sp);
        hienThiGioHang();
    }
}

// Xóa sản phẩm khỏi giỏ
function xoaKhoiGio(viTri) {
    gioHang.splice(viTri, 1);
    hienThiGioHang();
}

// Thanh toán
function thanhToan() {
    if (gioHang.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }

    let tongTien = 0;

    for (let i = 0; i < gioHang.length; i++) {
        tongTien += gioHang[i].gia;
    }

    alert("Thanh toán thành công!\nTổng tiền: " + dinhDangTien(tongTien));

    gioHang = [];
    hienThiGioHang();
}

//Khởi tạo mở trang 

hienThiManHinh();
hienThiSanPham();
hienThiGioHang();
