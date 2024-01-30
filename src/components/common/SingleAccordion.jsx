import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideoPlayIcon from "../../svg/VideoPlayIcon";
import RightButtonIcon from "../../svg/RightButtonIcon";
import LinkIcon from "../../svg/LinkIcon";
import DocumentIcon from "../../svg/DocumentIcon";
import PresentationIcon from "./PresentationIcon";
// import palette from "../../theme/palette";
import "./Accordian.css";
import { useTheme } from "@mui/material";

const SingleAccordion = ({ topic }) => {
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme();

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <Accordion
            square
            sx={{
                width: 600,
                boxShadow: "none",
                background: theme.palette.grey[100],
                margin: 0,
            }}
            expanded={expanded}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" onClick={toggleExpansion}>
                {topic.topic_name}
            </AccordionSummary>
            <AccordionDetails key={topic.topic_id}>
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
            </AccordionDetails>
        </Accordion>
    )
}

export default SingleAccordion