import jsx from 'https://cdn.skypack.dev/hyperapp-jsx-pragma' //@jsx jsx
import colors from "./color-dictionary.js"
 
const hexToRgb = hex => {
  const num = parseInt(hex.replace(/^#/, ""), 16)
  return [num >> 16, num >> 8 & 255, num & 255]
}
 
const isDark = rgb => Math.round((
  parseInt(rgb[0]) * 299 +
  parseInt(rgb[1]) * 587 +
  parseInt(rgb[2]) * 114) / 1000) <= 140
 
export default ({currentColor, onChangeColor}) => {
  const topRow =
    <div style={{
      outline:"1px green solid",
      display: "flex",
      order: 1,
      margin: "5px 0",
    }}>
      {Object.keys(colors).map(key =>
        <div
          onmouseover={[onChangeColor, key]}
          style={{
            boxSizing: "border-box",
            order: 1,
            backgroundColor: colors[key][500],
            width: "10%",
            height: '20px',
            cursor: "pointer",
            border: key === currentColor ? "2px solid white" : "none"
          }}>
        </div>
      )}
    </div>
 
  const bottomRow =
    <div style={{
      display: "flex",
      flexDirection: "column",
      order: 2
    }}>
      {Object.keys(colors[currentColor]).reverse().map(shade =>
        <div
          style={{
            backgroundColor: colors[currentColor][shade],
            height: "8%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 20px",
            color: isDark(hexToRgb(colors[currentColor][shade])) ? "white" : "black"
          }}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontFamily: "sans-serif",
            fontWeight: "800"
          }}>
            <div>{colors[currentColor][shade]}</div>
            <div>{shade}</div>
          </div>
        </div>
      )}
    </div>
 
 
  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      {topRow}
      {bottomRow}
    </div>)
}
 