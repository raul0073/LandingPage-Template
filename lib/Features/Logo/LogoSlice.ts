
'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type LogoSlice = {
    value: string,
    init: string,
}
  

const initialState: LogoSlice ={
    value: 'לוגו',
    init: 'לוגו',
}

export const LogoSlice = createSlice({
    name: 'Logo',
    initialState,
    reducers: {
        edit: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})


export const { edit } = LogoSlice.actions
export default LogoSlice.reducer  