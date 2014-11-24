GitGONG
=============

Brought to you by Team GitGong: Jan Lintag, Casey Sampson, Ashley Theiss
Built during the November 2014 cohort at Lighthouse Labs, Vancouver BC

## Getting Started

1. `bundle install`
2. Create 'config/env.rb' and copy/paste in:
    `ENV['github_token'] = '###'`
3. Visit Github.com and generate your Personal Access Token here: https://github.com/settings/applications
4. Copy and paste your Token and replace ### in the ENV. Save your file.
5. Open a terminal and run:
    `shotgun -p 3000 -o 0.0.0.0`
6. Visit `http://localhost:3000/` in your browser and enjoy!