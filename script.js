


let submenu = $('.submenu'); 

$('.menu-button').on('click', function(event){

    submenu.toggleClass('show-submenu');

});


$(".up-button").on('click',function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    
  });


let navbar=$('nav');

navbar.on('click','a', function(event){
    let item = $(this);
    event.preventDefault();
    console.log(item.attr('href'));
    let sectionId = item.attr('href');
    let section = $(`${sectionId}`);
    console.log(section.position().top);
    $("html, body").animate({ scrollTop: section.position().top }, "slow");
});

