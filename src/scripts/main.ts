import '/src/assets/themes/base/styles/base.less';
import {Panel} from "./panel";

let panel;

export function closePanel(): void {
    panel = null;
}

const basketElement: HTMLDivElement = document.querySelector('.jsHeaderBasket');
basketElement.onclick = () => {
    if (!panel) {
        panel = new Panel();
    }
};
