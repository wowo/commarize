function commarize() {
    const input = document.getElementById('input').value;
    const quote = document.getElementById('quote').checked;
    const trim = document.getElementById('trim').checked;
    let output = input;
    if (trim) {
        output = output.replace(/\s+\n/g, '\n');
    }
    output = output.replace(/\n/g, ', ');
    output = output.replace(/, ?$/, '');
    if (quote) {
        output = output.replace(/, /g, '\', \'');
        output = output.replace(/^/, '\'');
        output = output.replace(/$/, '\'');
    }
    document.getElementById('output').value = output;
    document.getElementById('count').innerHTML = (input.match(/\n/g) || []).length + 1;
}
function clipboard() {
    const copyText = document.getElementById('output');

    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand('copy');
}
