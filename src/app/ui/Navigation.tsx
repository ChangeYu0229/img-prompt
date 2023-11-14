"use client";

import React, { useState } from "react";
import {
  BgColorsOutlined,
  ExperimentOutlined,
  ThunderboltOutlined,
  GithubOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Row, Col } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: <Link href='/'>MJ/SD 提示词</Link>,
    key: "/",
    icon: <BgColorsOutlined />,
  },
  {
    label: (
      <a
        href='https://ssw9noe1h6.feishu.cn/wiki/wikcnEoAKpXgcrmGQRBRvkcd1Ue'
        target='_blank'
        rel='noopener noreferrer'>
        Stable Diffusion 入门教程
      </a>
    ),
    key: "LearnData",
    icon: <ThunderboltOutlined />,
  },
  {
    label: (
      <a
        href='https://gptprompt.aigc369.com'
        target='_blank'
        rel='noopener noreferrer'>
        AI Prompt
      </a>
    ),
    key: "aishort",
    icon: <ExperimentOutlined />,
  },
  {
    label: (
      <a
        href='https://pd.qq.com/s/43ts2mp9l'
        target='_blank'
        rel='noopener noreferrer'>
        加入QQ频道
      </a>
    ),
    key: "aishort",
    icon: <ExperimentOutlined />,
  },

];

export function Navigation() {
  const pathname = usePathname();
  const [current, setCurrent] = useState(pathname);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Row justify='space-between' align='middle' gutter={16}>
      <Col xs={20} sm={18} md={16}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode='horizontal'
          items={items}
        />
      </Col>
    


    </Row>
  );
}
