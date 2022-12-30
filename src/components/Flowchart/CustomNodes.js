import { useCallback } from "react";
import { Handle, Position } from "reactflow";

export function CustomNode({ data }) {
  const onChange = useCallback((e) => {
    console.log(e.target.value);
  }, []);
  return (
    <>
      <Handle type="source" position={Position.Top} />

      <div>
        <input id="input" name="text" onChange={onChange} />
      </div>
      <Handle type="target" position={Position.Bottom} />
    </>
  );
}
