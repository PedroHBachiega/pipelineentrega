"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, MapPin, Trophy, Users, Star, Menu, X } from "lucide-react"
import { formatMatchTime, getMatchStatus, type Match, type Highlight, type Testimonial } from "@/src/utils/football"

export default function FootballLandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const highlights: Highlight[] = [
    {
      title: "Campeonato Brasileiro",
      description: "Acompanhe todos os jogos da Série A",
      image: "/brasileirao-action.png",
      badge: "AO VIVO",
    },
    {
      title: "Copa Libertadores",
      description: "A glória eterna da América do Sul",
      image: "/libertadores-trophy.png",
      badge: "DESTAQUE",
    },
    {
      title: "Seleção Brasileira",
      description: "Rumo à próxima Copa do Mundo",
      image: "/selecao-celebration.png",
      badge: "EXCLUSIVO",
    },
  ]

  const matches: Match[] = [
    { home: "Flamengo", away: "Palmeiras", date: "15 Dez", time: "16:00", venue: "Maracanã" },
    { home: "São Paulo", away: "Corinthians", date: "17 Dez", time: "18:30", venue: "Morumbi" },
    { home: "Grêmio", away: "Internacional", date: "19 Dez", time: "20:00", venue: "Arena do Grêmio" },
    { home: "Atlético-MG", away: "Cruzeiro", date: "21 Dez", time: "19:00", venue: "Mineirão" },
  ]

  const testimonials: Testimonial[] = [
    {
      name: "Carlos Silva",
      text: "A melhor plataforma para acompanhar futebol! Nunca mais perco um jogo importante.",
      team: "Torcedor do Flamengo",
    },
    {
      name: "Ana Santos",
      text: "As estatísticas e análises são incríveis. Me sinto mais conectada ao esporte que amo.",
      team: "Torcedora do Palmeiras",
    },
    {
      name: "João Oliveira",
      text: "Interface moderna e fácil de usar. Recomendo para todos os amantes do futebol!",
      team: "Torcedor do São Paulo",
    },
  ]

  const gallery = [
    "/goal-celebration-stadium.png",
    "/fans-celebrating-victory.png",
    "/player-amazing-skill.png",
    "/stadium-night-lights.png",
    "/team-trophy-celebration.png",
    "/goal-celebration-stadium.png",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-green-100 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              FutPedrão
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Início", "Jogos", "Notícias", "Estatísticas", "Contato"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 relative group font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              Entrar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-green-100 animate-in slide-in-from-top-2 duration-300 shadow-lg">
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {["Início", "Jogos", "Notícias", "Estatísticas", "Contato"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300 py-2 border-b border-gray-100 last:border-b-0 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 mt-4">
                Entrar
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-stadium-crowd.png')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-transparent" />

        <div className="relative z-10 text-center text-white px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Viva a <span className="text-yellow-400">Paixão</span>
            <br />
            pelo <span className="text-green-400">Futebol</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Acompanhe todos os jogos, estatísticas e momentos épicos do futebol brasileiro e mundial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
            >
              <Play className="w-5 h-5 mr-2" />
              Assista Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-green-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Destaques da <span className="text-green-600">Temporada</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os melhores momentos e competições que fazem o coração bater mais forte
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white animate-pulse">{highlight.badge}</Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Matches Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Próximos <span className="text-green-600">Jogos</span>
            </h2>
            <p className="text-xl text-gray-600">Não perca nenhum clássico!</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {matches.map((match, index) => (
              <Card
                key={index}
                className="mb-4 border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-left-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-center md:justify-start space-x-4 text-lg font-semibold">
                        <span className="text-gray-900">{match.home}</span>
                        <span className="text-green-600">VS</span>
                        <span className="text-gray-900">{match.away}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-4 text-gray-600 mt-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{match.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{match.venue}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{formatMatchTime(match.time)}</div>
                        <div className="text-sm text-gray-600">{getMatchStatus(match.date)}</div>
                      </div>
                      <Button
                        variant="outline"
                        className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent"
                      >
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Momentos <span className="text-green-600">Épicos</span>
            </h2>
            <p className="text-xl text-gray-600">Reviva as emoções que marcaram história</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-in fade-in zoom-in-50 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <Play className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Ver Mais</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O que dizem os <span className="text-yellow-400">Torcedores</span>
            </h2>
            <p className="text-xl text-green-100">Histórias reais de paixão pelo futebol</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-green-200">{testimonials[currentTestimonial].team}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-yellow-400" : "bg-white/30"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/final-cta-stadium.png')`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-yellow-900/90" />

        <div className="container mx-auto px-4 text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Junte-se à <span className="text-yellow-400">Torcida</span>
          </h2>
          <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Milhões de torcedores já fazem parte da maior comunidade de futebol do Brasil
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-green-900 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 animate-bounce"
          >
            <Trophy className="w-6 h-6 mr-3" />
            Participe Agora - É Grátis!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                  FutPaixão
                </span>
              </div>
              <p className="text-gray-400">A plataforma definitiva para os amantes do futebol brasileiro e mundial.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Navegação</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Jogos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Notícias
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Estatísticas
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Competições</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Brasileirão
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Copa Libertadores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Copa do Brasil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Seleção
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@futpaixao.com</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FutPaixão. Todos os direitos reservados. Feito com ❤️ para os amantes do futebol.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
