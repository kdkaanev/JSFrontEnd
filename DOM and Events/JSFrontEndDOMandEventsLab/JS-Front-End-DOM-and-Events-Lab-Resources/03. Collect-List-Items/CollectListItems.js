function extractText() {
    const nodes = Array.from(document.querySelectorAll('#items > li'))
    const textArea = document.querySelector('#result')

    nodes.forEach((li) => {
        textArea.textContent += li.textContent + '\n'
    });
}
