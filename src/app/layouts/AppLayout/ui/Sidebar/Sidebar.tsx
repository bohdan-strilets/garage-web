import { useLayoutStore } from "@app/layouts/AppLayout/model/useLayoutStore";

import { root } from "./Sidebar.css";

import type { SidebarProps } from "./types/SidebarProps";

export const Sidebar = ({ children }: SidebarProps) => {
  const { isSidebarOpen } = useLayoutStore();
  const dataSidebarOpen = isSidebarOpen ? "true" : undefined;

  return (
    <aside className={root} data-sidebar-open={dataSidebarOpen}>
      {children}
    </aside>
  );
};
