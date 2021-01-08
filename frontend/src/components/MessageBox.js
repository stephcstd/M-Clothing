export default function MessageBox(props){
    return(
        <div className={`alert alert-${props.variant || 'error'}`}>
            {props.children}
        </div>
    );
}