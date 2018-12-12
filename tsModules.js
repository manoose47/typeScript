"use strict";
//namespaces are kind of jank in Ts,
//Modules are from all accounts a much better system than namespaces in ts/es6
// You can reference any item that belongs to a different module, as long as it's been exported
Object.defineProperty(exports, "__esModule", { value: true });
//Exporting involves attaching the export tag to items of code, variables, functions and classes can be exported
// so in this case i'm grabbing the pi constant and the calculate circumference method straight out of the Math/circle.ts file
var circle_1 = require("./Math/circle");
circle_1.calcCircumference(21);
// but we'll need to add a moduleLoader to our node packages if we want to make use of imports and exports. cus its not standard to js yet.
// npm install --save systemjs@
// The module loader will give our js tools to understand the different module import keywords
// after installing the package, we need to update our index.html with a reference to systemjs, that tells the browser to associate our app.js file with our new system.js package
//# sourceMappingURL=tsModules.js.map