var firstrepo = {};

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

// setInterval