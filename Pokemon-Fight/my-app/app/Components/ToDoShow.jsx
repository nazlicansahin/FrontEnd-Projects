"use client"
import 'bootstrap/dist/css/bootstrap.css'
export default function ToDoShow(props) {
    const {title, text} = props
    const customStyles = {
        width: '18rem'
      };
    return (
        <>
            <div className="card" style={customStyles}>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Delete</a>
                <a href="#" className="btn btn-primary">Update</a>

              </div>
            </div>        
        </>
    );
    }	