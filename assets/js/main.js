/*-------------HEADER-SHADOW--------------*/ 
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 100) {
        header.classList.add('scroll-header');
     } else {
        header.classList.remove('scroll-header');
     }
}
window.addEventListener('scroll', scrollHeader);

/*-------------SCROLL-REVEAL--------------*/ 
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})
sr.reveal(`.wrapper h2, .wrapper h1, .wrapper h3,
           .grid-item`,{
    origin: 'top',
    interval: 100,
})

/*-------------GALLERY-GRID--------------*/ 
$(window).on("load", function () {
	var masonryGrid = $(".grid__lockd");
		masonryGrid.imagesLoaded(function () {
			masonryGrid.masonry({
			itemSelector: ".grid-item",
			percentPosition: true
		});
	});
});


$(document).ready(function () {
/*-------------ACTIVE-CATEGORIES--------------*/ 
    let $btns = $('button');

    $btns.click(function (e) {
        $('button').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');
        $('.grid__lockd').isotope({
            filter: selector
        });
        return false;
    })

    $('#btn1').trigger('click');

/*-------------POPUPS--------------*/
    $('.grid-link').magnificPopup({
        type: 'image',
        gallery: { enabled: false }
    });
    $('.chernobyl').magnificPopup({
        items: [
            {
                src: $('<img src="assets/img/behance.jpg" class="behance-img">'),
                type: 'inline'
            }]
    });
	$('.blowup').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
    $('.3dm').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
    $('.rt').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
    $('.pirate').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });
	$('.film').magnificPopup({
		items: [
		  {
			src: $('<div class="video__content">' + 
            '<video controls autoplay id="video-file">' +
			'<source src="assets/img/caligari.mp4" type="video/mp4">' +
			'</video></div>'),
			type: 'inline'
		  }]
	});
/*
	$('.grid-link-pdf').magnificPopup({
        type: 'ajax'
    });
    $('.grid-link-pdf1').magnificPopup({
        items: [
            {
                src: $('<div class="pdf-content">' +
                '<iframe src="assets/img/behance.pdf#toolbar=0" class="pdf-iframe"></iframe>' +
                '<div class="pdf-titles"><h2 class="pdf-title">' +
                'ChernobyLive Web Project ' +
                '<a href=""><i class="im im-external-link button__link"></i></a>' +
                '</h2>' +
                '<h4 class="pdf-subtitle">Tools used: ' +
                'Photoshop, Illustrator, Figma, HTML, CSS, JavaScript, Node.js, MongoDB, Express.js, WebRTC</h4>' +
                '</div></div>'),
                type: 'inline'
            }]
    });*/
});
