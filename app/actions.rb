# Homepage (Root path)

helpers do
  def take_repos
    github = Github.new user: 'caseysampson', repo: 'music_wall'
    github2 = Github.new user: 'jandlint', repo: 'git_gong'
    @repos = []
    @repos << github.issues.milestones.all 
    @repos << github2.issues.milestones.all 
  end

  # def extract_details
  #   @repos.each do |repo|
  #     repo.each do |milestone|
  #       milestone.title
  #     end
  #   end
  # end
  
end

get '/' do
  take_repos
  erb :index
end


