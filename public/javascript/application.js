var repositories = [
  "https://api.github.com/repos/tinderforcats/tinder_integration_api/milestones?access_token=",
  "https://api.github.com/repos/tinderforcats/mobile_api/milestones?access_token=",
  "https://api.github.com/repos/tinderforcats/client/milestones?access_token=",
  "https://api.github.com/repos/tinderforcats/REST_api/milestones?access_token="
]

var milehash = {};

var render()

$(function () {
  var github_token = $('body').data('github-token');
  var load = setInterval(
    function(){
      for (url in repositories) {
        $.get( url + github_token, function( data ) {
            for (var i in data) {
              milehash[data[i].id] = {
                title: data[i].title,
                percentage: 100 * (data[i].open_issues / (data[i].open_issues + data[i].closed_issues))
              };
            }
          console.log(milehash);
        });
      }
      // rendering function
    }, 5000) 
});