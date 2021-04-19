var homeContent = `<section class="promo-tours">
<div class="promo israel">
    <div class="header"><i>ISRAEL</i></div>
    <div class="price"><i>FROM $1000</i></div>
    <div class="learn-more">Learn More</div>
</div>
<div class="promo usa">
    <div class="header"><i>U.S.A.</i></div>
    <div class="price"><i>FROM $1500</i></div>
    <div class="learn-more">Learn More</div>
</div>
<div class="promo austrailia">
    <div class="header"><i>AUSTRAILIA</i></div>
    <div class="price"><i>FROM $1800</i></div>
    <div class="learn-more">Learn More</div>
</div>
</section>
<section class="booking-form">
<div class="h1">Booking form</div>
<div class="col1">
    <div class="name">name...</div>
    <div class="country">country...</div>
    <div class="break"></div>
    <div class="check-in">Check-In</div>
    <div class="check-out">Check-Out</div>
</div>
<div class="col2">
    <div class="email">email...</div>
    <div class="hotel">hotel...</div>
</div>
<div class="break"></div>
<div class="people">
    <div class="adult">Adult</div>
    <div class="children">Children</div>
    <div class="rooms">Rooms</div>
</div>

<div class="message">message</div>
</section>`;                //home in homeContent matches the nav home id
var aboutContent =`<div class="about">
<div class="image3"></div>
<div class="text3">
    <h1>About us...</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt mi non sem dapibus, convallis lobortis erat consectetur. Praesent finibus nisi eu bibendum tristique. Nullam magna nulla, feugiat vitae iaculis id, bibendum nec ligula. Nullam id enim mattis, convallis orci quis, hendrerit velit. Suspendisse tortor tortor, cursus sed libero sed.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt mi non sem dapibus, convallis lobortis erat consectetur. Praesent finibus nisi eu bibendum tristique. Nullam magna nulla, feugiat vitae iaculis id, bibendum nec ligula. Nullam id enim mattis, convallis orci quis, hendrerit velit. Suspendisse tortor tortor, cursus sed libero sed.</p>
</div>
<div class="image4"></div>
<div class="text4"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt mi non sem dapibus, convallis lobortis erat consectetur. Praesent finibus nisi eu bibendum tristique. Nullam magna nulla, feugiat vitae iaculis id, bibendum nec ligula. Nullam id enim mattis, convallis orci quis, hendrerit velit. Suspendisse tortor tortor, cursus sed libero sed.</p></div>
<div class="image5"></div>
<div class="text6"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt mi non sem dapibus, convallis lobortis erat consectetur. Praesent finibus nisi eu bibendum tristique. Nullam magna nulla, feugiat vitae iaculis id, bibendum nec ligula. Nullam id enim mattis, convallis orci quis, hendrerit velit. Suspendisse tortor tortor, cursus sed libero sed.</p></div>
<div class="text7"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt mi non sem dapibus, convallis lobortis erat consectetur. Praesent finibus nisi eu bibendum tristique. Nullam magna nulla, feugiat vitae iaculis id, bibendum nec ligula. Nullam id enim mattis, convallis orci quis, hendrerit velit. Suspendisse tortor tortor, cursus sed libero sed.</p></div>
</div>`;
var productsContent =`<div class="locations">
<div class="tours"><h1>Tours</h1></div>
<div class="column1">
<div class="image6"></div>
<div class="text8"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt mi non sem dapibus, convallis lobortis erat consectetur. Praesent finibus nisi eu bibendum tristique. Nullam magna nulla, feugiat vitae iaculis id, bibendum nec ligula. Nullam id enim mattis, convallis orci quis, hendrerit velit. Suspendisse tortor tortor, cursus sed libero sed.</p></div>
<div class="image7"></div>
<div class="text9"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt mi non sem dapibus, convallis lobortis erat consectetur. Praesent finibus nisi eu bibendum tristique. Nullam magna nulla, feugiat vitae iaculis id, bibendum nec ligula. Nullam id enim mattis, convallis orci quis, hendrerit velit. Suspendisse tortor tortor, cursus sed libero sed.</p></div>
</div>
<div class="column2">
<div class="image8"></div>
<div class="text10"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt mi non sem dapibus, convallis lobortis erat consectetur. Praesent finibus nisi eu bibendum tristique. Nullam magna nulla, feugiat vitae iaculis id, bibendum nec ligula. Nullam id enim mattis, convallis orci quis, hendrerit velit. Suspendisse tortor tortor, cursus sed libero sed.</p></div>
<div class="text11"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt mi non sem dapibus, convallis lobortis erat consectetur. Praesent finibus nisi eu bibendum tristique. Nullam magna nulla, feugiat vitae iaculis id, bibendum nec ligula. Nullam id enim mattis, convallis orci quis, hendrerit velit. Suspendisse tortor tortor, cursus sed libero sed.</p></div>
<div class="image9"></div>
<div class="text12"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt mi non sem dapibus, convallis lobortis erat consectetur. Praesent finibus nisi eu bibendum tristique. Nullam magna nulla, feugiat vitae iaculis id, bibendum nec ligula. Nullam id enim mattis, convallis orci quis, hendrerit velit. Suspendisse tortor tortor, cursus sed libero sed.</p></div>
</div>
</div>`;
var contactContent =`<div class="contact">
<h1>CONTACT</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt mi non sem dapibus, convallis lobortis erat consectetur. Praesent finibus nisi eu bibendum tristique. Nullam magna nulla, feugiat vitae iaculis id, bibendum nec ligula. Nullam id enim mattis, convallis orci quis, hendrerit velit. Suspendisse tortor tortor, cursus sed libero sed.</p>
</div>`;

function getPageContent(pageId) {
$("#app").html(eval(pageId));
} //this _private function is getting the page Id but export makes it public

function getName() {
console.log("John");
}

export {getName, getPageContent};
