import { useEffect, useState } from 'react'
import './App.css'
import penIcon from "./assets/boxicons_pencil.svg"
import trashIcon from "./assets/Vector.svg"
import axios from 'axios'



function App() {

  //States / Variáveis
  const [tasklist, setTaskList] = useState([])
  const [taskValue, setTaskValue] = useState("") 
  const [editMode, setEditMode] = useState(false)
  const [idToEdit, setIdToEdit] = useState(0)

  // Funções
  // CRUD - Post Get Put/Patch Delete
  // Get - busca todas as tarefas
  const getTasks = async () => {
    try {
      const APIReturn = await axios.get("http://localhost:3000/taskpoint")
      const APIData = await APIReturn.data
      //atualiza o state
      setTaskList(APIData)
    } catch (error) {
      console.log(error)

    }
  }

  // Get{id} - busca uma tarefa po id
  const getTaskByID = async (id) => {
    alert(`Função getTasksByID ainda não implementada ${id}`)
  }
  // Post - cadastra uma tarefa
  const postTask = async (e) => {
    e.preventDefault() // evita/captura o evento submit
    if (taskValue.trim().length == 0) {
      alert("Preencher o campo valor")
      return false
    }
    // passou pela validação, vamos cadastrar
    try {
      const APIReturn = await axios.post("http://localhost:3000/taskpoint", {
        descricao: taskValue
      })

      setTaskValue("") // limpa o campo de entrada
      getTasks()
    } catch (error) {
      alert("Erro ao cadastrar os dados")
    }

  }

  // Put - Pré-Editar (mostra os dados no formulário)
  const putTask = (id) => {
    const taskToEdit = tasklist.find((task) => task.id === id)

    if (!taskToEdit) {
      alert("Tarefa não encontrada")
      return
    }

    setEditMode(true)
    setIdToEdit(id)
    setTaskValue(taskToEdit.descricao)
  }

  // Put - atualiza uma tarefa
  const confirmPutTask = async (e) => {
    e.preventDefault()
    // valida o formulário
    if (taskValue.trim().length == 0) {
      alert("Preencher o campo valor")
      return false;
    }
    try {
      await axios.put(`http://localhost:3000/taskpoint/${idToEdit}`, {
        descricao: taskValue
      })

      setEditMode(false)
      setIdToEdit(0) // limpa o id do item a ser editado
      setTaskValue("") // limpa o campo de entrada
      getTasks()
    } catch (error) {
      alert("Erro ao atualizar os dados")
      console.log(error)
    }
  }

  // Delete - apaga uma tarefa
  const deleteTask = async (id) => {
    // pergunta de confirmação
    const querExcluir = confirm("Deseja realmente excluir a tarefa?")
    if (!querExcluir) return false;


    try {
      const APIReturn = await axios.delete(`http://localhost:3000/taskpoint/${id}`)
      alert("Tarefa excluida com sucesso")
      getTasks()
    } catch (error) {
      alert("Erro ao excluir a tarefa")
    }
  }

  //Effects e ciclos de vida do componente

  // onMount - quando o componente for montado
  useEffect(() => {
    // carrega os dados quando o componente for montado!
    getTasks()
  }, [])
  //JSX
  return (
    <>
      <header className="header-section">
        <h1 className="header-section__title">React List</h1>
      </header>

      <main className="body-section">
        {/* formulario de cadastro da tarefa - cadastra ou edita */}
        <form className="cad-task" onSubmit={editMode ? confirmPutTask : postTask}>
          <input
            className="card-task__entry"
            type="text"
            placeholder="Adicione uma tarefa"
            // recebe o valor do state
            value={taskValue}
            onChange={(e) => { setTaskValue(e.target.value) }}
          />
          <button className="card-task__btn-confirm"> {editMode ? "Editar" : "Adicionar"}</button>
         {editMode && <button className="card-task__btn-cancel" onClick={() => {
            setEditMode(false)
            setIdToEdit(0)
            setTaskValue("")
          }}>Cancelar</button>}
        </form>

        <section className="cardlist">

          {
            tasklist.map((t) => {
              return (
                <article className="cardtask" key={t.id}>
                  <p className="cardtask__tasc-text">{t.descricao}</p>
                  <div className="cardtask__icon-box">
                    <div className="cardlist__icon">
                      <img
                        src={penIcon}
                        className="cardlist__edit-icon"
                        alt="imagem de um lapis. função de edição"
                        onClick={() => {
                          putTask(t.id)
                        }}
                      />
                    </div>

                    <div className="cardlist__icon">
                      <img
                        src={trashIcon}
                        className="cardlist__delete-icon"
                        alt="imagem de um lixeira. função de exclusão"
                        onClick={() => {
                          deleteTask(t.id)
                        }}
                      />
                    </div>
                  </div>
                </article>
              )
            })
          }

        </section>
      </main>

      <footer className="footer-list">
        <p className="footer-list__right-text">2026, React List - Todos os direitos reservados</p>
      </footer>
    </>
  )
}

export default App
