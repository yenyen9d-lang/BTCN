
let danhSachSV = [
    { mssv: "SV001", hoten: "Nguyễn Văn A", lop: "CNTT01" },
    { mssv: "SV002", hoten: "Trần Thị B", lop: "CNTT02" },
    { mssv: "SV003", hoten: "Lê Văn C", lop: "CNTT01" }
];

let dangSuaId = null;

const oMssv = document.getElementById("mssv");
const oHoten = document.getElementById("hoten");
const oLop = document.getElementById("lop");
const oBtnThem = document.getElementById("btnThem");
const oTableBody = document.getElementById("tableBody");

// TODO 1: Tìm vị trí sinh viên theo mã SV
function timViTri(mssv) {
    for (let i = 0; i < danhSachSV.length; i++) {
        if (danhSachSV[i].mssv === mssv) {
            return i;
        }
    }
    return -1;
}

// TODO 2: Hiển thị danh sách sinh viên
function hienThiDanhSach() {
    let html = "";

    for (let i = 0; i < danhSachSV.length; i++) {
        let sv = danhSachSV[i];

        html += `
            <tr>
                <td>${sv.mssv}</td>
                <td>${sv.hoten}</td>
                <td>${sv.lop}</td>
                <td>
                    <button class="btn-sua"
                        onclick="suaSinhVien('${sv.mssv}')">Sửa</button>
                    <button class="btn-xoa"
                        onclick="xoaSinhVien('${sv.mssv}')">Xóa</button>
                </td>
            </tr>
        `;
    }

    oTableBody.innerHTML = html;
}

// TODO 3: Thêm hoặc cập nhật sinh viên
function luuSinhVien() {
    let mssv = oMssv.value;
    let hoten = oHoten.value;
    let lop = oLop.value;

    let sinhVienMoi = {
        mssv: mssv,
        hoten: hoten,
        lop: lop
    };

    if (dangSuaId === null) {
        // Thêm sinh viên mới
        danhSachSV.push(sinhVienMoi);
    } else {
        // Cập nhật sinh viên đang sửa
        let viTri = timViTri(dangSuaId);

        if (viTri !== -1) {
            danhSachSV[viTri] = sinhVienMoi;
        }

        dangSuaId = null;
        oBtnThem.textContent = "Thêm";
    }

    // Xóa trắng các ô nhập
    oMssv.value = "";
    oHoten.value = "";
    oLop.value = "";

    // Hiển thị lại bảng
    hienThiDanhSach();
}

// TODO 4: Xóa sinh viên
function xoaSinhVien(mssv) {
    let viTri = timViTri(mssv);

    if (viTri !== -1) {
        danhSachSV.splice(viTri, 1);
    }

    hienThiDanhSach();
}

// TODO 5: Sửa sinh viên
function suaSinhVien(mssv) {
    let viTri = timViTri(mssv);

    if (viTri !== -1) {
        let sv = danhSachSV[viTri];

        oMssv.value = sv.mssv;
        oHoten.value = sv.hoten;
        oLop.value = sv.lop;

        dangSuaId = mssv;
        oBtnThem.textContent = "Cập nhật";
    }
}

// Hiển thị danh sách khi mở trang
hienThiDanhSach();
