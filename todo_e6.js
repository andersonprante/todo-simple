
class Todo extends Store {
  constructor() {
    super();
  }

  renderItem (item) {

    let template = `
    <div class="field is-grouped">
        <p class="control is-expanded">
            <input class="input" type="text" disabled value="${item.name}">
        </p>
        <p class="control">
            <a class="button is-info editar">
                <span class="icon is-small">
                    <i class="fas fa-edit"></i>
                </span>
            </a>
        </p>
        <p class="control">
            <a class="button is-danger deletar">
                <span class="icon is-small">
                    <i class="fas fa-times"></i>
                </span>
            </a>
        </p>
    </div>
    `

    let itemHTML = document.createRange().createContextualFragment(template)

    itemHTML.querySelector('.deletar').addEventListener('click', () => {
        lista.excluirIndex = item.idx
        componentList_v2(lista.todos)
    })

    let inputDesc = itemHTML.querySelector('.input')

    itemHTML.querySelector('.editar').addEventListener('click', (e) => {
        inputDesc.removeAttribute('disabled')
        inputDesc.focus()
        inputDesc.addEventListener('keyup', (f) => {
            if (f.keyCode === 13) {
                lista.editarIndex(item.idx, inputDesc.value)
                componentList_v2(lista.todos)
                valueItem.value = ''
                valueItem.focus()
                inputDesc.setAttribute('disabled', 'disabled')
            }
        })
    })

    return itemHTML
  }
}
