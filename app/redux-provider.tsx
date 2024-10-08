"use client";

import store from "@/redux/store";
import { PropsWithChildren } from "react";

import { Provider } from "react-redux";


export default function ReduxProvider({ children }: PropsWithChildren<any>) {
  return <Provider store={store}>{children}</Provider>;
}
