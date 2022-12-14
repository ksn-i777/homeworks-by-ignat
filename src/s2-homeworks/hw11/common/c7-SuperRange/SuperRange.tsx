import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ //+ стили для слайдера //+ пишет студент
                padding: '0',
                appearance: 'none',
                backgroundColor: 'black',
                color: 'rgba(0, 204, 34, 1)',
                borderRadius: '10px',
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
