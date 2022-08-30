/**
 * 基地成员信息列表
 * name: 昵称
 * avatar：头像链接，也可通过 "github:用户名" 使用 GitHub 头像
 * description：自我描述
 * githubUrl：GitHub 链接，可选
 * blogUrl：博客链接或其他媒体链接，可选
 */
const members: Member[] = [
  {
    name: 'yww',
    avatar: 'github:jaslli',
    description: '表面很菜，其实很强',
    githubUrl: 'https://github.com/jaslli',
    blogUrl: 'https://yww52.com/',
  },
  {
    name: 'yeshan333',
    avatar: 'github:yeshan333',
    description: '玄学爱好者&摸🐟大师，资深混子',
    githubUrl: 'https://github.com/yeshan333',
    blogUrl: 'https://shansan.top',
  },
  {
    name: 'Sustart',
    avatar: 'https://cdn.jsdelivr.net/gh/MrGo123/asset@2020-1-2-1.0/headPortrait/mybloghp.jpg',
    description: '赶紧学习',
    githubUrl: 'https://github.com/MrGo123',
    blogUrl: 'https://zy68.top/'
  },
  {
    name: 'redhat',
    avatar: 'github:redhat123456',
    description: '题不可一日不刷',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
]
.map(it => ({
  ...it,
  avatar: handleAvatar(it.avatar)
}));

function handleAvatar(avatar: string) {
  var match = /^github\:(.+)$/.exec(avatar);
  if (match) return "https://avatars.githubusercontent.com/" + match[1] + "?s=256";
  return avatar;
}

export default members;
