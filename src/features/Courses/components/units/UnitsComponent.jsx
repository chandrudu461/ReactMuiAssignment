import React from 'react'
import { Box, Stack } from '@mui/material'
import MuiCustomTab from './MuiCustomTab'
import Search from './Search'
import AccordianComponent from './AccordianComponent'
import { useState } from 'react'

const UnitsComponent = ({ data }) => {
    const [selectedUnitId, setSelectedUnitId] = useState((data.units.length > 0 ? data.units[0].unit_id : undefined));
    const [searchValue, setSearchValue] = useState('');

    console.log(selectedUnitId)
    const handleTabChange = (event, newValue) => {
        setSelectedUnitId(newValue);
    };

    const handleSearchChange = (searchValue) => {
        setSearchValue(searchValue);
    }
    return (
        <>
            <Box sx={{
                marginLeft: '56px',
                marginTop: '47px'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '24px',
                    alignItems: 'center',
                    height: '35px',
                    gap: '35px'
                }}>
                    <Stack direction={'row'} justifyContent={'center'} alignItems={'flex-end'} spacing={'2.031rem'}>
                        <MuiCustomTab
                            data={data.units.map(unit => ({ id: unit.unit_id, name: unit.unit_name }))}
                            handleTabChange={handleTabChange}
                            value={selectedUnitId || (data.units.length > 0 ? data.units[0].unit_id : undefined)}
                        />
                        <Search value={searchValue} setValue={setSearchValue} handleSearchChange={handleSearchChange} />
                    </Stack>
                </Box>
                <Box sx={{
                    height: '44px',
                    marginTop: '24px'
                }}>
                    {data.units
                        .filter(unit => (unit.unit_id === selectedUnitId))
                        .map(unit => (
                            <AccordianComponent
                                title={unit.unit_name}
                                key={unit.unit_id}
                                topics={unit.topics.filter(topic => topic.topic_name.toLowerCase().includes(searchValue.toLowerCase()))}
                            />
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}

export default UnitsComponent