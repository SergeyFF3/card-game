import React, {createContext, FC, ReactElement, ReactNode} from "react";
import RootStore, {store} from "../store";

export const StoreContext = createContext<RootStore>(store);

export type StoreComponent = FC<{ children: ReactNode; }>;

export const StoreProvider: StoreComponent = ({
                                                  children,
                                              }): ReactElement => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

export default StoreProvider;