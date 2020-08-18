// 1 //  Como criar e iniciar o repositório da sua máquina.
    // 1.1 Preparando o terreno 
    // -- Abra o cmder > Vá até o local onde você deseja criar o repositório com o cmd "cd" > Crie uma pasta nele como cmd "mkdir" > Escreva o cmd "git status" e verá que será informado de que não há repositório git ali.
    
    // 1.2 Criando o repositório git
    // Use o cmd "git init". Reoositório git criado.
    // Dê o cmd "git status" e será informado de que está em um repositório git, especificamente em sua master, além de informar se há o que ser commitado ou não.

    //Entenda repositório como o projeto. Em repositório, leia projeto.
    
    // Extra - Dá pra limpar toda o terminal com CTRL + L;

// 1 // NOVO CURSO - BONIEKY LACERDA - 
//    04:41 - O que é, pra que serve, como funciona?
//    15:10 - Instalando o GIT
//    21:42 - Configurando o GIT
//    27:08 - Iniciando um repositório
//    36:24 - Branch, Readme, Commit
//    51:59 - Revertendo Modificações
//    01:04:53 - Trabalhando com diferentes Branches
//    01:17:29 - Diferença entre arquivos
//    01:27:21 - Criando um repositório no Github
//    01:33:10 - Conectando repositório local ao remoto
//    01:46:19 - Fazendo alterações no repositório remoto
//    01:55:41 - Ignorando arquivos do repositório (gitignore)
//    02:00:57 - Revertendo sem perder o código
//    02:06:57 - Deletando branches locais e remotos
//    02:13:39 - Puxando alterações de outras pessoas (pull)
//    02:20:34 - Clonando repositórios remotos (clone)
//    02:26:10 - Contribuindo com outros repositórios (fork / pul request)


// 2 // Os primeiros comandos git // 
  
    // 2.1 // Identificando o usuários das alterações.
        -- Criar o usuário git -- cmd = 'git config --global usar.name "Nome de Usuário"'

    // 2.2 // Identificando o usuários das alterações.
     -- cmd = 'git config --global usar.email "Nome de Usuário"' 

   // 2.3 // Editor usado pelo usuário
      -- cmd = 'git config --global core.editor vscode'
    
    // 2.4 // Consultando a informação
         -- cmd = 'git config --global user.name'
         -- cmd =  'git config --global user.email'
         -- cmd = 'git config --global core.editor'

// 3 // Comando terminal Windows

    'cd = navegar entre os diretórios';
    'cd .. =  voltar 1 diretório';
    'dir = listas os arquivos do diretório';
    'tree /f = Criar uma árvore mostrando os arquivos do diretório'
    'cls = limpa o prompt de comandos'

// 3 // Git

    'git init = iniciar o repositório local'
  // Arquivo readme.md
     // Todos os repositórios devem ter esse arquivo. Esse é o arquivo que todo progromador vai ler assim que chegar no repositório pela primeira vez.
    'code readme.md = abre o vscode e você só tem que salvar o arquivo.'
    'git status = vai te informar que existem arquivos que não estão sendo trackeados pelo git, no caso, o readme.md'
    'git add readme.md = caso queira adicionar arquivo por arquivo'
    'git add -A = caso queira adcionar todos os que foram exibidos'
    'git status = agora vocÊ vai ver que ele já mostra os arquivos em verde, mostrando que estão sendo trackeados'
    'git commit -m "primeiro commit" = VocÊ vai dar o seu primeiro commit. Commits são como aqueles pontos de save do kart, do god of war'
    'git log = Vai mostrar todos os commits feitos naquele brench, inclusive o usuário que os realizou. Se não houver commits, não vai funcionar o cmd'
  // Fiz uma alteração no readme.md só pra poder dar o segundo commit.
    'git status = serei informado de que houve alteração no arquvivo exibido'
    'git add -a = para adicionar as novas alteração na brench' ou
    'git commit -a -m "msg" ou git commit -am "msg" = pra adicionar e commitar logo'
    'git branch = mostra em qual branch você está e mostra todas as branchs'
    'git reset = existem três dele. Serve para voltar nos commits'
    'git reset --soft = volta para o commit anterior, mas mantém as alterações resetadas, prontas para ser recommitadas'
    'git reset --mixed = faz a mesma coisa que o soft, mas volta um estágio a mais, ou seja, vai ter que fazer o "git add -A'
    'git reset --hard = Vai apagar a porra toda, inclusive as alterações feitas na commit realizada'
    'git revert = volta para o commit escolhido, mas não apaga o commit de onde você partiu. Ele cria um commit na frente daquele que você partiu. Ele meio que faz um copia e cola do commit que você selecionou acima daquele que você  partiu, mas não apaga esse que você partiu, vai ficar lá no seu git log. Se você quiser analisar esse que, provalmente tem erro, você pode, porque não foi apagado, porque o commit dele não foi apagado'
    'git revert --no-edit iddocommit = por padrão, o git revert abre o editor para você ver as alterações. o no-edit impede que seja aberto'
    'git log = só pra pegar o id do commit'
    'git reset --hard idcommit = apagou o commit, inclusive os registros das alterações feitas por ele'
    'git branch nomebranch = cria uma branch'
    'git branch = agora me mostra que tenho duas branchs'
    'git checkout noembranch = muda de branch'
    'git code style.css = só pra criar uma arquivo'
    'git commit -am "msg" = para fazer o commit na branch'
    'git checkout master = para voltar pra master'
    'git log = a master não consegue ver o commit da branch. Cada branch é cega em relação as alterações da outra'
    'git diff = mostra as modificações feitas. só funciona antes do "git add -a" ou do commit'
    'git diff --name-only = mostra somente o nome dos arquivos modificados: útil para quando eu não precisar ver todos os que foram excluidos, adcionados etc, como no git status'
    'git diff nomearquivo = mostra as modificações somente do arquivo que você especificou'
    'git checkout HEAD -- nomearquivo = desiste da modificação feita somente no arquvio especificado. Útil quando tem modificações em mais de um arquvio' // 'HEAD é como se fosse o this. do js, seleciona a branch atual. Logo, daria no mesmo de git checkout master'
    // Não tem jeito, é preciso criar um repositório la dentro do git hub também. Eu pensei que dava pra criar direto do terminal.

