import * as React from "react";
import Accordion from "@mui/material/Accordion";
import { Box, Typography } from '@mui/material'
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "../../../../assets/svg/ExpandMoreIcon";
import RightButtonIcon from "../../../../assets/svg/RightButtonIcon";
import "./Accordian.css";
import palette from "../../../../theme/palette";
import DocumentIcon from "../../../../assets/svg/DocumentIcon";
import { Link } from "react-router-dom";

const AccordianComponent = ({ title, topics, expand }) => {
    const scrollToTop = (pdfFileName) => {
        window.scrollTo(0, 0);
        localStorage.setItem("pdfFileName", pdfFileName);
    }

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
                                <Typography variant='leaderboardEmail'>
                                    {topic.topic_name}
                                </Typography>
                            </AccordionSummary>

                            {topic.materials.map((material) => (
                                <AccordionDetails key={topic.topic_id}>
                                    <div id="titles">
                                        <DocumentIcon width='16px' height='16px' />
                                        <Typography variant="tableStudentRowCell">
                                            {material.name}
                                        </Typography>
                                    </div>
                                    <div id="start-button">
                                        <Link to={`/pdfview/${encodeURIComponent(material.url)}`} onClick={() => scrollToTop(material.name)}
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

                        </Accordion>
                    </>
                ))}
            </Box>
            <hr style={{ width: "600px", margin: "0" }} />
        </div >
    );
}

export default AccordianComponent;