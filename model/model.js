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
<div class="about-top-section">
    <div class="about-title">
    <h1>ABOUT:</h1></div>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="about-bottom-section">
    <h3>CLIENT QUOTES:</h3>
    <div class="client">
        <div class="client-image client1">
            <div class="client1"></div>
                <!--<img src="images/about-client-01.jpg" alt="Client Image">-->
        </div>
        <div class="client-quote">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            <div class="client-name">- Miranda Brown</div>
        </div>
    </div>
    <div class="client">
        <div class="client-image client2">
            <div class="client2"></div>
                <!--<img src="images/about-client-02.jpg" alt="Client Image">-->
        </div>
        <div class="client-quote">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div class="client-name">- Johnathan Wes</div>
        </div>
    </div>
</div>
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
