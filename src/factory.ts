/**
 * @author WMXPY
 * @namespace MarkedMixinObject
 * @description Factory
 */

import { MarkedExportsMixinFactory } from "@sudoo/marked-mixin";
import { MarkedObjectMixinMethods } from "./methods";

export const objectMixinFactory = MarkedExportsMixinFactory.fromExports(
    MarkedObjectMixinMethods
);
