import * as container from "./container.js";
import * as messenger from "./messenger.js";
import * as dashboard from "./dashboard.js";
import { getFragment, replace } from "./router.js";

const valid_routres = ['container', 'messenger', 'dashboard'];


export function initPage() {
    const fragment = getFragment(0);
    if (fragment === 'dashboard'){
        dashboard.init();
    }else if (fragment === 'container') {
        container.init();
    } else if (fragment === 'messenger') {
        messenger.init();
    } else {
        replace('dashboard');
        dashboard.init();
    }
}

