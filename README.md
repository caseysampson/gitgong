GitGONG
=============

GitGONG is a Lighthouse Labs midterm project where the students were given (perhaps less than) five days to make an app using the Sinatra Framework. It (theoretically) allows one to track multiple milestones (three at the moment) of multiple (four at the moment) Github repositories via a dashboard with dynamic progress bars. As soon as a milestone is complete, a gong rings through the app.

Information is gleaned from the Github API via JQuery AJAX requests. The majority of the technical knowledge was learned from scratch during this time period.

Brought to you by Team GitGong: Jan Lintag, Casey Sampson, Ashley Theiss
Built during the November 2014 cohort at Lighthouse Labs, Vancouver BC.


## Getting Started

1. `bundle install`
2. Create 'config/env.rb' and copy/paste in:
    `ENV['github_token'] = '###'`
3. Visit Github.com and generate your Personal Access Token here: https://github.com/settings/applications
4. Copy and paste your Token and replace ### in the ENV. Save your file.
5. Open a terminal and run:
    `shotgun -p 3000 -o 0.0.0.0`
6. Visit `http://localhost:3000/` in your browser and enjoy!
