# Homepage (Root path)

helpers do
  def take_repos
    github = Github.new basic_auth: ENV['github_auth']
    @repos = []
    @repos << github.issues.milestones.all(user: 'caseysampson', repo: 'music_wall')
    @repos << github.issues.milestones.all(user: 'caseysampson', repo: 'contact_list_ar')
    @repos << github.issues.milestones.all(user: 'caseysampson', repo: 'two_player_math_game')
    @repos << github.issues.milestones.all(user: 'jandlint', repo: 'git_gong')
  end
  
end

get '/' do
  take_repos
  erb :index
end
