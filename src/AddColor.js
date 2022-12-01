import { useState } from 'react';

export function AddColor() {
    const [color, setColor] = useState("");
    const [colorList, setColorList] = useState([]);

    const styles = { backgroundColor: color, flexGrow: 1 };
    return (<div className="color-game-container">
        <div style={{ display: "flex", gap: "20px" }} className="color-input-wrapper">
            <input onChange={(event) => setColor(event.target.value)} value={color} style={styles} type="text" placeholder='enter color' />
            <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
        </div>
        <div className="colors-container">
            {colorList.map((clr) => <ColorBox color={clr}></ColorBox>)}
        </div>

    </div>);
}
function ColorBox({ color }) {
    const styles = {
        width: "25px", height: "25px", backgroundColor: color, margin: "10px", borderRadius: "50%", outline: `2px solid ${color} `, outlineOffset: "5px"
    };

    return (<div style={styles}>

    </div>);
}
