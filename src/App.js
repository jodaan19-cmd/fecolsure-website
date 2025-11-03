import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Heart, Scale, GraduationCap, Shield, Check } from 'lucide-react';

const FecolsureWebsite = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showHistoria, setShowHistoria] = useState(false);
  const [showObjetivos, setShowObjetivos] = useState(false);

  const validateForm = () => {
    const errors = {};
    
    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.trim().length < 3) {
      errors.nombre = 'El nombre debe tener al menos 3 caracteres';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Correo electrónico inválido';
    }
    
    if (formData.telefono && !/^[0-9]{7,10}$/.test(formData.telefono.replace(/\s/g, ''))) {
      errors.telefono = 'Teléfono inválido (7-10 dígitos)';
    }
    
    if (!formData.mensaje.trim()) {
      errors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.trim().length < 10) {
      errors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true);
      setFormErrors({});
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      }, 3000);
    } else {
      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

useEffect(() => {
  if (showHistoria || showObjetivos) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [showHistoria, showObjetivos]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#0a2540] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 flex items-center justify-center">
                <svg viewBox="0 0 200 240" className="w-full h-full">
                  <path d="M100 10 L180 50 L180 190 L100 230 L20 190 L20 50 Z" fill="#1e40af" stroke="#fbbf24" strokeWidth="3"/>
                  <rect x="60" y="80" width="80" height="50" fill="#fbbf24"/>
                  <rect x="60" y="130" width="80" height="30" fill="#ffffff"/>
                  <rect x="60" y="160" width="80" height="30" fill="#dc2626"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-wide">FECOLSURE</h1>
                <p className="text-xs text-gray-300">Federación Colombiana de Suboficiales en Retiro</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Navegación principal">
              <button 
                onClick={() => scrollToSection('inicio')}
                className={`hover:text-yellow-400 transition-colors text-sm font-medium ${activeSection === 'inicio' ? 'text-yellow-400' : ''}`}
              >
                INICIO
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className={`hover:text-yellow-400 transition-colors text-sm font-medium ${activeSection === 'nosotros' ? 'text-yellow-400' : ''}`}
              >
                NOSOTROS
              </button>
              <button 
                onClick={() => scrollToSection('actualidad')}
                className={`hover:text-yellow-400 transition-colors text-sm font-medium ${activeSection === 'actualidad' ? 'text-yellow-400' : ''}`}
              >
                ACTUALIDAD
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className={`hover:text-yellow-400 transition-colors text-sm font-medium ${activeSection === 'contacto' ? 'text-yellow-400' : ''}`}
              >
                CONTACTO
              </button>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="https://twitter.com/f_Fecolsure" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100063558104811" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <nav className="md:hidden pb-4" role="navigation">
              <button onClick={() => scrollToSection('inicio')} className="block py-2 hover:text-yellow-400 w-full text-left">INICIO</button>
              <button onClick={() => scrollToSection('nosotros')} className="block py-2 hover:text-yellow-400 w-full text-left">NOSOTROS</button>
              <button onClick={() => scrollToSection('actualidad')} className="block py-2 hover:text-yellow-400 w-full text-left">ACTUALIDAD</button>
              <button onClick={() => scrollToSection('contacto')} className="block py-2 hover:text-yellow-400 w-full text-left">CONTACTO</button>
            </nav>
          )}
        </div>
      </header>

      <section id="inicio" className="relative bg-gradient-to-r from-[#0a2540] via-[#1e3a5f] to-[#2563eb] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                HONOR - PATRIA - LEALTAD
              </h2>
              <p className="text-2xl text-yellow-400 font-semibold">La Fuerza de Nuestros Retirados</p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Bienvenido a la Federación Colombiana de Suboficiales en Retiro, 
                la organización que representa y apoya a los suboficiales retirados 
                de las Fuerzas Militares de Colombia.
              </p>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl text-sm"
              >
                CONOCE MÁS SOBRE FECOLSURE
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-2xl">
                <img 
                     src="/militar-retiro.jpg" 
                     alt="Personal militar retirado en ceremonia oficial con banderas de Colombia"
                     className="w-full h-96 object-cover rounded-xl shadow-xl"
/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">BIENVENIDOS</h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-center mb-12">
            Nuestra misión es defender los derechos, el bienestar y los intereses de nuestros miembros, 
            reconociendo su compromiso y servicio al país. Desde nuestra creación, FECOLSURE ha sido 
            un pilar para los suboficiales retirados, brindando un espacio para la defensa gremial y el apoyo mutuo.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            <button 
              onClick={() => setShowHistoria(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg font-semibold"
            >
              NUESTRA HISTORIA
            </button>
<button 
  onClick={() => setShowObjetivos(true)}
  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg font-semibold"
>
  NUESTROS OBJETIVOS
</button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-blue-600 mb-6">
                <Scale className="w-16 h-16" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Defensa Legal</h4>
              <p className="text-gray-600 leading-relaxed">
                Asesoría legal y gestión de derechos para la defensa de los derechos adquiridos 
                de los suboficiales en retiro.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-blue-600 mb-6">
                <Heart className="w-16 h-16" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Bienestar Social</h4>
              <p className="text-gray-600 leading-relaxed">
                Programas de bienestar social, salud física y mental, y apoyo psicosocial 
                para nuestros miembros y sus familias.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-blue-600 mb-6">
                <GraduationCap className="w-16 h-16" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Formación y Oportunidades</h4>
              <p className="text-gray-600 leading-relaxed">
                Capacitaciones, formación continua y oportunidades educativas para el 
                desarrollo profesional y personal.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-2xl shadow-2xl">
            <div className="flex items-center space-x-6">
              <div className="text-yellow-400 flex-shrink-0">
                <Shield className="w-20 h-20" />
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">+40 Años</p>
                <p className="text-gray-200 text-lg">Sirviendo a nuestros veteranos</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-yellow-400 flex-shrink-0">
                <Check className="w-20 h-20" />
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">+300 Programas</p>
                <p className="text-gray-200 text-lg">Implementados exitosamente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Historia - Línea de Tiempo */}
      {showHistoria && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 rounded-t-2xl flex justify-between items-center">
              <h3 className="text-3xl font-bold">Nuestra Historia</h3>
              <button 
                onClick={() => setShowHistoria(false)}
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Cerrar"
              >
                <X size={32} />
              </button>
            </div>

            <div className="p-8">
              {/* Introducción */}
              <div className="bg-blue-50 p-6 rounded-xl mb-8 border-l-4 border-blue-600">
                <p className="text-gray-700 text-lg leading-relaxed">
                  FECOLSURE nace del compromiso de agrupar y fortalecer a los suboficiales en retiro, 
                  formando parte del movimiento asociativo que defiende los derechos de los militares 
                  y policías retirados en Colombia.
                </p>
              </div>

              {/* Línea de Tiempo */}
              <div className="relative">
                {/* Línea vertical */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600"></div>

                {/* Eventos */}
                <div className="space-y-12">
                  {/* 1981 - CONFECORE */}
                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-4 border-white">
                      <span className="text-xs text-center">1981</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center mb-3">
                        <Shield className="text-blue-600 mr-3" size={28} />
                        <h4 className="text-2xl font-bold text-blue-900">Fundación de CONFECORE</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Se funda la Confederación Colombiana de Reservistas de las Fuerzas Militares 
                        y Policía Nacional (CONFECORE), marcando el inicio del movimiento asociativo 
                        organizado para apoyar el engrandecimiento nacional y la defensa de los derechos 
                        de los militares y policías retirados.
                      </p>
                    </div>
                  </div>

                  {/* Años 80-90 - Consolidación */}
                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-4 border-white">
                      <span className="text-xs text-center">80-90</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center mb-3">
                        <Heart className="text-yellow-500 mr-3" size={28} />
                        <h4 className="text-2xl font-bold text-blue-900">Consolidación del Movimiento</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Décadas de trabajo continuo para fortalecer la asociatividad entre los 
                        suboficiales retirados. Se establecen las bases organizativas y se crean 
                        redes de apoyo mutuo que perduran hasta hoy.
                      </p>
                    </div>
                  </div>

                  {/* 2000s - Nacimiento FECOLSURE */}
                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-4 border-white">
                      <span className="text-xs text-center">2000s</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center mb-3">
                        <GraduationCap className="text-green-600 mr-3" size={28} />
                        <h4 className="text-2xl font-bold text-blue-900">Nacimiento de FECOLSURE</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Nace oficialmente la Federación Colombiana de Suboficiales en Retiro (FECOLSURE), 
                        con el compromiso específico de agrupar y fortalecer a los suboficiales retirados 
                        de las Fuerzas Militares de Colombia.
                      </p>
                    </div>
                  </div>

                  {/* 2010s - Expansión */}
                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-4 border-white">
                      <span className="text-xs text-center">2010s</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                      <div className="flex items-center mb-3">
                        <Scale className="text-purple-600 mr-3" size={28} />
                        <h4 className="text-2xl font-bold text-blue-900">Expansión y Reconocimiento</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        FECOLSURE expande sus programas de bienestar social, salud y asesoría legal. 
                        Se fortalecen las alianzas estratégicas con el Ministerio de Defensa y otras 
                        entidades gubernamentales.
                      </p>
                    </div>
                  </div>

                  {/* Presente */}
                  <div className="relative pl-20">
                    <div className="absolute left-0 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-4 border-white animate-pulse">
                      <span className="text-xs text-center">HOY</span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border-2 border-yellow-400">
                      <div className="flex items-center mb-3">
                        <Check className="text-red-600 mr-3" size={28} />
                        <h4 className="text-2xl font-bold text-blue-900">FECOLSURE en la Actualidad</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Hoy, FECOLSURE continúa trabajando incansablemente por revitalizar la asociatividad 
                        y garantizar que los suboficiales retirados sigan siendo reconocidos y apoyados en 
                        la sociedad colombiana.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-4 rounded-lg">
                          <p className="font-bold text-blue-900 text-lg">+40 Años</p>
                          <p className="text-gray-600 text-sm">De trayectoria</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <p className="font-bold text-blue-900 text-lg">+300 Programas</p>
                          <p className="text-gray-600 text-sm">Implementados</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Llamado a la acción */}
              <div className="mt-12 text-center bg-blue-900 text-white p-8 rounded-xl">
                <h4 className="text-2xl font-bold mb-4">Únete a Nuestra Historia</h4>
                <p className="mb-6 text-gray-200">
                  Forma parte de esta gran familia que defiende los derechos de quienes 
                  sirvieron a nuestra patria.
                </p>
                <button 
                  onClick={() => {
                    setShowHistoria(false);
                    scrollToSection('contacto');
                  }}
                  className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105"
                >
                  AFILIATE AHORA
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      <section className="py-20 bg-gray-100">
        {/* Modal Objetivos */}
      {showObjetivos && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 rounded-t-2xl flex justify-between items-center">
              <h3 className="text-3xl font-bold">Nuestros Objetivos</h3>
              <button 
                onClick={() => setShowObjetivos(false)}
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Cerrar"
              >
                <X size={32} />
              </button>
            </div>

            <div className="p-8">
              {/* Introducción */}
              <div className="bg-blue-50 p-6 rounded-xl mb-8 border-l-4 border-blue-600">
                <p className="text-gray-700 text-lg leading-relaxed">
                  FECOLSURE trabaja día a día para cumplir con objetivos claros que benefician 
                  a todos nuestros afiliados y fortalecen nuestra comunidad de suboficiales en retiro.
                </p>
              </div>

              {/* Lista de Objetivos */}
              <div className="space-y-6">
                {/* Objetivo 1 */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border-l-4 border-blue-600">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-2">Defensa de Derechos Adquiridos</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Representar y defender los derechos adquiridos de los suboficiales en retiro, 
                        garantizando el respeto y cumplimiento de sus beneficios legales.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Objetivo 2 */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border-l-4 border-yellow-500">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-2">Bienestar Social y Económico</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Promover el bienestar social y económico de nuestros miembros a través de 
                        programas integrales que mejoren su calidad de vida y la de sus familias.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Objetivo 3 */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border-l-4 border-green-600">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-2">Fortalecimiento Comunitario</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Fortalecer la comunidad de suboficiales retirados mediante la unión y solidaridad, 
                        creando espacios de encuentro y apoyo mutuo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Objetivo 4 */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border-l-4 border-purple-600">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-2">Colaboración Institucional</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Colaborar con las Fuerzas Militares y entidades gubernamentales para mejorar 
                        la calidad de vida de los retirados y sus familias.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Objetivo 5 */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border-l-4 border-red-600">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-xl">
                      5
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-2">Impulso de Proyectos y Políticas</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Impulsar proyectos y políticas que beneficien a la reserva activa y a quienes 
                        han servido en las Fuerzas Militares, promoviendo su reconocimiento social.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estadísticas */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-xl text-center">
                  <Scale className="w-12 h-12 mx-auto mb-3" />
                  <p className="text-3xl font-bold mb-2">100%</p>
                  <p className="text-sm">Compromiso Legal</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 rounded-xl text-center">
                  <Heart className="w-12 h-12 mx-auto mb-3" />
                  <p className="text-3xl font-bold mb-2">+1000</p>
                  <p className="text-sm">Familias Beneficiadas</p>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-xl text-center">
                  <Shield className="w-12 h-12 mx-auto mb-3" />
                  <p className="text-3xl font-bold mb-2">24/7</p>
                  <p className="text-sm">Apoyo Disponible</p>
                </div>
              </div>

              {/* Llamado a la acción */}
              <div className="mt-12 text-center bg-blue-900 text-white p-8 rounded-xl">
                <h4 className="text-2xl font-bold mb-4">Cumplimos Nuestros Objetivos Contigo</h4>
                <p className="mb-6 text-gray-200">
                  Cada objetivo que cumplimos es un paso más hacia el bienestar de nuestra comunidad.
                </p>
                <button 
                  onClick={() => {
                    setShowObjetivos(false);
                    scrollToSection('contacto');
                  }}
                  className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105"
                >
                  ÚNETE A FECOLSURE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">MISIÓN</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Ser la organización líder que representa a los suboficiales en retiro de las 
                Fuerzas Militares de Colombia, velando por la defensa de sus derechos, el 
                mejoramiento continuo de su calidad de vida y el fortalecimiento del espíritu 
                de unidad y camaradería entre sus asociados.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">VISIÓN</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Consolidarnos como una federación reconocida a nivel nacional e internacional, 
                referente en la defensa social, económica y legal de los suboficiales retirados, 
                promoviendo programas innovadores que respondan a sus necesidades actuales y futuras.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">NUESTROS VALORES</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { title: 'Compromiso', desc: 'Respetamos el legado de servicio' },
                { title: 'Solidaridad', desc: 'Fomentamos comunidad unida' },
                { title: 'Transparencia', desc: 'Actuamos con honestidad' },
                { title: 'Inclusión', desc: 'Promovemos la igualdad' },
                { title: 'Respeto', desc: 'Valoramos la dignidad' }
              ].map((valor, idx) => (
                <div key={idx} className="bg-blue-900 text-white p-6 rounded-xl text-center hover:bg-blue-800 transition-all transform hover:scale-105">
                  <h4 className="text-xl font-bold mb-2">{valor.title}</h4>
                  <p className="text-sm text-gray-300">{valor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="actualidad" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">ÚLTIMAS NOTICIAS</h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="/salud-integral.PNG" 
                alt="Programa de Salud Integral para veteranos"
                className="w-full h-56 object-cover"
                />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Programa de Salud Integral</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Acceso a consultas médicas, talleres de bienestar y campañas de prevención 
                  para todos nuestros afiliados.
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                  Leer más 
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <img 
                src="/capacitacion-formacion.PNG" 
                alt="Programas de Capacitación y Formación"
                className="w-full h-56 object-cover"
                />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Capacitación y Formación</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Cursos virtuales y presenciales para actualización profesional y 
                  desarrollo personal continuo.
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                  Leer más 
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <img 
                src="/actividades-integracion.PNG" 
                alt="Actividades Culturales y Deportivas"
                className="w-full h-56 object-cover"
                />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Actividades de Integración</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Eventos culturales y deportivos para fomentar la integración, camaradería 
                  y calidad de vida.
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                  Leer más 
                  <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">TESTIMONIOS DE NUESTROS MIEMBROS</h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="flex items-start space-x-6">
                <img 
                  src="/oficial1.PNG" 
                  alt="Foto del Suboficial retirado Juan Pérez"
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-200"
                />
                <div>
                  <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                    "FECOLSURE ha sido un gran respaldo desde mi retiro, acompañándome en cada 
                    trámite y brindándome acceso a programas que mejoran mi calidad de vida."
                  </p>
                  <p className="font-bold text-blue-900 text-lg">— Suboficial retirado Juan Pérez</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="flex items-start space-x-6">
                <img 
                  src="/oficial2.PNG" 
                  alt="Foto de la Suboficial retirada Ana Gómez"
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-200"
                />
                <div>
                  <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                    "La federación mantiene viva la unión y el espíritu de servicio entre todos 
                    nosotros. Es un orgullo pertenecer."
                  </p>
                  <p className="font-bold text-blue-900 text-lg">— Suboficial retirada Ana Gómez</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">CONTÁCTANOS</h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">¿Tienes preguntas o deseas afiliarte? Estamos aquí para apoyarte.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-2xl font-bold text-blue-900 mb-6">Información de Contacto</h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Correo Electrónico</p>
                      <a href="mailto:fecolsure@hotmail.com" className="text-blue-600 hover:text-blue-800">
                        fecolsure@hotmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Dirección</p>
                      <p className="text-gray-600">Calle 17 No. 8 – 90, Oficina 601<br />Bogotá, Colombia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Horario de Atención</p>
                      <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4">Síguenos en Redes Sociales</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://twitter.com/f_Fecolsure" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors"
                    aria-label="Síguenos en Twitter"
                  >
                    <Twitter size={24} />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=100063558104811" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors"
                    aria-label="Síguenos en Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div>
              {formSubmitted && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mb-6" role="alert">
                  <p className="font-bold">¡Mensaje enviado con éxito!</p>
                  <p>Nos pondremos en contacto contigo pronto.</p>
                </div>
              )}

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-6">
                  <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      formErrors.nombre 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    aria-invalid={formErrors.nombre ? 'true' : 'false'}
                    aria-describedby={formErrors.nombre ? 'nombre-error' : undefined}
                  />
                  {formErrors.nombre && (
                    <p id="nombre-error" className="text-red-500 text-sm mt-1" role="alert">
                      {formErrors.nombre}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Correo electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      formErrors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    aria-invalid={formErrors.email ? 'true' : 'false'}
                    aria-describedby={formErrors.email ? 'email-error' : undefined}
                  />
                  {formErrors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="telefono" className="block text-gray-700 font-semibold mb-2">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      formErrors.telefono 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    aria-invalid={formErrors.telefono ? 'true' : 'false'}
                    aria-describedby={formErrors.telefono ? 'telefono-error' : undefined}
                  />
                  {formErrors.telefono && (
                    <p id="telefono-error" className="text-red-500 text-sm mt-1" role="alert">
                      {formErrors.telefono}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="mensaje" className="block text-gray-700 font-semibold mb-2">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      formErrors.mensaje 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    aria-invalid={formErrors.mensaje ? 'true' : 'false'}
                    aria-describedby={formErrors.mensaje ? 'mensaje-error' : undefined}
                  />
                  {formErrors.mensaje && (
                    <p id="mensaje-error" className="text-red-500 text-sm mt-1" role="alert">
                      {formErrors.mensaje}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
                >
                  ENVIAR MENSAJE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a2540] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 200 240" className="w-full h-full">
                    <path d="M100 10 L180 50 L180 190 L100 230 L20 190 L20 50 Z" fill="#1e40af" stroke="#fbbf24" strokeWidth="3"/>
                    <rect x="60" y="80" width="80" height="50" fill="#fbbf24"/>
                    <rect x="60" y="130" width="80" height="30" fill="#ffffff"/>
                    <rect x="60" y="160" width="80" height="30" fill="#dc2626"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">FECOLSURE</h4>
                  <p className="text-xs text-gray-300">Federación Colombiana</p>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                HONOR - PATRIA - LEALTAD
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-yellow-400">NAVEGACIÓN</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('inicio')} className="hover:text-yellow-400 transition-colors">Inicio</button></li>
                <li><button onClick={() => scrollToSection('nosotros')} className="hover:text-yellow-400 transition-colors">Nosotros</button></li>
                <li><button onClick={() => scrollToSection('actualidad')} className="hover:text-yellow-400 transition-colors">Actualidad</button></li>
                <li><button onClick={() => scrollToSection('contacto')} className="hover:text-yellow-400 transition-colors">Contacto</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-yellow-400">CONTACTO</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>fecolsure@hotmail.com</span>
                </p>
                <p className="flex items-start space-x-2">
                  <MapPin size={16} className="flex-shrink-0 mt-1" />
                  <span>Calle 17 No. 8 – 90, Oficina 601, Bogotá</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-yellow-400">SÍGUENOS</h4>
              <div className="flex space-x-3">
                <a href="https://twitter.com/f_Fecolsure" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100063558104811" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 FECOLSURE. Todos los derechos reservados.</p>
            <p className="mt-2">Federación Colombiana de Suboficiales en Retiro</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FecolsureWebsite;