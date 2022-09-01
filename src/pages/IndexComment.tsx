import React from "react";
import Section from "../components/Section";
import  Comment  from "../components/Comment";

function IndexComment() {
    return (
        <Section
            title="心灵之声🥰"
            description="该栏是群众对于北流市电视台的评价，欢迎发言😎"
            bannerStyle={{ width: "80%" }}>
            <Comment></Comment>
        </Section>
        
    );
}

export default IndexComment;