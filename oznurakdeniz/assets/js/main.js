$(function() {

    $('.openmenu-btn').click(function() {

        var openmenu = $('.openmenu');

        if(openmenu.css('display') == 'none') {
        	 $(this).find('i').removeClass('fa fa-bars').addClass('fa fa-times');
        }
        else{
        	$(this).find('i').removeClass('fa fa-times').addClass('fa fa-bars');
        }

        openmenu.slideToggle();


    });

});