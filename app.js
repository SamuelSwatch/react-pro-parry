// const heading = React.createElement('h1',{id:'heading', aria:'attributesHolder'},'Hello World');
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);



{/* TRY to achive this DOM using react18
<div id="parent">
    <h1 id="child1">I am child 1</h1>
    <h2 id="child2">I am child 2</h2>
</div> 
// Instead of using all this createElement we prefer using the JSX now!
*/}

const header = React.createElement('div', { id: parent }, [React.createElement('h1', { id: 'child1' },'I am child 1'), React.createElement('h2', { id: 'child2' }, 'I am child 2')]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);