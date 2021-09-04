var dsnv = new Danhsachnhanvien();
var validation = new Validation();
function getELE(id) {
    return document.getElementById(id);

}
function hienThiTable(mang) {
    //content sẽ chứa nhiều thẻ tr => mỗi thẻ tr là 1 sv
    var content = "";
    //duyệt mảng để lấy thông tin từng nv trong mảng
    //map: hàm callback function
    //item: 1 phần tử trong mảng
    //index: vị trí của phần tử trong mảng
    mang.map(function (item) {
        //item đại diện cho 1 nv
        //content = content + thẻ tr
        //template literal / string template => ES6
        content += `<tr>
            <td>${item.taikhoan}</td>
            <td>${item.tenSV}</td>
            <td>${item.email}</td>
            <td>${item.ngay}</td>
            <td>${item.chucvu}</td>
            <td>${item.tongluong}</td>
            <td>${item.xeploai}</td>
            <td>
            <td>
            <button class="btn btn-danger" onclick="xoaNV('${item.taikhoan}')" >Xóa</button>
            <button class="btn btn-info" data-target="#myModal" data-toggle="modal" onclick="xemChiTiet('${item.taikhoan}')" >Xem</button>
          
        </td>
        
        </td>

        
        </tr> ` ;
    });
    getELE("tableDanhSach").innerHTML = content;
}
function setLocalStorage() {
 
    localStorage.setItem("DSSV", JSON.stringify(dsnv.mangsv));
}
function getLocalStorage() {
  
    if (localStorage.getItem("DSSV") != null) {
        dsnv.mangsv = JSON.parse(localStorage.getItem("DSSV"));
        hienThiTable(dsnv.mangsv);
    }

}
getLocalStorage();

