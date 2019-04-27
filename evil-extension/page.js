const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
    // TODO(you): Implement this function! See HW spec for details.
    var i,j;
    var text=[];
    if(node.nodeType === Node.TEXT_NODE)
    {
        var contain=node.textContent;
        for (i of contain.split(" "))
        {
            console.log(i);
            for (j of Object.keys(MATCH_LIST))
            {
                if(i == j+"\n" || i==j )
                {
                    i=MATCH_LIST[j];
                    break;
                }
            }
            text = text + i + ' ';
        }
        node.textContent=text;
    }
    for (const cnode of node.childNodes )
    {
        if (cnode==="STYLE" || cnode==="SCRIPT")
        {
            continue;
        }
        transformTextNodes(cnode);
    }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
