import React from 'react';
import Layout from '@theme/Layout';


import members from '../data/members.data';
import TeamMemberProfileCard from '../components/TeamMemberProfileCard';

const members1  = [
  {
    name: '蒙昭亮',
    avatar: 'https://s2.loli.net/2022/09/03/TSUFHCu83NdYAqx.jpg',
    description: '领导',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '刘仿',
    avatar: 'https://s2.loli.net/2022/09/03/ZXj423Ysphm91xl.jpg',
    description: '领导',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '李邱凌',
    avatar: 'https://s2.loli.net/2022/09/03/ATjhZI6yuwsHPzb.jpg',
    description: '领导',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '顾琳',
    avatar: 'https://s2.loli.net/2022/09/03/FtrWVUXJq2AxIgH.jpg',
    description: '领导',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '卢振波',
    avatar: 'https://s2.loli.net/2022/09/01/kQWc8PnbouNxhCd.jpg',
    description: '领导',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
];

const members2  = [
  {
    name: '谭梦晓',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/2/1.jpg?raw=true',
    description: '主任',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '谢顶林',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/2/2.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '陈兵',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/2/3.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '曾庆芳',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/2/4.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '邓湄琳',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/2/5.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '顾春香',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/2/6.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '覃海妃',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/2/7.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '黄亦霞',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/2/8.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '刘新',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/2/9.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '庞球',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/2/10.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
];

const members3  = [
  {
    name: '麦流源',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/1.jpg?raw=true',
    description: '主任',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '杨光登',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/2.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '陈军',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/3.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '黄昭良',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/4.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '温海泉',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/5.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '黄洪波',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/6.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '彭伟成',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/7.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '黎阳',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/8.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '向天品',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/9.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '吴昊明',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/10.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '陈雨君',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/11.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '陈容坤',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/12.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '张楚',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/13.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '余莹',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/14.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '吴蔓阳',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/15.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '刘建美',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/16.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '刘贞',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/17.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '涂瀚丹',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/18.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '林海波',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/3/19.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
];


const members4  = [
  {
    name: '黎三华',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/4/1.jpg?raw=true',
    description: '主任',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '林欣洁',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/4/2.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '李凯萍',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/4/3.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '徐小玲',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/4/4.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
];

const members5  = [
  {
    name: '钟义勇',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/5/1.jpg?raw=true',
    description: '主任',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '钟丹',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/5/2.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '罗胜',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/5/3.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '李赛',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/5/4.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '李梅',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/5/5.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '梁议尹',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/5/6.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '梁小凤',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/5/7.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
];

const members6  = [
  {
    name: '许志',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/6/1.jpg?raw=true',
    description: '主任',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '黄沈黎',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/6/2.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '曹斐然',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/6/3.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '李阶庆',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/6/4.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '顾鸿',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/6/5.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '刘丹虹',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/6/6.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '陈飞燕',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/6/7.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '邱文容',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/6/8.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '邹兵',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/6/9.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
];


const members7  = [
  {
    name: '苏翠凤',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/7/1.jpg?raw=true',
    description: '主任',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '李壮丽',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/7/2.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '童媛燕',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/7/3.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
];

const members8  = [
  {
    name: '顾戈',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/8/1.jpg?raw=true',
    description: '主任',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '吴广林',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/8/2.jpg?raw=true',
    description: '播出主任',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '蒙达健',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/8/3.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '梁爽',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/8/4.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '黎锋',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/8/5.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '黄剑',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/8/6.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '傅琳惠',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/8/7.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '邹广娟',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/8/8.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '赵玉珍',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/8/9.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
];

const members9  = [
  {
    name: '苏新荔',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/9/1.jpg?raw=true',
    description: '主任',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '杨海霞',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/9/2.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '刘海龙',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/9/3.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '白东灵',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/9/4.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '封韵',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/9/5.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '苏菲',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/9/6.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
];



const members10  = [
  {
    name: '曾元文',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/10/1.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '顾振英',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/10/2.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '林佐',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/10/3.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '刘君',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/10/4.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '李一军',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/10/5.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '钟雪梅',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/10/6.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '黄梅桂',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/10/7.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '沙显理',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/10/8.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '晏业祺',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/10/9.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '刘治秀',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/10/10.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
  {
    name: '黎俊烈',
    avatar: 'https://github.com/redhat123456/pohots/blob/master/beiliuTVstation/members/10/11.jpg?raw=true',
    description: '成员',
    githubUrl: 'https://github.com/redhat123456',
    blogUrl: 'https://redhat123456.github.io/router_index/'
  },
];

function MemberList({ array }) {
  return (
    <div className="row">
      {array.map(member => {
        return (
        <TeamMemberProfileCard
          key={member.githubUrl+member.name}
          className={'col col--3 margin-bottom--md'}
          name={member.name}
          avatar={member.avatar}
          children={member.description}
          githubUrl={member.githubUrl}
          blogUrl={member.blogUrl}
        />);
      })}
    </div>
  );
}

function MembersWall() {
  return (
    <Layout title="电视台成员">
      <main>
        <div className="text--center margin-vert--lg">
          <h1>北流广播电视台成员</h1>
          <h2>中心领导</h2>
          <p>中心领导负责北流广播电视台的大事，所有的重大决定都将在这里讨论产生，是北流广播电视台的高层</p>
        <div className="container">
            <MemberList array={members1} />
          </div>
        </div>

        <div className="text--center margin-vert--lg">
          <h2>办公室</h2>
          <div className="container">
          <p>负责处理行政方面的日常事务工作，督促主任会议各项决定的落实，综合协调各部门工作；负责中心的计划总结、实施方案、请示报告、规章制度、评比表彰等综合性材料；负责文件档案、印章管理、综合治理、信访接办、报刊订阅、发行(赠阅)、印刷和对外联络、接待等工作；负责中心办公物资采购、基本建设(修缮)、物业资产管理、仓库管理、车辆管理等后勤保障工作；完成中心交办的其他工作。</p>
          </div>
        <div className="container">
          <MemberList array={members2}/>
          </div>
        </div>


        <div className="text--center margin-vert--lg">
          <h2>新闻部</h2>
          <div className="container">
          <p>负责时政类、综合类新闻；负责全市重要活动、重大事件的采集与报道；负责社论、评论员文章等工作；完成中心交办的其他工作。负责社会、法治、民生新闻的采集与报道；负责社会突发事件、第一现场的信息采集与报道，负责电视社教自办节目的采制、编辑等工作；完成中心交办的其他工作。负责经济新闻的采集与报道；负责调查节目、深度报道、新闻述评等的采集制作；完成中心交办的其他工作。</p>
          </div>
        <div className="container">
          <MemberList array={members3}/>
          </div>
        </div>

        <div className="text--center margin-vert--lg">
          <h2>总编室</h2>
          <div className="container">
          <p>负责制定实施各项宣传报道计划及方案；负责重大报道活动的策划、监督、检查和总结；负责审阅、审看、审听广播、电视、报纸等节目稿件；负责编排广播电视频率频道的节目播出单；负责各新闻平台节目稿片的评审工作，统筹新闻创新创优、对外宣传、通联等工作，做好采编人员业务研讨、培训和绩效考评等工作；完成中心交办的其他工作。</p>
          </div>
        <div className="container">
          <MemberList array={members4}/>
          </div>
        </div>

        <div className="text--center margin-vert--lg">
          <h2>新媒体部</h2>
          <div className="container">
          <p>负责中心自办新闻网站、微信公众号、微博、APP、数字报等新媒体矩阵的编辑、制作、发布等工作；负责新媒体H5、AR等技术产品的研究、策划和创新；参与智慧政务、智慧城市建设，强化为民服务；开展舆情监测、民意收集、数据分析、建言咨政等工作，服务公共决策；完成中心交办的其他工作。</p>
          </div>
        <div className="container">
          <MemberList array={members5}/>
          </div>
        </div>

        <div className="text--center margin-vert--lg">
          <h2>运营服务部</h2>
          <div className="container">
          <p>负责融媒体指挥中心平台的协同生产、运维和管理等；负责中心非编网运维和管理；负责全媒体演播室系统、媒资库的日常运行和维护等工作；负责中心所有图片、视音频和新媒体产品的媒资汇总登记、分类保存、系统上载和数据分析等工作；完成中心交办的其他工作。</p>
          </div>
        <div className="container">
          <MemberList array={members6}/>
          </div>
        </div>


        
        <div className="text--center margin-vert--lg">
        <h2>专题活动部</h2>
        <p>专题活动部是北流广播电视台活动策划及社团活动监督机制的重要部门，旨在促进北流广播电视台与各单位的沟通监督各社团的工作和促进单位活动的发展。</p>
        <div className="container">
          <MemberList array={members7}/>
          </div>
        </div>
        
        

        <div className="text--center margin-vert--lg">
        <div className="container">
        <h2>技术保障部 · 安全播出部 </h2>
          <p> 技术保障部：负责中央、各省、北流市广播电视节目传输链路的日常维护和技术保障工作；负责广播电视前端机房、播出机房、发射塔房（含广播电视发射塔）、广播录直播室的技术维护和保障工作；负责广播、电视、新媒体的采编、摄录、直播设备的管理、维保和分发工作；负责相关系统技术方案的制定和论证，配合事业管理部完成相关项目的实施；负责演播大厅和直播车的日常运维和管理，以及各类重大活动的技术保障等工作；完成中心交办的其他工作。</p>
            <p>安全播出部：负责完整传输中央、各省、北流市广播电视节目；负责广播电视自办节目和游动字幕的播出工作；负责无线电视、调频广播、地面数字电视单频网、多频网的发射工作；负责所有节目的监听、监看和防插播等安播工作；做好预警信息的接收和处理工作；完成重大活动的技术保障工作；完成中心交办的其他工作。</p>
            </div>
        <div className="container">
          <MemberList array={members8}/>
          </div>
        </div>

        
          
        <div className="text--center margin-vert--lg">
        <h2>节目部</h2>
        <p>负责广播自办节目的采、编、播和上发交流工作；负责相关广播节目播出编排、节目包装、资料保存、平台上传和安全播出等工作；负责广播公益广告制作和活动组织策划等工作；完成中心交办的其他工作。</p>
        <div className="container">
          <MemberList array={members9}/>
          </div>
        </div>

          <div className="text--center margin-vert--lg">
        <h2>退休人员</h2>
        <p>退休人员曾是北流广播电视台的建设功臣，我们从未忘记过他们</p>
        <div className="container">
          <MemberList array={members10}/>
          </div>
        </div>
        
      </main>
    </Layout>
  );
}

export default MembersWall;

