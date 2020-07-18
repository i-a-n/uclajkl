SITE:
URL: https://uclaart.dev/
github: https://github.com/i-a-n/uclajkl/
IP: digital ocean 64.225.46.135
served by: nginx
path on server: `/var/www/uclajkl`

BACKEND:
URL: https://uclaart.dev/admin
github: Originally:, forked and pulled from:
runs on: http://127.0.0.1:4000
served by:
```
sudo vim /etc/systemd/system/jekyll-admin.service
sudo systemctl start jekyll-admin
```
on restart: needs some sort of rc.0 runlevel to start after server restarts
path on server: code builds from `/var/www/jekyll-admin`
SSL cert: managed by certbot, needs cron job

WORKING FLOW:
- user `jekyll`, from digital ocean server, runs `git pull`
- end user can login to admin, edit site
- this updates files, rebuilds `/_site`
- ??? push back to github ???

OPEN QUESTIONS
- how do we avoid conflicts and push back to github? [deploy branch?]
- should we be gitignoring `_site`?

SEE MORE:
- instructions.md (git ignored)
