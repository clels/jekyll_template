desc 'Clean Site'
task :clean do
  sh 'rm -rf _site/'
  puts 'Site Folder Cleaned'
end

desc 'Update Repo'
task :update do
  sh 'git pull origin master'
  puts 'pulled from master'
end

desc 'Build Site'
task :build do
  sh 'jekyll build'
  puts 'Site Built'
end

desc 'Test Cron'
task :assets do
  sh 'jammit -o assets -c _assets.yml'
  puts 'assets dir created'
end