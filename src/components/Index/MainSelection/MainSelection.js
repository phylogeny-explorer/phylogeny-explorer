import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./MainSelectionStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
  Button,
} from "../../../styles/GlobalComponents";
import { mainselection } from "../../../constants/mainselectionconstants";

const MainSelection = () => (
  <Section nopadding id="mainselection">
    <SectionDivider />
    <SectionTitle main>
      Explore the people, project code and more ...
    </SectionTitle>
    <GridContainer>
      {mainselection.map(
        ({ id, image, title, description, tags, source, visit, frontend, backend, pm, framework, support }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              {/* <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList> */}
              {/* <TitleContent>Quick Links</TitleContent> */}
            </div>
            <br />
            <UtilityList>
              <ExternalLinks href={visit}>Quick Start</ExternalLinks>
              <ExternalLinks href={source}>Documentation</ExternalLinks>
              <ExternalLinks href={support}>Support</ExternalLinks>
              {/* <ExternalLinks href={frontend}>Front End</ExternalLinks>
              <ExternalLinks href={backend}>Back End</ExternalLinks>
              <ExternalLinks href={framework}>Framework</ExternalLinks>
              <ExternalLinks href={pm}>Project Management</ExternalLinks> */}
            </UtilityList>
            
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default MainSelection;


// const MainSelection = () => (
//   <Section nopadding id="mainselection">
//     <SectionDivider />
//     <SectionTitle main>
//       Explore the people, project code and more ...
//     </SectionTitle>
//     <GridContainer>
//       {mainselection.map(
//         ({ id, image, title, description, tags, source, visit, frontend, backend, pm, framework, support }) => (
//           <BlogCard key={id}>
//             <Img src={image} />
//             <TitleContent>
//               <HeaderThree title>{title}</HeaderThree>
//               <Hr />
//             </TitleContent>
//             <CardInfo>{description}</CardInfo>
//             <div>
//               <TagList>
//                 {tags.map((tag, i) => (
//                   <Tag key={i}>{tag}</Tag>
//                 ))}
//               </TagList>
//               <TitleContent>Quick Links</TitleContent>
//             </div>
            
//             <UtilityList>
//               <ExternalLinks href={visit}>Quick Start</ExternalLinks>
//               <ExternalLinks href={source}>Documentation</ExternalLinks>
//               <ExternalLinks href={support}>Support</ExternalLinks>
//               {/* <ExternalLinks href={frontend}>Front End</ExternalLinks>
//               <ExternalLinks href={backend}>Back End</ExternalLinks>
//               <ExternalLinks href={framework}>Framework</ExternalLinks>
//               <ExternalLinks href={pm}>Project Management</ExternalLinks> */}
//             </UtilityList>
            
//           </BlogCard>
//         )
//       )}
//     </GridContainer>
//   </Section>
// );