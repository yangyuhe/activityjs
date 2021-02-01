/**
 * 连接多个model
 * @param models 是connect方法的第一个参数的数组
 * @param Com 组件
 */
export declare function connectMulti(modelUses: any[], Com: any): any;
export declare function connect(modelUse: any[], Com: any): any;
/**
 *
 * @param modelUse
 * 1.使用model A的foo属性，[A,'foo'];
 *
 * 2.使用model A的foo属性作为自己的bar属性，[A,{bar:'foo'}];
 *
 * 3.使用model A的foo属性和bar属性, [A, 'foo','bar'];
 *
 * 4.使用model A里的model B的foo属性,[[A,"B"],"foo"]
 * @param Com 组件
 */
export declare function realConnect(modelUse: any[], Com: any): any;
