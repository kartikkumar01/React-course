// JSX => <a href='https://google.com'>Click here</a>
//Babel converts it into this format by using React.CreateElement('a',{href : 'https://google.com'}, 'Click here') which returns
let reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com'
    },
    children : 'Click here'
}

let root = document.getElementById('root')

customRender(reactElement, root)

function customRender(reactElement, root){
    //first render function will create Js element by react element
    //secondly append it in the root
    let jsElement = document.createElement(reactElement.type)
    jsElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        jsElement.setAttribute(prop, reactElement.props[prop])
    }

    root.appendChild(jsElement)
}

//My customRender function is simple but react render function does a lots of things like algos and optimization techniques.