Fix issue "There isn’t anything to compare. main and master are entirely different commit histories."
git checkout upstreambranch
git branch master upstreambranch -f    
git checkout master  
git push origin master -f