import { Select } from "@react-three/drei";
import React, { useState } from "react";

const Price = () => {
  const [hovered, setHovered] = useState(null);
  return <Select enabled={setHovered}></Select>;
};

export default Price;
