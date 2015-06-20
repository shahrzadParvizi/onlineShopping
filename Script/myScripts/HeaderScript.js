var isTxtBox_Expanded = false;
$(function () {
    //menuHover
    $("#nav>ul>li>div").mouseover(function () {
        $(this).css({
            borderTop: "5px solid #00aeff",
            paddingTop:"5px"
        });
    });

    $("#nav>ul>li>div").mouseout(function () {
        $(this).css({
            borderTop: "none",
            paddingTop:"10px"
        });
    });

    //CategoryBar Hover
    $("#categoryBar>ul>li>div").mouseover(function () {
        $(this).css({
            backgroundColor: "#008bcc"
        });
    });

    $("#categoryBar>ul>li>div").mouseout(function () {
        $(this).css({
            backgroundColor: "#00aeff"
        });
    });

    //SearchIcon Hover
    $("#searchIcon").mouseover(function () {
        $(this).css({
            backgroundColor: "#305998"
        });
    });

    $("#searchIcon").mouseout(function () {
        $(this).css({
            backgroundColor: "#008bcc"
         });
    });

    //SearchIcon Click
    $("#searchIcon").click(function () {
        if (!isTxtBox_Expanded) {
            $("#searchTxtBox").css({
                display: "block"
            });

            isTxtBox_Expanded = true;
        }//End of if
        else {
            $("#searchTxtBox").css({
                display: "none"
            });

            isTxtBox_Expanded = false;
        }//End of else
    });
});
