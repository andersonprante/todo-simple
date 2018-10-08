const valueItem = document.getElementById('itemValue')
const divLista = document.getElementById('lista')
const itensRenderizados = document.getElementById('itensRenderizados')

let lista = new Todo()

let componentList_v2 = (items) => {
    itensRenderizados.innerHTML = ''
    items.forEach((i, idx) => {
        let item = {
            name: i,
            idx
        }
        itensRenderizados.appendChild(lista.renderItem(item))
    })
}

valueItem.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        lista.novoItem = valueItem.value
        componentList_v2(lista.todos)
        valueItem.value = ''
        valueItem.focus()
    }
})

window.onload = () => componentList_v2(lista.todos)
