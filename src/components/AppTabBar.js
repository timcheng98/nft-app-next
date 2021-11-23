import { Badge, TabBar, Popover, List } from "antd-mobile";
import { Button } from 'antd'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  AppstoreOutline,
  FireFill,
  GlobalOutline,
  GiftOutline,
  PieOutline,
  MoreOutline,
  ContentOutline,
} from "antd-mobile-icons";
import defaultStyles from "../core/theme/styles";
import Link from "next/link";

const AppTabBar = () => {
  const router = useRouter();
  const [activeKey, setActiveKey] = useState("home");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") return setActiveKey("home");
    if (router.pathname === "/mint") return setActiveKey("mint");
    if (router.pathname === "/collection") return setActiveKey("account");
    if (router.pathname === "/market") return setActiveKey("marekt");
    if (router.pathname === "/collection/[id]") return setActiveKey("marekt");
    if (router.pathname === "/traits") return setActiveKey("more");
    if (router.pathname === "/news") return setActiveKey("news");
  }, []);

  useEffect(() => {
    if (!clicked) return;
    if (activeKey === "home") return router.push("/");
    if (activeKey === "mint") return router.push("/mint");
    if (activeKey === "collection") return router.push("/account");
    if (activeKey === "market") return router.push("/marketplace");
    // if (activeKey === "rarity") return router.push("/traits");
  }, [activeKey, clicked]);

  const tabs = [
    {
      key: "home",
      title: <span style={defaultStyles.tabBarTitle}>Home</span>,
      icon: <AppstoreOutline />,
    },
    {
      key: "collection",
      title: <span style={defaultStyles.tabBarTitle}>Collection</span>,
      icon: <GiftOutline />,
    },
    {
      key: "mint",
      title: <span style={{
        ...defaultStyles.tabBarTitle,
        fontSize: 20,
        color: '#bd4f6c'
      }}>Mint</span>,
      icon: <Button shape="circle" className="fire" icon={<FireFill style={{ fontSize: 32, }} />} />,
    },
    {
      key: "market",
      title: <span style={defaultStyles.tabBarTitle}>Market</span>,
      icon: <GlobalOutline />,
    },
    {
      key: "more",
      title: <span style={defaultStyles.tabBarTitle}>More</span>,
      icon: () => {
        return (
          <Popover
            placement="top"
            content={
              <div style={{ width: 80 }}>
                <Link href="/news">
                  <h3 style={{ ...defaultStyles.tabBarTitle, cursor: "pointer" }}>
                    <ContentOutline style={{ marginRight: 5 }} />{' '} News
                  </h3>
                </Link>
                <Link href="/traits">
                  <h3 style={{ ...defaultStyles.tabBarTitle, cursor: "pointer" }}>
                    <PieOutline style={{ marginRight: 5 }} />{' '} Rarity
                  </h3>
                </Link>
              </div>
            }
          >
            <MoreOutline />
          </Popover>
        );
      },
    },
  ];

  return (
    <div
      style={{ position: "sticky", bottom: 0, background: "#fff", zIndex: 999 }}
    >
      <TabBar
        activeKey={activeKey}
        onChange={(value) => {
          setActiveKey(value);
          setClicked(true);
        }}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default AppTabBar;
