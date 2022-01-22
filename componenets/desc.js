function mainpage(){



    return `<div id="descmain">
    <div id="divcorousel"></div>
    <div id="maindesc"><img id="maindescimg" ></div>
    <div id="proddesc">
        <h3 id="descriptio"></h3>
        <p id="SKU">SKU:<span>10348759</span></p>
        <h4 id="clr">Color</h4>
        <hr>
        <div id="indicator"><div id="clrindicator"></div></div>
        <p id="selectsize">Select Size</p>
        <hr>
        <div id="sizediv"><button class="sizebtn">34/XS</button>
        <button class="sizebtn">36/S</button>
        <button class="sizebtn">38/M</button>
        <button class="sizebtn">40/L</button>
        <button class="sizebtn">42/XL</button>
        <button class="sizebtn">44/XXL</button></div>
        <hr>
        <div style="margin-bottom: 0; margin-top: 17px;"><span >M.R.P. </span><span class="rate">₹</span><span id="pricerate" class="rate"></span></div>
        <p style="margin-top: -1px;">(Incl. of all taxes)</p>
        <div id="divs3">
            <div id="nodiv"><button id="minus" class="itemno">-</button><textarea name="" id="no" cols="30" rows="15"></textarea><button id="plus" class="itemno">+</button></div>
            <div> <button id="addcart">Add To Cart</button></div>
            
            <div style="display:flex"><div><img id="heart" src="https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png" alt=""></div><button id="wish">Add to Wish List</button></div>
        </div>
        <hr>
        <h4 class="chkpin" id="delivery">Check Delivery Service Availability</h4>
        <input id="pininput" type="text" placeholder="Enter pincode">
        <button id="pinchk">Check</button>
        <h4 id="connectstore">Connect To a Store</h4>
        <hr>
        <input class="store" type="text" placeholder="Enter a Pincode or State Name ">
        <button class="store" id="store1">Connect to a Store</button>
        <h4>Details</h4>
        <hr>
        <div id="detailsdiv">
            <li> <span class="detailslist">Shirt </span></li>
            <li> <span class="detailslist">Slim Fit </span></li>
            <li>  <span class="detailslist">Cotton </span></li>
            <li>  <span class="detailslist">Striped </span></li>
            <li>  <span class="detailslist">Chinese Collar </span></li>
            <li>  <span  class="detailslist">Full Sleeves </span></li>
            <li>  <span class="detailslist">Size Worn By Model:32 </span></li>
            <li> <span class="detailslist">Model's Height:5.11" </span></li>
        </div>

        


        

    </div>
</div>`

}

export default mainpage;