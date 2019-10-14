var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h } from './core-0bf5ab64.js';
function format(first, middle, last) {
    return ((first || '') +
        (middle ? " " + middle : '') +
        (last ? " " + last : ''));
}
var QuestionController = /** @class */ (function () {
    function QuestionController() {
        this.questions = [];
    }
    QuestionController.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, response, json;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.questions.length != 0)) return [3 /*break*/, 1];
                        ;
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, fetch("http://localhost:5151/api-server/rest/v1/surveys/302")];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        json = _a.sent();
                        json.questions.map(function (question) {
                            _this.questions.push(question);
                        });
                        _a.label = 4;
                    case 4:
                        result = this.questions;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return QuestionController;
}());
var MyComponent = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.questionController = new QuestionController();
    }
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fetch("http://localhost:5151/api-server/rest/v1/surveys/302")];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _b.sent();
                        this.surveyId = json.id;
                        this.userId = json.userId;
                        _a = this;
                        return [4 /*yield*/, this.questionController.load()];
                    case 3:
                        _a.questions = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.getText = function () {
        return format(this.first, this.middle, this.last);
    };
    class_1.prototype.render = function () {
        return (h("div", null, h("div", null, "TRACER 14-OCT 09:45 Hello, World! I'm ", this.getText()), h("div", null, "survey id: ", this.surveyId), h("div", null, "user id: ", this.userId), this.questions.map(function (question) {
            return (h("div", null, h("h3", null, question.desc), h("p", null, "id: ", question.id, ", logicalName: ", question.logicalName)));
        })));
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { MyComponent as my_component };