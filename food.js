         function OrderNow() {

            var t = document.getElementById("foods");

            if( document.getElementById("foods").value == "na"  ||document.getElementById("name").value == "" || document.getElementById("email").value == "" || document.getElementById("contact").value == "" || document.getElementById("adress").value == "")
                alert("fill all the fields");

            else{
                alert(" Your "+t.value+" Order Placed");
            }

            
            
        }

        var i = 0;


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

        // function wrongbutton(){
        //     document.getElementById('cart').style.display="none";
            
        // }

        

        


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
            button.onclick = function(){removeitem(button, pr)};  
            var text = document.createTextNode("x");
            button.appendChild(text);
            pr.className = "pricestyle";
            const textnode = document.createTextNode(title);
            pr.appendChild(document.createTextNode(price));
            node.appendChild(textnode);
            mainnode.appendChild(node);
            mainnode.appendChild(img);
            mainnode.appendChild(pr);
            mainnode.appendChild(button);
            document.getElementById("cart").appendChild(mainnode);
          
            // i+=  parseInt(pr.value, 10)
            
        }

        function removeitem(e,pr){
            
            e.parentElement.remove();
            console.log(i);
        }

        function gotocart(){
            displaycart();
        }


        // function addval(e){
        //     i+=e.value;
        //     console.log(i);
        // }


         function myBlurFunction(state) {
            
            var containerElement = document.getElementById('main_container');
            var overlayEle = document.getElementById('colay');
        
            if (state) {
                overlayEle.style.display = 'block';
                containerElement.setAttribute('class', 'blur');
            } else {
                overlayEle.style.display = 'none';
                containerElement.setAttribute('class', null);
            }
         }


        function gotoorders(){

            var containerElement = document.getElementById('main_container');
            var overlayEle = document.getElementById('colay');
            overlayEle.style.display = 'none';
                containerElement.setAttribute('class', null);

        }


        









