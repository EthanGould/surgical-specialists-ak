$(function() {

    /* SET PARAMETERS */
    var changeImgTime = 5000;
    var transitionSpeed = 300;

    var simpleSlideshow = $('.js-slider'),
        listItems = simpleSlideshow.children('li'),
        listLen = listItems.length,
        i = 0,

        changeList = function() {

            listItems.eq(i).fadeOut(transitionSpeed, function() {
                i += 1;
                if (i === listLen) {
                    i = 0;
                }
                listItems.eq(i).fadeIn(transitionSpeed);
            });

        };

    listItems.not(':first').hide();
    setInterval(changeList, changeImgTime);

});
