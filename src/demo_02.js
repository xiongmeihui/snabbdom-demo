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
var container = document.getElementById("container");
var vnode1 = h(
  "div",
  {
    hook: {
      pre: () => console.log("vnode1, pre"),
      init: () => console.log("vnode1, init"),
      create: () => console.log("vnode1, create"),
      insert: () => console.log("vnode1, insert"),
      prepatch: () => console.log("vnode1, prepatch"),
      update: () => console.log("vnode1, update"),
      postpatch: () => console.log("vnode1, postpatch"),
      destory: () => console.log("vnode1, destory"),
      remove: () => console.log("vnode1, remove"),
      post: () => console.log("vnode1, post")
    }
  },
  [
    h(
      "div",
      {
        hook: {
          pre: () => console.log("vnode1 inner div, pre"),
          init: () => console.log("vnode1 inner div, init"),
          create: () => console.log("vnode1 inner div, create"),
          insert: () => console.log("vnode1 inner div, insert"),
          prepatch: () => console.log("vnode1 inner div, prepatch"),
          update: () => console.log("vnode1 inner div, update"),
          postpatch: () => console.log("vnode1 inner div, postpatch"),
          destory: () => console.log("vnode1 inner div, destory"),
          remove: () => console.log("vnode1 inner div, remove"),
          post: () => console.log("vnode1 inner div, post")
        }
      },
      [
        h(
          "span",
          {
            hook: {
              pre: () => console.log("vnode1 inner span, pre"),
              init: () => console.log("vnode1 inner span, init"),
              create: () => console.log("vnode1 inner span, create"),
              insert: () => console.log("vnode1 inner span, insert"),
              prepatch: () => console.log("vnode1 inner span, prepatch"),
              update: () => console.log("vnode1 inner span, update"),
              postpatch: () => console.log("vnode1 inner span, postpatch"),
              destory: () => console.log("vnode1 inner span, destory"),
              remove: () => console.log("vnode1 inner span, remove"),
              post: () => console.log("vnode1 inner span, post")
            }
          },
          "Hello"
        )
      ]
    )
  ]
);
var vnode2 = h(
  "div",
  {
    hook: {
      pre: () => console.log("vnode2, pre"),
      init: () => console.log("vnode2, init"),
      create: () => console.log("vnode2, create"),
      insert: () => console.log("vnode2, insert"),
      prepatch: () => console.log("vnode2, prepatch"),
      update: () => console.log("vnode2, update"),
      postpatch: () => console.log("vnode2, postpatch"),
      destory: () => console.log("vnode2, destory"),
      remove: () => console.log("vnode2, remove"),
      post: () => console.log("vnode2, post")
    }
  },
  []
);
/**
 * 如果传入的第一个参数是个 DOM 元素，第二个参数会被转换成 DOM 节点 然后替换第一个参数所代表的 DOM元素
 * 如果传入的第一个参数是个 vnode，snabbdom 将会将它修改成新 vnode 的样子
 */
patch(container, vnode1);
patch(vnode1, vnode2);

