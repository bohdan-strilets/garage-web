import { useLayoutStore } from "@app/layouts/AppLayout/model/useLayoutStore";

import { root, content } from "./AppLayout.css";
import { AppHeader } from "./ui/AppHeader";
import { AppSideBar } from "./ui/AppSideBar";
import { Header } from "./ui/Header";
import { Main } from "./ui/Main";
import { Sidebar } from "./ui/Sidebar";

import type { AppLayoutProps } from "./types/AppLayoutProps";

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { isSidebarOpen } = useLayoutStore();

  return (
    <>
      <div className={root} data-sidebar-open={isSidebarOpen}>
        <Sidebar>
          <AppSideBar />
        </Sidebar>
        <div className={content}>
          <Header>
            <AppHeader />
          </Header>
          <Main>{children}</Main>
        </div>
      </div>
    </>
  );
};
