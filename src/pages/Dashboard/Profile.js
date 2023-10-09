import { Box } from '@mui/material'
import React from 'react'

let uname = "Kalika"
let rollno = '210482'

export default function Hero() {
    return (
            <div class="ProfileBox">
                <h2>Hello, {uname}!</h2>
                <h3>Roll number: {rollno}</h3>
            </div>
        )
    }