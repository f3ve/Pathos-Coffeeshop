import {createTheme} from "@material-ui/core";

export default function theme(mode) {
    return createTheme( {
        type: mode || 'light'
    })
}
