var snabbdom = require("snabbdom");
/**
 * patch 函数第一个参数为 DOM 元素或者 vnode
 * 第二个参数是待更新的 vnode
 */
var patch = snabbdom.init([
  // Init patch function with chosen modules
  require("snabbdom/modules/class").default, // makes it easy to toggle classes
  require("snabbdom/modules/props").default, // for setting properties on DOM elements
  require("snabbdom/modules/style").default, // handles styling on elements with support for animations
  require("snabbdom/modules/eventlisteners").default // attaches event listeners
]);

var h = require("snabbdom/h").default; // helper function for creating vnodes
var toVNode = require("snabbdom/tovnode").default; // 将 DOM 节点转换成 vnode

var container = document.getElementById("container");
var someFn = e => console.log(1);
var anotherEventHandler = e => console.log(2);

var vnode = h("div#container.two.classes", { on: { click: someFn } }, [
  h("span", { style: { fontWeight: "bold" } }, "This is bold"),
  " and this is just normal text",
  h("a", { props: { href: "/foo" } }, "I'll take you places!")
]);
console.log(vnode);
// Patch into empty DOM element – this modifies the DOM as a side effect
/**
 * 如果传入的第一个参数是个 DOM 元素，第二个参数会被转换成 DOM 节点 然后替换第一个参数所代表的 DOM元素
 * 如果传入的第一个参数是个 vnode，snabbdom 将会将它修改成新 vnode 的样子
 */
console.log(toVNode(container));
patch(container, vnode);

var newVnode = h(
  "div#container.two.classes",
  { on: { click: anotherEventHandler } },
  [
    h(
      "span",
      { style: { fontWeight: "normal", fontStyle: "italic" } },
      "This is now italic type"
    ),
    " and this is still just normal text",
    h("a", { props: { href: "/bar" } }, "I'll take you places!")
  ]
);
console.log(newVnode);
// Second `patch` invocation
patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state

// // to unmount from the DOM and clean up, simply pass null
// patch(newVnode, null);
