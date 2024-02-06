

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

//list of apps 
var android_apps = [
    { title: '', imageURL: "https://play-lh.googleusercontent.com/lJ0-aURBa-HdF_Uyc-gTFjkLMh2k4MJ6XYNizNh-8nMxDFSA5n-O9t5FWWu7BQ1l6Zw=w240-h480-rw", link: '' },
    { title: 'RCM Health Care Services', imageURL: "", link: '' },
    { title: 'Axiom Staffing Group', imageURL: "https://play-lh.googleusercontent.com/tWh60yvIcUFCSWqOWtgWJ8VIRmWG7-1t30oIEqSemZqrrlpvPFCnypNKxvfIwupUNvk=w240-h480-rw", link: 'https://play.google.com/store/apps/details?id=com.staffup.axiom' }
];

function displayPorfolio(){
    android_apps.forEach(function(item) {
        const container = document.createElement("div");
        container.className = "col-md-4"
        const hyperLink = document.createElement("a")
        hyperLink.href = title.link
        hyperLink.className = "portfolio-card"

        container.appendChild(hyperLink)
        document.getElementById("all_asset").appendChild(container);
    });
}