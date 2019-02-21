import { join } from 'lodash'

const component = () => {
    let element: HTMLDivElement = document.createElement('div');
  
    // const ct = new ChartingToolkit("http://localhost:3000")
    // ct

    const x = [1, 2, 3]
    const y = [...x, ...x]
    debugger;

    element.innerHTML = join(['Hello', 'Webpack', 'Hello', 'Ralph', y], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());