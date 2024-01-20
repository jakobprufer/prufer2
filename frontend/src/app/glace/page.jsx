"use client";
import { useState, useEffect } from "react";
import { useTitleBarStore } from "../store/titleBarStore";
import { useNavStore } from "../store/navStore";
import Image from "next/image";
import { RiNotionFill, RiArrowRightUpLine } from "react-icons/ri";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";
import data from "../data/data.json";
import FadeIn from "../components/FadeIn";
import Hero from "../components/Hero";
import { renderTextArray } from "../functional/RenderTextArray";
import { renderTitleParts } from "../functional/RenderTitleParts";

import Cube from "../../../public/blog/cube.webp";
import Competitor from "../../../public/blog/competitor.webp";
import Interviews from "../../../public/blog/interviews2.webp";
import Data from "../../../public/blog/data.webp";
import Icon from "../../../public/blog/icon.webp";
import Invest from "../../../public/blog/finance2.webp";
import Earthrise from "../../../public/blog/earthrise.webp";
import Sticky from "../../../public/blog/sticky.webp";
import Sticky2 from "../../../public/blog/sticky2.webp";
import Roadmap from "../../../public/blog/roadmap.webp";
import GenZ from "../../../public/blog/genz.webp";
import Transcripts from "../../../public/blog/transcripts.webp";
import Profiles from "../../../public/blog/profiles.webp";
import InterviewStats from "../../../public/blog/interviewstats.webp";
import DataVis from "../../../public/blog/datavis.webp";
import Sketches from "../../../public/blog/sketches.webp";
import Balloons from "../../../public/blog/balloons1.webp";
import Drawing1 from "../../../public/blog/drawing1.webp";
import Drawing2 from "../../../public/blog/drawing2.webp";
import Ice from "../../../public/blog/ice.webp";
import WorkshopStats from "../../../public/blog/workshopstats.webp";
import LoFi from "../../../public/blog/lofi.webp";
import Brand from "../../../public/blog/brand.webp";
import AR from "../../../public/blog/ar.webp";
import Final from "../../../public/blog/final.webp";
import Prototype from "../../../public/blog/prototype.webp";
import Colours from "../../../public/blog/colours.webp";
import Vscode from "../../../public/blog/vscode.webp";
import Wire1 from "../../../public/blog/wire1.webp";
import Wire2 from "../../../public/blog/wire2.webp";
import Wire3 from "../../../public/blog/wire3.webp";
import IceVisIt from "../../../public/blog/icevisit.webp";
import Mariele from "../../../public/blog/mariele.webp";
import Impact from "../../../public/blog/impact.webp";
import Marta from "../../../public/blog/marta.webp";
import Hifi1 from "../../../public/blog/hifi1.webp";
import Hifi2 from "../../../public/blog/hifi2.webp";
import DetailIntro from "../components/DetailIntro";

