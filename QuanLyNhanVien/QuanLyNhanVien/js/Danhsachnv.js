function Danhsachnhanvien() {
    this.mangsv = [];
    // phương thức
    this.themnhanvien = function (sv1) {
        this.mangsv.push(sv1);
    }
    this.timViTri = function (tk) {
        var viTri = -1;
        this.mangsv.map(function (item, index) {
             
            if (item.taikhoan == tk) {
                viTri = index;
            }
        });

        return viTri;
    }
    
    this.xoaNhanVien = function (tk) {

        var viTri = this.timViTri(tk);
        if (viTri >= 0) {
            //tìm được
            //splice(viTri,1): viTri=> vị trí bắt đầu của phần tử cần xóa,; 1=> số lương phần tử cần xóa từ vị trí
            this.mangsv.splice(viTri, 1);
        } else {
            console.log("Không tìm được");
        }
    }
    this.capNhatNhanVien = function(nv1) {
        var viTri = this.timViTri(nv1.taikhoan);
        if (viTri >= 0) {
            this.mangsv[viTri] = nv1;
        } else {
            console.log("Không tìm được");
        }
    }
  this.timKiem = function(tuKhoaTK){
        var mangKQ = [];
    
        var lowerTK = tuKhoaTK.trim().toLowerCase();
        this.mangsv.map(function(item,index){
         
            var tenThuong = item.xeploai.trim().toLowerCase();
            var kq = tenThuong.indexOf(lowerTK);
            if(kq >=0){
                mangKQ.push(item);
            }
        });
      
    
        return mangKQ;
    }
  

}

