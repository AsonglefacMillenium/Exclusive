"use client";

import store from "@/redux/store";
//import {store} from "@/redux/store";
import { PropsWithChildren } from "react";

import { Provider } from "react-redux";

//import store  from "../store/store"; // tweak the path please

export default function ReduxProvider({ children }: PropsWithChildren<any>) {
  return <Provider store={store}>{children}</Provider>;
}
