import { CheckCircleOutline } from '@mui/icons-material';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';

interface RegionI {
    id: number;
    name: string;
}

export const regions: { [key: string]: RegionI } = {
    AMERICA: { id: 1, name: "America" },
    M_FRANCES: { id: 2, name: "M. Francés" },
    IBERIA: { id: 3, name: "Iberia" },
    M_ITALIANO: { id: 4, name: "M. Italiano" },
    RESTO_EUROPA: { id: 5, name: "Resto Europa" },
}

export interface CountryI {
    id: number;
    name: string,
    flagPath: string,
    regions: number[];
}

const countries: CountryI[] = [
    { id: 1, name: 'Pais 1', flagPath: 'https://flagcdn.com/w20/ar.png', regions: [regions.AMERICA.id] },
    { id: 2, name: 'Pais 2', flagPath: 'https://flagcdn.com/w20/ar.png', regions: [regions.M_FRANCES.id] },
    { id: 3, name: 'Pais 3', flagPath: 'https://flagcdn.com/w20/ar.png', regions: [regions.M_FRANCES.id] },
    { id: 4, name: 'Pais 4', flagPath: 'https://flagcdn.com/w20/ar.png', regions: [regions.M_FRANCES.id] },
    { id: 5, name: 'Pais 5', flagPath: 'https://flagcdn.com/w20/ar.png', regions: [regions.M_FRANCES.id] },
    { id: 6, name: 'Pais 6', flagPath: 'https://flagcdn.com/w20/ar.png', regions: [regions.M_FRANCES.id] },
    { id: 7, name: 'Pais 7', flagPath: 'https://flagcdn.com/w20/ar.png', regions: [regions.M_FRANCES.id] },
    { id: 8, name: 'Pais 8', flagPath: 'https://flagcdn.com/w20/ar.png', regions: [regions.M_ITALIANO.id] },
    { id: 9, name: 'Pais 9', flagPath: 'https://flagcdn.com/w20/ar.png', regions: [regions.IBERIA.id] },
    { id: 10, name: 'Pais 10', flagPath: 'https://flagcdn.com/w20/ar.png', regions: [regions.RESTO_EUROPA.id] },
];

interface Props {
    isMultiSelect?: boolean;
    values: CountryI[],
    onChange: React.Dispatch<React.SetStateAction<CountryI[]>>,
}

export const CountrySelector = ({
    isMultiSelect,
    values,
    onChange,
}: Props) => {
    const defaultTabSelectedId = regions.M_FRANCES.id

    const [selectedRegion, setSelectedRegion] = useState(defaultTabSelectedId);

    const handleChange = (event: React.SyntheticEvent, regionId: number) => {
        setSelectedRegion(regionId);
    };

    const handleAddCountry = (country: CountryI) => {
        onChange(st => {
            return isMultiSelect ? [...st, country] : [country]
        })
    }

    const handleRemoveCountry = (country: CountryI) => {
        onChange(st => st.filter(ctSelectedCountry => ctSelectedCountry.id != country.id))
    }

    return (
        <Box>
            <Tabs value={selectedRegion} onChange={handleChange} aria-label="basic tabs example">
                {
                    Object.values(regions).map(ctRegion =>
                        <Tab
                            sx={{ textTransform: "none", borderBottom: "1px solid #dbdce0" }}
                            key={ctRegion.id}
                            value={ctRegion.id}
                            label={ctRegion.name}
                        />
                    )
                }
            </Tabs>
            <List sx={{ display: "grid", columnGap: 3, rowGap: 1, gridTemplateColumns: "1fr 1fr 1fr", pt: 3, }}>
                {
                    countries.filter(ctCountry => ctCountry.regions.some(ctRegId => ctRegId == selectedRegion)).map(ctCountry => {
                        const isCurrentCountrySelected = values.some(ctSelectedCountry => ctSelectedCountry.id == ctCountry.id)
                        return <ListItemButton
                            selected={isCurrentCountrySelected}
                            sx={{
                                borderRadius: 1, p: "0px 8px",
                                border: "2px solid transparent",
                                '&.Mui-selected': {
                                    borderColor: "#a3e7d8",
                                    backgroundColor: "#edfaf7",
                                    '&:hover': {
                                        backgroundColor: "#edfaf7",
                                        opacity: "0.7",
                                    },
                                },
                            }}
                            key={ctCountry.name} onClick={() => isCurrentCountrySelected ? handleRemoveCountry(ctCountry) : handleAddCountry(ctCountry)}
                        >
                            <ListItemIcon sx={{ minWidth: 30 }}><img src={ctCountry.flagPath} /></ListItemIcon>
                            <ListItemText><Typography variant="body2">{ctCountry.name}</Typography></ListItemText>
                            {isCurrentCountrySelected && <CheckCircleOutline fontSize="small" htmlColor='#6cd8c1' />}
                        </ListItemButton>
                    }
                    )
                }
            </List>
        </Box >
    )
}
