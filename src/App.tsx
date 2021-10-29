import React, { useState } from 'react';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Form from './components/Form';
import Modal from './components/Modal';
import Users from './components/Users';

function App() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);

  const renderModal1 = () => (
    <Modal
      onClose={() => setShowModal1(false)}
      hasCloseOnEscape={false}
      hasCloseOnOuter={false}
    >
      <div>
        <h5>Hello from Modal 1 ALERT</h5>
      </div>
    </Modal>
  );

  const renderModal2 = () => (
    <Modal onClose={() => setShowModal2(false)} width='300px'>
      <div>
        <h5>Hello from Modal 2</h5>
      </div>
    </Modal>
  );

  const renderModal3 = () => (
    <Modal onClose={() => setShowModal3(false)}>
      {modalStepsController
        .filter((item) => item.step === currentStep)
        .map((item) => item.component)}
    </Modal>
  );

  const stepOneComp = () => (
    <div>
      <h1>Hello from step 1</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <button onClick={() => setCurrentStep(currentStep + 1)}>Next step</button>
    </div>
  );

  const stepTwoComp = () => (
    <div>
      <h1>Hello from step 2</h1>
      <ul>
        <li>Name: John Smith</li>
      </ul>
      <button onClick={() => setCurrentStep(currentStep + 1)}>Next step</button>
    </div>
  );

  const stepThreeComp = () => (
    <div>
      <h1>Hello from step 3</h1>
      <button>Subscribe</button>
      <button onClick={() => setCurrentStep(1)}>Next step</button>
    </div>
  );

  const modalStepsController = [
    { step: 1, component: stepOneComp() },
    { step: 2, component: stepTwoComp() },
    { step: 3, component: stepThreeComp() },
  ];

  return (
    <>
      <h1>Hello World</h1>
      <Counter />
      <Users />
      <Counter2 />
      <Form />
      <div>
        <h4>Modal 1</h4>
        <button onClick={() => setShowModal1(true)}>Show Modal 1</button>
      </div>
      <div>
        <h4>Modal 2</h4>
        <button onClick={() => setShowModal2(true)}>Show Modal 2</button>
      </div>
      <div>
        <h4>Modal 3</h4>
        <button onClick={() => setShowModal3(true)}>Show Modal 2</button>
      </div>
      {showModal1 && renderModal1()}
      {showModal2 && renderModal2()}
      {showModal3 && renderModal3()}
    </>
  );
}

export default App;
