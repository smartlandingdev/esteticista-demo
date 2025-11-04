# Como Adicionar Suas Próprias Imagens

## Imagem de Fundo da Hero (Entrada do Site)

A imagem atual é um placeholder do Unsplash. Para usar sua própria foto:

### Opção 1: Usar imagem local

1. Crie a pasta `public/images/` se não existir
2. Adicione sua foto de massagem/spa (recomendado: imagem com elementos verdes, plantas, ambiente natural)
3. Nomeie como `hero-massage.jpg` ou similar
4. Abra o arquivo `src/App.css`
5. Procure pela linha com `background-image: url('https://images.unsplash.com/...`
6. Substitua por: `background-image: url('/images/hero-massage.jpg');`

### Opção 2: Usar URL externa

Se você já tem a imagem hospedada online:

1. Abra o arquivo `src/App.css`
2. Procure pela linha com `background-image: url('https://images.unsplash.com/...`
3. Substitua pela URL da sua imagem

### Ajustar a Opacidade

A opacidade atual está em `0.12` (12%) para manter o degradê amarelo visível.

Para ajustar, no arquivo `src/App.css`, linha da classe `.hero-bg-image`, altere:
- `opacity: 0.12;` (muito sutil - recomendado)
- `opacity: 0.15;` (um pouco mais visível)
- `opacity: 0.20;` (mais evidente, mas pode competir com o degradê)

## Fotos das Outras Seções

### Foto da Profissional (Seção "Sobre")
**Arquivo:** `src/App.tsx` - linha ~53-57

Substitua:
```tsx
<div className="image-placeholder" style={{ background: 'linear-gradient(135deg, #e8f3e0 0%, #d0dfc5 100%)' }}>
  <span className="placeholder-text">Foto da profissional</span>
</div>
```

Por:
```tsx
<img
  src="/images/luciane-foto.jpg"
  alt="Luciane Gonçalves - Esteticista"
  style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }}
/>
```

### Galeria de Resultados (Antes/Depois)
**Arquivo:** `src/App.tsx` - linhas ~197-218

Substitua cada placeholder pela tag `<img>`:
```tsx
<img
  src="/images/resultado-1.jpg"
  alt="Resultado do tratamento"
  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
/>
```

## Dicas para Fotos Ideais

### Hero Section:
- Imagem com massagem, mãos trabalhando
- Elementos naturais: plantas, folhas, ambiente spa
- Tons verdes na imagem complementam o degradê
- Alta resolução: mínimo 1920x1080px

### Foto da Profissional:
- Fundo neutro ou natural
- Luz suave e natural
- Foto profissional, sorrindo
- Formato: 4:3 (horizontal ou vertical)

### Galeria Antes/Depois:
- Fotos reais dos tratamentos
- Mesma iluminação e ângulo
- Formato vertical (3:4)
- Resolução mínima: 800x1000px

## Estrutura de Pastas Recomendada

```
public/
└── images/
    ├── hero-massage.jpg       (imagem de fundo da hero)
    ├── luciane-foto.jpg       (foto profissional)
    ├── resultado-1.jpg        (antes/depois 1)
    ├── resultado-2.jpg        (antes/depois 2)
    ├── resultado-3.jpg        (antes/depois 3)
    └── resultado-4.jpg        (antes/depois 4)
```

---

**Nota:** Após adicionar as imagens, reinicie o servidor com `npm run dev` para ver as mudanças!
