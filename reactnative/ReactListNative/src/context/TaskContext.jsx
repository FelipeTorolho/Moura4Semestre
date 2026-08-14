import axios from "axios";
import { createContext, useState } from "react";


export const TaskContext = createContext()

// componet Global pra prover os dados das Tasks para a aplicação
export const TaskProvider = ({ children }) => {
    const [listagemTarefas, setListagemTarefas] = useState([]);
    const [taskValue, setTaskValue] = useState("");// dados do formulario
    const [editMode, setEditMode] = useState(false);
    const [idToEdit, setIdToEdit] = useState(0);

    const getTasks = async () => {
        try {
            const APIReturn = await axios.get("http://172.16.36.32:3000/taskpoint");
            const APIData = await APIReturn.data;
            setListagemTarefas(APIData);
        } catch (error) {
            console.log("Erro ao buscar os dados da API:");
            console.log(error);
        }
    }

    const postTask = async (novaTarefa) => {
        try {
            const APIReturn = await axios.post("http://172.16.36.32:3000/taskpoint", novaTarefa);
            setListagemTarefas((prev) => [...prev, APIReturn.data]);
        } catch (error) {
            console.log("Erro ao cadastrar a tarefa:");
            console.log(error);
        }
    }

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://172.16.36.32:3000/taskpoint/${id}`);
            getTasks()
        } catch (error) {
            console.log("Erro ao deletar na API");
            console.log(error);
        }
    }

    // vizualiza os dados da edição
    const putTaskPreview = () => {

    }

    // edita os dados na api
    const putTaskConfirm = async (tarefa) => {
        try {
            await axios.put(`http://172.16.36.32:3000/taskpoint/${tarefa.id}`, {
                descricao: tarefa.descricao,
            });
            getTasks();
            setTaskValue("")
            setIdToEdit(0)
            setEditMode(false)
            
            return true
        } catch (error) {
            console.log("Erro ao deletar na API");
            console.log(error);
            return false
        }
    }

    return (
        //envolve nossa aplicação ou componente que terá acesso aos
        // states, variaveis e funções dentro do provider
        <TaskContext.Provider
            value={{
                taskValue,
                setTaskValue,
                listagemTarefas,
                getTasks,
                postTask,
                deleteTask,
                putTaskPreview,
                putTaskConfirm,
                editMode,
                setEditMode,
                idToEdit,
                setIdToEdit
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}