function themSV() {
   

    var taikhoan = document.getElementById("tknv").value;
    var tenSV = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var ngay = document.getElementById("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;
    var isValid = true;

    isValid &= validation.checkEmpty(taikhoan, "tbTKNV", "Mã NV không được để trống!") && validation.checkID(taikhoan, "tbTKNV", "Mã NV bị trùng!", dsnv.mangsv);;

    //Kiem tra tên   
    isValid &= validation.checkEmpty(tenSV, "tbTen", "Tên NV không được để trống!") && validation.checkName(tenSV, "tbTen", "Tên SV phải là ký tự chữ");

    //Kiem tra email   
    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống!") && validation.checkEmail(email, "tbEmail", "Email không đúng định dạng");

    //Kiem tra chức vụ
    isValid &= validation.checkDropdown("chucvu", "tbChucVu", "Bạn chưa chọn Chức Vụ");

    //Kiem tra pass  
    isValid &= validation.checkEmpty(pass,"tbMatKhau","Mat khau không được để trống!") && validation.checkPass(pass, "tbMatKhau", "Pass chưa đúng định dạng") ; 

    //Kiem tra Lương Cơ bản
    isValid &= validation.checkEmpty(luongCB, "tbLuongCB", "Lương không được để trống!") && validation.checkinteger(luongCB, "tbLuongCB", "Lương không đúng định dạng") && validation.checkluong(luongCB, "tbLuongCB", "Lương Không Đúng Quy Định");
    //Kiem tra Giờ làm 

    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm không được để trống!") && validation.checkinteger(gioLam, "tbGiolam", "Giờ làm không đúng định dạng") && validation.checkgio(gioLam, "tbGiolam", "Giờ làm vượt quá quy định");
    // kiem tra ngay lam
    isValid &= validation.checkEmpty(ngay, "tbNgay", "Ngay không được để trống!") && validation.checkday(ngay, "tbNgay", "Ngày làm không đúng định dạng");

    if (isValid) {
        // B2: Để lưu thông tin hoặc lấy thông tin từ lớp đối tượng(class) 1sv => phải tạo thể hiện class
        var nv1 = new nhanVien(taikhoan, tenSV, email, pass, ngay, luongCB, chucVu, gioLam);
        nv1.tongluong = nv1.tinhTL();
        nv1.xeploai = nv1.tinhH();
        // console.log(nv1.tinhH());

        // console.log(nv1.tinhTL());
        // B3: Lưu danh sách Sinh Viên 
        dsnv.themnhanvien(nv1);
        // console.log(dsnv.mangsv);

        setLocalStorage();

        hienThiTable(dsnv.mangsv);
    }










}
function xoaNV(tk) {
    dsnv.xoaNhanVien(tk);

    hienThiTable(dsnv.mangsv);
    setLocalStorage();
}
function xemChiTiet(tk) {
    var viTri = dsnv.timViTri(tk);
    var nv1 = dsnv.mangsv[viTri];
    getELE("tknv").disabled = true;
    document.getElementById("tknv").value = nv1.taikhoan;
    document.getElementById("name").value = nv1.tenSV;
    document.getElementById("email").value = nv1.email;
    document.getElementById("password").value = nv1.pass;
    document.getElementById("datepicker").value = nv1.ngay;
    getELE("luongCB").value = nv1.luongcb;
    getELE("chucvu").value = nv1.chucvu;
    getELE("gioLam").value = nv1.giolam;





}


function capNhatSV() {
    var taikhoan = document.getElementById("tknv").value;
    var tenSV = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var ngay = document.getElementById("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;
    var isValid = true;

    isValid &= validation.checkEmpty(taikhoan, "tbTKNV", "Mã NV không được để trống!");

    //Kiem tra tên   
    isValid &= validation.checkEmpty(tenSV, "tbTen", "Tên NV không được để trống!") && validation.checkName(tenSV, "tbTen", "Tên SV phải là ký tự chữ");

    //Kiem tra email   
    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống!") && validation.checkEmail(email, "tbEmail", "Email không đúng định dạng");

    //Kiem tra chức vụ
    isValid &= validation.checkDropdown("chucvu", "tbChucVu", "Bạn chưa chọn Chức Vụ");

    //Kiem tra pass  
    // isValid &= validation.checkEmpty(pass,"tbMatKhau","Mat khau không được để trống!") && validation.checkPass(pass, "tbMatKhau", "Pass chưa đúng định dạng") ;

    //Kiem tra Lương Cơ bản
    isValid &= validation.checkEmpty(luongCB, "tbLuongCB", "Lương không được để trống!") && validation.checkinteger(luongCB, "tbLuongCB", "Lương không đúng định dạng") && validation.checkluong(luongCB, "tbLuongCB", "Lương Không Đúng Quy Định");
    //Kiem tra Giờ làm 

    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Giờ làm không được để trống!") && validation.checkinteger(gioLam, "tbGiolam", "Giờ làm không đúng định dạng") && validation.checkgio(gioLam, "tbGiolam", "Giờ làm vượt quá quy định");
    // kiem tra ngay lam
    isValid &= validation.checkEmpty(ngay, "tbNgay", "Ngay không được để trống!") && validation.checkday(ngay, "tbNgay", "Ngày làm không đúng định dạng");
    if (isValid) {
        var nv1 = new nhanVien(taikhoan, tenSV, email, pass, ngay, luongCB, chucVu, gioLam);
        dsnv.capNhatNhanVien(nv1);
        // console.log(dsnv.mangsv);
        nv1.tongluong = nv1.tinhTL();
        nv1.xeploai = nv1.tinhH();
    
        setLocalStorage();
    
        hienThiTable(dsnv.mangsv);
    }

    
}
function timKiemxeploai() {
    var tuKhoaTK = getELE("searchName").value;
    // console.log(tuKhoaTK) ;
    var mangKQ = dsnv.timKiem(tuKhoaTK);
    hienThiTable(mangKQ);
}



getELE("searchName").onkeyup = timKiemxeploai;

