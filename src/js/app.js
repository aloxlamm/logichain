import ('../css/styles.css');
import('../../node_modules/@fortawesome/fontawesome-free/')
import * as router from "./router.js";
import { initPage } from "./controller.js";

// custom elements
import Lc_Sidebar from './lc_Sidebar.js';

const _API= 'sbhack/';



// routing....
router.add(/container/, () =>{
    alert()
    initPage();
});

router.add(/messenger/, () =>{
    initPage();
});

router.add(/dashboard/, () =>{
    initPage();
});

console.log(router.getRoutes());
router.listen();


// start
initPage()


export function getAPI(){
    return _API;
}