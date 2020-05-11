import { createMuiTheme } from "@material-ui/core/styles"

export default theme =>
 createMuiTheme({
   ...theme,
   palette: {
     type: 'dark',
     primary: {
       main: "#ff0000",
   },
 },
})
