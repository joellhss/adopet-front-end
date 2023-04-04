# Adopet 🐕️🐈‍⬛️

## Iniciando o projeto
### 1. Definição do projeto
	
**Nome**: AdoPet
		
**Descrição**: Aplicação para divulgação de animais para adoção.
		
**Objetivo**:
	
- A aplicação deverá possibilitar o cadastro de novos pets, para isso o usuário deverá
	fazer um cadastro no sistema.
	
- A aplicação exibirá na página inicial os animais por espécie.
	
- O visitante ao clicar em um pet, será redirecionado a uma página com uma descrição detalhada sobre o animal e nesta tela haverá um botão "Quero adotar", que ao ser clicado, exibirá as informações de contato do usuário que cadastrou o pet.  

#### 1.1. Requisitos do projeto

**Entidades**:
	
- Usuário:
	- Nome
	- E-mail
	- Senha
	- Telefone 
				
- Animal:
	- Nome
	- Descrição
	- Idade
	- Foto
	- Castração
	- Vacinação
	- Espécie
	- Raça
	- Porte
	- Data de postagem	
		
**Requisitos:**
	
- Permitir criar o usuário;
- Permitir alterar o usuário;
- Permitir deletar o usuário;  
_   
- Permitir o usuário adicionar um animal;
- Permitir o usuário editar um animal;
- Permitir o usuário deletar um animal;  
_  
- Exibir lista de animais na página inicial categorizados por espécie.
- Cada animal deverá ter uma página própria com todos os detalhes.
- Na página de detalhes deverá exibir informação de contato do usuário.  
_	
- Permitir busca por espécie, nome, raça ou porte;
	
#### 1.2. Regras do negócio
- O sistema organizará os animais por espécie;
- O usuário deverá se cadastrar para poder adicionar animais para adoção.
- Não é necessário cadastro para adotar um animal.
- O visitante ao clicar no animal desejado, visualizará todos os detalhes do pet e logo abaixo, visualizará o botão "Quero adotar".
- O botão "Quero adotar" deverá exibir as informações de contato do usuário responsável pelo pet. 
- Deve ser possível pesquisar os animais por espécie, nome, raça ou porte;
- Ao logar no sistema, o usuário poderá visualizar os animais cadastrados, bem como adicionar novos, editar ou deletar. 
	
#### 1.3. Definição da tecnologia
- Java
- MySql
- HTML
- CSS
- Bootstrap