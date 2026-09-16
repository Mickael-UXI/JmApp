import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Facebook,
  Gamepad2,
  Github,
  Globe2,
  Instagram,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  MessageCircle,
  Package,
  PanelTop,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Twitter,
  Users,
  X,
  Zap,
} from 'lucide-react';

const features = [
  { icon: ShoppingBag, title: 'Venda automática', text: 'Publique contas, chaves, arquivos ou cargos. O bot entrega sozinho, em segundos.' },
  { icon: ShieldCheck, title: 'Segurança integrada', text: 'Bloqueios inteligentes e registro de atividade para manter sua comunidade protegida.' },
  { icon: Globe2, title: 'Site personalizado', text: 'Sua loja com a sua cara, disponível 24 horas para qualquer servidor.' },
];

const productFeatures = [
  { icon: ShoppingBag, label: 'Loja do servidor', title: 'Tudo o que você vende, em um só lugar.', text: 'Contas, chaves, arquivos e cargos organizados com estoque e entrega automática.' },
  { icon: Zap, label: 'Automações', title: 'Seu servidor trabalhando por você.', text: 'Configure rotinas, anúncios e mensagens que acontecem sem abrir o Discord.' },
  { icon: LockKeyhole, label: 'Segurança', title: 'Confiança que vira venda.', text: 'Proteções contra fraude e um histórico completo de cada atividade.' },
  { icon: CircleDollarSign, label: 'Carteira e saque', title: 'Veja o dinheiro crescer.', text: 'Acompanhe cada venda e saque quando quiser, com total transparência.' },
];

const faqItems = [
  ['Como funciona o bot?', 'Você conecta o bot ao seu servidor, cadastra seus produtos e pronto. A Jm Applications cuida da operação automática da sua loja.'],
  ['Preciso de conhecimento técnico?', 'Não. O painel foi feito para você configurar sua loja em poucos minutos, sem servidor próprio ou código.'],
  ['Meu servidor é pequeno, vale a pena?', 'Sim. Você começa com uma estrutura profissional e cresce conforme sua comunidade e seu estoque crescem.'],
  ['Como recebo meu dinheiro?', 'As vendas ficam disponíveis na sua carteira e você pode solicitar o saque pelo painel.'],
  ['O bot pode ser customizado?', 'Sim. Personalize sua vitrine, produtos, mensagens e automações para combinar com a sua comunidade.'],
];

