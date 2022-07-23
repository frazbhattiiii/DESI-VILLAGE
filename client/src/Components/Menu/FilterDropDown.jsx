import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterDropDown() {
    const [filter, setFilter] = React.useState('');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">filter</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={filter}
                label="Age"
                onChange={handleChange}
                sx={{
                    width:'10rem',
                }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value='Desi'>Desi Khabay</MenuItem>
                <MenuItem value='fastFood'>Fast Food</MenuItem>
                <MenuItem value='Asian'>Asian</MenuItem>
                <MenuItem value='Chinese'>Chinese</MenuItem>
                <MenuItem value='Italian'>Italian</MenuItem>
            </Select>
        </FormControl>
    );
}