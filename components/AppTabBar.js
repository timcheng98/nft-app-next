import { Badge, TabBar, Popover, List } from "antd-mobile";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  AppstoreOutline,
  FireFill,
  GlobalOutline,
  GiftOutline,
  MoreOutline,
} from "antd-mobile-icons";
import defaultStyles from "../core/theme/styles";
import Link from 'next/link'

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
  }, []);

  useEffect(() => {
    if (!clicked) return;
    if (activeKey === "home") return router.push("/");
    if (activeKey === "mint") return router.push("/mint");
    if (activeKey === "collection") return router.push("/account");
    if (activeKey === "market") return router.push("/marketplace");
  }, [activeKey, clicked]);

  const tabs = [
    {
      key: "home",
      title: <span style={defaultStyles.tabBarTitle}>Home</span>,
      icon: <AppstoreOutline />,
    },
    {
      key: "mint",
      title: <span style={defaultStyles.tabBarTitle}>Mint</span>,
      icon: <FireFill />,
    },
    {
      key: "collection",
      title: <span style={defaultStyles.tabBarTitle}>Collection</span>,
      icon: <GiftOutline />,
    },
    {
      key: "market",
      title: <span style={defaultStyles.tabBarTitle}>Market</span>,
      icon: <GlobalOutline />,
    },
    {
      key: "more",
      title: <span style={defaultStyles.tabBarTitle}>More</span>,
      icon: (active) => {
        return (
          <Popover
            content={
              <div>
                <p>
                  <span style={{ fontSize: 12 }}>More</span>
                </p>
                <p>
                  <Link href="/traits">
                    <span style={{ fontSize: 12, cursor: 'pointer' }}>Rarity</span>
                  </Link>
                </p>
              </div>
            }
            placement='top'
            mode='light'
            trigger='click'
          >
            <MoreOutline />
          </Popover>
        );
      },
    },
  ];

  return (
    <div style={{ position: "sticky", bottom: 0, background: "#fff" }}>
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
