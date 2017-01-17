angular.module('mainApp', [])
  .controller('mainController', function($scope) {
    
    //Insere uns itens iniciais    
    $scope.todos = [
      {texto:'Aprender Angular', concluida:true},
      {texto:'Estudar Inglês', concluida:false}];

	//Adicionando uma nova Todo
    $scope.adicionar = function() {
      //Adiciona o item na variável Todos
	  $scope.todos.push({texto:$scope.novoTexto, concluida:false});
	  
	  //Limpa o campo após adicionar
      $scope.novoTexto = '';
    };

	//Contador de lembretes
    $scope.lembretes = function() {
      var total = 0;
      angular.forEach($scope.todos, function(todo) {
        total += todo.concluida ? 0 : 1;
      });
      return total;
    };

	//Remover os itens já concluidos
    $scope.removeConcluidas = function() {
      //Adiciona em uma nova variável a lista de todos
	  var antigas = $scope.todos;
	  
	  //Zera a variavel "todos"
      $scope.todos = [];
	  
	  //For para remover as que já foram Concluidas
      angular.forEach(antigas, function(todo) {
		//Devolve na variável "todos" os que não foram concluidas
        if (!todo.concluida)
			$scope.todos.push(todo);
      });
    };
  });