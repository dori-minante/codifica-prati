import { useState } from 'react' // O useState é um hook do React que permite adicionar estado a componentes funcionais. Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo. No código acima, estamos importando o useState do React para poder utilizá-lo dentro do componente App.

function App() {
  const  [todos, setTodos] = useState([  // O useState é chamado com um array vazio como valor inicial, indicando que não há tarefas no início. A função setTodos é usada para atualizar o estado das tarefas quando necessário. O todos é um array que armazenará as tarefas adicionadas pelo usuário. 
    {     // Cada tarefa é representada como um objeto com três propriedades: id, texto e status. O id é um identificador único para cada tarefa, o texto é a descrição da tarefa e o status indica se a tarefa está concluída ou não.
      id: 1,
      texto: "Ir para a academia",
      categoria: "Exercícios",
      feito: false
    },
    {
      id: 2,
      texto: "Fazer tarefa do +PraTi",
      categoria: "Estudos",
      feito: false
    },
    {
      id: 3,
      texto: "Limpar a casa",
      categoria: "Diárias",
      feito: false
    }  
  ])

  const concluirTarefa = (id) => {
    setTodos(todos.map((todo) => // A função concluirTarefa é responsável por atualizar o estado das tarefas quando uma tarefa é concluída. Ela recebe o id da tarefa como argumento e utiliza a função setTodos para atualizar o estado do array de tarefas. A função map é usada para iterar sobre cada tarefa no array todos e verificar se o id da tarefa atual é igual ao id passado como argumento. Se for igual, a tarefa é atualizada com o operador spread (...) para criar uma cópia do objeto todo e alterar a propriedade feito para o valor oposto (true para false e vice-versa). Caso contrário, a tarefa permanece inalterada. O resultado é um novo array de tarefas atualizado, que é passado para a função setTodos para atualizar o estado do componente.
      todo.id === id ? { ...todo, feito: !todo.feito } : todo // O operador ternário é usado para verificar se o id da tarefa atual é igual ao id passado como argumento. Se for igual, a tarefa é atualizada com o operador spread (...) para criar uma cópia do objeto todo e alterar a propriedade feito para o valor oposto (true para false e vice-versa). Caso contrário, a tarefa permanece inalterada. O resultado é um novo array de tarefas atualizado, que é passado para a função setTodos para atualizar o estado do componente.
    ))
  }

  return <div className="App"> 
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo">
          <div className="conteudo">
            <input type="checkbox" 
            checked={todo.feito} 
            onChange={() => concluirTarefa(todo.id)} /> {/* O input do tipo checkbox é usado para marcar ou desmarcar uma tarefa como concluída. O atributo checked é definido com base no valor da propriedade feito da tarefa atual. Quando o usuário interage com o checkbox, a função concluirTarefa é chamada com o id da tarefa atual como argumento, atualizando o estado das tarefas. */}
            <p>{todo.texto}</p>
            <p>({todo.categoria})</p> 
          </div>
        </div>
      ))}    
    </div>
  </div>
    
}

export default App
