function xephang(diem){
    if (diem>=9) return "Xuat sac";
    else if (diem>=8) return "Gioi";
    else if (diem>=6.5) return "Kha";
    else if (diem>=5) return "Trung binh";
    else return "Yeu";

}
let diem = parseFloat(prompt());
console.log(xephang(diem)); 

/* do máy em không hỗ trợ prompt nên em chạy trên trình duyệt */
