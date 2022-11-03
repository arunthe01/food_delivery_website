


        function alertify() {

            var t = document.getElementById("foods");
            if(document.getElementById("name").value == "" || document.getElementById("email").value == "" || document.getElementById("contact").value == "" || document.getElementById("adress").value == "")
                alert("fill all the fields");

            else
                alert(" Your "+t.value+" Order Placed");


        }


