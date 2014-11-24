<<<<<<< HEAD
$(document).ready(function() {

// See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
var aud = document.createElement("iframe");
aud.setAttribute('src', "http://www.audioblocks.com/stock-audio/chinese-gong-sound-effect.html?searchid=3257497"); // replace with actual file path
aud.setAttribute('width', '1px');
aud.setAttribute('height', '1px');
aud.setAttribute('scrolling', 'no');
aud.style.border = "0px";
document.body.appendChild(aud);

});


//alternative gong sound: http://gooong.com/media/gong.wav

$(document).ready(function() {
  
});
=======
$(function () {
  var github_token = $('body').data('github-token');
  $.get( "https://api.github.com/repos/jandlint/git_gong/milestones?access_token="+github_token, function( data ) {
    console.log( "Open Issues: " + data[0]['open_issues']);
    console.log( "Close Issues: " + data[0]['closed_issues']);
    console.log( "Updated Time: " + moment(data[0]['updated_at']).format());
    console.log( moment().format());
  });
});



>>>>>>> 6aff41b9bb9942ff5ef7d8fe353e7f9106080d41
