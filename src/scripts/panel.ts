import {closePanel} from "./main";

export class Panel {
    private wrapperElement: HTMLElement;

    constructor() {
        const template: HTMLTemplateElement = document.getElementById("row") as HTMLTemplateElement;
        this.wrapperElement = document.getElementById("row-wrapper");
        const content: DocumentFragment = document.importNode(template.content, true);
        const closeElement: HTMLDivElement = content.querySelector('.jsPanelCloseIcon');
        closeElement.onclick = () => {
            closePanel();
            this.wrapperElement.innerHTML = '';
        };
        content.querySelector('.jsPanelText').innerHTML = "Note: here could be your popup!";
        this.wrapperElement.appendChild(content);
    }
}
