import React from 'react';
export default class Model {
    private mounts;
    private update;
    private _getProps;
    private getProps;
    private proxyProps;
    mount(Com: any, props?: ({
        [key: string]: string;
    } | string[])): typeof React.PureComponent;
    private isProtoFunc;
}
