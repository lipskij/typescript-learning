export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        const button = document.createElement("button");
        button.innerText = "Delete";
        li.append(button);
        function eventHandler(event) {
            if (event.type === "click") {
                li.remove();
            }
        }
        button.addEventListener("click", eventHandler);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
