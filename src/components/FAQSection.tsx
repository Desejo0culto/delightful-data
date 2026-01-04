import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: 'Em quanto tempo vejo resultados?',
      answer: 'Os primeiros resultados costumam ser visíveis após os primeiros 30 dias de uso contínuo, se usado corretamente!'
    },
    {
      question: 'Qual a melhor forma de usar?',
      answer: 'O Clareador NutralFit deve ser utilizado duas vezes ao dia, aplicando nas regiões desejadas e massageando por aproximadamente 3 minutos. Obs: Para melhores resultados indica-se um tratamento de 90 dias.'
    },
    {
      question: 'Posso me expor ao sol?',
      answer: 'O Sol por si só, já favorece o escurecimento de manchas, então recomendamos que caso você vá se expor muito ao sol, como ir à praia ou piscina, use um protetor solar após usar o Clareador NutralFit. Mas no dia a dia não há necessidade. Pode sair tranquila!'
    },
    {
      question: 'Qual o prazo de entrega?',
      answer: 'O prazo de entrega é de 7 a 15 dias úteis dependendo da sua região.'
    },
    {
      question: 'Em quais regiões do corpo posso usar o clareador?',
      answer: 'O Clareador NutralFit pode ser usado em praticamente todas as áreas do corpo, onde existe manchas escurecidas. Seja nas axilas, nádegas, virilhas, pernas, braços, pescoços, joelhos, etc. Obs: Caso aplique na região do rosto, ter cuidado com o contato direto do produto no globo ocular.'
    },
  ];

  return (
    <section className="section-dark py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-gray-400">Tire suas dúvidas!</p>
          </div>
          
          <div className="divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <div key={index} className="accordion-item">
                <button
                  className="accordion-title w-full text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <i className={`fas fa-caret-${openIndex === index ? 'up' : 'right'} text-primary`}></i>
                </button>
                <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
