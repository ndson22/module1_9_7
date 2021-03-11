function changeImg(id){
    let img = document.getElementById(id);
    let boAnh = parseInt(img.alt);
    boAnh < 3 ? boAnh++ : boAnh = 1;
    // console.log(boAnh);
    img.alt = boAnh;
    img.src = "img/" + boAnh + "_" + id + ".jpg";
    function checkWin(){
        let img1 = document.getElementById("1");
        let img2 = document.getElementById("2");
        let img3 = document.getElementById("3");
        let img4 = document.getElementById("4");
        let img5 = document.getElementById("5");

        if (img1.alt==img2.alt && img1.alt==img3.alt && img1.alt==img4.alt && img1.alt == img5.alt){
            img1.style.border = "3px solid red";
            img2.style.border = "3px solid red";
            img3.style.border = "3px solid red";
            img4.style.border = "3px solid red";
            img5.style.border = "3px solid red";
        }

}
    checkWin()
}