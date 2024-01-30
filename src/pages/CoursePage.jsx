import React, { useEffect, useState } from "react";
import BackButtonIcon from "../svg/BackButtonIcon.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "@mui/material/Slider";
import { Chip, Box, Typography } from '@mui/material'
import palette from "../theme/palette.js";
import Units from "../components/common/Units.jsx";
import './CoursePage.css'
import Search from "../components/common/Search.jsx";
import CustomCard from "../components/common/CustomCard.jsx";
import AccordianComponent from "../components/common/AccordianComponent.jsx";
import { unitActions } from "../store/index.js";
import { useSelector, useDispatch } from "react-redux";
import data from "../data/courseData.js"
import ContinueReadingCard from "../components/common/ContinueReadingCard.jsx";
import PresentationIcon from "../components/common/PresentationIcon.jsx";
import DocumentIcon from "../svg/DocumentIcon.jsx";

function CoursePage() {
    const [courseData, setCourseData] = useState({});
    const navigate = useNavigate();
    const { courseId } = useParams();
    const id = parseInt(courseId);
    const data = courseData.data;
    const isLoggedIn = useSelector((state) => state.login)
    console.log(isLoggedIn);

    useEffect(() => {
        setTimeout(() => {
            fetch(
                `https://stagingstudentpython.edwisely.com/reactProject/courseData?course_id=${id}`
            )
                .then((res) => res.json())
                .then((data) => setCourseData(data));
        }, 1000);
    }, []);

    const handleBack = () => {
        navigate("/dashboard");
    };

    const openPdf = (url) => {
        window.open(url, "_blank");
    };

    //handling selectedUnit
    const selectedUnitId = useSelector((state) => state.unit.selectedUnitId) || 9876;
    // console.log(selectedUnitId);
    const dispatch = useDispatch();
    const handleUnitClick = (unitId) => {
        console.log(unitId);
        if (selectedUnitId === unitId) {
            dispatch(unitActions.closeUnit());
        } else {
            dispatch(unitActions.openUnit(unitId));
        }
    };

    // const readingIcon = <PresentationIcon />;
    if (!isLoggedIn) {
        return (
            <Box padding="150px">
                <Typography>Login before Trying!!!</Typography>
            </Box>
        )
    }

    return (
        <Box id="course-page" sx={{
            position: 'absolute',
            top: '80px',
            left: '6vw',
            backgroundColor: "#ffffff",
            width: '94vw',
            height: '971px'
        }}>
            {Object.keys(courseData).length > 0 && (
                <>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '819.5px',
                        height: '30px',
                        marginTop: '35px',
                        marginLeft: '33.5px',
                        alignItems: 'center',
                    }}>
                        <Box component="svg"
                            viewBox="0 0 22 19.602"
                            width="22px"
                            height="19.602px"
                            sx={{ strokeWidth: '3px', stroke: '#252525' }} onClick={handleBack}>
                            <BackButtonIcon />
                        </Box>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '25px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '20px',
                            letterSpacing: '-0.25px',
                            marginLeft: '29.5px',
                            width: '685px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                        >
                            {data.name}
                        </Typography>
                        <Box>
                            <Chip sx={{
                                borderRadius: 0,
                                height: 22,
                                backgroundColor: palette.primary[100],
                                border: 'none'
                            }} label="DESIGN" variant="outlined" />
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '328px',
                        height: '21px',
                        marginTop: '18px',
                        marginLeft: '85px',
                        alignItems: 'center',
                        display: 'flex',
                    }}>
                        <Slider
                            size="medium"
                            defaultValue={data.percentage}
                            valueLabelDisplay="auto"
                            max={100}
                            min={0}
                            sx={{
                                width: 255,
                                "& .MuiSlider-thumb": {
                                    width: 0,
                                    height: 0,
                                },
                            }}
                        />
                        <Typography sx={{
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal',
                            marginLeft: '12px',
                        }}
                            style={{ color: palette.primary[700] }}>
                            Avg. {data.percentage}%
                        </Typography>
                    </Box>
                    <Box id="des-div">
                        <Box id="title-div">What you will learn</Box>
                        <Box id="para-div" height='250px'>
                            <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                                {data.description.split("\n").map((paragraph, index) => (
                                    <li key={index}>{paragraph}</li>
                                ))}
                            </ul>
                        </Box>
                    </Box>
                    <Box id="continue-reading-div">
                        <Box id="continue-reading">Continue reading</Box>
                        <Box id="pdfs">
                            {data.continue_reading.map((pdf) => (
                                <ContinueReadingCard
                                    key={pdf.id}
                                    name={pdf.name}
                                    url={pdf.url}
                                    icon={(pdf.id == 123) ? <DocumentIcon /> : <PresentationIcon />}
                                // onClick={() => openPdf(`${pdf.url}`)}
                                />
                            ))}
                        </Box>
                        <Box id="units-div">
                            {data.units.map((unit) => (
                                <Units
                                    unit_name={unit.unit_name}
                                    key={unit.unit_id}
                                    topics={unit.topics}
                                    id={unit.unit_id}
                                    onClick={handleUnitClick}
                                />
                            ))}
                            <Search />
                        </Box>
                        <Box id="accordians">
                            {data.units
                                .filter(unit => unit.unit_id === selectedUnitId)
                                .map(unit => (
                                    <AccordianComponent
                                        title={unit.unit_name}
                                        key={unit.unit_id}
                                        topics={unit.topics}
                                    />
                                ))
                            }
                        </Box>
                    </Box>
                </>
            )
            }
        </Box >
    );
}

export default CoursePage;