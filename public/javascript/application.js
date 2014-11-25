var repositories = [
  // Our 4 demo milestones on the same repo:
  "https://api.github.com/repos/tinderforcats/tinder_integration_api/milestones?access_token=",
  "https://api.github.com/repos/tinderforcats/mobile_api/milestones?access_token=",
  "https://api.github.com/repos/tinderforcats/client/milestones?access_token=",
  "https://api.github.com/repos/tinderforcats/REST_api/milestones?access_token="
]

var gongstatus = {};

var renderMilestoneView = function(milestone_id, title, percentage) {
  var repo = $('.repository[data-milestone-id='+milestone_id+']');
  repo.find('.bar').css({
    width: percentage + "%"
  });
  repo.find('.well-description').html(title);
  if (percentage == 100 && gongstatus[milestone_id]["has_gonged?"] == false) {
    var aud = document.createElement("iframe");
    aud.setAttribute('src', "/gong.wav"); // replace with actual file path
    aud.setAttribute('width', '1px');
    aud.setAttribute('height', '1px');
    aud.setAttribute('scrolling', 'no');
    aud.style.border = "0px";
    document.body.appendChild(aud);
    gongstatus[milestone_id]["has_gonged?"] = true;
  }
};

var requestsInProgress = 0;

var getUpdates = function(){
  console.log('getUpdates()');
  var github_token = $('body').data('github-token');
  var load = setTimeout(function() {
    console.log("I'm updating!");
    for (url in repositories) {
      
      requestsInProgress++;
      console.log('sending request...');
      var url = repositories[url] + github_token + '&_rndm=' + new Date().getTime();
      console.log(url);
      $.get(url, function(data) {
        console.log('request complete.');
        for (var i in data) {
          var percentage = 100 * (data[i].closed_issues / (data[i].open_issues + data[i].closed_issues));
          // debugger;
          if (gongstatus[data[i].id] === undefined) {
            gongstatus[data[i].id] = {};
            gongstatus[data[i].id]["has_gonged?"] = false;
          }
          renderMilestoneView(data[i].id, data[i].title, percentage);
        };

        requestsInProgress--;
        console.log(requestsInProgress+ ' requests remaining...');

        if(requestsInProgress == 0) {
          getUpdates();
        } 
      });
    }
  }, 3000); // Adjustable update timing in milliseconds
};


$(function () {
  getUpdates();
});