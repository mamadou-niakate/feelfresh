
export function getOffsetY( element ) {
    return element?.getBoundingClientRect().top;
}

export function getOffsetTop(element) {
    let offsetTop = 0;
    while(element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent;
    }

    console.log(offsetTop);

    return offsetTop;
  }