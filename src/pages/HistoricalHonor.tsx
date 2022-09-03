import React from 'react';
import Layout from '@theme/Layout';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import 'antd/dist/antd.css';

const columns = [
  {
    title: '作品名称',
    dataIndex: 'zuopinnames',
    key: 'zuopinnames',
  },
  {
    title: '作者',
    dataIndex: 'names',
    key: 'names',
    render: names => (
      <>
        {names.map(tag => {
          return (
            <Tag color={'blue'} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  
  {
    title: '奖项、级别',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: '获奖时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '颁奖单位',
    key: 'danwei',
    dataIndex: 'danwei',
  },
];

const data = [
  {
    key: '1',
    zuopinnames:'《北流田心村脱贫崛起之路》',
    names: ['黎三华','李国伟'],
    time: '2020年8月21日',
    tags: '2019年度广西广播电视和网络视听优秀作品二等奖（县级社教专题）',
    danwei:'自治区广播电视局、广西广电与网络视听协会',
  },
  {
    key: '2',
    zuopinnames:'《北流田心村脱贫崛起之路》',
    names: ['白东灵','杨海霞'],
    time: '2020年8月21日',
    tags: '2019年度广西广播电视和网络视听优秀作品二等奖（县级广播主持）',
    danwei:'自治区广播电视局、广西广电与网络视听协会',
  },
  {
    key: '3',
    zuopinnames:'《基层是践行“四力”的最好战场》',
    names: ['自治区广播电视局'],
    time: '2020年8月21日',
    tags: '2019年度广西广播电视和网络视听优秀作品三等奖（广播电视论文）',
    danwei:'自治区广播电视局、广西广电与网络视听协会',
  },
  {
    key: '4',
    zuopinnames:'《乡村振兴“河村模式”：从输血到造血可持续发展》',
    names: ['黄昭良','陈军','黄洪波'],
    time: '2021年6月10日',
    tags: '2019-2020年度中国广播电视大奖电视新闻节目长消息类三等奖',
    danwei:'中广联合会城市电视台电视新闻委员会',
  },
  {
    key: '5',
    zuopinnames:'《北流有个“美丽乡村”设计院》',
    names: ['杨光登','苏新荔'],
    time: '2021年8月30日',
    tags: '2020年度广西广播电视和网络视听优秀作品二等奖（县级广播长消息）',
    danwei:'自治区广播电视局、广西广电与网络视听协会',
  },
  {
    key: '6',
    zuopinnames:'《读写不息30载 55岁修车师傅黄正旺夺得大业文学新人奖》',
    names: ['黎三华','林欣洁'],
    time: '2021年8月30日',
    tags: '2020年度广西广播电视和网络视听优秀作品二等奖（县级广播长消息）',
    danwei:'自治区广播电视局、广西广电与网络视听协会',
  },
  {
    key: '7',
    zuopinnames:'《北流：爱心帮助，失散25年川籍男子圆了回家梦》',
    names: ['陈军'],
    time: '2021年8月30日',
    tags: '2020年度广西广播电视和网络视听优秀作品二等奖（县级电视长消息）',
    danwei:'自治区广播电视局、广西广电与网络视听协会',
  },
  {
    key: '8',
    zuopinnames:'《百香果熟了》',
    names: ['蒙昭亮','刘仿','顾彬','林钢','钟义勇','李壮丽','钟丹','黄沈黎'],
    time: '2021年8月30日',
    tags: '2020年度广西广播电视和网络视听优秀作品二等奖（网络电影、微电影）',
    danwei:'自治区广播电视局、广西广电与网络视听协会',
  },
  {
    key: '9',
    zuopinnames:'《带你看看我的家乡--廉政清风满竹林》',
    names: ['钟义勇','钟丹','苏新荔','梁议尹'],
    time: '2021年8月',
    tags: '喜迎党的二十大·我们的新时代”第四届“三月三”网络短视频大赛优秀作品奖',
    danwei:'自治区广播电视局',
  },
  {
    key: '10',
    zuopinnames:'《北流有个“美丽乡村”设计院》',
    names: ['杨光登','苏新荔'],
    time: '2021年10月',
    tags: '2020年度广西新闻奖三等奖（广播消息）',
    danwei:'广西新闻工作者协会',
  },
  {
    key: '11',
    zuopinnames:'',
    names: ['北流广播电视台'],
    time: '2021年7月',
    tags: '先进基层党组织',
    danwei:'北流市直机关工委',
  },
  

];



function HistoricalHonor() {
  return (
    <Layout title="荣誉">
      <main>
        <div className="container">
          <div className="text--center margin-vert--lg">
            <h1>近些年获得的荣誉</h1>
            <p>很多，还在整理当中，下面展示是近年国家级、省部级获得荣誉的一部分......</p>
          </div>
          <Table
            dataSource={data} columns={columns} pagination={false}
          />
          </div>
      </main>
    </Layout>
  );
}

export default HistoricalHonor;