const sales = [
  ['Conta Free Fire', 'R$ 89,90', 'agora'],
  ['1.000 Robux', 'R$ 38,50', 'há 4 min'],
  ['14x impulsos', 'R$ 119,00', 'há 8 min'],
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [saleIndex, setSaleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setSaleIndex((current) => (current + 1) % sales.length), 4200);
    return () => window.clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('inicio')} aria-label="Voltar ao início">
          <span className="brand-mark">Z</span>
          <span>Jm Applications</span>
        </button>
        <nav className={`nav-links ${mobileOpen ? 'is-open' : ''}`}>
          <button onClick={() => scrollTo('recursos')}>Recursos</button>
          <button onClick={() => scrollTo('extensoes')}>Extensões</button>
          <button onClick={() => scrollTo('planos')}>Planos</button>
          <button onClick={() => scrollTo('faq')}>FAQ</button>
          <button onClick={() => scrollTo('contato')}>Contato</button>
        </nav>
        <div className="top-actions">
          <button className="language"><span>🇧🇷</span> PT <ChevronDown size={13} /></button>
          <button className="login-button" onClick={() => scrollTo('painel')}><MessageCircle size={17} /> Login</button>
          <button className="menu-toggle" onClick={() => setMobileOpen((open) => !open)} aria-label="Abrir menu">{mobileOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="inicio">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> A plataforma de vendas do seu Discord</div>
            <h1>Seu bot de vendas,<br /><em>pronto hoje.</em></h1>
            <p>A solução definitiva para o seu servidor. Vendas automáticas, segurança e sites personalizados. Tudo em um só lugar.</p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => scrollTo('planos')}><MessageCircle size={18} /> Criar meu bot <ArrowRight size={17} /></button>
              <button className="button ghost" onClick={() => scrollTo('recursos')}>Ver recursos <ArrowDown size={17} /></button>
            </div>
            <div className="hero-proof">
              <div><strong>2,3 mil</strong><span>bots criados na Zend</span></div>
              <div><strong>2 anos</strong><span>no ar sem parar</span></div>
              <div><strong>Pix e cripto</strong><span>com baixa automática</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="phone-shadow" />
            <div className="phone">
              <div className="phone-top"><span>9:41</span><span className="camera" /><span>▮▮▮ ◉</span></div>
              <div className="phone-card notification"><span className="mini-z">Z</span><div><strong>Zend</strong><b>Venda de R$ 89,90</b><small>Conta roxa Free Fire</small></div><small>agora</small></div>
              <div className="wallet-label">Saldo na carteira</div>
              <div className="wallet-value">R$ 8.543,34</div>
              <div className="wallet-growth">+ R$ 1.842,00 hoje</div>
              <div className="phone-section-title">Últimas vendas</div>
              {sales.map(([name, price, time], index) => <div className={`phone-sale ${index === saleIndex ? 'sale-active' : ''}`} key={name}><span className="check"><Check size={14} /></span><div><strong>{name}</strong><small>{time}</small></div><b>+ {price}</b></div>)}
              <div className="phone-nav"><LayoutDashboard size={16} /><BarChart3 size={16} /><Package size={16} /><Users size={16} /></div>
            </div>
            <div className="float-card float-sales"><span className="float-icon"><TrendingUp size={16} /></span><div><b>+24,8%</b><small>vendas este mês</small></div></div>
            <div className="float-card float-secure"><ShieldCheck size={17} /><span>100% seguro</span></div>
          </div>
        </section>

        <section className="social-strip section-wrap"><div><span className="strip-mark">Z</span> Feito para quem vende todos os dias.</div><div className="strip-stats"><span><b>4.9/5</b> satisfação</span><span><b>24/7</b> suporte</span><span><b>99,9%</b> uptime</span></div></section>

        <section className="section-wrap feature-intro" id="recursos">
          <div className="section-heading"><div><span className="kicker">POR QUE A ZEND?</span><h2>Menos configuração.<br /><span>Mais conversão.</span></h2></div><p>Você foca na sua comunidade. A gente cuida de tudo que acontece por trás de cada venda.</p></div>
          <div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p><ArrowRight className="feature-arrow" size={19} /></article>)}</div>
        </section>

        <section className="dashboard-section section-wrap" id="painel">
          <div className="dashboard-copy">
            <span className="kicker">SEU PAINEL, SUA VISÃO</span>
            <h2>Controle tudo.<br /><span>De qualquer lugar.</span></h2>
            <p>Um painel simples e poderoso para acompanhar sua operação em tempo real — do primeiro produto ao seu próximo saque.</p>
            <div className="dashboard-points">
              <div><Check size={15} /> Gerencie estoque e produtos</div>
              <div><Check size={15} /> Acompanhe seus rendimentos</div>
              <div><Check size={15} /> Receba recomendações da ZendAI</div>
            </div>
            <button className="text-button" onClick={() => scrollTo('planos')}>Conhecer o plano completo <ArrowRight size={16} /></button>
          </div>
          <div className="dashboard-window">
            <div className="window-top">
              <div className="window-dots"><i /><i /><i /></div>
              <span>app.jmapplications.com</span>
              <Bell size={15} />
            </div>
            <div className="window-body">
              <aside className="dash-sidebar">
                <div className="dash-logo">Z</div>
                <div className="side-active"><LayoutDashboard size={15} /> Visão geral</div>
                <div><ShoppingBag size={15} /> Produtos</div>
                <div><BarChart3 size={15} /> Rendimentos</div>
                <div><CreditCard size={15} /> Carteira</div>
                <div className="side-spacer" />
                <div><Code2 size={15} /> Configurações</div>
              </aside>
              <div className="dash-main">
                <div className="dash-header">
                  <div>
                    <small>terça, 16 setembro 2026</small>
                    <h3>Bom dia, Matheus <span>✦</span></h3>
                  </div>
                  <div className="avatar">M</div>
                </div>
                <div className="dash-cards">
                  <div className="dash-card balance">
                    <small>Saldo total</small>
                    <strong>R$ 8.543,34</strong>
                    <span><TrendingUp size={12} /> 24,8% este mês</span>
                    <CircleDollarSign className="dash-card-icon" size={28} />
                  </div>
                  <div className="dash-card">
                    <small>Vendas hoje</small>
                    <strong>R$ 1.842,00</strong>
                    <span>+12 pedidos</span>
                    <ShoppingBag className="dash-card-icon muted" size={25} />
                  </div>
                </div>
                <div className="dash-lower">
                  <div className="chart-card">
                    <div className="chart-head">
                      <div>
                        <small>Rendimentos</small>
                        <strong>R$ 24.891,20</strong>
                      </div>
                      <span>Últimos 30 dias <ChevronDown size={13} /></span>
                    </div>
                    <div className="chart">
                      <div className="chart-lines"><i /><i /><i /><i /></div>
                      <svg viewBox="0 0 500 155" preserveAspectRatio="none">
                        <path d="M0 130 C40 120, 50 95, 78 108 S110 100, 140 115 S173 65, 205 82 S240 93, 268 52 S300 74, 330 64 S365 82, 398 42 S440 59, 500 12" fill="none" stroke="currentColor" strokeWidth="3" />
                        <path d="M0 130 C40 120, 50 95, 78 108 S110 100, 140 115 S173 65, 205 82 S240 93, 268 52 S300 74, 330 64 S365 82, 398 42 S440 59, 500 12 V155 H0 Z" fill="currentColor" opacity=".08" />
                      </svg>
                    </div>
                    <div className="chart-labels">
                      <span>18 ago</span><span>25 ago</span><span>01 set</span><span>08 set</span><span>15 set</span>
                    </div>
                  </div>
                  <div className="ai-card">
                    <div className="ai-title">
                      <span><Sparkles size={15} /> ZendAI</span>
                      <span className="ai-status">online</span>
                    </div>
                    <p>Robux vendeu <b>2x mais</b> esta semana. Quer repor o estoque?</p>
                    <button>Repor agora <ArrowRight size={13} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-deep section-wrap"><div className="deep-heading"><span className="kicker">FEITO PARA ESCALAR</span><h2>Ferramentas que fazem<br /><span>a diferença.</span></h2></div><div className="feature-tabs"><div className="tab-list">{productFeatures.map(({ icon: Icon, label }, index) => <button className={activeFeature === index ? 'active' : ''} onClick={() => setActiveFeature(index)} key={label}><Icon size={18} /><span>{label}</span><ChevronRight size={15} /></button>)}</div><div className="tab-preview"><div className="preview-glow" /><span className="preview-icon">{(() => { const Icon = productFeatures[activeFeature].icon; return <Icon size={25} />; })()}</span><span className="kicker">{productFeatures[activeFeature].label}</span><h3>{productFeatures[activeFeature].title}</h3><p>{productFeatures[activeFeature].text}</p><div className="mini-interface"><div><span /><span /><span /></div><b>{activeFeature === 3 ? 'R$ 8.543,34' : '12 produtos ativos'}</b><small>atualizado agora</small></div></div></div></section>

        <section className="extensions section-wrap" id="extensoes"><div className="section-heading"><div><span className="kicker">EXTENSÕES</span><h2>Seu bot cresce<br /><span>junto com você.</span></h2></div><p>Pluge novos superpoderes no seu bot quando fizer sentido para a sua operação.</p></div><div className="extension-grid"><article className="extension-card"><div className="extension-top"><div className="extension-logo purple"><MessageCircle size={23} /></div><span className="available">Disponível</span></div><h3>ZENDDM</h3><p>Envie mensagens privadas para os membros do seu servidor com poucos cliques.</p><div className="extension-list"><span><Check size={13} /> Escreva uma vez</span><span><Check size={13} /> Escolha destinatários</span><span><Check size={13} /> Acompanhe a entrega</span></div><button className="extension-link">Adicionar extensão <ArrowRight size={15} /></button></article><article className="extension-card booster"><div className="extension-top"><div className="extension-logo yellow"><Rocket size={23} /></div><span className="available">Disponível</span></div><h3>BOOSTER</h3><p>Venda gifts de boost e impulsione o servidor dos seus clientes automaticamente.</p><div className="extension-list"><span><Check size={13} /> Cliente escolhe o servidor</span><span><Check size={13} /> Boosts caem direto</span><span><Check size={13} /> Autorização única</span></div><button className="extension-link">Adicionar extensão <ArrowRight size={15} /></button></article><article className="coming-card"><Sparkles size={21} /><span>EM BREVE</span><h3>Muita coisa<br />saindo do forno.</h3><p>Novidades para deixar sua loja ainda mais completa.</p><div className="coming-stars">✦　✦　✦</div></article></div></section>

        <section className="pricing section-wrap" id="planos"><div className="pricing-card"><div className="pricing-copy"><span className="kicker">PLANO COMPLETO</span><h2>Comece a vender<br /><span>sem complicar.</span></h2><p>Tenha toda a estrutura necessária para transformar seu servidor em uma operação profissional.</p><div className="pricing-price"><strong>R$ 89,90</strong><span>/ mês</span></div><button className="button primary" onClick={() => scrollTo('contato')}>Começar agora <ArrowRight size={17} /></button><small>Sem taxa de instalação. Hospedagem inclusa.</small></div><div className="pricing-includes"><div className="includes-head"><span>O que está incluso</span><span>Plano completo</span></div>{['Vendas automáticas 24/7', 'Painel de controle completo', 'Hospedagem do bot inclusa', 'Site personalizado', 'Carteira e saques', 'Suporte especializado'].map((item) => <div key={item}><Check size={16} /> {item}</div>)}<div className="includes-addons"><Zap size={16} /> Adicione ZENDDM e BOOSTER quando quiser</div></div></div></section>

        <section className="faq section-wrap" id="faq"><div className="faq-intro"><span className="kicker">DÚVIDAS?</span><h2>Respostas<br /><span>diretas.</span></h2><p>Se não encontrar o que procura, chama a gente no Discord.</p><button className="text-button" onClick={() => scrollTo('contato')}>Falar com suporte <ArrowRight size={16} /></button></div><div className="faq-list">{faqItems.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><span className="faq-plus">{openFaq === index ? '−' : '+'}</span></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>
      </main>

      <footer className="footer section-wrap" id="contato"><div className="footer-main"><div><button className="brand footer-brand" onClick={() => scrollTo('inicio')}><span className="brand-mark">Z</span><span>Jm Applications</span></button><p>A estrutura que seu servidor<br />precisa para crescer.</p></div><div className="footer-links"><div><b>Produto</b><button onClick={() => scrollTo('recursos')}>Recursos</button><button onClick={() => scrollTo('extensoes')}>Extensões</button><button onClick={() => scrollTo('planos')}>Planos</button></div><div><b>Suporte</b><button onClick={() => scrollTo('faq')}>Central de ajuda</button><button onClick={() => scrollTo('contato')}>Discord da comunidade</button><button onClick={() => scrollTo('contato')}>Status</button></div><div><b>Social</b><button><Instagram size={14} /> Instagram</button><button><Twitter size={14} /> Twitter</button><button><Github size={14} /> Github</button></div></div></div><div className="footer-bottom"><span>© 2026 Jm Applications. Feito para comunidades que vendem.</span><span>Termos　 Privacidade</span></div></footer>
      <div className="sale-toast"><span className="check"><Check size={13} /></span><div><small>Nova venda</small><strong>{sales[saleIndex][0]}</strong></div><b>{sales[saleIndex][1]}</b></div>
    </div>
  );
}

export default App;
