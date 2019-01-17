import Vue from 'vue';
import Router from 'vue-router';

    
import _15476948269229d49a922ebc8a6d77ca82c0a74289b98 from '@/pages/Appshell.vue';
    

    
import _1547694826922f7fc7554d202a317883db2ae067316d3 from '@/pages/detail/_id.vue';
    

    
import _1547694826922d2462dcf0c7beccd286c658e08187914 from '@/pages/Error.vue';
    

    
import _154769482692267830448037326425509e44bce7632b7 from '@/pages/Index.vue';
    

    
import _1547694826922038de326b0270e97f9eef95b6bc74ed7 from '@/pages/Search.vue';
    


let routes = [
    {
        "path": "/appshell",
        "component": _15476948269229d49a922ebc8a6d77ca82c0a74289b98,
        "meta": {},
        "name": "appshell"
    },
    {
        "path": "/detail/:id",
        "component": _1547694826922f7fc7554d202a317883db2ae067316d3,
        "meta": {},
        "name": "detailId"
    },
    {
        "path": "/",
        "component": _154769482692267830448037326425509e44bce7632b7,
        "meta": {},
        "name": "index"
    },
    {
        "path": "/search",
        "component": _1547694826922038de326b0270e97f9eef95b6bc74ed7,
        "meta": {},
        "name": "search"
    },
    {
        "path": "/error",
        "component": _1547694826922d2462dcf0c7beccd286c658e08187914,
        "meta": {},
        "name": "error",
        "alias": "*"
    }
];

Vue.use(Router);


/**
 * to 如果在这个列表中，始终采用从左到右的滑动效果，首页比较适合用这种方式
 *
 * @type {Array.<string>}
 * @const
 */
const ALWAYS_BACK_PAGE = ["index"];

/**
 * to 如果在这个列表中，始终采用从右到左的滑动效果
 *
 * @type {Array.<string>}
 * @const
 */
const ALWAYS_FORWARD_PAGE = [];

/**
 * 历史记录，记录访问过的页面的 fullPath
 *
 * @type {Array.<string>}
 */
let HISTORY_STACK = [];

/**
 * 用于存储历史记录到localStorage的key
 *
 * @type {String}
 * @const
 */
const LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY = 'LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY';

/**
 * 用于存储历史state记录到localStorage的key
 *
 * @type {String}
 * @const
 */
const LAVAS_HISTORY_STATE_STACK_LOCAL_KEY = 'LAVAS_HISTORY_STATE_STACK_LOCAL_KEY';

/**
 * 使用history API记录的state数组
 *
 * @type {Array}
 */
let HISTORY_STATE_STACK = [];

let supportHistory = false;

if (process.env.VUE_ENV === 'client') {

    // 是否支持history
    supportHistory = window.history && 'state' in history;

}

function getHistoryStateKey() {
    return history.state ? history.state.key : '';
}

// 存储数据到本地
function saveHistoryToLocal(key, data) {
    try {
        localStorage.setItem(key, typeof data === 'object' ? JSON.stringify(data) : data);
    }
    catch (err) {

    }
}

// 初始化history state
function initHistoryStateStack() {
    // 如果当前tab有历史条目，那么应该把之前存储的state list读取出来
    if (history.length > 1) {
        try {
            let historyState = JSON.parse(localStorage.getItem(LAVAS_HISTORY_STATE_STACK_LOCAL_KEY));
            if (historyState && historyState.length) {
                // 为了有效控制localStorage大小，每次读取时应该只读取不大于当前tab历史条目长度
                // 因为大于历史条目长度之前的记录都是过期的state，无需读取
                HISTORY_STATE_STACK = historyState.slice(-history.length);
            }
        }
        catch (err) {

        }
    }

    setTimeout(() => {
        // 首次访问的页面也要加入列表中，但要注意如果当前页面访问过（刷新）则应该替换
        if (HISTORY_STATE_STACK.length) {
            HISTORY_STATE_STACK[HISTORY_STATE_STACK.length - 1] = getHistoryStateKey();
        }
        else {
            HISTORY_STATE_STACK.push(getHistoryStateKey());
        }
    }, 300);

}

