import React from "react";
export default class Activity {
    private mounts;
    private update;
    private _getProps;
    private getProps;
    private proxyProps;
    mountDynamic(Com: any, depth: string, props?: {
        [key: string]: string;
    } | string[]): typeof React.PureComponent;
    mount(Com: any, props?: {
        [key: string]: string;
    } | string[]): typeof React.PureComponent;
    private isProtoFunc;
}
