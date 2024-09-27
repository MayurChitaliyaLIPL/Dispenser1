import React, { ReactNode } from "react";
import { ThemedLayoutV2 } from "@refinedev/mui";
import Layout from "./Layout";

interface CombinedLayoutProps {
    Header: React.ComponentType;
    children: ReactNode;
}

export const CombinedLayout: React.FC<CombinedLayoutProps> = ({ Header, children }) => {
    return (
        <ThemedLayoutV2 Header={Header}>
           <Layout>
             {children}
           </Layout>
        </ThemedLayoutV2>
    );
};