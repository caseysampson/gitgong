var repositories = [
  "https://api.github.com/repos/tinderforcats/tinder_integration_api/milestones?access_token=",
  "https://api.github.com/repos/tinderforcats/mobile_api/milestones?access_token=",
  "https://api.github.com/repos/tinderforcats/client/milestones?access_token=",
  "https://api.github.com/repos/tinderforcats/REST_api/milestones?access_token="
]

var mileobject = {};

var renderMilestoneView = function(milestone_id, title, percentage) {
  console.log(milestone_id, title, percentage);
  var repo = $('.repository[data-milestone-id='+milestone_id+']');
  repo.find('.bar').css({
    width: percentage + "%"
  });
  repo.find('.well-description').html(title);
  if (milestoneid.percentage == 100) {
  var aud = document.createElement("iframe");
  aud.setAttribute('src', "http://www.audioblocks.com/stock-audio/chinese-gong-sound-effect.html?searchid=3257497"); // replace with actual file path
  aud.setAttribute('width', '1px');
  aud.setAttribute('height', '1px');
  aud.setAttribute('scrolling', 'no');
  aud.style.border = "0px";
  document.body.appendChild(aud);}
  else {}
};
$(function () {
  var github_token = $('body').data('github-token');
  var load = setInterval(
    function(){
      for (url in repositories) {
        $.get( repositories[url] + github_token, function( data ) {
            for (var i in data) {
              var percentage = 100 * (data[i].closed_issues / (data[i].open_issues + data[i].closed_issues));
              renderMilestoneView(data[i].id, data[i].title, percentage);
              });
            }
        });
      }
    }, 5000) 
});