export default function Glace() {
  //select project
  const projecthref = "glace";
  const project = data.portfolio.find(
    (project) => project.href === projecthref
  );

  //loading data from store
  const setBackground = useTitleBarStore((state) => state.setBackground);
  const setShowTitleBar = useTitleBarStore((state) => state.setShowTitleBar);
  const setInside = useNavStore((state) => state.setInside);
  const setActiveCardId = useNavStore((state) => state.setActiveCardId);
  const setLastInside = useNavStore((state) => state.setLastInside);

  //initializing states correctly for detail page and respective project
  useEffect(() => {
    setBackground(project.colour);
    setTimeout(() => {
      setShowTitleBar(true);
    }, 5);
    setInside(true);
    setActiveCardId(project.index);
    setLastInside(project.index);
  }, []);

  //section open states
  const [s1Open, setS1Open] = useState(false);
  const [s2Open, setS2Open] = useState(false);
  const [s3Open, setS3Open] = useState(false);
  const [s4Open, setS4Open] = useState(false);
  const [s5Open, setS5Open] = useState(false);
  const [s6Open, setS6Open] = useState(false);
  const [s7Open, setS7Open] = useState(false);
  const [s8Open, setS8Open] = useState(false);
  const [s9Open, setS9Open] = useState(false);
  const [s10Open, setS10Open] = useState(false);

  return (
    <div className={`page detail ${project.colour} ${project.href}`}>
      <BackButton colour={project.colour} />
      <FadeIn>
        <Hero project={project} inside={true} />
        {/* the dublicate hero above fixes the issue of a missing hero detail page refresh/landing */}
        <div className="detailContent">
          <DetailIntro project={project} />
          {/* <h1>Glace - Jakob's Blog</h1>
          <p className="intro">
            This blog documents the Final Major Project process of my course
            mate Manfredi and me, as we worked together to design a sustainable
            investment app of a new generation that visualises impact in the
            area of arctic ice saved.
          </p>
          <p className="intro">
            For full documentation see our{" "}
            <a
              href="https://www.notion.so/manfredidesign/Glace-7280a178c3a645749f3985dd9541c17a?pvs=4"
              target="_blank"
            >
              <RiNotionFill className="riIcon" />
              Notion
            </a>
          </p>
          <p className="intro mbm">
            For the pitch website see{" "}
            <a href="https://glace.earth">
              <Image
                src={Icon}
                //   style={{
                //     transform: `scale(${70 + scrollY / 30}%) rotate(${0}deg)`,
                //   }}
                alt="Glace icon"
                className="glaceIcon"
              />
              https://glace.earth
            </a>
          </p> */}
          <div className="detailProcess">
            <h2>Process</h2>
            <motion.section
              layout
              className="section1"
              style={{ borderRadius: "24px" }}
            >
              <motion.div
                layout
                className={`sectionHead ${s1Open ? null : "closed"}`}
                onClick={() => setS1Open(!s1Open)}
              >
                <motion.div className="headTitle" layout="position">
                  <div className="heading">Phase 1</div>
                  <h3 className="headHeading">
                    {/* <RiArrowDownSLine className="riIcon" /> */}
                    Topic Selection
                  </h3>
                  <div className="sectionDate">28/07 - 06/08/2023</div>
                </motion.div>
                <motion.div
                  layout="preserve-aspect"
                  className="headImg"
                  style={{ borderRadius: "16px", overflow: "hidden" }}
                >
                  <Image
                    src={Cube}
                    //   style={{
                    //     transform: `scale(${70 + scrollY / 30}%) rotate(${0}deg)`,
                    //   }}
                    alt="A phone made out of ice"
                    className="blogImg"
                  />
                </motion.div>
              </motion.div>
              {s1Open ? (
                <motion.div
                  className="sectionContent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <h4>Team Selection</h4>
                  <p>
                    Manfredi and I decided early on that we would work together
                    because we knew our interests aligned and we functioned well
                    together as a team, bouncing ideas off each other and
                    challenging our individual perspectives. Manfredi brings
                    valuable expertise in UI design, honed through his work on
                    Fundvis, a fintech startup dedicated to digitizing the fund
                    industry, as well as Weply, a sports marketplace app he
                    co-founded.
                  </p>
                  <h4>Topic Selection</h4>
                  <p>
                    Recognizing the opportunity to devote several months to
                    developing a single project, we understood the importance of
                    selecting an impactful topic. In hindsight, the path taken
                    throughout this project straightforward, but like with many
                    briefs throughout this MA the direction was anything but
                    obvious initially.
                  </p>
                  <p>
                    My personal priorities for the project were the following:
                  </p>
                  <ul>
                    <li>
                      The outcome would be useful in a real world application.
                    </li>
                    <li>It could run as a potentially profitable business.</li>
                    <li>
                      The process would showcase our skills in our portfolio.
                    </li>
                    <li>
                      The project would follow principles of sustainability.
                    </li>
                  </ul>
                  <p>
                    We gathered an overview of trends and developments or the
                    2020s decade as an inspiration for topics. Those trends
                    included an increased share of elderly people in the
                    population, a rise of generative AI and Augmented Reality
                    devices as well as the increasingly urgent demand for
                    sustainable alternatives.
                  </p>
                  <p>
                    See the full list in our{" "}
                    <a
                      href="https://www.notion.so/manfredidesign/2020s-Relevant-Trends-7ee8a63d2d5f431bbbf586c360f747f6?pvs=4"
                      target="_blank"
                    >
                      Notion
                    </a>
                  </p>
                  <p>
                    We discussed a number of topics we ended up not pursuing.
                    Those included:
                  </p>
                  <ul>
                    <li>
                      Reworking online comments from the traditional list view
                      into a new network visualisation, enabling more intuitive
                      understanding of comments’ connections, similarities and
                      popularity as well as online opinion in general
                    </li>
                    <li>
                      Creating a service through which people with spare rooms
                      in cities could give creatives a temporary homestay in
                      exchange for their specific skills, applied in
                      collaborative work, or their works of art
                    </li>
                    <li>
                      Designing a system of waste-free takeout packaging that
                      could be returned in collection stations across offices
                      and universities
                    </li>
                  </ul>
                  <h4>What drove our final choice</h4>
                  <p>
                    What caught our attention was the heightened concern for
                    climate change and sustainability within our own generation,
                    Genertation Z. In fact it far surpassed that of previous
                    generations. Having worked on climate change-related topics
                    in previous projects, I noticed a saturation of awareness
                    and educational campaigns, leaving people feeling largely
                    overwhelmed by the issue. So we decided to approach it from
                    a different angle.{" "}
                  </p>
                  <p>
                    Using his background in the fund industry, Manfredi
                    highlighted a growing shift towards sustainability in
                    finance. Sustainability assessment, while still in its
                    infancy, was improving and new providers of reliable data
                    were springing up. Despite the increasing interest among
                    Generation Z in investment opportunities, driven by online
                    brokers and the surge in cryptocurrencies, we noticed a lack
                    of awareness regarding the potential positive impact of
                    investing money. We found ourselves within a generation
                    genuinely committed to making a difference, poised to become
                    the next wave of investors, yet many were unaware of the
                    environmental impact their investment choices could bring.
                  </p>
                </motion.div>
              ) : null}
            </motion.section>

            <motion.section
              layout
              className="section2"
              style={{ borderRadius: "24px" }}
            >
              <motion.div
                layout
                className={`sectionHead ${s2Open ? null : "closed"}`}
                onClick={() => setS2Open(!s2Open)}
              >
                <motion.div className="headTitle" layout="position">
                  <div className="heading">Phase 2</div>
                  <h3 className="headHeading">
                    {/* <RiArrowDownSLine className="riIcon" /> */}
                    Background Research
                  </h3>
                  <div className="sectionDate">06/09 - 22/09/2023</div>
                </motion.div>
                <motion.div
                  layout="preserve-aspect"
                  className="headImg"
                  style={{ borderRadius: "16px", overflow: "hidden" }}
                >
                  <Image
                    src={Earthrise}
                    alt="An organic pattern of white lines in front of dark background"
                    className="blogImg"
                  />
                </motion.div>
              </motion.div>
              {s2Open ? (
                <motion.div
                  className="sectionContent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <div className="blogCaption">
                    <b>Image:</b> A picture generated using the AI tool
                    Midjourney during early project identity development
                  </div>
                  <p>So we arrived at our research question:</p>
                  <div style={{ marginTop: "-32px" }}>
                    <p>
                      <b>
                        How might we employ design to inspire Generation Z to
                        use the power of money for environmental impact?
                      </b>
                    </p>
                  </div>
                  <p>
                    Our expected outcome was a mobile platform that we gave the
                    working title “Gaia”.
                  </p>
                  <Image
                    src={Roadmap}
                    alt="An overview of the project roadmap in Notion"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Image:</b> The intial roadmap outline for the project.
                  </div>
                  <p>
                    From the outset, it became evident to us that existing
                    investment platforms primarily presented data through
                    numbers and graphs. Understanding finance was complicated by
                    an abundance of jargon. Our vision was to redirect the focus
                    towards the impact and a notion of care, employing
                    techniques such as storytelling, vibrant visualization, and
                    gamification. Our intention was to craft a design that
                    resonated with those unfamiliar with finance, offering a
                    seamless entry point through fixed subscription plans or low
                    initial investment amounts.
                  </p>

                  <p>
                    We started approaching the topic through literature and
                    online research to gain a better understanding of the
                    context we were addressing.
                  </p>
                  <Image
                    src={Invest}
                    alt="A blue sculpture in front of high rise buildings"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Image:</b> A picture generated using the AI tool
                    Midjourney during early project identity development
                  </div>
                  <h4>
                    Financial research – For full research and sources see{" "}
                    <a
                      href="https://www.notion.so/manfredidesign/Financial-Background-Research-4d23258714a34077956e9084e3fa9677?pvs=4"
                      target="_blank"
                    >
                      here
                    </a>
                  </h4>

                  <p>
                    We wanted to get a sufficient sense of how the financial
                    back-structure of the platform could work. I set out to
                    evaluate a few different investment vehicles we could use,
                    beyond the traditional stocks, funds and bonds also
                    including sustainable start-ups, solar parks, wind farms,
                    agricultural projects and peer-to-peer funding for
                    residential solar energy. Considering company stocks, some
                    of the most innovative companies were truly fascinating to
                    me, such as{" "}
                    <a href="https://lanzatech.com/" target="_blank">
                      <b>LanzaTech</b>
                    </a>{" "}
                    who transform captured carbon into fuels, chemicals and
                    clothing or{" "}
                    <a href="https://3xn.com/" target="_blank">
                      <b>3XN</b>
                    </a>{" "}
                    who up-cycle parts of old skyscrapers into modern buildings.
                    For feasibility reasons we would later decide to focus
                    purely on sustainably-focussed funds.
                  </p>
                  <p>
                    Another purpose of this research was to determine how to
                    assess investment sustainability, a critical aspect for the
                    project if we wanted to have any credibility for actual
                    impact. We discovered controversies surrounding existing
                    instruments like ESG ratings, criticized for arbitrariness
                    and bureaucratic complexity. However, we found a growing
                    industry seeks to enhance the reliability and
                    trustworthiness of sustainability ratings. Firms include{" "}
                    <a href="https://www.clarity.ai/" target="_blank">
                      <b>Clarity AI</b>
                    </a>
                    ,{" "}
                    <a href="https://www.refinitiv.com/" target="_blank">
                      <b>Refinitv</b>
                    </a>
                    ,{" "}
                    <a href="http://truvaluelabs.com/" target="_blank">
                      <b>Truevalue Labs</b>
                    </a>{" "}
                    and{" "}
                    <a href="https://www.esgbook.com/" target="_blank">
                      <b>esg book</b>
                    </a>
                    . We were particularly impressed with Clarity AI because it
                    offers data on both funds and companies, assessing their
                    alignment with the UN Sustainable Development Goals and
                    tracking CO2 emission. It also provides a nuanced evaluation
                    of portfolio impact, visualizing it in tangible measures
                    such as equivalent flights saved or equivalent household
                    water consumption saved.
                  </p>
                  {/* <h4>Speaking to climate and finance experts</h4> */}
                  <Image
                    src={Competitor}
                    alt="Screenshots of various impact investing apps"
                    className="blogImg"
                  />
                  <h4>
                    Competitor Analysis – full documentation{" "}
                    <a
                      href="https://www.notion.so/manfredidesign/Competitors-Inspirations-0b819b85a8e54e3981903bf4d2373e1e?pvs=4"
                      target="_blank"
                    >
                      here
                    </a>
                  </h4>
                  <p>
                    To understand the current landscape of sustainability
                    finance, our research examined existing investment platforms
                    across the spectrum. These included:
                  </p>
                  <ul>
                    <li>
                      Direct crowdfunding platforms for sustainable energy
                      projects, enabling individual investments into green
                      initiatives.
                    </li>
                    <li>
                      Traditional brokerages offering sustainability-focused
                      investment funds and portfolios.
                    </li>
                    <li>
                      Platforms tailored to specific demographic groups, such as
                      those focused on female investors.
                    </li>
                    <li>
                      Fully automated robo-advisors optimized for sustainable
                      investing goals.
                    </li>
                  </ul>
                  <p>
                    We evaluated both their financial blueprint and their front
                    end design.
                  </p>
                  <p>All firms we looked at:</p>
                  <ul>
                    <li>
                      <a href="https://www.tomorrow.one/" target="_blank">
                        Tomorrow Bank
                      </a>
                    </li>
                    <li>
                      <a href="http://moniflo.com" target="_blank">
                        Moniflo
                      </a>
                    </li>
                    <li>
                      <a href="https://www.bettervest.com/en/" target="_blank">
                        Bettervest
                      </a>
                    </li>
                    <li>
                      <a href="https://ecoligo.com/en/" target="_blank">
                        Ecoligo
                      </a>
                    </li>
                    <li>
                      <a href="https://www.climatize.earth/" target="_blank">
                        Climatize
                      </a>
                    </li>
                    <li>
                      <a href="https://www.raisegreen.com/" target="_blank">
                        Raise Green
                      </a>
                    </li>
                    <li>
                      <a href="https://www.wealthify.com/" target="_blank">
                        Wealthify
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.nutmeg.com/socially-responsible-investing"
                        target="_blank"
                      >
                        Nutmeg
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://impact.interactivebrokers.com"
                        target="_blank"
                      >
                        IMPACT
                      </a>
                    </li>
                    <li>
                      <a href="https://circa5000.com/" target="_blank">
                        CIRCA5000
                      </a>
                    </li>
                    <li>
                      <a href="https://www.betterment.com/" target="_blank">
                        Betterment
                      </a>
                    </li>
                    <li>
                      <a href="https://www.wealthfront.com/" target="_blank">
                        Wealthfront
                      </a>
                    </li>
                    <li>
                      <a href="https://flitinvest.com/" target="_blank">
                        Flitinvest
                      </a>
                    </li>
                    <li>
                      <a href="https://www.earthfolio.net/" target="_blank">
                        Earthfolio
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ellevest.com/" target="_blank">
                        ELLEVEST
                      </a>
                    </li>
                  </ul>
                  <Image
                    src={GenZ}
                    alt="A blue sculpture in front of high rise buildings"
                    className="blogImg"
                  />
                  <h4>
                    Research on Target audience – see the full research and
                    sources{" "}
                    <a
                      href="https://www.notion.so/manfredidesign/Gen-Z-and-Relation-to-Climate-Change-9b6cccd5b8a6470d9502c3505691844d?pvs=4"
                      target="_blank"
                    >
                      here
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.notion.so/manfredidesign/Value-of-Money-for-Gen-Z-a1dd9b6b369c402cbb24f6f18cfa5af7?pvs=4"
                      target="_blank"
                    >
                      here
                    </a>
                  </h4>
                  <p>
                    Generation Z, born between 1995 and 2010, constitutes around
                    26% of the global population. They are distinguished by
                    their status as digital natives immersed in the internet,
                    mobile technology, apps, and social networks. Research
                    confirmed our initial impression that this generation was
                    generally more active in sustainable behaviors and willing
                    to pay more for eco-friendly products.
                  </p>
                  <p>
                    As for Gen Z’s relationship to spending, we found four
                    important factors likely to play a role in their consumption
                    behaviors.
                  </p>
                  <ul>
                    <li>
                      <b>Focus on innovation:</b> a strong inclination towards
                      spending on technological and design-based innovations in
                      the marketplace
                    </li>
                    <li>
                      <b>Insistence on convenience:</b> reliance on convenience,
                      seen in preferences for time-saving devices,
                      easy-to-acquire retail channels, and products with
                      simplified experiences
                    </li>
                    <li>
                      <b>Desire for security:</b> Economic challenges shape
                      Generation Z's focus on security, leading to an interest
                      in saving and conservative spending
                    </li>
                    <li>
                      <b>Tendency toward escapism:</b> prone to escapist
                      consumption pursuits including entertainment (e.g.,
                      movies, music, video-games) and fostering social “tribes”,
                      partly as a response to economic challenges
                    </li>
                  </ul>
                  <p>
                    For our project the first three aspects seemed relevant – we
                    sought to offer investments through on a mobile application,
                    an innovative and highly convenient channel. We would focus
                    on creating the trust both in the financial security as well
                    as ecological integrity of the mission.
                  </p>
                </motion.div>
              ) : null}
            </motion.section>

            <motion.section
              layout
              className="section3"
              style={{ borderRadius: "24px" }}
            >
              <motion.div
                layout
                className={`sectionHead ${s3Open ? null : "closed"}`}
                onClick={() => setS3Open(!s3Open)}
              >
                <motion.div className="headTitle" layout="position">
                  <div className="heading">Phase 3</div>
                  <h3 className="headHeading">
                    {/* <RiArrowDownSLine className="riIcon" /> */}
                    Generative Research
                  </h3>
                  <div className="sectionDate">22/09 - 06/10/2023</div>
                </motion.div>
                <motion.div
                  layout="preserve-aspect"
                  className="headImg"
                  style={{ borderRadius: "16px", overflow: "hidden" }}
                >
                  <Image
                    src={Sticky2}
                    alt="Manfredi arranging sticky notes on a table"
                    className="blogImg"
                  />
                </motion.div>
              </motion.div>
              {s3Open ? (
                <motion.div
                  className="sectionContent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <p>
                    We then commenced generative research to give us food for
                    ideas for the final outcome.
                  </p>

                  <h4>
                    Research Plan – full documentation{" "}
                    <a
                      href="https://www.notion.so/manfredidesign/Generative-User-Research-Plan-5a8373b039314c50b733f9e5e8290efc?pvs=4"
                      target="_blank"
                    >
                      here
                    </a>
                  </h4>

                  <p>
                    The primary goals of the research were to understand
                    Generation Z's perspectives on climate change, to explore
                    their knowledge, attitudes, and barriers regarding investing
                    and to examine the intersection of environmental and
                    financial interests.
                  </p>

                  <p>
                    We focused on individuals residing in European cities,
                    namely London, Barcelona, Berlin, Milan and Paris, aligning
                    the geographical scope with the intended target market of
                    the platform. Within this limitation, however, we aimed to
                    maximize diversity in ethnicity, educational background,
                    gender, occupation. We also picked individuals with varying
                    environmental interest and previous financial experience.
                  </p>

                  <p>
                    As methodology, we chose in-depth semi-structured interviews
                    with subsequent affinity mapping and thematic analysis.
                    These were chosen for their facilitation of open-ended
                    discussions, providing rich qualitative data on the
                    interviewee’s concerns and motivations. Affinity mapping and
                    thematic analysis help organize and identify patterns within
                    the gathered information, aiding in the synthesis of
                    insights crucial for informing the user experience design
                    based on the nuanced understanding.
                  </p>

                  <p>
                    We initially aimed to confirm and expand the interview
                    findings quantitively with a survey but decided to move the
                    survey to a later date after submission because of time
                    restrictions.
                  </p>

                  <p>
                    Before starting the interviews, we reviewed the research
                    plan with a senior user researcher of travel website
                    eDreams, who provided us with some valuable feedback. He
                    made it clear that we should be very specific about the
                    questions we aimed to answer. We consequently compiled a
                    detailed list of research questions, which can be seen with
                    the findings below.
                  </p>

                  <h4>
                    Interviews and Analysis – full documentation{" "}
                    <a
                      href="https://www.notion.so/manfredidesign/Generative-User-Research-Interviews-a018eb1dc4a94b8a92de43cbb1c9c62e?pvs=4"
                      target="_blank"
                    >
                      here
                    </a>
                  </h4>
                  <Image
                    src={Interviews}
                    alt="6 images of different people smiling while being interviewed"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Image:</b> Some of the interviewees
                  </div>
                  <Image
                    src={Profiles}
                    alt="Profiles of the people interviewed"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Image:</b> Interview Profiles
                  </div>
                  <Image
                    src={InterviewStats}
                    alt="Piechart showing the demographics of the interview sample"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Charts:</b> Interview Demographics
                  </div>
                  <p>
                    We then conducted the interviews in person and on video call
                    with 8 participants, of equal parts male and female and of
                    five different nationalities. Responses were generally very
                    good, with interviews ranging from 20-45 minutes in length.
                    We transcribed the recordings and, if necessary, translated
                    the transcripts. To access the transcripts and the full list
                    of interview questions, see our Notion{" "}
                    <a
                      href="https://www.notion.so/manfredidesign/Generative-User-Research-Interviews-a018eb1dc4a94b8a92de43cbb1c9c62e?pvs=4"
                      target="_blank"
                    >
                      here
                    </a>
                    . To analyze and conceptualize the data, we color-coded
                    themes in the interviews with markers, transferred them to
                    pin it notes and grouped them by affinity.
                  </p>
                  <Image
                    src={Transcripts}
                    alt="Pages of printed transcripts spread out on a table"
                    className="blogImg"
                  />
                  <Image
                    src={Sticky}
                    alt="Manfredi arranging sticky notes on the table into groups"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Images:</b> Coding the interview transcripts for thematic
                    analysis - then mapping emergent themes and sorting by
                    affinity. We enjoyed doing this in a physical form even
                    though AI-driven analysis tools might have done it faster.
                  </div>
                  <p>Below are our research questions with the findings.</p>

                  <h4>Understanding Gen Z’s readiness to act sustainably</h4>

                  <ol>
                    <li>
                      <h4>How worried is Generation Z about climate change?</h4>
                      <ul>
                        <li>
                          Extreme weather events are the first thing that comes
                          to mind for most.
                        </li>
                        <li>
                          Some consider serious consequences of climate change
                          very far away.
                        </li>
                        <li>
                          There is a strong sense of guilt (’we could do more’)
                          and a feeling of having to justify.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>What do Generation Z do to fight climate change?</h4>
                      <ul>
                        <li>
                          Every day behavior dominates (recycling, reducing
                          electricity consumption, changing consumption
                          patterns, changing transportation and travel
                          behaviors, eating local and meat-free).
                        </li>
                        <li>
                          Behaviours are tied to a self-schema (being conscious,
                          eco-friendly).
                        </li>
                        <li>
                          Respondents prefer small and easy things (ex. carbon
                          offset charge).
                        </li>
                        <li>
                          Only one person mentioned donation and sustainable
                          investing.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>
                        What can move Generation Z to translate
                        ambitions/concerns into action?
                      </h4>
                      <ul>
                        <li>
                          A belief that the action brings a personal benefit.
                        </li>
                        <li>
                          Education and celebrity voices that people can trust.
                        </li>
                        <li>Norms.</li>
                        <li>
                          The ability to see the bigger picture (see the
                          combination of small actions into big impact)
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>
                        What can keep Generation Z from translating
                        ambitions/concerns into action?
                      </h4>
                      <ul>
                        <li>
                          Mistrust in politicians, governments, and big
                          corporations.
                        </li>
                        <li>
                          Believe that climate change is too big to tackle.
                        </li>
                        <li>Financial reasons (lack of money).</li>
                      </ul>
                    </li>
                    <li>
                      <h4>
                        How specific are young people’s environmental
                        preferences?
                      </h4>
                      <ul>
                        <li>
                          Half of the people had no clear preference of a
                          specific focus (e.g. renewable energies, waste
                          reduction).
                        </li>
                        <li>
                          Some people have a preference based on their
                          profession.
                        </li>
                        <li>
                          Some people have a preference based on observed
                          real-world impact.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>
                        What are the characteristics of those that are more
                        environmentally active?
                      </h4>
                      <ul>
                        <li>
                          They believe climate change will affect them and they
                          are quite pessimistic.
                        </li>
                        <li>
                          They read a lot about it or deal with sustainability
                          professionally.
                        </li>
                        <li>They have travelled and seen real-world impact.</li>
                        <li>They are mostly uninterested in finance.</li>
                        <li>They have doubts about having children</li>
                        <li>Most of them are female.</li>
                      </ul>
                    </li>
                  </ol>

                  <h4>Understanding the investment behavior of Generation Z</h4>

                  <ol>
                    <li>
                      <h4>
                        How experienced are Generation Z in investing and
                        finance?
                      </h4>
                      <ul>
                        <li>
                          Most people did invest through passive investment or
                          through an advisor.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>
                        What are barriers that keep Generation Z from entering
                        the investment space?
                      </h4>
                      <ul>
                        <li>
                          Perceived insufficient money to start investing.
                        </li>
                        <li>
                          Insufficient time to learn or keep up to date with
                          finance.
                        </li>
                        <li>
                          Lack of awareness that they could contribute to a
                          bigger fund.
                        </li>
                        <li>No influence from family education.</li>
                        <li>No interest.</li>
                      </ul>
                    </li>
                    <li>
                      <h4>
                        How much do Gen Z value control compared to convenience
                        in investing?
                      </h4>
                      <ul>
                        <li>Most people preferred convenience.</li>
                        <li>
                          People are divided when it comes to automatic AI
                          driven portfolios, there is a lack of trust.
                        </li>
                        <li>
                          Control and transparency are ultimately important,
                          even with automatic solutions.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>
                        What doubts do Gen Z have about sustainable investing?
                        What chances do they see in it?
                      </h4>
                      <ul>
                        <li>
                          Doubt: Some people believe sustainable investing has a
                          lower success rate.
                        </li>
                        <li>
                          Doubt: Most people perceive ESG as potential
                          greenwashing.
                        </li>
                        <li>
                          Chance: Some people perceive ESG as a good measure but
                          with room for improvement.
                        </li>
                        <li>
                          Chance: Some people believe there is potential in
                          sustainable investing as a method to tackle climate
                          change
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>
                        What preferences do Gen Z have in sustainable investing?
                      </h4>
                      <ul>
                        <li>
                          Startups are perceived to be more connected with real
                          impact but also more likely to fail.
                        </li>
                        <li>
                          Respondents want to make sure money goes towards real
                          impact.
                        </li>
                        <li>
                          Respondents are split about choosing the geographic
                          destination of their investment:
                        </li>
                        <ul>
                          <li>
                            Half of the respondents wouldn’t invest in corrupted
                            countries - or would invest in low-income countries
                            and specific markets.
                          </li>
                          <li>
                            Half of the respondents don’t have a preference
                            (’Climate doesn’t stop at the border’).
                          </li>
                        </ul>
                        <li>Most of the respondents are risk-adverse.</li>
                        <li>
                          Some respondents would like to understand returns,
                          annual growth and risk to make a decision.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </motion.div>
              ) : null}
            </motion.section>

            <motion.section
              layout
              className="section4"
              style={{ borderRadius: "24px" }}
            >
              <motion.div
                layout
                className={`sectionHead ${s4Open ? null : "closed"}`}
                onClick={() => setS4Open(!s4Open)}
              >
                <motion.div className="headTitle" layout="position">
                  <div className="heading">Phase 4</div>
                  <h3 className="headHeading">
                    {/* <RiArrowDownSLine className="riIcon" /> */}
                    Ideation 1
                  </h3>
                  <div className="sectionDate">06/10 - 20/10/2023</div>
                </motion.div>
                <motion.div
                  layout="preserve-aspect"
                  className="headImg"
                  style={{ borderRadius: "16px", overflow: "hidden" }}
                >
                  <Image
                    src={DataVis}
                    alt="A collection of sattelite images, data visualisations and diagrams"
                    className="blogImg"
                  />
                </motion.div>
              </motion.div>
              {s4Open ? (
                <motion.div
                  className="sectionContent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <div className="blogCaption">
                    <b>Image:</b> Initial moodboard for our ideas around data
                    visualisations.
                  </div>
                  <p>
                    We now started putting together the pieces from the
                    background and generative research. To narrow down our focus
                    we decided we would
                  </p>
                  <ul>
                    <li>
                      concentrate on individuals already expressing concern
                      about climate change but lacking familiarity with finance,
                      as traditional investors primarily driven by profit
                      maximization might be challenging to engage, especially
                      those with minimal concerns about climate
                    </li>
                    <li>
                      concentrate on financed CO2 emissions as our central data
                      to evaluate impact
                    </li>
                  </ul>

                  <h4>Automatic Portfolio</h4>

                  <p>
                    A key insight from the financial research was the
                    realization that my interest in investments grew only after
                    grasping the underlying concepts. We recognized that many
                    unfamiliar terms might seem uninteresting to those with
                    little knowledge. Our initial concept, therefore, centered
                    around an automated portfolio. This would be crafted based
                    on user-friendly settings, resembling a robo-advisor. My
                    vision for this was a clear settings page with a number of
                    sliders and options to set preferences in sustainability
                    targets, financial risk and focus. You would then be able to
                    see a live updated overview of the automatically created mix
                    of assets and the corresponding impact. Our financial
                    investigation had indicated that establishing such an
                    automated portfolio would be more feasible with funds rather
                    than individual company stocks, so we decided to base the
                    app on sustainably-focused funds.
                  </p>

                  <p>
                    There were differences in opinion regarding certain
                    settings. I believed it made sense to align with the format
                    used by established wealth platforms in presenting financial
                    information and to incorporate a risk element, allowing
                    users to select their preferred level of risk for their
                    portfolio. On the contrary, Manfredi preferred minimal user
                    involvement, aiming for simplicity. This trend persisted
                    throughout the project, with me advocating for user
                    customizability and experimentation as a key part of the
                    experience, while Manfredi aimed for a streamlined and
                    minimalistic approach with a focus on clarity.
                  </p>
                  <Image
                    src={Sketches}
                    alt="Initial sketches of the data visualisation and automatic portolio interface"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Image:</b> Initial sketches of the data visualisation and
                    automatic portolio interface
                  </div>
                  <h4>Data Visualization</h4>
                  <p>
                    At this point, we were still somewhat stuck on the data
                    visualization, lacking a clear idea of how we could measure
                    sustainability and what the size of the impact would be. Our
                    ideas involved centering the app fully on a map view,
                    showing water rise and consequent streams of refugees.
                    Another idea was showing satellite-style animations of river
                    deltas and coast-lines that would change depending on the
                    level of impact. We also considered fully abstracted,
                    Refik-Anadol-Style particle animations, for example to
                    visualize CO2 emissions or international flights taken. We
                    had set ourselves a tough challenge: finding a visualization
                    that gave a clear message, could represent the impact of
                    small-scale investments and would still send a strong
                    message.
                  </p>

                  <p>
                    Feedback in our tutorial was mixed. While the course team
                    appreciated the depth of our research, they questioned the
                    feasibility of the data visualization. While they could
                    envision the creation of a visually appealing output, they
                    sought a clearer comprehension of the tangible impact sizes,
                    which was still unclear to us at that point. The team
                    emphasized the importance of understanding and articulating
                    the real-world implications of our work, urging us to delve
                    deeper into the practical aspects to substantiate possible
                    data sources.
                  </p>
                </motion.div>
              ) : null}
            </motion.section>

            <motion.section
              layout
              className="section5"
              style={{ borderRadius: "24px" }}
            >
              <motion.div
                layout
                className={`sectionHead ${s5Open ? null : "closed"}`}
                onClick={() => setS5Open(!s5Open)}
              >
                <motion.div className="headTitle" layout="position">
                  <div className="heading">Phase 5</div>
                  <h3 className="headHeading">
                    {/* <RiArrowDownSLine className="riIcon" /> */}
                    Ideation 2
                  </h3>
                  <div className="sectionDate">20/10 - 27/10/2023</div>
                </motion.div>
                <motion.div
                  layout="preserve-aspect"
                  className="headImg"
                  style={{ borderRadius: "16px", overflow: "hidden" }}
                >
                  <Image
                    src={Data}
                    alt="A research paper and the interface of the Carity AI platform"
                    className="blogImg"
                  />
                </motion.div>
              </motion.div>
              {s5Open ? (
                <motion.div
                  className="sectionContent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <p>
                    The uncertainties about the impact visualization we managed
                    to overcome with two important steps.
                  </p>

                  <h4>Data Calculations</h4>
                  <p>
                    Firstly, we finally got a clearer picture of the data and
                    possible impact of our project Initially, I had been
                    striving to obtain access to data providers like Clarity AI
                    as we had been making assumptions about impact sizes.
                    However, Manfredi was hesitant, considering the considerable
                    effort it would take to connect with and apply for full
                    access from one of these providers. A pivotal moment
                    occurred when we delved deeper into the issue and discovered
                    the possibility of calculating some of this data ourselves.
                    Using platforms such as fossilfreefunds.org and the publicly
                    available Clarity Check from Clarity AI, we were able to
                    conduct a comparative analysis of the financed emissions of
                    various funds, including those earmarked as our selected
                    green funds. Based on the data we found, we would assume an
                    average reduction of 40 - 100g CO2 per 1 Dollar invested in
                    our portfolio. The benchmark for this reduction is the MSCI
                    ACWI Index (an index of the global economy). We believed
                    that a reduction in comparison to this benchmark was
                    sensible - the ACWI is a good estimate of how the money
                    could be invested by the user’s bank if left in their
                    current account. This CO2 reduction was consistent with a
                    possible 25%-reduction for green funds mentioned on various
                    online sources. I could be bigger if we included not just
                    direct reduction of more sustainable business practices but
                    also the aggregate effect of investing into sustainable
                    development and innovation.
                  </p>

                  <p>
                    See Notion{" "}
                    <a
                      href="https://www.notion.so/manfredidesign/CO2-Data-Fund-Selection-830a7e59949046429ba8e0f664f481f5?pvs=4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    for the full data and selection of funds
                  </p>

                  <p>
                    We also found scientific literature on CO2 emissions caused
                    by other everyday behaviors such as living car-free, eating
                    a plant-based diet or using a reusable shopping bag,
                    enabling us to compare the investment impact to tangible
                    actions.
                  </p>

                  <h4>Drawing Workshop</h4>
                  <Image
                    src={Drawing1}
                    alt="Sketches from the drawing workshop"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Drawings for the prompt:</b> If CO2 Emissions were an
                    object, what would they be?
                  </div>
                  <Image
                    src={Drawing2}
                    alt="Sketches from the drawing workshop"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Drawings for the prompt:</b> What could be one
                    consequence of reducing CO2 emissions?
                  </div>
                  <Image
                    src={WorkshopStats}
                    alt="Doughnut charts showing the demographics of the drawing workshop"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Charts:</b> Workshop demographics.
                  </div>
                  <p>
                    Secondly, we conducted a drawing workshop to collect
                    people’s associations with CO2 Emissions. This was intended
                    to help us generate ideas for the visualization. We asked 12
                    participants from 12 countries, half of them from Asia, the
                    other half from Europe, to draw their initial associations
                    for the questions:
                  </p>

                  <ul>
                    <li>
                      If CO2 Emissions were an object, what would they be?
                    </li>
                    <li>
                      What could be one consequence of reducing CO2 emissions?
                    </li>
                  </ul>

                  <h4>Balloons as visualisation</h4>
                  <Image
                    src={Balloons}
                    alt="A research paper and the interface of the Carity AI platform"
                    className="blogImg"
                  />
                  <p>
                    One possibility was to visualize the area of CO2 saved in
                    the equivalent number of balloons filled with CO2. The
                    estimates of CO2 per 0.5 cubic foot balloon (a standard size
                    for a party balloon) range from 28g to 30g.
                  </p>

                  <p>
                    Working with 30g of CO2 per balloon, we would show the user
                    the amount of balloons depending on their yearly impact.
                    Using two example users with different investments, the
                    visualization could be:
                  </p>

                  <ul>
                    <li>
                      <strong>USER 1</strong> ($0 start investment, $20/month
                      top-up)
                    </li>
                    <ul>
                      <li>after month 1: ca 3 balloons</li>
                      <li>after 1 year: 216 balloons</li>
                      <li>after 2 years: 616 balloons</li>
                      <li>after 3 years: 1016 balloons</li>
                    </ul>
                    <li>
                      <strong>USER 2</strong> ($5000 start investment, 0$/month
                      top-up)
                    </li>
                    <ul>
                      <li>8300 balloons</li>
                    </ul>
                  </ul>

                  <h4>Ice as Visualization</h4>
                  <Image src={Ice} alt="Arctic ice" className="blogImg" />
                  <p>
                    Another possibility was the volume of ice melt prevented
                    depending on the CO2 reduction. This was still somewhat
                    abstract, but the ice seemed like a very impactful visual
                    medium. To calculate the amount of ice melted per CO2
                    emitted, we can refer to a 2016 Science-published paper by
                    Notz & Stroeve, that establishes the relationship of 3
                    square meters melting with every 1 ton of CO2 emitted. This
                    is equivalent to 3 square millimeters per 1g CO2 or 30 sq cm
                    per 1 kg CO2.
                  </p>

                  <p>
                    Based on this, we would show the user the following amount
                    of ice they saved, as shown with the same example users:
                  </p>

                  <ul>
                    <li>
                      <strong>USER 1</strong> ($0 start investment, $20/month
                      top-up)
                    </li>
                    <ul>
                      <li>after month 1: 2.49cm2 of ice</li>
                      <li>
                        after 1 year: 195cm2 of ice (a bit smaller than an A5
                        paper)
                      </li>
                      <li>
                        after 2 years: 555cm2 of ice (a bit smaller than an A4
                        paper)
                      </li>
                      <li>
                        after 3 years: 915cm2 of ice (a 15-16inch MacBook)
                      </li>
                    </ul>
                    <li>
                      <strong>USER 2</strong> ($5000 start, 0$/month)
                    </li>
                    <ul>
                      <li>0.75 m2 of ice (size of a 52’’ TV Screen)</li>
                    </ul>
                  </ul>

                  {/* <h4>Reflections:</h4>
              <p>
                A simple calculator is sometimes the most powerful tool. I was
                very happy that we had managed to get a clearer picture of our
                project's underlying data as soon as we just started digging and
                calculating. While there remained some uncertainty about the
                data estimates, we finally managed to get on grounds sufficient
                to further develop our design.
              </p> */}
                </motion.div>
              ) : null}
            </motion.section>

            <motion.section
              layout
              className="section6"
              style={{ borderRadius: "24px" }}
            >
              <motion.div
                layout
                className={`sectionHead ${s6Open ? null : "closed"}`}
                onClick={() => setS6Open(!s6Open)}
              >
                <motion.div className="headTitle" layout="position">
                  <div className="heading">Phase 6</div>
                  <h3 className="headHeading">
                    {/* <RiArrowDownSLine className="riIcon" /> */}
                    Prototyping & Testing 1
                  </h3>
                  <div className="sectionDate">06/10 - 03/11/2023</div>
                </motion.div>
                <motion.div
                  layout="preserve-aspect"
                  className="headImg"
                  style={{ borderRadius: "16px", overflow: "hidden" }}
                >
                  <Image
                    src={LoFi}
                    alt="Screen shots of Glace low fidelity sketches"
                    className="blogImg"
                  />
                </motion.div>
              </motion.div>
              {s6Open ? (
                <motion.div
                  className="sectionContent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <p>
                    We now felt we had a strong idea in visualizing CO2 impact
                    in the area of arctic ice saved. To the best of our
                    knowledge, this approach was novel in this visual form. When
                    explaining that "a round-trip flight from London to LA could
                    potentially result in the loss of up to 3 square meters of
                    Arctic ice per passenger," the responses we got indicated
                    that the ice served as a tangible and emotionally resonant
                    measure. It would also enable us to put the investment in
                    perspective compared to other behaviors.
                  </p>

                  <h4>Low Fidelity Prototype and Testing</h4>
                  <Image
                    src={Wire1}
                    alt="Wireframe sketch"
                    className="blogImg"
                  />
                  <Image
                    src={Wire2}
                    alt="Wireframe sketch"
                    className="blogImg"
                  />
                  <Image
                    src={Wire3}
                    alt="Wireframe sketch"
                    className="blogImg"
                  />
                  {/* <div className="blogCaption">
                <b>Images:</b> Wireframe sketches.
              </div> */}
                  <p>
                    In the meantime, we had started sketching out the first
                    wireframes for the app. The start screen was designed to
                    highlight the impact, while the second screen focused on
                    viewing and managing the portfolio composition. The third
                    screen could be used to show multiple portfolios/wallets and
                    settings. Although we briefly considered adding an inbox for
                    notifications as a fourth tab, we ultimately dismissed the
                    idea. Another significant decision was to streamline the
                    user experience by having only one portfolio per user,
                    instead of multiple wallets/portfolios.
                  </p>

                  <p>
                    One notable challenge we anticipated was making the first
                    screen, emphasizing impact visualization, engaging enough to
                    capture users' attention. We were mindful of potential user
                    guilt if they consistently bypassed the impact screen to
                    access their financial performance data.
                  </p>

                  <p>
                    We then started working on low fidelity prototypes in Figma.
                    For the portfolio screen, our concept involved a wheel
                    illustrating the portfolio's composition, with percentages
                    of each fund represented. We found the idea appealing
                    because it allowed users to:
                  </p>

                  <ul>
                    <li>
                      Adjust settings and observe real-time changes in the
                      portfolio reflected on the wheel.
                    </li>
                    <li>
                      Rotate the wheel or pie chart to select a specific fund
                      for detailed information, accompanied by the phone's
                      electronic haptic feedback for a tactile experience,
                      reminiscent of the rattling of a wheel of fortune.
                    </li>
                  </ul>

                  <p>
                    We had some debates about the portfolio settings section. I
                    envisioned sliders to set risk and sustainability
                    preferences, to give users a feeling of ownership of their
                    own customized portfolio while Manfredi favored simplicity.
                    He liked the idea of chips that you could tap to select your
                    favored sustainability goals – or perhaps in offering just a
                    single portfolio without any customization choices.
                  </p>
                  <Image
                    src={Marta}
                    alt="Ice visualisations"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Image:</b> Notes from the first moderated testing
                    session.
                  </div>
                  <p>
                    In a first moderated testing session, we assessed the low
                    fidelity prototype with some trial participants. We found
                    that our initial color scheme with a dark background was not
                    perceived as trustworthy for a financial product.
                    Furthermore, we found a disconnect between the user choices
                    and the portfolio composition. We would have to find a way
                    to communicate that the allocation of funds was based on the
                    user choices. The way we had planned the portfolio pie chart
                    turned out not to be very understandable. We would have to
                    provide additional affordance cues simplify the interaction.
                  </p>
                </motion.div>
              ) : null}
            </motion.section>

            <motion.section
              layout
              className="section7"
              style={{ borderRadius: "24px" }}
            >
              <motion.div
                layout
                className={`sectionHead ${s7Open ? null : "closed"}`}
                onClick={() => setS7Open(!s7Open)}
              >
                <motion.div className="headTitle" layout="position">
                  <div className="heading">Phase 7</div>
                  <h3 className="headHeading">
                    {/* <RiArrowDownSLine className="riIcon" /> */}
                    Brand & Website
                  </h3>
                  <div className="sectionDate">03/10 - 10/11/2023</div>
                </motion.div>
                <motion.div
                  layout="preserve-aspect"
                  className="headImg"
                  style={{ borderRadius: "16px", overflow: "hidden" }}
                >
                  <Image
                    src={Brand}
                    alt="Two polar bears seen from above with the Glace Logo"
                    className="blogImg"
                  />
                </motion.div>
              </motion.div>
              {s7Open ? (
                <motion.div
                  className="sectionContent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <p>
                    With the ice at the centre of our project vision, we set out
                    to develop a modern and coherent brand for the platform,
                    deciding on "Glace" to evoke arctic glaciers and the French
                    word for ice. Leveraging our initial vibrant colour palette
                    targeting young audiences, we expanded the visual identity
                    with an app icon and style guide. After iterating through
                    various icon versions, we settled on a simplified
                    representation of a fan, literally used to cool an
                    environment down. This fan would also be used for compelling
                    loading animations, for instance as a spinner upon opening
                    the app. Using AI art generator Midjourney, we created
                    ominous, glowing blue ice shapes on dark backgrounds. A
                    top-down image of ice bears helped us convey emotion along
                    the rather technical portrayal of surface areas. These
                    visuals further guided the project identity.
                  </p>
                  <Image
                    src={Colours}
                    alt="Colour and icon explorations"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Image:</b> Colour and icon explorations.
                  </div>
                  <p>
                    We then focused on crafting a compelling narrative for
                    Glace. Opting for an attention-grabbing website, we first
                    hook viewers by quantifying everyday behaviour changes that
                    could save a specific amount of Arctic ice. Glace is then
                    presented as a solution to also influence the behaviour of
                    big corporations. We guide visitors through mock-ups and
                    bring the app to life on the website directly.
                  </p>
                  <Image
                    src={Vscode}
                    alt="Work in progress code for the Website"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Image:</b> The website was coded using Next.js in Visual
                    Studio Code.
                  </div>
                  <p>
                    The majority of website imagery comes from Midjourney
                    outputs; We also expanded some creative commons images with
                    Adobe's Generative tools. Mocking up the site design in
                    Figma, we emulated product pages such as those of Apple with
                    lively, flowing assets. I then built the site using Next.js,
                    TypeScript, HTML and SASS, incorporating Framer Motion for
                    animated interactions.
                  </p>
                  <p>
                    The final webiste is accessible here:{" "}
                    <a href="https://glace.earth">
                      <Image
                        src={Icon}
                        //   style={{
                        //     transform: `scale(${70 + scrollY / 30}%) rotate(${0}deg)`,
                        //   }}
                        alt="Glace icon"
                        className="glaceIcon"
                      />
                      https://glace.earth
                    </a>
                  </p>
                </motion.div>
              ) : null}
            </motion.section>

            <motion.section
              layout
              className="section8"
              style={{ borderRadius: "24px" }}
            >
              <motion.div
                layout
                className={`sectionHead ${s8Open ? null : "closed"}`}
                onClick={() => setS8Open(!s8Open)}
              >
                <motion.div className="headTitle" layout="position">
                  <div className="heading">Phase 8</div>
                  <h3 className="headHeading">
                    {/* <RiArrowDownSLine className="riIcon" /> */}
                    Visualisation & AR
                  </h3>
                  <div className="sectionDate">30/10 - 17/11/2023</div>
                </motion.div>
                <motion.div
                  layout="preserve-aspect"
                  className="headImg"
                  style={{ borderRadius: "16px", overflow: "hidden" }}
                >
                  <Image
                    src={AR}
                    alt="3d model of a bumpy ice sheet, work in progress"
                    className="blogImg"
                  />
                </motion.div>
              </motion.div>
              {s8Open ? (
                <motion.div
                  className="sectionContent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <p>
                    The question remained how exactly we would present the ice
                    inside the application. Our goal was to create a
                    visualization that:
                  </p>
                  <ul>
                    <li>
                      Enabled users to grasp the impact quantities in real-world
                      measurements.
                    </li>
                    <li>
                      Allowed users to visualize the area size in relation to
                      familiar objects or their environment.
                    </li>
                  </ul>
                  <Image
                    src={Mariele}
                    alt="Ice visualisations"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Image:</b> Mariele Neudecker, Stolen Sunsets, 1996.
                  </div>
                  <p>
                    This led us to the idea of employing augmented reality to
                    showcase the size of saved ice. Users could place their
                    virtual ice sheets in their natural surroundings. In this,
                    we felt inspired by the work of Mariele Neudecker, a
                    UK-based German artist who frequently uses glacier-like
                    landscapes in her work. What fascinated us was her ability
                    to take natural organic textures and place them within very
                    clear, artificial boundaries. After multiple iterations of
                    3D ice models, we settled on a shining, bumpy surface that
                    could dynamically adjust in size based on the user's
                    required area of ice. We used Apple's integrated "Quick
                    Look" AR tool that could place 3D models using the iPhone
                    camera, including realistic reflections and shadows.
                  </p>
                  {/* <Image
                src={Oldice}
                alt="Ice visualisations"
                className="blogImg"
              />
              <Image
                src={Oldice2}
                alt="Ice visualisations"
                className="blogImg"
              /> */}
                  <div className="blogVideoContCont">
                    <div className="blogVideoCont">
                      <video
                        className="blogVideo"
                        controls // add controls attribute to enable player controls
                      >
                        <source src="blog/ar.mp4" type="video/mp4"></source>
                      </video>
                    </div>
                  </div>
                  <div className="blogCaption">
                    <b>Video:</b> Exploring the AR model on campus.
                  </div>
                  {/* <div className="blogVideoContCont">
                <div className="blogVideoCont">
                  <iframe
                    width="315"
                    height="560"
                    className="blogVideo"
                    src="https://www.youtube.com/embed/5-dPh5799ZA?si=xuNztpSzzwJYfmdo&amp;controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div> */}
                  {/* <div className="blogCaption">
                {" "}
                <b>Video:</b> AR experimentations.
              </div> */}
                  <Image
                    src={IceVisIt}
                    alt="Ice visualisations"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Image:</b> Iterations of the in-app ice visualisations.
                  </div>
                  <p>
                    Despite the augmented reality feature, we still wanted to
                    maintain an in-app visual representation of ice on the
                    screen. Our objectives for this version were to:
                  </p>
                  <ul>
                    <li>
                      Make the quantity of ice comparable to known objects even
                      without using augmented reality.
                    </li>
                    <li>
                      Illustrate that individual impact, though seemingly small,
                      contributes to a larger communal impact.
                    </li>
                  </ul>
                  <Image
                    src={Impact}
                    alt="Ice visualisations"
                    className="blogImg"
                  />
                  <div className="blogCaption">
                    <b>Image:</b> Individual and community impact visualisation.
                  </div>
                  <p>
                    Addressing the latter point was crucial, as feedback from
                    professors and course mates emphasized the significance of
                    highlighting communal impact. In climate change, a
                    fundamental challenge is driving home the reality that while
                    an individual's personal impact may seem negligible,
                    aggregated across populations, small changes in behaviors
                    make an immense difference. We explored various visual
                    styles, including comparisons to the size of a ship. Again,
                    we had some discussions about the complexity of these
                    visualizations, debating how many different options we
                    should afford the user in experimenting with the
                    visualization. Should they be able to change the timespan or
                    play around with crowd sizes for communal impact? Should
                    they be able to compare Glace financial impact to other
                    behaviors such as flights or planting of a tree? Ultimately,
                    we opted for a straightforward approach: displaying an
                    overhead view of an ice sheet with polar bears as size
                    references. Pink rectangles represent the user's impact, and
                    a community view allows users to see their impact in the
                    context of other Glace users in the local area.
                  </p>
                </motion.div>
              ) : null}
            </motion.section>

            <motion.section
              layout
              className="section9"
              style={{ borderRadius: "24px" }}
            >
              <motion.div
                layout
                className={`sectionHead ${s9Open ? null : "closed"}`}
                onClick={() => setS9Open(!s9Open)}
              >
                <motion.div className="headTitle" layout="position">
                  <div className="heading">Phase 9</div>
                  <h3 className="headHeading">
                    {/* <RiArrowDownSLine className="riIcon" /> */}
                    Prototyping & Testing 2
                  </h3>
                  <div className="sectionDate">11/11 - 23/11/2023</div>
                </motion.div>
                <motion.div
                  layout="preserve-aspect"
                  className="headImg"
                  style={{ borderRadius: "16px", overflow: "hidden" }}
                >
                  <Image
                    src={Prototype}
                    alt="3d model of a bumpy ice sheet, work in progress"
                    className="blogImg"
                  />
                </motion.div>
              </motion.div>
              {s9Open ? (
                <motion.div
                  className="sectionContent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <p>
                    We could combine the prototype advances we had made during
                    the low fidelity phase and build our final high-fidelity
                    prototype in Figma. We decided against a three tab structure
                    and instead let users access the three main parts of the
                    app, impact visualisation, portfolio overview and shareable
                    QR code right from the home page. We also added the planned
                    article section right below on the home screen. Articles
                    include deep-dives into the companies which the chosen funds
                    invest in as well as introductory series to learn about
                    finance and sustainability. We kept the portfolio section
                    and its settings as simple as possible, but maintained a
                    classic doughnut chart and line graph for financial
                    transparency. The idea was to allow those keen to find out
                    to go as deep as they liked into the details of the
                    investment, while maintaining a simplicity on the top level
                    for those new to finance.
                  </p>
                  <Image src={Hifi1} alt="Hifi Prototype" className="blogImg" />
                  <Image src={Hifi2} alt="Hifi Prototype" className="blogImg" />
                  <p>
                    We were able to test the first high fidelity version with
                    some participants, giving them prompts to access specific
                    functions of the app and documenting their thoughts and
                    confusions through the thinking-out-loud method. The
                    feedback ranged from small details like font sizes to larger
                    issues such as persisting lack of connection between the
                    user settings and the final portfolio outcome. The latter we
                    managed to bridge by implementing icons also in the
                    portfolio view, reminding users about the choices that lead
                    to those funds being included. Based on further testing, we
                    clarified some of the options in the settings page and we
                    moved a list of all funds on a separate tab in the portfolio
                    section to allow a better overview. We were happy to find
                    that most parts of the app, including the important impact
                    visualisation, worked very well for our test participants.
                  </p>
                  <p>
                    Looking back on all the phases of this project, we had
                    managed to create a fluent, well-tested and coherent
                    prototype. We had used insights from finance and climate
                    research as well as a participatory workshop to create a
                    novel form of impact visualisation, making use of generative
                    AI tools, 3d modelling and augmented reality. We had used
                    insights from the interviews to stir the initial idea,
                    narrow down the target audience, shape the user experience
                    and adapt the messaging. We had generated a solid pitch and
                    an engaging, beautiful website to introduce our idea.
                  </p>
                  <p>
                    We had missed some opportunities, such as conducting a
                    bigger survey or going deeper into implicit association
                    research about the trustworthiness of specific visual
                    stimuli. But we had also experienced amazing growth. Both of
                    us had improved our abilities in conducting primary
                    research, learned new tools and developed a strong working
                    relationship. Throughout persisting discussions about the
                    complexity of the platform we had learned to step back from
                    emotional infliction and evaluate each others ideas based on
                    first principles. Both of us are confident that, while there
                    is room to improve green finance, we had developed an idea
                    with potential for real impact.
                  </p>
                </motion.div>
              ) : null}
            </motion.section>

            <motion.section
              layout
              className="section10"
              style={{ borderRadius: "24px" }}
            >
              <motion.div
                layout
                className={`sectionHead ${s10Open ? null : "closed"}`}
                onClick={() => setS10Open(!s10Open)}
              >
                <motion.div className="headTitle" layout="position">
                  <h3 className="headHeading">Final Prototype</h3>
                </motion.div>
                <motion.div
                  layout="preserve-aspect"
                  className="headImg"
                  style={{ borderRadius: "16px", overflow: "hidden" }}
                >
                  <Image
                    src={Final}
                    alt="Screenshots of the final prototype"
                    className="blogImg"
                  />
                </motion.div>
              </motion.div>
              {s10Open ? (
                <motion.div
                  className="sectionContent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <p>See a final walk through of the app below:</p>
                  <div className="blogVideoContCont">
                    <div className="blogVideoCont">
                      <video
                        className="blogVideo"
                        controls // add controls attribute to enable player controls
                      >
                        <source
                          src="blog/walkthrough.mp4"
                          type="video/mp4"
                        ></source>
                      </video>
                    </div>
                  </div>
                  {/* <div className="blogVideoContCont">
                <div className="blogVideoCont">
                  <iframe
                    className="blogVideo"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/AoH0gFq7ATo?si=81ix7hKLcfpOYlju&amp;controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div> */}
                </motion.div>
              ) : null}
            </motion.section>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
