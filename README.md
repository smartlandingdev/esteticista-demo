# Site Esteticista - Design Minimalista e Tranquilo

Site desenvolvido para profissional de estética especializada em Método Esculpe Detox e estética funcional.

## Características

- **Design Visual UX/UI**: Experiência visual suave e elegante
- **Scroll Lento e Suave**: Navegação tranquila que transmite paz
- **Animações Delicadas**: Elementos aparecem suavemente ao rolar a página
- **Paleta de Cores Relaxante**: Tons pastel que transmitem serenidade
- **Responsivo**: Adaptado para todos os dispositivos

## Tecnologias

- React 19
- TypeScript
- Vite
- CSS3 moderno com animações suaves
- Intersection Observer API para animações ao scroll

## Como Executar

### Pré-requisitos
- Node.js instalado (versão 16 ou superior)

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:5173
```

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

## Personalização

### Alterar Informações de Contato

No arquivo `src/App.tsx`, procure pela seção de footer e CTA e altere:

- **WhatsApp**: Substitua `5500000000000` pelo número com código do país
- **Instagram**: Altere `seu_perfil` pelo @ do Instagram
- **Localização**: Altere "Sua Cidade" pela cidade desejada

Exemplo:
```tsx
<a href="https://wa.me/5511999999999" ...>
```

### Adicionar Fotos Reais

Substitua os placeholders de imagem:

1. Adicione suas fotos na pasta `public/images/`
2. No arquivo `src/App.tsx`, substitua os `image-placeholder` por tags `<img>`:

```tsx
// Antes:
<div className="image-placeholder" style={{ background: '...' }}>
  <span className="placeholder-text">Foto da profissional</span>
</div>

// Depois:
<img
  src="/images/sua-foto.jpg"
  alt="Descrição da imagem"
  className="section-photo"
/>
```

### Cores do Site

As cores principais estão definidas no arquivo `src/App.css`. Paleta natural detox:

- **Verde Oliva**: `#859a5f` (botões, destaques)
- **Verde Musgo**: `#728255` (secundário)
- **Amarelo Suave**: `#f6e39f` (highlights, acentos)
- **Verde Escuro**: `#136267` (títulos, texto importante)
- **Fundo claro**: `#fefdf8`
- **Fundo alternado**: `#f9faf5`
- **Texto**: `#4a5a4a`

### Fontes

O site usa duas fontes do Google Fonts:
- **Cormorant Garamond**: Títulos elegantes
- **Montserrat**: Textos e subtítulos

## Estrutura do Conteúdo

O site possui as seguintes seções:

1. **Hero**: Mensagem principal com call-to-action
2. **Sobre**: Apresentação da profissional
3. **Tratamentos**: Lista de serviços corporais e faciais
4. **Benefícios**: Resultados dos tratamentos
5. **Lipedema**: Informações sobre drenagem linfática
6. **Spa Facial**: Destaque para tratamento facial detox
7. **Resultados**: Galeria de antes e depois
8. **CTA Final**: Chamada para agendamento
9. **Footer**: Informações de contato

## Recursos Especiais

### Scroll Suave
O scroll é suave por padrão usando `scroll-behavior: smooth` no CSS.

### Animações ao Scroll
Elementos com a classe `.reveal` aparecem suavemente quando entram na viewport usando Intersection Observer.

### Efeito Parallax
Imagens têm um leve efeito parallax para criar profundidade visual.

## Suporte

Desenvolvido por Smart Landing

---

**Nota**: Lembre-se de personalizar as informações de contato antes de publicar o site!
