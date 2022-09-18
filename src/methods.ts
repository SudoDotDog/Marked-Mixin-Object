/**
 * @author WMXPY
 * @namespace MarkedMixinObject
 * @description Methods
 */

export const MarkedObjectMixinMethods: Record<string, any> = {

    keys: (object: any): string[] => {
        return Object.keys(object);
    },
    values: (object: any): any[] => {
        return Object.values(object);
    },
    entries: (object: any): Array<[string, any]> => {
        return Object.entries(object);
    },
};
