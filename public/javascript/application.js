
var firstrepo = {};

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

$(function () {
  var github_token = $('body').data('github-token');
  $.get( "https://api.github.com/repos/tinderforcats/tinder_integration_api/milestones?access_token="+github_token, function( data ) {
    var take = Iterator(data);
      for (var milestone in take)
      firstrepo["title"] = milestone["title"];
      firstrepo["closed_issues"] = milestone["closed_issues"];
      firstrepo["open_issues"] = milestone["open_issues"];
    var check = Iterator(firstrepo)
      for (var title in check)
      console.log("title");
    // var percentage = data.closed_issues / data.open_issues;
  })
  //$.cookie('update_log', moment().format());
});