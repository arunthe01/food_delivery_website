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


        function displaycart(){
            document.getElementById('cart').style.display="block";
        }

        function wrongbutton(){
            document.getElementById('cart').style.display="none";
            

        }

        


        function childiv(title, src, price){
            const mainnode = document.createElement("div");
            mainnode.className="cartitem";
            const node = document.createElement("p");
            const pr = document.createElement("p");
            node.className="pcart";
            const img = document.createElement("img");
            img.src=src;
            img.className="imgcart";
            const button = document.createElement('p');
            button.className="buttoncart";
            button.onclick = function(){removeitem(this)};  
            var text = document.createTextNode("x");
            button.appendChild(text);
            const textnode = document.createTextNode(title);
            pr.appendChild(document.createTextNode(price));
            node.appendChild(textnode);
            mainnode.appendChild(node);
            mainnode.appendChild(img);
            mainnode.appendChild(pr);
            mainnode.appendChild(button);
            document.getElementById("cart").appendChild(mainnode);
        }



        function removeitem(e){
            e.parentElement.remove();
        }









