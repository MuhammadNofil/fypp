import { positions } from "@mui/system";
import React, { useState, useRef } from "react";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";
const state = [
  {
    isDragging: false,
    x: 10,
    y: 10,
  },
];
const Drawingboard = () => {
  const [tool, setTool] = useState("pen");
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
    console.log(lines);
  };
  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };
  const handleMouseUp = () => {
    isDrawing.current = false;
  };
  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          <Text
            text="Some text on canvas"
            draggable
            x={state.x}
            y={state.y}
            fontSize={15}
          />
          <Rect
            draggable
            x={state.x}
            y={state.y}
            width={100}
            height={100}
            fill="red"
            shadowBlur={10}
          />
          <Circle draggable x={state.x} y={state.y} radius={50} fill="green" />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.tool === "eraser" ? "destination-out" : "source-over"
              }
            />
          ))}
        </Layer>
      </Stage>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="none">Pen</option>
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>
    </>
  );
};

export default Drawingboard;
