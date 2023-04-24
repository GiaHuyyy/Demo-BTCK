$(document).ready(function() { //  Chạy hàm khi trang web đã tải xong hoàn toàn.
    function kiemTraMa() {
        var regexMa = /(^BN-\d{5})/ // Định dạng BN-YYYYY
        var maBN = $("#txtMa").val(); // Lấy giá trị của tag input.
        if(regexMa.test(maBN) == false) {
            alert("Mã phải có định dạng BN-YYYYY");
        }        
    }
    $("#txtMa").blur(kiemTraMa); //Khi mất focus vào phần tử (tag input), hàm sẽ được chạy.

    function kiemTraPass() {
        var pass = $("#txtPass").val();
        if(pass.length < 6) {
            alert("Mật khẩu phải từ 6 kí tự trở lên");
        }
    }
    $("#txtPass").blur(kiemTraPass);

    function kiemTraDate() {
        var ngayKham = document.getElementById("txtNgayKham").valueAsDate; // Ngày được chọn
        var ngayHienTai = new Date(); // Ngày hiện tại
        if(ngayKham < ngayHienTai) {
            alert("Ngày khám phải sau ngày hiện tại");
        }
    }
    $("#txtNgayKham").blur(kiemTraDate);

    
})