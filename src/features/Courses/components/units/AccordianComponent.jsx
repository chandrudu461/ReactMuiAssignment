import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import { Box, Typography, useTheme } from '@mui/material'
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "../../../../assets/svg/ExpandMoreIcon";
import RightButtonIcon from "../../../../assets/svg/RightButtonIcon";
// import "./Accordian.css";
import palette from "../../../../theme/palette";
import DocumentIcon from "../../../../assets/svg/DocumentIcon";
import { Link } from "react-router-dom";

const AccordianComponent = ({ title, topics, expand }) => {
    const scrollToTop = (pdfFileName) => {
        window.scrollTo(0, 0);
        localStorage.setItem("pdfFileName", pdfFileName);
    }

    const [expanded, setExpanded] = useState(null);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };
    const theme = useTheme()

    return (
        <Box style={{ marginBottom: 2 }}>
            <Box
                square
                sx={{
                    width: 600,
                    boxShadow: "none",
                    background: palette.primary[0],
                    margin: 0,
                }}
            >
                {topics.map((topic, index) => (
                    <Accordion
                        key={index}
                        square
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                        sx={{
                            width: 600,
                            boxShadow: "none",
                            background: palette.primary[0],
                            margin: 0,
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}
                            sx={{
                                "& .MuiAccordionSummary-content": {
                                    color: theme.palette.grey[400],
                                }
                            }}>
                            <Typography variant='leaderboardEmail'>
                                {topic.topic_name}
                            </Typography>
                        </AccordionSummary>

                        {topic.materials.map((material, subIndex) => (
                            <AccordionDetails
                                key={subIndex}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '5px',
                                }}>
                                    <DocumentIcon width='16px' height='16px' />
                                    <Typography variant="tableStudentRowCell">
                                        {material.name}
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: '56.16px',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <Link to={`/pdfview/${encodeURIComponent(material.url)}`} onClick={() => scrollToTop(material.name)}
                                        style={{
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <Typography variant="accordianStartButton" color={theme.palette.primary.main}>Start</Typography>
                                    </Link>
                                    <span id="button">
                                        <RightButtonIcon />
                                    </span>
                                </Box>
                            </AccordionDetails>
                        ))}
                    </Accordion>
                ))}
            </Box>
            <hr style={{ width: "600px", margin: "0" }} />
        </Box>
    );
}

export default AccordianComponent;
