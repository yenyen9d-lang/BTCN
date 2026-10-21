
/* =====================================
   1. DỮ LIỆU CÔNG VIỆC
===================================== */

let danhSachCV = [
    { id: 1, noiDung: "Học bài JavaScript", hoanThanh: false },
    { id: 2, noiDung: "Làm bài tập về nhà", hoanThanh: true },
    { id: 3, noiDung: "Ôn thi giữa kỳ", hoanThanh: false }
];

// ID tiếp theo của công việc mới
let idTiepTheo = 4;

/* =====================================
   2. LẤY CÁC PHẦN TỬ HTML
===================================== */

const oNoiDung = document.getElementById("noiDung");
const oDanhSach = document.getElementById("danhSach");

/* =====================================
   TODO 1: TÌM VỊ TRÍ CÔNG VIỆC
===================================== */

function timViTri(id) {
    for (let i = 0; i < danhSachCV.length; i++) {
        if (danhSachCV[i].id === id) {
            return i;
        }
    }

    return -1;
}

/* =====================================
   TODO 2: HIỂN THỊ DANH SÁCH
===================================== */

function hienThiDanhSach() {
    let html = "";

    for (let i = 0; i < danhSachCV.length; i++) {
        let cv = danhSachCV[i];

        html += `
            <li>
                <input
                    type="checkbox"
                    ${cv.hoanThanh ? "checked" : ""}
                    onchange="toggleHoanThanh(${cv.id})"
                >

                <span style="${cv.hoanThanh ? 'text-decoration: line-through;' : ''}">
                    ${cv.noiDung}
                </span>

                <button
                    class="btn-xoa"
                    onclick="xoaCongViec(${cv.id})"
                >
                    Xóa
                </button>
            </li>
        `;
    }

    oDanhSach.innerHTML = html;
}

/* =====================================
   TODO 3: THÊM CÔNG VIỆC
===================================== */

function themCongViec() {
    let noiDung = oNoiDung.value;

    let congViecMoi = {
        id: idTiepTheo,
        noiDung: noiDung,
        hoanThanh: false
    };

    danhSachCV.push(congViecMoi);

    idTiepTheo++;

    // Xóa trắng ô nhập
    oNoiDung.value = "";

    // Hiển thị lại danh sách
    hienThiDanhSach();
}

/* =====================================
   TODO 4: XÓA CÔNG VIỆC
===================================== */

function xoaCongViec(id) {
    let viTri = timViTri(id);

    if (viTri !== -1) {
        danhSachCV.splice(viTri, 1);
    }

    hienThiDanhSach();
}

/* =====================================
   TODO 5: ĐÁNH DẤU HOÀN THÀNH
===================================== */

function toggleHoanThanh(id) {
    let viTri = timViTri(id);

    if (viTri !== -1) {
        danhSachCV[viTri].hoanThanh =
            !danhSachCV[viTri].hoanThanh;
    }

    hienThiDanhSach();
}

/* =====================================
   6. HIỂN THỊ KHI MỞ TRANG
===================================== */

hienThiDanhSach();
