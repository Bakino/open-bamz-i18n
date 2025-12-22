export function localizeDOM(node, i18n) {
    if (node.nodeType === 3/*Node.TEXT_NODE*/) {
        const originalText = node.nodeValue;
        const localizedText = originalText.replace(/tr\((.*?)\)/g, (_, text) => i18n.t(text));
        if (originalText !== localizedText) {
            node.nodeValue = localizedText;
        }
    } else if (node.nodeType === 1 /*Node.ELEMENT_NODE*/ || node.nodeType === 11 /*Node.DOCUMENT_FRAGMENT_NODE*/) {
        // Traverse child nodes
        node.childNodes.forEach(node=>localizeDOM(node, i18n));

        // Check and localize attributes
        if (node.attributes) {
            for (let i = 0; i < node.attributes.length; i++) {
                const attr = node.attributes[i];
                if (attr.value) {
                    attr.value = attr.value.replace(/tr\((.*?)\)/g, (_, text) => i18n.t(text));
                }
            }
        }
    }
}

export function extractTranslationStrings(jsCode) {
    const regex = /tr\(\s*(?:(['"`])([^'"`]+?)\1|([^),()]+))\s*(?:,\s*\{[^}]*\})?\s*\)/g;
    const matches = [];
    let match;

    while ((match = regex.exec(jsCode)) !== null) {
        // Check which capturing group matched and push the appropriate result
        matches.push(match[2] || match[3]);
    }

    return matches;
}