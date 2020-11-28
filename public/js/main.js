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
        $('.twitterBox').html('');
        twttr.widgets.createTimeline(
            {
              sourceType: "profile",
              screenName: data.ta_url_name
            },
            document.getElementById('mainTwitterBox')
          );
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