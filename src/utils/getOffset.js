export function getOffsetY(el) {
    return el.offsetTop + window.scrollTo
}

export function getAbsoluteOffsetY(element){
    let top = 0;
    let bound = element.getBoundingClientRect();
    
    do {
        bound = element.getBoundingClientRect();
        top += bound.top;
        element = element.offsetParent;
        if (element !== null) {
            bound = element.getBoundingClientRect();
            top -= bound.top - window.scrollY;;
        }
    } while (element);

    return top
}