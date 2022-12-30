import React from "react";
export default function InputField({ height, width, type, placeholder }) {
  const styles = {
    input: {
      height,
      width,
    },
  };
  return <input type={type} placeholder={placeholder} style={styles.input} />;
}
