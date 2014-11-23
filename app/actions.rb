# Homepage (Root path)

helpers do
  def take_repos
    github_repo_1 = Github.new user: 'caseysampson', repo: 'music_wall'
    github_repo_2 = Github.new user: 'caseysampson', repo: 'contact_list_ar'
    github_repo_3 = Github.new user: 'caseysampson', repo: 'two_player_math_game'
    github_repo_4 = Github.new user: 'jandlint', repo: 'git_gong'
    @repos = []
    @repos << github_repo_1.issues.milestones.all 
    @repos << github_repo_2.issues.milestones.all 
    @repos << github_repo_3.issues.milestones.all 
    @repos << github_repo_4.issues.milestones.all 
  end
  
end

get '/' do
  take_repos
  erb :index
end


