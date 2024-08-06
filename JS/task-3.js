function getElementWidth(content, padding, border) {
    const parseContent = Number.parseFloat(content);
    const parsePadding = Number.parseFloat(padding);
    const parseBorder = Number.parseFloat(border);

    return parseContent + 2 * parsePadding + 2 * parseBorder; 
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200