// 初始化history array
function initHistoryArrayStack(routerBase) {

    let firstPageFullPath = location.href.replace(location.origin + routerBase, '/');

    try {
        // 如果localStorage中有历史访问记录，且最新一条和当前访问的是同一个页面
        // 那应该把之前的记录也加进来，主要解决在访问过程中刷新导致history列表丢失的问题
        let historyStack = JSON.parse(localStorage.getItem(LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY));
        if (
            historyStack
            && historyStack.length
            && historyStack[historyStack.length - 1] === firstPageFullPath
        ) {
            HISTORY_STACK = historyStack;
        }
    }
    catch (err) {

    }

    // 首次访问的页面也要加入列表中
    if (HISTORY_STACK.indexOf(firstPageFullPath) === -1) {
        HISTORY_STACK.push(firstPageFullPath);
    }
}

/**
 * 用path记录判断当前是否是前进，true 表示是前进，否则是回退
 *
 * @param {Object} to 目标 route
 * @param {Object} from 源 route
 * @return {boolean} 是否表示返回
 */
function isForwardByArray(to, from) {

    // 根据 fullPath 判断当前页面是否访问过，如果访问过，则属于返回

    let index = HISTORY_STACK.indexOf(to.fullPath);
    if (index !== -1) {

        HISTORY_STACK.length = index + 1;
        return false;
    }

    return true;

}

/**
 * 用history state判断当前是否是前进，true 表示是前进，否则是回退
 *
 * @return {boolean} 是否表示返回
 */
function isForwardByHistory() {

    // 如果访问的页面state和之前访问过的页面相同，则属于返回

    let index = HISTORY_STATE_STACK.indexOf(getHistoryStateKey());

    if (index !== HISTORY_STATE_STACK.length - 1 && index !== -1) {
        HISTORY_STATE_STACK.length = index + 1;
        return false;
    }

    return true;
}

/**
 * 判断当前是否是前进，true 表示是前进，否则是回退
 *
 * @param {Object} to 目标 route
 * @param {Object} from 源 route
 * @return {boolean} 是否表示返回
 */
function isForward(to, from) {

    let res = true;

    // 使用history判断
    if (supportHistory) {
        res = isForwardByHistory();

        // 存储至localStorage
        setTimeout(() => {

            // 如果页面没访问过则把state加进来
            let pageKey = getHistoryStateKey();
            let index = HISTORY_STATE_STACK.indexOf(pageKey);
            if (res && index === -1) {

                HISTORY_STATE_STACK.push(pageKey);
            }

            saveHistoryToLocal(LAVAS_HISTORY_STATE_STACK_LOCAL_KEY, HISTORY_STATE_STACK);
        }, 300);
    }
    // 使用array判断
    else {
        res = isForwardByArray(to, from);

        if (res) {
            // 将 to.fullPath 加到栈顶
            HISTORY_STACK.push(to.fullPath);
        }

        saveHistoryToLocal(LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY, HISTORY_STACK);
    }

    // 以下属于强行更改方向系列
    // to 如果在这个列表中，始终认为是后退
    if (to.name && ALWAYS_BACK_PAGE.indexOf(to.name) !== -1) {

        res = false;
    }
    // 如果在这个列表中，始终认为是前进
    else if (to.name && ALWAYS_FORWARD_PAGE.indexOf(to.name) !== -1) {
        res = true;
    }

    return res;
}



const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};



export const keepAlivePages = routes.filter(route => route.keepAlive || route.meta.keepAlive)
                            .map(route => route.name);

export function createRouter() {
    let router = new Router({
        mode: 'history',
        base: '/',
        scrollBehavior,
        routes
    });



    
    if (process.env.VUE_ENV === 'client') {
        if (supportHistory) {
            initHistoryStateStack();
        }
        else {
            initHistoryArrayStack(router.options.base);
        }
    }
    

    router.beforeEach((to, from, next) => {
        if (router.app.$store) {
            if (router.app.$store.state.pageTransition.enable) {
                
                let effect = isForward(to, from) ? 'slide-left'
                    : 'slide-right';
                
                router.app.$store.commit('pageTransition/setType', 'slide');
                router.app.$store.commit('pageTransition/setEffect', effect);
            }
        }
        next();
    });


    return router;
}
