import React, { useState } from 'react';
import "./Faq.css";
import Navbar from './navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqItems = [
    { question: 'What is Charitism ?', answer: 'Charitism is an online donation platform which ensures 100% transparency with your donations.' },
    { question: 'When my donated product be delivered ?', answer: 'Usually sponsored products are ditributed in 3-4 days and we share the updates with the donors in next 4-5 days on their provided whatsapp number.' },
    { question: 'Can we get Tax receipt / Tax Deduction ?', answer: 'Yes, All our partner NPOs are 80G certified and you can get your Tax-recipt by mailing at contact@charitism.com.' },
    { question: 'Which locations do we serve?', answer: 'Currently we have our NGO network serving in Tamilnadu, Delhi and Rajasthan.' },
  ];

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqItems.map((item, index) => (
          <div className="faq-item" key={index}>
          <div className="question" onClick={() => handleToggle(index)}>
            <h2>{item.question}</h2>
          </div>
          {openIndex === index && <p className="answer">{item.answer}</p>}
        </div>
      ))}
    </div>
    <Footer/>
            </>
  );
};

export default FAQ;
