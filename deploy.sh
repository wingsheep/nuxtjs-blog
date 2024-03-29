#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
rm -rf ./dist
mkdir -p dist
rsync -a .nuxt ./dist/
cp -r static dist/
cp package.json dist/
cp nuxt.config.js dist/
cd ./dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git config --global user.email "taoxiang"
git config --global user.name "thawsoar@gmail.com"

git init
git add *
git add .nuxt -f

git commit -m 'Travis CI Auto Builder Deploy'
git push -f -q https://${GH_TOKEN}@${GH_REF} master:deploy


cd -