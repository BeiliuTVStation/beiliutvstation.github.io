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
    name: '黎三哥',
    avatar: 'https://s2.loli.net/2022/09/01/3BcuKJXQENVoFmS.jpg',
    description: '通过一些事,看清一些人',
    githubUrl: 'https://github.com/jaslli',
    blogUrl: 'https://yww52.com/',
  },
  {
    name: '杨远航',
    avatar: 'https://s2.loli.net/2022/09/01/gRlAYrUcjGky2NV.jpg',
    description: '失败是因为坚持的不够',
    githubUrl: 'https://github.com/yeshan333',
    blogUrl: 'https://shansan.top',
  },
  {
    name: '杨光登',
    avatar: 'https://s2.loli.net/2022/09/01/szIaWlmyVHTLSM5.jpg',
    description: '路遥知马力，日久见人心',
    githubUrl: 'https://github.com/MrGo123',
    blogUrl: 'https://zy68.top/'
  },
  {
    name: '谭梦晓',
    avatar: 'https://s2.loli.net/2022/09/01/V1PX8EUHmJ3nciC.jpg',
    description: '我走得很慢，但是我从来不会后退',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '黄昭良',
    avatar: 'https://s2.loli.net/2022/09/01/kQWc8PnbouNxhCd.jpg',
    description: '人生坎坎坷坷，跌跌撞撞那是在所难免',
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
