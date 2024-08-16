"use client";
import React from "react";
import { Button, Typography } from "antd";
import { useTheme } from "../_libs/utils/helper";
import { APP_COLOR } from "../_libs/utils/theme";

const Home = () => {
  const { theme } = useTheme();
  const { Text } = Typography;

  // console.log("theme : ", theme);
  // console.log("APP_COLOR : ", APP_COLOR);

  return (
    <div>
      <Button type="primary">Button</Button>

      <h1 style={{ color: theme.colorPrimary }}>Gun1</h1>

      <h1 className="font-roboto">Gun2</h1>

      <Text className="font-roboto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
        fuga libero minima repudiandae vero, voluptatum quisquam amet eos
        tempora veniam facilis commodi suscipit sapiente nisi consequuntur
        voluptate eius incidunt deleniti.
      </Text>
    </div>
  );
};

export default Home;
