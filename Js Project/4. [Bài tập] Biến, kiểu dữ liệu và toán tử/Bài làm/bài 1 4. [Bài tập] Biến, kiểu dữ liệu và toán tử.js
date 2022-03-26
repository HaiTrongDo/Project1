

let inputvatly;
let inputhoahoc;
let inputsinhhoc;

inputvatly = prompt("Nhập điểm số môn Vật Lý");
inputhoahoc = prompt("Nhập điểm số môn Hóa Học");
inputsinhhoc = prompt("Nhập điểm số môn Sinh học");

    let vatLyscore = parseInt(inputvatly);
    let hocHocScore = parseInt(inputhoahoc);
    let sinhHocScore = parseInt(inputhoahoc);

    let totalScore = vatLyscore + hocHocScore + sinhHocScore;
    let AverageScore = totalScore/3;
    document.write("Điểm số trung bình ba môn là" + AverageScore)
