function nhanVien(tk, ten, email, pass1, ngaylam, luong, chuc, gio) {
    // Thuộc Tính
  
    this.taikhoan = tk;
    this.tenSV = ten;
    this.email = email;
    this.pass = pass1;
    this.ngay = ngaylam;
    this.luongcb = luong;
    this.chucvu = chuc;
    this.giolam = gio;
    this.tongluong = 0;
    this.xeploai = 0;



    // Phương Thức
    this.tinhTL = function () {
        switch (this.chucvu) {
            case "Sếp": {
                this.tongluong = this.luongcb * 3;
                break;
            }

            case "Trưởngphòng": {
                this.tongluong = this.luongcb * 2;
                break;
            }

            case "NhânViên": {
                this.tongluong = this.luongcb ;
                break;
            }

            default: {
                this.tongluong = -1;
            }

        } return this.tongluong;

    }
    this.tinhH = function () {
        if (this.giolam >= 0 && this.giolam < 160) {
            // console.log("Trung Bình");
            this.xeploai = "Trung Bình";
        } else if (this.giolam >= 160 && this.giolam < 176) {
            // console.log("khá");
            this.xeploai = "khá";

        } else if (this.giolam >= 176 && this.giolam < 192) {
            // console.log("Giỏi");
            this.xeploai = "Giỏi";

        } else if (this.giolam > 192) {
            // console.log("Xuất Sắc")
            this.xeploai = "Xuất Sắc";


        } else {
            console.log("Nhập lại")
        }
        return this.xeploai;
    }

}