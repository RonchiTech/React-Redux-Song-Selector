import * as actionType from './actionTypes'

export const selectSong = (song) => {
    return {
        type: actionType.SELECTED_SONG,
        payload: song
    }
}