import React from "react";
import Section from "../components/Section";
import  Video  from "../components/Video";

function PromotionalVideo() {
    return (
        <Section
            title="宣传&介绍  视频"
            description="北流电视台  ·  新闻开头😎"
            bannerStyle={{ width: "80%" }}>
            <Video></Video>
        </Section>
    );
}

export default PromotionalVideo;
