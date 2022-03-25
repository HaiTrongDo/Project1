

let inputvatly = document.getElementById("inputVatLy");
let inputhoahoc = document.getElementById("inputHoaHoc");
let inputsinhHoc = document.getElementById("inputSinhHoc");
let result = document.getElementById("result")
result.addEventListener("click", myFunction)

    // let vatLyscore = parseInt(inputvatly.value);
    // let hocHocScore = parseInt(inputhoahoc.value);
    // let sinhHocScore = parseInt(inputsinhHoc.value);

function myFunction() {
    let totalScore = inputvatly + inputhoahoc + inputsinhHoc;
    AverageScore = totalScore/3;
    result = parseInt(AverageScore);

    alert ("Điểm trung bình ba môn là! ${result}")
}
