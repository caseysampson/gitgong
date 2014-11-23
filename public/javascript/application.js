$(function () {
  var github_token = $('body').data('github-token');
  $.get( "https://api.github.com/repos/jandlint/git_gong/milestones?access_token="+github_token, function( data ) {
    console.log( "Open Issues: " + data[0]['open_issues']);
    console.log( "Close Issues: " + data[0]['closed_issues']);
    console.log( "Updated Time: " + moment(data[0]['updated_at']).format());
    console.log( moment().format());
  });
});



