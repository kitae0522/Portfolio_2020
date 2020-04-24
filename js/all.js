$(function () {
    //로딩 이미지 제거
    function removeLoading() {
        $(".loading").fadeOut(800);
        //$(".loading").css({'z-index':'-100'});
    }

    $(window).on('load', function () {
        setTimeout(function () {
            removeLoading();
        }, 100);
    });
    
    console.log(".d88888b   .88888.  888888ba   .88888.\n") +
    console.log("88.    '' d8'   `8b 88    `8b d8'   `88\n") +
    console.log("`Y88888b. 88     88 88     88 88\n") +
    console.log("      `8b 88     88 88     88 88   YP88\n") +
    console.log("d8'   .8P Y8.   .8P 88     88 Y8.   .88\n") +
    console.log(" Y88888P   `8888P'  dP     dP  `88888'\n\n") +
    console.log("oooooooooooooooooooooooooooooooooooooooo\n\n") +
    console.log("오우 이스터에그를 발견하셨군요! 만나서 반갑습니다 :-D")
});