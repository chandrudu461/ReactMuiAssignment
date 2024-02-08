import * as React from "react";
import Accordion from "@mui/material/Accordion";
import { Box } from '@mui/material'
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "../../assets/svg/ExpandMoreIcon";
import RightButtonIcon from "../../assets/svg/RightButtonIcon";
import VideoPlayIcon from "../../assets/svg/VideoPlayIcon";
import LinkIcon from "../../assets/svg/LinkIcon";
import "./Accordian.css";
import palette from "../../theme/palette";
import SingleAccordion from "./SingleAccordion";
import DocumentIcon from "../../assets/svg/DocumentIcon";
import PresentationIcon from "./PresentationIcon";
import { useState } from "react";
import { Link } from "react-router-dom";

const AccordianComponent = ({ title, topics, expand }) => {
    return (
        <div style={{ marginBottom: 2 }}>
            <Box
                square
                sx={{
                    width: 600,
                    boxShadow: "none",
                    background: palette.primary[0],
                    margin: 0,
                }}
            >
                {topics.map((topic) => (
                    <>
                        <Accordion
                            square
                            sx={{
                                width: 600,
                                boxShadow: "none",
                                background: palette.primary[0],
                                margin: 0,
                            }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                                {topic.topic_name}
                            </AccordionSummary>

                            {topic.materials.map((material) => (
                                <AccordionDetails key={topic.topic_id}>
                                    <div id="titles">
                                        <VideoPlayIcon />
                                        {material.name}
                                    </div>
                                    <div id="start-button">
                                        <Link to={`/pdfview/${encodeURIComponent(material.url)}`}
                                            style={{
                                                textDecoration: 'none'
                                            }}
                                        >
                                            <Box id="start">Start</Box>
                                        </Link>
                                        <span id="button">
                                            <RightButtonIcon />
                                        </span>
                                    </div>
                                </AccordionDetails>
                            ))}

                            {/*<AccordionDetails key={topic.topic_id}>
                                <div id="titles">
                                    <VideoPlayIcon />
                                    {topic.topic_name}
                                </div>
                                <div id="start-button">
                                    <span id="start">Start</span>
                                    <span id="button">
                                        <RightButtonIcon />
                                    </span>
                                </div>
                            </AccordionDetails>
                            <AccordionDetails key={topic.topic_id}>
                                <div id="titles">
                                    <LinkIcon />
                                    {topic.topic_name}
                                </div>
                                <div id="start-button">
                                    <span id="start">Start</span>
                                    <span id="button">
                                        <RightButtonIcon />
                                    </span>
                                </div>
                            </AccordionDetails>
                            <AccordionDetails key={topic.topic_id}>
                                <div id="titles">
                                    <DocumentIcon width='16px' height='16px' />
                                    {topic.topic_name}
                                </div>
                                <div id="start-button">
                                    <span id="start">Start</span>
                                    <span id="button">
                                        <RightButtonIcon />
                                    </span>
                                </div>
                            </AccordionDetails>
                            <AccordionDetails key={topic.topic_id}>
                                <div id="titles">
                                    <PresentationIcon width="16px"
                                        height="16px" />
                                    {topic.topic_name}
                                </div>
                                <div id="start-button">
                                    <span id="start">Start</span>
                                    <span id="button">
                                        <RightButtonIcon />
                                    </span>
                                </div>
                            </AccordionDetails> */}
                        </Accordion>
                    </>
                ))}
            </Box>
            <hr style={{ width: "600px", margin: "0" }} />
        </div >
    );
}

export default AccordianComponent;