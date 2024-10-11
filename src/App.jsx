import cssStyles from './element.module.css';
import scssStyles from './elementTwo.module.scss';
import './styles/styles.scss'; // install this package first -> yarn add -D sass-embedded
import styled from 'styled-components'; // install this package first -> yarn add -D styled-components
import './tailwind.css';

// https://styled-components.com/
const Element = styled.div`
  background: #115e59;
  color: #fff;
  padding: 20px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: #115e59;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
`;

function App() {
  return (
    <>
    <div className="p-4 pt-0 border-solid border border-black">
      <h2>CSS-in-CSS Examples</h2>
      
      <h3>Modules</h3>
      <div className={cssStyles.element}>This element is styled with a css module</div>
      <div className={scssStyles['element-two']}>This element is styled with a scss module</div>
      
      <h3>Global Styles</h3>
      <div className="element-three">This element is styled with global scss.</div>
    </div>
    
    <div className="mt-2 p-4 pt-0 border-solid border border-black">
      <h2>CSS-in-JS Example</h2>
      <h3>Styled Components</h3>
      <Element>This element is a Styled Component</Element>
      <Button>This button is a Styled Component</Button>
    </div>
    
    <div className="mt-2 p-4 pt-0 border-solid border border-black">
      <h2>Inline CSS Example</h2>
      <div style={{ 
       background: '#115e59', 
       color: '#fff',
       padding: '20px' 
      }}>This element is styled with inline css</div>
    </div>
     
    
    <div className="mt-2 p-4 pt-0 border-solid border border-black">
      <h2>Utility-First-CSS</h2>
      <div className="p-5 text-white bg-teal-800">This element is styled with Tailwind CSS</div>
    </div>
    </>
  )
}

export default App
