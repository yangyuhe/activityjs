import React from 'react';
export default class Model {
    private mounts;
    private update;
    private _getProps;
    private getProps;
    private proxyProps;
    mount(Com: any, props?: ({
        [key: string]: string;
    } | string[])): {
        new (p: any): {
            _setstate: Function;
            componentWillUnmount(): void;
            render(): JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
            forceUpdate(callback?: () => void): void;
            readonly props: Readonly<{}> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        };
        contextType?: React.Context<any>;
    };
    private isProtoFunc;
}
