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
    names: ['黎三华'],
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
];

const columns1 = [
  {
    title: '获奖名称',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: '颁奖时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '颁奖单位',
    key: 'danwei',
    dataIndex: 'danwei',
  },
];

const data1 = [
  {
    key: '1',
    name: '北流市2018年度新闻报道工作先进单位',
    time: '2019年4月18日',
    danwei:'中共北流市委宣传部',
  },
  {
    key: '2',
    name: '全区广播电视工作记集体二等功',
    time: '2019年9月',
    danwei:'自治区广播电视局、自治区人力资源和社会保障局',
  },
  {
    key: '3',
    name: '2019年度县级播出机构播出秩序先进单位',
    time: '2019年12月',
    danwei:'自治区广播电视局',
  },
  {
    key: '4',
    name: '北流市2019年度征兵工作先进单位',
    time: '2020年7月',
    danwei:'北流市人民政府征兵办公室',
  },
  {
    key: '5',
    name: '北流市2019年度新闻报道工作先进单位',
    time: '2020年9月15日',
    danwei:'中共北流市委宣传部',
  },
  {
    key: '6',
    name: '北流市2019年度征兵工作先进单位',
    time: '2021年1月',
    danwei:'北流市人民政府征兵办公室',
  },
  {
    key: '7',
    name: '广西广播电视台2020年度通讯报道先进集体',
    time: '2021年3月2日',
    danwei:'广西广播电视台',
  },
  {
    key: '8',
    name: '玉林广播电视台2020年度通讯报道先进集体',
    time: '2021年3月',
    danwei:'玉林广播电视台',
  },
  {
    key: '9',
    name: '先进基层党组织',
    time: '2021年7月',
    danwei:'北流市直机关工委',
  },
  {
    key: '10',
    name: '创建全国文明城市先进集体（2020年）',
    time: '2021年8月',
    danwei:'北流市委、市政府',
  },
  {
    key: '11',
    name: '《我爱我的家乡 如诗如画新农村》自治区党委宣传部等组织的庆祝中国共产党成立100周年全区新媒体大赛二等奖',
    time: '2021年8月',
    danwei:'自治区党委宣传部等单位',
  },
  {
    key: '12',
    name: '北流市2020年度新闻报道工作先进单位',
    time: '2021年9月',
    danwei:'中共北流市委宣传部',
  },
  {
    key: '13',
    name: '2021年度全区县级广播电视播出机构播出秩序管理工作表现突出单位',
    time: '2021年12月',
    danwei:'自治区广播电视局',
  },
  {
    key: '14',
    name: '星级党组织（四星级）',
    time: '2022年2月',
    danwei:'中共玉林市委组织部',
  },
  {
    key: '15',
    name: '感谢信',
    time: '2022年5月',
    danwei:'广西广播电视台',
  },
  {
    key: '16',
    name: '玉林广播电视台2021年度优秀集体',
    time: '2022年6日',
    danwei:'玉林广播电视台',
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
            <h2>个人荣誉</h2>
          </div>
          <Table
            dataSource={data} columns={columns} pagination={false}
          />
          <div className="text--center margin-vert--lg">
            <h2>集体荣誉</h2>
          </div>
          <Table
            dataSource={data1} columns={columns1} pagination={false}
          />
          </div>
      </main>
    </Layout>
  );
}

export default HistoricalHonor;
