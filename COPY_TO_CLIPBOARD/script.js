function selectText() {
    var text = document.getElementById('textBox1');

    text.select();
    text.setSelectionRange(0, 1000);
    navigator.clipboard.writeText(text.value);
}