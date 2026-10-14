# Florhouse — App de Floricultura

**Aluno:** Daniel Romão Mathias
**Disciplina:** Programação para Dispositivos Móveis I
**Aplicação:** Florhouse

## Descrição resumida
Protótipo de aplicativo mobile institucional de uma floricultura fictícia (Florhouse), com tela de login simulada, Home, Sobre e Contato, navegação entre telas e Toolbar personalizada, em tema verde.

## Tecnologia / framework
- React Native com Expo (testado no Expo Snack)
- React Navigation (native stack)
- @expo/vector-icons (ícones)

## Como executar
**No Expo Snack (https://snack.expo.dev):**
1. Crie os arquivos conforme a estrutura abaixo e cole o código de cada um.
2. No `package.json` do Snack, mantenha as dependências `@react-navigation/native`, `@react-navigation/native-stack`, `react-native-screens` e `react-native-safe-area-context`.

**Localmente:**
1. `npx create-expo-app florhouse`
2. Copie `App.js`, `src/` e `assets/` para dentro do projeto criado.
3. `npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context @expo/vector-icons`
4. `npx expo start`

## Credenciais de teste
- **Usuário:** `floricultor`
- **Senha:** `florhouse123`

O login é apenas uma simulação: não usa localStorage, banco de dados, API nem qualquer persistência. Ao reabrir o app, ele volta ao Login.

## Estrutura de diretórios
```
App.js
assets/
├── images/
└── icons/
src/
├── components/
│   ├── Button/     (Button.js, Button.styles.js)
│   ├── Input/      (Input.js, Input.styles.js)
│   └── Toolbar/    (Toolbar.js, Toolbar.styles.js)
├── data/           (credenciais.js)
├── navigation/     (navigation.js)
├── pages/
│   ├── Login/      (Login.js, Login.styles.js)
│   ├── Home/       (Home.js, Home.styles.js)
│   ├── Sobre/      (Sobre.js, Sobre.styles.js)
│   └── Contato/    (Contato.js, Contato.styles.js)
└── styles/         (colors.js, fonts.js, global.js)
```

## Funcionalidades implementadas
- Login com validação de campo vazio e de credenciais inválidas
- Campo de senha oculto, com botão de mostrar/ocultar
- Botão para limpar os campos
- Navegação Login → Home → Sobre / Contato, com retorno à Home pela Toolbar
- Passagem de parâmetro (nome do usuário) do Login para a Home
- Toolbar reutilizável, com título que muda conforme a tela
- Componentes reutilizáveis (Button, Input, Toolbar)
- Estilos com StyleSheet e tema de cores centralizado em `src/styles/colors.js`
- Formulário de contato simulado e botões de ligar e enviar e-mail

## Capturas de tela
![Login]
![Home]
![Sobre]
![Contato]
