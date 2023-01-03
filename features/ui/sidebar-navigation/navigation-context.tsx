import React, { useState } from "react";

type NavigationContextProviderProps = {
  children: React.ReactNode;
};

const defaultContext = {
  isSidebarCollapsed: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleSidebar: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  triggerEmailClient: () => {},
};

export const NavigationContext = React.createContext(defaultContext);

export function NavigationProvider({
  children,
}: NavigationContextProviderProps) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(
    defaultContext.isSidebarCollapsed
  );

  return (
    <NavigationContext.Provider
      value={{
        isSidebarCollapsed,
        toggleSidebar: () => setSidebarCollapsed((isCollapsed) => !isCollapsed),
        triggerEmailClient: () => {
          location.href =
            "mailto:support@prolog-app.com?subject=Subject Request:";
        },
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
