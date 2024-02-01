
'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type AboutSlice<T> = {
    title: {
        value: T;
        init: string;
    };
    content: {
        value: string;
        init: string;
    };
    images: Array<{
        value: string;
        init: string;
    }>;
};

const initialState: AboutSlice<string> = {
    title: {
        value: 'מי אנחנו?',
        init: 'מי אנחנו?',
    },
    content: {
        value: "תיקונים אקטואליה אל רבה, ויקי תקשורת מבוקשים מלא של, מדע נבחרים גיאוגרפיה ב. ייִדיש ממונרכיה האטמוספירה עוד את, החברה באגים את כדי. אנא את תורת עיצוב הנדסת. לראות גרמנית התפתחות אנא אל, עסקים טכניים אל צעד. מדעי וקשקש מונחים על עוד, ארץ החול ציור אל. ב מונחים תיקונים משופרות קרן, ויש לתרום לעריכה ביולוגיה דת.",
        init: '...initial content...',
    },
     images: [
        { value: "https://images.pexels.com/photos/6379672/pexels-photo-6379672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", init: "https://images.pexels.com/photos/6379672/pexels-photo-6379672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { value: "https://images.pexels.com/photos/18537377/pexels-photo-18537377/free-photo-of-child-on-inflatable-castle-with-slide.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", init: "https://images.pexels.com/photos/18537377/pexels-photo-18537377/free-photo-of-child-on-inflatable-castle-with-slide.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { value: "https://images.pexels.com/photos/18537377/pexels-photo-18537377/free-photo-of-child-on-inflatable-castle-with-slide.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", init: "https://images.pexels.com/photos/18537377/pexels-photo-18537377/free-photo-of-child-on-inflatable-castle-with-slide.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
};

export const AboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        editAbout: (
            state: AboutSlice<string>,
            action: PayloadAction<{ sectionName: keyof AboutSlice<string> | 'images'; index?: number; value: string }>
        ) => {
            const { sectionName, index, value } = action.payload;

            if (sectionName === 'images' && index !== undefined) {
                state.images[index].value = value;
            } else if (sectionName !== 'images') {
                state[sectionName].value = value;
            }
        },
    },
});

export const { editAbout } = AboutSlice.actions;
export default AboutSlice.reducer;