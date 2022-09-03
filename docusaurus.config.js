module.exports = {
  // plugins: [require.resolve("docusaurus-plugin-less")],
  title: '北流广播电视台',
  tagline: '创新、求真、务实、传播',
  url: 'https://beiliutvstation.github.io/',
  baseUrl: '/',
  favicon: 'img/logo.png',
  organizationName: 'beiliutvstation', // Usually your GitHub org/user name.
  projectName: 'beiliutvstation.github.io', // Usually your repo name.
  deploymentBranch: 'master',
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: '北流广播电视台',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.png',
      },
      items: [{
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        {
          to: 'blog',
          label: '新闻',
          position: 'left'
        },
        {
          to: 'members',
          label: '电视台成员',
          position: 'left'
        },
		{
		  to: 'HistoricalHonor',
		  label: '历史荣誉',
		  position: 'left'
		},
        {
          href: 'https://github.com/BeiliuTVStation',
          className: 'header-github-link',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '社区',
          items: [
            {
              label: '站点问题反馈',
              href: 'https://github.com/BeiliuTVStation/beiliutvstation.github.io/issues',
            },
            /*
            {
              html: `
              <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
              </a>
              `,
            }
            */
          ],
        },
        {
          title: '更多',
          items: [{
              label: '大美北流APP',
              to: 'https://raw.githubusercontent.com/BeiliuTVStation/application/main/com.xinhuamm.d3021.apk',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/BeiliuTVStation',
            },
          ],
        },
        {
          title: '常用链接',
          items: [{
              label: '广西壮族自治区人民政府',
              href: 'http://www.gxzf.gov.cn/',
            },
            {
              label: '广西玉林市人民政府',
              href: 'http://www.yulin.gov.cn/#',
            },
            {
              label: '广西玉林北流市人民政府官网',
              href: 'http://www.beiliu.gov.cn/',
            },
          ],
        },
        {
          title: '友情链接',
          items: [
            {
              label: '共产党员网',
              href: 'https://www.12371.cn/',
            },
	          {
              label: '陶瓷小镇',
              href: 'http://www.gxtcxz.com/index.html',
            },
            {
              label: '玉林市广播电视网',
              href: 'http://www.yltvb.com/fccommon/home/index?plate_id=391',
            },
          ],
        },
        {
          title: '社区合作伙伴',
          items: [
            {
              label: '广东海利集团有限集团',
              href: 'http://www.hailea.com/page115',
            },
          ],
        },
      ],
      /*
      logo: {
        alt: 'Seven Innovation Base Logo',
        src: 'img/logo.png',
        href: '',
      },
      */
      copyright: `Copyright © 2003-${new Date().getFullYear()} BeiLiuTVstation. `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/BeiliuTVStation/beiliutvstation.github.io/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/BeiliuTVStation/beiliutvstation.github.io/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
