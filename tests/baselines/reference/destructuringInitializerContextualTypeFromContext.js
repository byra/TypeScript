//// [destructuringInitializerContextualTypeFromContext.ts]
interface SFC<P = {}> {
    (props: P & { children?: any }): any | null;
}

interface Props {
    name: "Apollo" | "Artemis" | "Dionysus" | "Persephone";
}

const Parent: SFC<Props> = ({
    children,
    name = "Artemis",
    ...props
}) => Child({name, ...props});

const Child: SFC<Props> = ({
    children,
    name = "Artemis",
    ...props
}) => `name: ${name} props: ${JSON.stringify(props)}`;

//// [destructuringInitializerContextualTypeFromContext.js]
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var Parent = function (_a) {
    var children = _a.children, _b = _a.name, name = _b === void 0 ? "Artemis" : _b, props = __rest(_a, ["children", "name"]);
    return Child(__assign({ name: name }, props));
};
var Child = function (_a) {
    var children = _a.children, _b = _a.name, name = _b === void 0 ? "Artemis" : _b, props = __rest(_a, ["children", "name"]);
    return "name: " + name + " props: " + JSON.stringify(props);
};
