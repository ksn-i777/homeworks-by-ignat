type changeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}

export type StateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): StateType => { //+ fix any
    switch (action.type) {
        //+ дописать
        case 'SET_THEME_ID':
            return {themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id } as const) //+ fix any
