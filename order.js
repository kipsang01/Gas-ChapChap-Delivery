
$(document).ready(function(){
    $(".button1").click(function(){
        $(".forminput1").show();
        $(".showcase").css("opacity", "0.1");
        $(".logoimages").html("<img src='images/afri gas logo.png' alt=''>");
    });
    $(".buttoncancel").click(function(){
        $(".forminput1").hide();
        $(".showcase").css("opacity", "1");
    });
    $(".button2").click(function(){
        $(".forminput1").show();
        $(".showcase").css("opacity", "0.1");
        $(".logoimages").html("<img src='./images/k-gas logo.jpeg' alt=''>");
    });
    $(".button3").click(function(){
        $(".forminput1").show();
        $(".showcase").css("opacity", "0.1");
        $(".logoimages").html("<img src='./images/Total-logo-DB13C96CDD-seeklogo.com.png' alt=''>");
    });
    $(".button4").click(function(){
        $(".forminput1").show();
        $(".showcase").css("opacity", "0.1");
        $(".logoimages").html("<img src='./images/oilibya-logo-2FFDB6E5E2-seeklogo.com.png' alt='' >");
    });
    $(".print").click(function(){
        // $(".receipt").hide();
         alert("We have received your order of gas")
        $(".showcase").css("opacity", "1");
    });
    $(".printcancel").click(function(){
        $(".receipt").hide();
        //  alert("Choose another gas")
        $(".showcase").css("opacity", "1");
    });
    $(".formafrigas").submit(function(event){
        event.preventDefault()
        let name = $("#name-input").val()
        let phonenumber = $("#number-input").val()
        let location = $("#location-input").val()
        let numberofgas = parseInt($("#amount-input").val()) 
        let size = $("input[name='size']:checked").val()
        let total = 0
        if  (size == "6KG"){
            total = (1200 *numberofgas)+ 200
            $(".spantotal").text(total)
            $(".buttonsubmit").click(function(){
                $(".forminput1").hide();
                $(".forminput1").css("opacity", "1");
                $(".Rname").text(name)
                $(".Rtel").text(phonenumber)
                // $(".Rbrand").text(name)
                $(".Rsize").text(size)
                $(".Rlocation").text(location)
                $(".Rprice").text(1200)
                $(".Rtotal").text(total)
                $(".receipt").show();
                
            });
        } else if (size == "13KG"){
            total = ((2200 *numberofgas)+ 200)
            $(".spantotal").text(total)
            $(".buttonsubmit").click(function(){
                $(".forminput1").hide();
                $(".forminput1").css("opacity", "1");
                $(".Rname").text(name)
                $(".Rtel").text(phonenumber)
                // $(".Rbrand").text(name)
                $(".Rsize").text(size)
                $(".Rlocation").text(location)
                $(".Rprice").text(2200)
                $(".Rtotal").text(total)
                $(".receipt").show();
                
            });
        }
        else if (size == "26KG"){
            total = ((3400 *numberofgas)+ 200)
            $(".spantotal").text(total)
            $(".buttonsubmit").click(function(){
                $(".forminput1").hide();
                $(".forminput1").css("opacity", "1");
                $(".Rname").text(name)
                $(".Rtel").text(phonenumber)
                // $(".Rbrand").text(name)
                $(".Rsize").text(size)
                $(".Rlocation").text(location)
                $(".Rprice").text(3400)
                $(".Rtotal").text(total)
                $(".receipt").show();
                
            });
        }else{
            alert("Input size")
        }
     })

});

const $btnPrint = document.querySelector("#print");
$btnPrint.addEventListener("click", () => {
    window.print();
});