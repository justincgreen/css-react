import cssStyles from './element.module.css';
import scssStyles from './elementTwo.module.scss';
import './styles/styles.scss'; // install this package first -> yarn add -D sass-embedded
import styled from 'styled-components'; // install this package first -> yarn add styled-components

// https://styled-components.com/

const Element = styled.div`
  background: pink;
  padding: 20px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: orange;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
`;

function App() {
  return (
    <>
    <h2>CSS-in-CSS Examples</h2>
    
    <h3>Modules</h3>
    <div className={cssStyles.element}>This element is styled with a css module</div>
    <div className={scssStyles['element-two']}>This element is styled with a scss module</div>
    
    <h3>Global Styles</h3>
    <div className="element-three">This element is styled with global scss.</div>
    
    <h2>CSS-in-JS Example</h2>
    <h3>Styled Components</h3>
    <Element>This element is a Styled Component</Element>
    <Button>This button is a styled Component</Button>
     
     <h2>Inline CSS Example</h2>
     <div style={{ 
       background: 'lavender', 
       padding: '20px' 
     }}>This element is styled with inline css</div>
    </>
  )
}

export default App
