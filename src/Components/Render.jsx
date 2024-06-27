
const Render = ({
    id, 
    clean, 
    ref,
    position,
    Comp,
    clearInterval, 
    props
}) => {
    try {
        const containerDiv = $(ref)
        const divToRender = $(`#${id}`);

        if (containerDiv.length && !divToRender.length) {
            const newDiv = `<div id='${id}'></div>`;
            const { React , ReactDOM } = window;
            
            if (React && ReactDOM) {
                clearInterval(clean)
                switch(position) {
                    case "after" : containerDiv.after(newDiv); break;
                    case "before": containerDiv.before(newDiv); break;
                    default      : containerDiv.append(newDiv); break;
                }

                ReactDOM.render(<Comp {...props} />, document.getElementById(id));
            }
        }

        divToRender.length && clearInterval(clean)

    } catch (error) {
        console.log(error);
    }
}

export default Render 