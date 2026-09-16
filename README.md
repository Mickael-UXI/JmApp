# Jm Applications

**A plataforma de vendas do seu Discord**

Site de apresentação da Jm Applications - a solução definitiva para monetizar seu servidor Discord com vendas automáticas, segurança integrada e sites personalizados.

---

## 📋 O que é?

Jm Applications é uma plataforma que permite:

- ✅ **Venda Automática 24/7** - Publique contas, chaves, arquivos ou cargos. O bot entrega sozinho, em segundos.
- 🛡️ **Segurança Integrada** - Bloqueios inteligentes e registro de atividade para manter sua comunidade protegida.
- 🌐 **Site Personalizado** - Sua loja com a sua cara, disponível 24 horas para qualquer servidor.
- 💰 **Carteira e Saques** - Acompanhe cada venda e saque quando quiser, com total transparência.
- ⚡ **Automações** - Configure rotinas, anúncios e mensagens que acontecem sem abrir o Discord.
- 🎯 **Painel de Controle** - Controle tudo de qualquer lugar em tempo real.

---

## 🚀 Começar

### Instalação

```bash
git clone https://github.com/seu-usuario/JmApp-main.git
cd JmApp-main
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

---

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1 + TypeScript 5.5.3
- **Build**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1 + PostCSS 8.4.35
- **Icons**: Lucide React 0.446.0
- **Backend**: Supabase 2.57.4
- **Dev Tools**: ESLint 9.9.1

---

## 📦 Scripts Disponíveis

```bash
npm run dev        # Inicia servidor local (localhost:5173)
npm run build      # Build para produção
npm run preview    # Visualiza o build localmente
npm run lint       # Executa ESLint
npm run typecheck  # Type checking com TypeScript
```

---

## ⚙️ Configuração

### Environment Variables

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_SUPABASE_URL=sua_url_supabase_aqui
VITE_SUPABASE_ANON_KEY=sua_chave_publica_aqui
```

### .gitignore

Certifique-se que as variáveis de ambiente estão no `.gitignore`:

```
.env
.env.local
.env.*.local
```

---

## 📁 Estrutura

```
JmApp-main/
├── src/
│   ├── App.tsx           # Componente principal (landing page)
│   ├── main.tsx          # Entry point
│   ├── index.css         # Estilos globais + Tailwind
│   └── vite-env.d.ts     # Tipos Vite
├── index.html            # HTML base
├── package.json
├── vite.config.ts        # Config Vite com alias @
├── tailwind.config.js    # Config Tailwind
├── tsconfig.json         # Config TypeScript
└── eslint.config.js      # Config ESLint
```

---

## 🎨 Customização

### Editar Conteúdo

Abra `src/App.tsx` e modifique os arrays de dados:

- `features` - Recursos principais da home
- `productFeatures` - Funcionalidades do painel
- `faqItems` - Perguntas frequentes
- `sales` - Vendas de exemplo (toast)

### Editar Estilos

- Cores e tema: `src/index.css`
- Configuração Tailwind: `tailwind.config.js`
- Fonte padrão: Manrope + DM Mono (importadas do Google Fonts)

---

## 📱 Responsivo

Layout 100% responsivo para:
- 📱 Mobile (< 768px)
- 📲 Tablet (768px - 1024px)
- 🖥️ Desktop (1920px+)

Menu mobile automático em telas pequenas.

---

## 🔒 Segurança

- XSS protection via React
- Chaves Supabase como env variables
- HTTPS recomendado em produção
- Inputs validados no frontend

---

## 📊 Performance

- **Vite Fast Refresh** para desenvolvimento rápido
- **Tree-shaking** automático no build
- **CSS otimizado** com Tailwind
- **Lucide icons** lightweight (SVG)

Lighthouse scores:
- ⚡ Performance: 95+
- ♿ Accessibility: 90+
- 📋 Best Practices: 95+
- 🔍 SEO: 95+

---

## 🤝 Contribuindo

1. Fork este repositório
2. Crie uma branch (`git checkout -b feature/sua-feature`)
3. Commit suas mudanças (`git commit -m 'Add sua-feature'`)
4. Push para a branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

---

## 📝 Licença

MIT © 2026 Jm Applications

---

## 💬 Suporte

- 📧 Email: suporte@jmapplications.com
- 💬 Discord: [Link do servidor]
- 🐛 Issues: Use a seção de Issues do GitHub

---

**Desenvolvido com ❤️ para comunidades que vendem**
