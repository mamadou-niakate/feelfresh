export function getOffsetY(el) {
    return el.offsetTop + window.scrollTo
}

export function getAbsoluteOffsetY(element){
    let top = 0,
    left = 0,
    width = 0,
    height = 0;

    let bound = element.getBoundingClientRect();
    height = bound.height;
    width = bound.width;

    do {
        bound = element.getBoundingClientRect();
        top += bound.top;
        left += bound.left;
        element = element.offsetParent;
        if (element !== null) {
        bound = element.getBoundingClientRect();
        top -= bound.top - window.scrollY;
        left -= bound.left - window.scrollX;
        }
    } while (element);
    
    // return {
    //     top: top,
    //     left: left,
    //     width: width,
    //     height: height
    // };
    return top
}