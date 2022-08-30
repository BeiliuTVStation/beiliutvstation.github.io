import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import PromotionalVideo from './PromotionalVideo';
import IndexComment from "./IndexComment";

const features = [
  {
    title: <>创新</>,
    imageUrl: 'img/algorithms.png',
    description: (
      <>
        无论是国际格局之变，还是新一轮科技革命和产业变革，都对媒体创新发展提出了新的要求。创新作为本电视台的工作理念是本电视台最重要的工作使命以及工作方针。
      </>
    ),
  },
  {
    title: <>求真</>,
    imageUrl: 'img/bigdata.png',
    description: (
      <>
        新闻宣传必须真实客观,这是每一个新闻工作者所共知的常识。可是如今虚假浮夸、失实 失真的新闻报道在各种新闻媒体屡屡出现,这不能不引起我们深切的反思,同时为找回新闻宣传 求真务实的本性付出努力，本电视台力求一个真实的新闻节目，在电视上报导的每个内容都求真。
      </>
    ),
  },
  {
    title: <>务实</>,
    imageUrl: 'img/security.png',
    description: (
      <>
        新闻讲党性是无产阶级新闻事业的优良传统。新闻工作坚持求真务实，就是坚持新闻党性原则的具体体现。求真务实，这个“真”，核心在于事物的规律性。“求真务实”强调的是尊重客观实际，一切从实际出发，讲求实效，遵循客观规律。在新形势下，新闻工作坚持求真务实，就是要下大力气，花大功夫去研究和追寻新时期建设中国特色社会主义事业和全面建设小康社会的规律，只有这样，才能确保舆论导向正确。
      </>
    ),
  },
  {
    title: <>传播</>,
    imageUrl: 'img/software.png',
    description: (
      <>
        坚持正确新闻志向，引导人才健康成长。充分发挥党和政府联系新闻界的桥梁纽带作用，充分发挥新时代“记者之家”作用，引导广大新闻工作者，做党的政策主张的传播者、时代风云的记录者、社会进步的推动者、公平正义的守望者，以更加积极的质态迎接新世纪。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      {/* <h3>{title}</h3> */}
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`欢迎来到 ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <img
            className={classnames(styles.featureImage, 'margin-vert--md')}
            src={useBaseUrl('img/logo.png')}
          />
          <h1 className={styles.hero_title}>{siteConfig.title}</h1>
          <p className={styles.hero_subtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div
          className={classnames(styles.announcement, styles.announcementDark)}>
          <div className={styles.announcementInner}>
            了解更多，敬请关注{' '}
            <Link to={useBaseUrl('/docs')}>
              🔗
            </Link>
            .
          </div>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        
      </main>
      <PromotionalVideo />
      <IndexComment />
    </Layout>
    
  );
}

export default Home;


