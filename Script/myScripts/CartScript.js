var merch = [
    { picAdd: "../Images/ProductPictures/Bag_1.jpg", price: 60 },
    { picAdd: "../Images/ProductPictures/Dress_1.jpg", price: 200 },
    { picAdd: "../Images/ProductPictures/Jewerly_1.jpg", price: 100 },
    { picAdd: "../Images/ProductPictures/Jewerly_2.jpg", price: 15 },
    { picAdd: "../Images/ProductPictures/Jewerly_3.jpg", price: 50 },
    { picAdd: "../Images/ProductPictures/Shoes_1.jpg", price: 300 },
    { picAdd: "../Images/ProductPictures/Shoes_2.jpg", price: 150 },
    { picAdd: "../Images/ProductPictures/Shoes_3.jpg", price: 400 },
    { picAdd: "../Images/ProductPictures/Tshirt_1.jpg", price: 35 }
];

var selectedMerch = [];
//--------------------------------------------------------------------------------------
$(function () {
    function createPicItem(num) {
        $("<div></div>")
            .addClass("merchPic")
            .append($("<img/>")
            .attr("src", merch[num].picAdd)
         ).appendTo("#merchCatalog");
    }//End of function CreatePicItem
    //-------------------------------------------------------------------------------

    function createPriceItem(num) {
        $("<div></div>")
           .addClass("merchPrice")
           .html(merch[num].price + " $")
           .appendTo("#merchCatalog");
    }//End of function createPriceItem
    //--------------------------------------------------------------------------------
    function getIndex(address) {
        var t = 0;
        for (t = 0; t < merch.length; t++) {
            if (merch[t].picAdd == address) {
                return t;
            }//End of if
        }
    }//End of function getIndex
    //--------------------------------------------------------------------------------
    function merchIsSelected(num) {
        var l = 0;
        var existanceFlag = false;

        for (l = 0; l < selectedMerch.length; l++) {
            if (selectedMerch[l].id == num) {
                selectedMerch[l].qty++;
                existanceFlag = true;
            }//End of if              
        }//End of for

        if (!existanceFlag) {
            selectedMerch.push({ id: num, qty: 1 });
        }//End of if
    }//End of function merchIsSelected
    //--------------------------------------------------------------------------------
    function getMerchPic(key) {
        var f;
        for (f = 0; f < merch.length; f++) {
            if (key == f) {
                return merch[f].picAdd;
            }//End of if
        }//End of for
    }//End of function getMerchPic
    //--------------------------------------------------------------------------------
    function getMerchPrice(key) {
        var f;
        for (f = 0; f < merch.length; f++) {
            if (key == f) {
                return merch[f].price;
            }//End of if
        }//End of for
    }//End Of Function getMerchPrice
    //--------------------------------------------------------------------------------
    function calLinePrice(key) {
        return parseInt(getMerchPrice(selectedMerch[key].id)) * parseInt(selectedMerch[key].qty);
    }//End of function calLinePrice
    //--------------------------------------------------------------------
    function calTotalPrice() {
        var g;
        var sum = 0;

        for (g = 0; g < selectedMerch.length; g++) {
            sum = sum + getMerchPrice(selectedMerch[g].id)*selectedMerch[g].qty;
        }//End of for
        return sum;
    }//End of function calTotalPrice
    //--------------------------------------------------------------------
    function createLastRow() {
        lastRow = $("<tr></tr>");

        $("<td></td>").html("Total").appendTo(lastRow);
        $("<td></td>").html(calTotalPrice()).appendTo(lastRow);

        exitBtn = $("<div></div>").attr("id", "exitCart").html("EXIT");
        $("<td></td>").append(exitBtn).appendTo(lastRow);

        $("#purchaseTable").append(lastRow);

    }//End of function createLastRow
    //--------------------------------------------------------------------
    function createCartList() {
        var w;

        for (w = 0; w < selectedMerch.length; w++) {
            var row = $("<tr></tr>");

            $("<td></td>")
                .append($("<img></img>").attr("src", getMerchPic(selectedMerch[w].id))).appendTo(row);

            $("<td></td>")
                .html(getMerchPrice(selectedMerch[w].id)).appendTo(row);

            $("<td></td>")
                .html(selectedMerch[w].qty).appendTo(row);

            $("<td></td>")
                .html(calLinePrice(w)).appendTo(row);

            $("#purchaseTable").append(row);
        }//End of for
        createLastRow();
    }//End of function createCartList
//----------------------------------------------------------------------------
    //CartHover
    $("#shoppingCart").mouseover(function () {
        $(this).css({
            backgroundColor: "#e2e2e2"
        });
    });

    $("#shoppingCart").mouseout(function () {
        $(this).css({
            backgroundColor: "white"
        });
    });
    //----------------------------------------------------------
    //Generate merchCatalog
    var i = 0;
    var j = 0;
    var k = 0;

    for (i = 0; i < merch.length; i += 3) {
        for (j = 0; j < 3; j++) {
            createPicItem(j + i);
        }//End of for2
        for (k = 0; k < 3; k++) {
            createPriceItem(k + i);
        }//End of for3

    }//End of for1
    //----------------------------------------------------------------------------
    //merchPicHover
    $("#merchCatalog > div.merchPic").mouseover(function () {
        $(this).next().next().next().css({
            color: "#00aeff",
            borderBottom: "8px solid #00aeff"
        });
    });

    $("#merchCatalog > div.merchPic").mouseout(function () {
        $(this).next().next().next().css({
            color: "#272424",
            borderBottom: "8px solid #272424"
        });
    });
    //--------------------------------------------------------------------------
    //merchPic click 
    $("#merchCatalog div.merchPic").click(function () {
        merchIsSelected(getIndex($(this).children('img').attr("src")));

        notDiv = $("<div></div>");
        $(notDiv)
            .attr("id", "notification")
            .html("Item added to shoppingCart successfully")
            .appendTo("#main");
        $(notDiv)
            .fadeIn()
            .delay(2000)
            .fadeOut(function () {
                $(this).remove();
            });
    });
    //----------------------------------------------------------------------------------
    //CartClick
    $("#shoppingCart").click(function () {
        createCartList();
        $("#cartList").fadeIn();
    });
    //------------------------------------------------------------
    //exitCart Click
    $("#purchaseTable:last-child:last-child").click(function () {
        $("#cartList").fadeOut();
    });
});