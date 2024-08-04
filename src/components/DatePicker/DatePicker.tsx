import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, Button, ButtonProps, Card, IconButton, Stack, styled, Typography } from '@mui/material';
import { PickersCalendarHeaderProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/es';
import updateLocale from 'dayjs/plugin/updateLocale';
import { useState } from 'react';

dayjs.extend(updateLocale);

const DateButton = styled(Button)<ButtonProps>(() => ({
    textTransform: "none",
    padding: "0px 14px",
    fontWeight: 400,
    borderRadius: "20px",
}))

const CustomCalendarHeaderRoot = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 16px',
    alignItems: 'center',
});

function CustomCalendarHeader({ currentMonth, onMonthChange }: PickersCalendarHeaderProps<Dayjs>) {

    const selectNextMonth = () => onMonthChange(currentMonth.add(1, 'month'), 'left');
    const selectNextYear = () => onMonthChange(currentMonth.add(1, 'year'), 'left');
    const selectPreviousMonth = () => onMonthChange(currentMonth.subtract(1, 'month'), 'right');
    const selectPreviousYear = () => onMonthChange(currentMonth.subtract(1, 'year'), 'right');

    return (
        <CustomCalendarHeaderRoot>
            <Stack spacing={1} direction="row" alignItems={"center"}>
                <IconButton onClick={selectPreviousMonth} title="Mes anterior">
                    <ChevronLeft />
                </IconButton>
                <Typography variant="body2" sx={{ textTransform: "capitalize", fontWeight: 600 }}>{currentMonth.format('MMM')}</Typography>
                <IconButton onClick={selectNextMonth} title="Mes siguiente">
                    <ChevronRight />
                </IconButton>
            </Stack>
            <Stack spacing={1} direction="row" alignItems={"center"}>
                <IconButton onClick={selectPreviousYear} title="Año anterior">
                    <ChevronLeft />
                </IconButton>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{currentMonth.format('YYYY')}</Typography>
                <IconButton onClick={selectNextYear} title="Año siguiente">
                    <ChevronRight />
                </IconButton>
            </Stack>
        </CustomCalendarHeaderRoot>
    );
}

interface Props {
    value: Dayjs | null;
    onChange: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

export const DatePicker = ({
    value,
    onChange,
}: Props) => {

    const handleChangeDate = (newValue: Dayjs) => {
        onChange(newValue)
    }

    const handleResetDate = () => {
        onChange(null)
    }

    return (
        <Box sx={{ width: "fit-content" }}>
            <Card sx={{ borderRadius: 3 }}>
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="es"
                >
                    <DateCalendar
                        showDaysOutsideCurrentMonth
                        value={value}
                        onChange={handleChangeDate}
                        slots={{
                            calendarHeader: CustomCalendarHeader
                        }}
                    />
                </LocalizationProvider>

                <Stack direction={"row"} sx={{ padding: "0 10px 14px 10px" }}>
                    <DateButton size='small' onClick={handleResetDate}>Limpiar</DateButton>
                    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "end" }}>
                        <DateButton size='small' >Cancelar</DateButton>
                        <DateButton size='small' variant="contained">Aplicar</DateButton>
                    </Box>
                </Stack>
            </Card>
        </Box>
    )
}

