console.log(document.getElementById("allu"));


        function OrderNow() {

            var t = document.getElementById("foods");
           
            if( document.getElementById("foods").value == "na"  ||document.getElementById("name").value == "" || document.getElementById("email").value == "" || document.getElementById("contact").value == "" || document.getElementById("adress").value == "")
                alert("fill all the fields");

            else{
               
                alert(" Your "+t.value+" Order Placed");
            }
        }


        function Clear(){

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("contact").value = "";
            document.getElementById("adress").value = "";
            document.getElementById("foods").value="na";
        }





