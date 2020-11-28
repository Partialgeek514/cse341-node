function getProfileData(id, callback) {
    $.ajax('/getProfileData?id=' + id)
    .done(function(data) {
        console.log(data);
        callback(data)
    });
}

function embedProfile(data) {
    if (typeof variable !== 'undefined') {
        $('.twitterBox').html('<p class="errorMessage">Error getting tweets</p>')
    }
    else {
        $('.twitterBox').html('<a class="twitter-timeline" href="https://twitter.com/' + data.ta_url_name +'">Tweets by ' + data.ta_screen_name + '</a>' +
        '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
    }
}

$('.navItem').click(function () {
    const id = $(this).attr('id');
    getProfileData(id, embedProfile);
    $('.navItem').css('background-color', 'rgb(51, 125, 236)')
    $(this).css('background-color', 'rgb(125, 173, 245)');
});
const firstNavId = $('.navItem').attr('id');
console.log(firstNavId);
getProfileData(firstNavId, embedProfile);
$('.navItem').first().css('background-color', 'rgb(125, 173, 245)');