// 4 // Transferir o repositório local para o remoto
    - É necessária uma tal de chave SSH. O windows precisa do git bash, que já vim junto com o git.
    - 'https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent'
    - Inseriu o código do tutorial acima? da enter até quando Der.
    - Vai na pasta onde criou os dois arquvivos "c:/users/you/.ssh"
    - abre o que termina com .pub no editor e copia o que está dentro. 
    - Vai no seu github > settings > SSH and GPG Keys > New SSH Key
    - Título pode ser o local que você está ou sua máquina e joga o que copiou lá dentro.
    'git remote add nomequalquer linkdorepositóriofornecidopelogithub = fazer o link dos repositórios locais e remotos'
    'git remote add terminalgit https://github.com/euArteon/terminalgit.git'
    'git remote = para ver se há repositório remoto direcionado'
    'git remote -v = mostra o fetch (endereço de onde você está puxando arquivos da nuvem) e o push (que é pra onde vocÊ está mandando)'
    'git push -u terminalgit master = para subir os commits para o repositório remoto terminalgit, especificamente na branch master. Pode ser que peça senha.'
    Tá feito. Se atualizar, já está lá.

  // 5 // Alterações no repositório remoto.
    // Commits acontecem no repositório local. O github é apenas onde você sobe os arquivos quando achar que deve.
    // Você precisa levar tudo para a núvem através do git push
    'git push nomerepositorio branch'
    'git push terminalgit master = Empurrar para a repositório terminalgit, especificamente em sua branch master'
    // Você precisa fazer isso com todas as branchs.
    'git checkout n1 = pra trocar para a branch n1'
    'git push terminalgit n1 = para criar uma branch no remoto e subir o que tem no local para lá'

  // 6 // Fazer o git ignorar arquvivos.
    // crie um arquivo no repositório como o nome ".gitignore" e escreva la dentro o nome e a extensão dos arquivos a serem ignorados.
    // Você pode ignorar diretório inteiro escrevendo "nomediretório/*"


  // 7 // Deletar branchs 
    'git push terminalgit :n2 = vai remover a branch n2 do repositório remoto terminalgit'
    'git branch -D n2 = vai deletar branch local n2'

  // 8 // Git pull
      // Serve para puxar as modificações feitas no repositório remoto pela sua equipe. Vai buscar todos os push e tudo que tiver diferente para o seu local.
    'git pull terminalgit master = vai puxar as alterações do remoto terminal git para sua branch master'

    DICA IMPORTANTE:

                              Antes de dar um Push, sempre dê um PULL. 

    

  // 9 // Como clonar projetos 
    Só criar uma pasta na sua máquina, direcionar o terminal para ele e digitar o git clone e o endereço do repositório. 
    'git clone https://github.com/FinotiLucas/Correios-Brasil = clona o repositório'
    
  // 10 // Fork
    É um clone só que com ele vocÊ consegue dar commits e se tornar um contribuinte daquele repositório.
    Inicialmente você clona o projeto para o seu github e os commits se reservam a ficar ali, não vai para o original.
    para mandar para o original, vai ter um botão "create pull request". Só preencher o formulário e enviar.
    1 - Abre o repositório a ser forkado. 
    2 - Clica no botão fork. Vai ser criado o clone seu só que seu. Agora vocÊ pode fazer alterações.
    3 - Faça a clonagem para o repositório local
    'git clone urldoproejto'
    'git add -A = para adicionar trackeamento'
    'git commit -am "first commit" = para dar o primiero commit'    
    'git remote -v = para ver o nome do repositório remoto dado usado no original e a branch que está'
    'git push origin branch'
    4 - Abre o seu projeto no seu github, clica em 'new pull request'. Verifica se as informações estão corretas e dale.