/**
 * 绑定model的值到组件
 * @param propertyMap 通过{key:()=>any}的形式指定可响应式的属性, key是传递给组件的属性名，值是()=>any执行的结果，值也可以直接是一个非函数的任意值
 * @param Com 被连接的组件
 * @returns 返回新的组件
 */
export declare function connect(propertyMap: {
    [key: string]: (() => any) | any;
}, Com: any): any;
/**通过代理实现对数据变换的监听 */
export declare function watch<T>(model: T): T;
/**
 * hook支持，fn的计算结果将作为值返回
 * @param fn
 * @returns fn的计算结果
 */
export declare function useActivity(fn: any): void;
